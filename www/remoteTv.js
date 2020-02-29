remote="remoteTv";

$("#remote").append("<div id=\""+remote+"\" class=\"remoteEntity thrownRightOne\">");
$("#"+remote).append("<div class=\"remoteContent\">");
$("#"+remote+">.remoteContent").append("<div class=\"remoteHeader\">");
selector="#"+remote+">.remoteContent>.remoteHeader";
$(selector).append("<div class=\"remoteHeaderLabel\">TV</div>");

ui.writeButton(selector,h1,"TV","PowerToggle","ic:sharp-power-settings-new","small");
ui.writeButton(selector,h1,"TV","Mute","bx:bx-volume-mute","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"TV","VolumeDown","bx:bx-volume-low","small");
ui.writeButton(selector,h1,"TV","VolumeUp","bx:bx-volume-full","small");	

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

ui.writeButton(selector,h1,"TV","Menu","ei-gear");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","DirectionDown","entypo:chevron-thin-down");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"TV","Return","ion-backspace-outline");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"TV","PictureMode","el-picture");
ui.writeButton(selector,h1,"TV","Aspect","mdi-arrow-expand-horizontal");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"blank","","");
ui.writeButton(selector,h1,"TV","AmbientMode","mdi-flower");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"sequence","TV::InputHdmi2::1000;TV::InputTv","mdi-television-classic");
ui.writeButton(selector,h1,"TV","InputHdmi2","cib:chromecast");
ui.writeButton(selector,h1,"TV","InputHdmi4","mdi-audio-video");
ui.writeButton(selector,h1,"sequence","TV::Home;TV::DirectionRight;TV::DirectionRight;TV::DirectionRight;TV::DirectionRight;TV::Select","zmdi:youtube");
ui.writeButton(selector,h1,"sequence","TV::InputHdmi4::2000;TV::Home;TV::DirectionUp;TV::DirectionRight;TV::Select::2000;TV::DirectionRight;TV::Select","mdi:movie-open-outline");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"TV","Rewind","ion-play-back");
ui.writeButton(selector,h1,"TV","Stop","ion-stop");
ui.writeButton(selector,h1,"TV","Play","ion-play");
ui.writeButton(selector,h1,"TV","Pause","ion-pause");
ui.writeButton(selector,h1,"TV","FastForward","ion-play-forward");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"TV","Guide","ic-baseline-menu-book","small");
ui.writeButton(selector,h1,"TV","ChannelDown","ant-design:minus-circle-outlined","small");
ui.writeButton(selector,h1,"TV","ChannelUp","ant-design:plus-circle-outlined","small");
ui.writeButton(selector,h1,"TV","ChannelPrev","ion-return-up-back-sharp","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"TV","1","mdi-numeric-1-box-outline","small");
ui.writeButton(selector,h1,"TV","2","mdi-numeric-2-box-outline","small");
ui.writeButton(selector,h1,"TV","3","mdi-numeric-3-box-outline","small");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"TV","Green","noto-green-square","small");
ui.writeButton(selector,h1,"TV","Red","noto-red-square","small");
ui.writeButton(selector,h1,"TV","Blue","noto-blue-square","small");
ui.writeButton(selector,h1,"TV","Yellow","noto-yellow-square","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"TV","4","mdi-numeric-4-box-outline","small");
ui.writeButton(selector,h1,"TV","5","mdi-numeric-5-box-outline","small");
ui.writeButton(selector,h1,"TV","6","mdi-numeric-6-box-outline","small");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"TV","7","mdi-numeric-7-box-outline","small");
ui.writeButton(selector,h1,"TV","8","mdi-numeric-8-box-outline","small");
ui.writeButton(selector,h1,"TV","9","mdi-numeric-9-box-outline","small");

