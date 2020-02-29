remote="remoteSmart";

$("#remote").append("<div id=\""+remote+"\" class=\"remoteEntity active\">")
$("#"+remote).append("<div class=\"remoteContent\">");
selector=$("#"+remote+">.remoteContent").append("<div class=\"remoteHeader\">").children().last();
$(selector).append("<div class=\"remoteHeaderLabel\"></div>").children().last();

ui.writeButton(selector,h1,"AV","PowerToggle","ic:sharp-power-settings-new","small");
ui.writeButton(selector,h1,"AV","Mute","bx:bx-volume-mute","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"TV","Mute","bx:bx-volume-mute","small");
ui.writeButton(selector,h1,"TV","PowerToggle","ic:sharp-power-settings-new","small");

selector="#"+remote+">.remoteContent";

ui.writeButton(selector,h1,"new4");

ui.writeButton(selector,h1,"TV","Home","icons8-home");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","DirectionUp","entypo:chevron-thin-up");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","Info","typcn-info-large");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","DirectionLeft","entypo:chevron-thin-left");
ui.writeButton(selector,h1,"TV","Select","mdi:alpha-s-circle");
ui.writeButton(selector,h1,"TV","DirectionRight","entypo:chevron-thin-right");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","DirectionDown","entypo:chevron-thin-down");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","Return","ion-backspace-outline");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"AV","VolumeDown","bx:bx-volume-low");
ui.writeButton(selector,h1,"AV","VolumeUp","bx:bx-volume-full");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","VolumeDown","bx:bx-volume-low");
ui.writeButton(selector,h1,"TV","VolumeUp","bx:bx-volume-full");


//*************************************
//dynamic control based on activity
selector=$(selector).append("<div class=\"remoteActivitySpecific\">").children().last();
//CD
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"DISC","ChapterPrev","ion-play-skip-back");
ui.writeButton(selector,h1,"DISC","Stop","ion-stop");
ui.writeButton(selector,h1,"DISC","Play","ion-play");
ui.writeButton(selector,h1,"DISC","Pause","ion-pause");
ui.writeButton(selector,h1,"DISC","ChapterNext","ion-play-skip-forward");
ui.writeButton(selector,h1,"new");
ui.writeButton(selector,h1,"DISC","Rewind","ion-play-back");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"DISC","Eject","fa-solid:eject");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"DISC","FastForward","ion-play-forward");

//VIDEO DISC
selector=selector.parent();
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"DISC","ChapterPrev","ion-play-skip-back","small");
ui.writeButton(selector,h1,"DISC","Rewind","ion-play-back","small");
ui.writeButton(selector,h1,"DISC","Stop","ion-stop","small");
ui.writeButton(selector,h1,"DISC","Eject","fa-solid:eject","small");
ui.writeButton(selector,h1,"DISC","Play","ion-play","small");
ui.writeButton(selector,h1,"DISC","Pause","ion-pause","small");
ui.writeButton(selector,h1,"DISC","FastForward","ion-play-forward","small");
ui.writeButton(selector,h1,"DISC","ChapterNext","ion-play-skip-forward","small");

//TV
selector=selector.parent();
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"TV","Guide","ic-baseline-menu-book");
ui.writeButton(selector,h1,"TV","ChannelDown","ant-design:minus-circle-outlined");
ui.writeButton(selector,h1,"TV","ChannelUp","ant-design:plus-circle-outlined");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"TV","PictureMode","el-picture");
ui.writeButton(selector,h1,"new");
ui.writeButton(selector,h1,"TV","Green","noto-green-square");
ui.writeButton(selector,h1,"TV","Red","noto-red-square");
ui.writeButton(selector,h1,"TV","Blue","noto-blue-square");
ui.writeButton(selector,h1,"TV","Yellow","noto-yellow-square");
ui.writeButton(selector,h1,"TV","InputTv","mdi-television-classic");

//NAS MOVIE
selector=selector.parent();
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"TV","Rewind","ion-play-back");
ui.writeButton(selector,h1,"TV","Stop","ion-stop");
ui.writeButton(selector,h1,"TV","Play","ion-play");
ui.writeButton(selector,h1,"TV","Pause","ion-pause");
ui.writeButton(selector,h1,"TV","FastForward","ion-play-forward");
ui.writeButton(selector,h1,"new");
ui.writeButton(selector,h1,"AV","MODE CINEMA TOGGLE","si-glyph:movie-play");
ui.writeButton(selector,h1,"AV","MODE MUSIC TOGGLE","ic-sharp-music-video");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"TV","Aspect","mdi-arrow-expand-horizontal");
ui.writeButton(selector,h1,"TV","PictureMode","el-picture");

//iRadio
selector=selector.parent();
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"AV","DirectionUp","ant-design:minus-circle-outlined");
ui.writeButton(selector,h1,"AV","DirectionDown","ant-design:plus-circle-outlined");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"blank","","");

//Chromecast
selector=selector.parent();
selector=$(selector).append("<div class=\"your-actity-id\">").children().last();

ui.writeButton(selector,h1,"AV","MODE CINEMA TOGGLE","si-glyph:movie-play");
ui.writeButton(selector,h1,"AV","MODE MUSIC TOGGLE","ic-sharp-music-video");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"TV","Aspect","mdi-arrow-expand-horizontal");
ui.writeButton(selector,h1,"TV","PictureMode","el-picture");
//*************************************

selector="#"+remote+">.remoteContent";

ui.writeButton(selector,h1,"new3");

ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"LED","Fade7","mdi:play","small");
ui.writeButton(selector,h1,"LED","Play","mdi:play-pause","small");
ui.writeButton(selector,h1,"LED","Red","noto-red-circle","small");
ui.writeButton(selector,h1,"LED","Green","noto-green-circle","small");
ui.writeButton(selector,h1,"LED","Blue","noto-blue-circle","small");
ui.writeButton(selector,h1,"LED","Diy2","noto-white-circle","small");
ui.writeButton(selector,h1,"LED","PowerToggle","ic:sharp-power-settings-new","small");
ui.writeButton(selector,h1,"new3");

