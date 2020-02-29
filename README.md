# Harmony remote swap

This is a simple web page to control your Harmony hub.

No node.js, no python, no MQTT proxy server, no intermediate server in the middle.
This is a **s**imple **w**eb **ap**p that connects directly to your hubs using the websockets API exposed by your Harmony hub.

**It uses only html/css/javascript so it can run on any web server and even locally on your device by simply copying the files.**

The proposed implementation here is using jQuery and jQuery TouchSwipe plugin for the user interface but you can of course use it using plain CSS and javascript.
It also uses iconify for remote buttons icons.

![Drop down](https://github.com/teltip/harmony_remote/blob/master/activities.PNG) ![Remote Disc](https://github.com/teltip/harmony_remote/blob/master/remotedisc.PNG) ![Remote Disc](https://github.com/teltip/harmony_remote/blob/master/remotesmart.PNG) ![Remote Disc](https://github.com/teltip/harmony_remote/blob/master/remotetv.PNG) 

# Pre-requisite

## Get your Hub unique Id

You need to know your hub unique identifier in order for the API to work. To get this identifier you need to send a POST request to its IP address. 

The simplest way to do it is using [curl](https://curl.haxx.se/download.html)  and send the following request:

    curl.exe -X POST http://yourHubIpAddress:8088/ -H "accept: application/json" -H "accept-charset: utf-8" -H "content-type: application/json" -H "origin: http://sl.dhg.myharmony.com" -d "{\"id\":1,\"cmd\":\"setup.account?getProvisionInfo\"}"

you should get the following response, where **activeRemoteId** is your hubId (eg: **0000007**)

    {"id":1,"msg":"OK","data":{"email":"yourname@domain.com","username":"yourname@domain.com","activeRemoteId":123456789,"discoveryServer":"http:\/\/svcs.myharmony.com\/Discovery\/Discovery.svc","se":true,"susChannel":"Production","mode":3,"accountId":"123456"},"code":"200"}

# Retrieve activities ids and devices commands

## How to create a new hub

>  To create a new hub named **h1** simply:

	//objname=new harmonyHub(objname, IP, port, activeRemoteId, optional: devices_translation)
	h1=new harmonyHub("h1"," 192.168.1.10", 8088,0000007);

>If you wish to use "TV" for instance instead of its id (easier to read in your remotes files), use a translation object and create the hub with it.
example: {TV: "456789",AV: "123456",DISC:"987654"}

	h1=new harmonyHub("h1","192.168.1.10", 8088, 0000007,{TV: "456789",AV: "123456",DISC:"987654"});

## config.html

In config.html simply create your new hub and open the page in your browser. It will list your activities and devices commands.

![enter image description here](test) 

# Web app file structure

## index.html

The file has a div **activitiesIcons** to list your activities

	<div id="activitiesIcons">
		<script>
		ui.writeActivityIcon(h1,"-1","ic:sharp-power-settings-new","");
		ui.writeActivityIcon(h1,"56498798","cib:chromecast","CHROMECAST");
		ui.writeActivityIcon(h1,"54789454","mdi:movie-open-outline","NAS MOVIE");
		</script>
	</div>

The file has a div **remote** to list your remotes.
Each remote is written in an individual .js file for simpler maintenance and readability. These remote*xyz*.js file will append your buttons to the remote div.
Call your script just before the end of the body tag.

	<div id="remote"></div>

	<script src="./remoteDiscPlayer.js"></script>
	<script src="./remoteAv.js"></script>

## remotexyz.js

these are your remotes files where you write the buttons.
eg:

	ui.writeButton(selector,h1,"LED","PowerToggle","ic:sharp-power-settings-new","small");
	ui.writeButton(selector,h1,"LED","Fade7","mdi:play","small");
	ui.writeButton(selector,h1,"LED","Play","mdi:play-pause","small");
	ui.writeButton(selector,h1,"LED","Flash","ic-round-flash-on","small");
	ui.writeButton(selector,h1,"LED","Pause","mdi:pause","small");
	ui.writeButton(selector,h1,"LED","Auto","emojione-monotone:letter-a","small");
	ui.writeButton(selector,h1,"blank","","","small");
	ui.writeButton(selector,h1,"blank","","","small");
	ui.writeButton(selector,h1,"new3");

## harmonyRemote.css

Customize to your preference ;o)

# Commands

## Your first button 

You can write a button using the following javascript command:

    ui.writeButton(selector,h1,"LED","Dim","jam-brightness-down",);

* The 1st argument jquery selector where to append the button is your device.
* The 2nd argument **h1** is your hub
* The 3rd argument **LED** is your device
* The 4th argument **Dim** is the IR Command you wish to send (see the previous step get your hub config)
* The 5rd argument  jam-brightness-down is the icon found on [iconify](https://iconify.design/icon-sets/)

## Available commands

 - **Regular size button**
with provided css file, 5 icons per row

	    ui.writeButton(selector,h1,"TV","InputHdmi1","gridicons-heading-h1","small");

   
 - **Small size button**
with provided css file, 8 icons per row

	    ui.writeButton(selector,h1,"TV","InputHdmi1","gridicons-heading-h1");

 - **Blank button**
	- First argument should be **"blank"**

			ui.writeButton(selector,h1,"blank","",""); // regular size
			ui.writeButton(selector,h1,"blank","","","small"); //small size
	    
 - **New row**
	- First argument should be **"new"**
			
			ui.writeButton(selector,h1,"new");

 - **Command sequence**
		
	 - First argument should be **"sequence"**
 	 - Second argument should be a list of **device::command** separated by semi-column **;**
 	 - You can add a delay after each command with a third symbol: **device::command::delay(in ms)**
														
			ui.writeButton(selector,h1,"sequence","TV::Home;TV::DirectionRight;TV::DirectionRight;TV::DirectionRight;TV::DirectionRight;TV::Select","zmdi:youtube","small");



