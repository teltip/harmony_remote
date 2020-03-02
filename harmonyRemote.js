// ************************
// CLASS
// harmonyHub
// ************************
// Websocket + Harmony prioritary commands
// ************************
class harmonyHub {

	constructor(label,hubIp,hubPort,hubId,devices_translation) {
		this.label=label;
		this.hubIp=hubIp;
		this.hubPort=hubPort;
		this.hubId=hubId;
		this.devices=devices_translation || {};
		
		this.ws=null;
		this.sequenceInterCommandDelay=200;
		this.holdInterval=300;
		this.vibrateDuration=50;
		this.o_info=null;
		this.o_config=null;
	}

	connect() {
		if ("WebSocket" in window){
			console.log("WebSocket is supported by your Browser!");
			this.ws = new WebSocket("ws://"+this.hubIp+":"+this.hubPort+"/?domain=svcs.myharmony.com&hubId="+this.hubId);
			
			this.ws.onopen = function() {
				console.log('Socket opened');
				this.getActivity();  //when connecting, retrieve current activity
				/*if (!(this.o_info)) {
					console.log("Setting up info")
					this.getInfo();  
				}*/
				if (!(this.o_config)) {
					console.log("Setting up config")
					this.getConfig();
				}
			}.bind(this);

			this.ws.onmessage = function(evt) {
				console.log('MESSAGE RECEIVED <----------------\n', evt.data);
				this.parse(evt);
			}.bind(this);
			
			this.ws.onerror = function(err) {
				console.error('Socket encountered error: ', err.message, 'Closing socket');
				this.ws.close();
			}.bind(this);

			this.ws.onclose = function(evt) { 
				console.log('Socket is closed.'+evt.reason);
				setTimeout(function() {
					this.connect();
				}.bind(this), 50);
			}.bind(this);
		} else {
			// The browser doesn't support WebSocket
			alert("WebSocket NOT supported by your Browser!");
		}
	}

	send(msg,vibrate_duration=this.vibrateDuration) {
		console.log("MESSAGE SENT ------------------\>\n"+msg);
		this.ws.send(msg);
        window.navigator.vibrate(vibrate_duration);
	}

	parse(evt) {
		var data = JSON.parse(evt.data);
		var type = data.type;
		var cmd = data.cmd;
		var code = data.code;
		if (data.data) {
			if (data.data.activityId) {
				var activityId = data.data.activityId;
			}	
			if (data.data.errorCode) {
				var errorCode = data.data.errorCode;
			}
			if (data.data.result) {
				var currentActivityId = data.data.result;
			}
		}
		//set currentActivityId if starting an activity
		if (!currentActivityId) currentActivityId = activityId;
		
		//answer to start activity
		if (cmd == "vnd.logitech.harmony/vnd.logitech.harmony.engine?startactivity") {
			
		}
		
		//answer to start activity Finished
		if (type == "harmony.engine?startActivityFinished") {
			if (errorCode == "200") {
				harmonyRemote.ui.startActivityFinished(activityId);
			} else {
				 alert("Failed to start activity "+activityId);
			}
		}
		
		//answer to current activity
		if (cmd == "vnd.logitech.harmony/vnd.logitech.harmony.engine?getCurrentActivity") {
			harmonyRemote.ui.getCurrentActivity(currentActivityId);
		}
		
		//answer to info
		if (cmd == "vnd.logitech.connect/vnd.logitech.deviceinfo?get") {
			this.o_info=data.data;
		}
		
		//answer to config
		if (cmd == "vnd.logitech.harmony/vnd.logitech.harmony.engine?config") {
			this.o_config=data.data;
		}
		
		//remoteActivitySpecific
		harmonyRemote.ui.remoteActivitySpecificControl(currentActivityId);
	}
	
	//get info
	getInfo() {
		this.msg="{  \"hubId\": \""+this.hubId+"\",  \"timeout\": 30,  \"hbus\":{\"cmd\":\"vnd.logitech.connect/vnd.logitech.deviceinfo?get\",\"id\":\"0\",\"params\":{\"verb\":\"get\"}}}";
		this.send(this.msg);
	}
	
	//get config
	getConfig() {
		this.msg="{  \"hubId\": \""+this.hubId+"\",  \"timeout\": 30,  \"hbus\":{\"cmd\": \"vnd.logitech.harmony/vnd.logitech.harmony.engine?config\",\"id\": \"0\",\"params\":{\"verb\": \"get\", \"format\": \"json\"}}}}";
		this.send(this.msg);
	}
	
	//start activity, given the id	
	startActivity(activity_id) {
		//send the message
		this.msg="{  \"hubId\": \""+this.hubId+"\",  \"timeout\": 30,  \"hbus\": {    \"cmd\": \"vnd.logitech.harmony/vnd.logitech.harmony.engine?startactivity\",    \"id\": \"0\",    \"params\": {      \"timestamp\":\"0\",      \"activityId\": \""+activity_id+"\"} }}";
		this.send(this.msg);
		//then get the label for started activity
		var _label=null
		console.log("CALLING LOADING PANE FOR:");
		this.o_config.activity.forEach(function(a1){
			if (a1.id==activity_id) {
				_label=a1.label;
				console.log(_label);
			}
		});
		//finally call ui.showLoading with label
		harmonyRemote.ui.showLoading(_label);
	}

	//send command to a device, status can be press, hold or release
	sendCommand(deviceId,commandName,status="press"){		
		if (this.devices[deviceId]) deviceId=this.devices[deviceId];
		this.msg="{  \"hubId\": \""+this.hubId+"\",  \"timeout\": 30,  \"hbus\": {    \"cmd\":\"vnd.logitech.harmony/vnd.logitech.harmony.engine?holdAction\",\"id\": \"0\",\"params\": {\"status\":\""+status+"\",\"timestamp\":\"0\",\"verb\": \"render\",\"action\": \"{\\\"command\\\": \\\""+commandName+"\\\",\\\"type\\\": \\\"IRCommand\\\",\\\"deviceId\\\": \\\""+deviceId+"\\\"}\"}}}";
		this.send(this.msg);
	}

	//get current activity
	getActivity() {
		this.msg="{\"hubId\":\""+this.hubId+"\",\"hbus\":{\"cmd\":\"vnd.logitech.harmony/vnd.logitech.harmony.engine?getCurrentActivity\",\"id\":\"0\",\"params\":{}}}";
		this.send(this.msg,0);
	}

	sendSequence(sequence) {
		
		var default_timeout=this.sequenceInterCommandDelay;
		var commands_array=sequence.split(";");

		(function sequence(thisobj,commands_array,lenght,index) {
			var timeout=default_timeout;
			if (index<lenght) {
				if (index>-1) {
						   var command_array=commands_array[index].split("::");
						   if (!(typeof(command_array[2])==='undefined')) { //set timeout if provided
									   timeout=command_array[2];
						   }
							thisobj.sendCommand(command_array[0],command_array[1]); //launch command
				}
				index++;
				setTimeout(function () {
					sequence(thisobj,commands_array,lenght,index);
				},timeout);

			}
		})(this,commands_array,commands_array.length,-1);

	}

	holdStart(deviceId,commandName){
	//function for actions/buttons we want holdable
	//it will repeat command after interval ms
		
		//console.log("touch start");
		var interval=this.holdInterval;
		this.sendCommand(deviceId,commandName) //Harmony behavior. We need to send a "press" command before the "hold" command
		this.timeout = setInterval(function(){
			this.sendCommand(deviceId,commandName,"hold")
			//console.log("SetInterval call");
		}.bind(this), interval);
		return false;
	}
					
	holdEnd(){
	//function for actions/buttons we want holdable
	//it will clear the hold repetition after the touch is ended	
		
		//console.log("touch end");
		clearInterval(this.timeout);
		//this.sendCommand(deviceId,commandName,"release") //It seems we don't need to send a release command after hold. Working fine.
		return false;
	}
}