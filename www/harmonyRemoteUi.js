// ************************
// Namespace
// harmonyRemote.ui
// ************************
// Mostly jQuery and touchSwipe events
// ************************
var harmonyRemote = harmonyRemote || {};
harmonyRemote.ui={

jqueryEventListener: function(){
	
	$("#activitiesHeader").click(function(){
		$("#activitiesIcons").css("height","100%");
	});
	$("#activitiesIcons").click(function(){
		$("#activitiesIcons").css("height","0");
	});
	
	//Manage swipe on activities panel
	$("#activitiesHeader, #activitiesIcons").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			//$(this).text("You swiped " + direction );  
			if (direction=="up") {
				$("#activitiesIcons").css("height","0");
			}
			if (direction=="down") {
				$("#activitiesIcons").css("height","100%");
			}
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe. 0 prevent touch/click events
		threshold:10
	});
	
	//SWIPE HORIZONTAL FOR REMOTE
	$("#remote").swipe( {
		//Generic swipe handler for all directions
		swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
			//$(this).text("You swiped " + direction );  
			var activeRemote = $("div.active"); 			//Get active remote
			var previousRemote=activeRemote.prev(".remoteEntity");
			var nextRemote=activeRemote.next(".remoteEntity");
			//set remote css class according to swipe
			if (direction=="left") {
				if (!(typeof nextRemote.attr("id")==="undefined")) {
					nextRemote.addClass("active").removeClass("thrownRightOne").removeClass("thrownLeftOne");
					activeRemote.addClass("thrownLeftOne").removeClass("active");
				}
			}
			if (direction=="right") {
				if (!(typeof previousRemote.attr("id")==="undefined")) {
					previousRemote.addClass("active").removeClass("thrownLeftOne").removeClass("thrownRightOne");
					activeRemote.addClass("thrownRightOne").removeClass("active");
				}
			}
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold:100,
		allowPageScroll:"vertical"
	});
},

showLoading: function() {
	$(".activityStarting").css("display",""); //show the loading page
},

remoteActivitySpecificControl: function(currentActivityId) {
	$(".remoteActivitySpecific>div").css( "display", "none" );
	$(".remoteActivitySpecific>div."+currentActivityId).css( "display", "block" );
},

startActivityFinished: function(activityId){
	$(".activityStarting").css("display","none"); //hide the loading page
	if (activityId=="-1") {
		$("#activitiesHeader").addClass("activitiesHeaderOff").removeClass("activitiesHeaderOn");
	}
	else {
		$("#activitiesHeader").addClass("activitiesHeaderOn").removeClass("activitiesHeaderOff");
	}
	$("#activitiesIcons>a .iconify, #activitiesIcons>a").removeClass("activitiesIconsActive");
	$("a#"+activityId+" .iconify , a#"+activityId).addClass("activitiesIconsActive");
},

getCurrentActivity: function(currentActivityId){
	$(".activityStarting").css("display","none"); //hide the loading page
	if (currentActivityId=="-1") {
		$("#activitiesHeader").addClass("activitiesHeaderOff").removeClass("activitiesHeaderOn");
	}
	else {
		$("#activitiesHeader").addClass("activitiesHeaderOn").removeClass("activitiesHeaderOff");
	}
	$("#activitiesIcons>a .iconify, #activitiesIcons>a").removeClass("activitiesIconsActive");
	$("a#"+currentActivityId+" .iconify , a#"+currentActivityId).addClass("activitiesIconsActive");
},
			
writeButton: function(selector,hub,device,command,icon,iconclass="regular"){
	//set button js actions
	if (command) { 		//test command, since can be empty for blank button or new line
		if (command.toUpperCase().includes("VOLUME") || command.toUpperCase().includes("DIRECTION")) { //if volume or direction command, makes the action holdable
			actions="onpointerdown=\""+hub.label+".holdStart('"+device+"','"+command+"');\""+
					" onpointerup=\""+hub.label+".holdEnd('"+device+"','"+command+"');\""+
					" onpointerleave=\""+hub.label+".holdEnd('"+device+"','"+command+"');\"";
		}
		else {
			actions="onclick=\""+hub.label+".sendCommand('"+device+"','"+command+"')\""; //Default action on click, send the command once (press)
		}
	}
	
	//write button
	if (device) {
		//sequence commands
		if (device=="sequence") {
			actions="onclick=\""+hub.label+".sendSequence('"+command+"')\"";
		}
		//blank button	
		if (device=="blank") {
			$(selector).append("<a class=\""+iconclass+"\"><span class=\"iconify\" data-inline=\"false\"></span></a>");	
		}
		//new line
		else if (device.startsWith("new")) {
			newHeight=device.substr(3);
			if (newHeight == null) {
				$(selector).append("<div class=\"newRow\"></div>");	
			}
			else {
				$(selector).append("<div class=\"newRow\" style=\"height:"+newHeight+"em;\"></div>");
			}
		}
		//remote button
		else {
			$(selector).append("<a class=\""+iconclass+"\" "+actions+"><span class=\"iconify\" data-icon=\""+icon+"\" data-inline=\"false\"></span></a>");
		}
	}
},

writeActivityIcon: function(hub,activitiyId,icon,label){
	$("#activitiesIcons").append("<a onclick=\"ui.startActivity("+hub.label+",'"+activitiyId+"')\" id=\""+activitiyId+"\"><span class=\"iconify\" data-icon=\""+icon+"\" data-inline=\"false\"></span>"+label+"</a>");
},

startActivity: function(hub,activitiyId) {
	hub.startActivity(activitiyId);
	$("#activitiesIcons").css("height","0");
}

};