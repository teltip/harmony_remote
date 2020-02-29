remote="remoteAv";

$("#remote").append("<div id=\""+remote+"\" class=\"remoteEntity thrownLeftOne\">");
$("#"+remote).append("<div class=\"remoteContent\">");
$("#"+remote+">.remoteContent").append("<div class=\"remoteHeader\">");
selector="#"+remote+">.remoteContent>.remoteHeader";
$(selector).append("<div class=\"remoteHeaderLabel\">AMPLI</div>");

ui.writeButton(selector,h1,"AV","PowerToggle","ic:sharp-power-settings-new","small");
ui.writeButton(selector,h1,"AV","Mute","bx:bx-volume-mute","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","VolumeDown","bx:bx-volume-low","small");
ui.writeButton(selector,h1,"AV","VolumeUp","bx:bx-volume-full","small");

selector="#"+remote+">.remoteContent";

ui.writeButton(selector,h1,"new4");

ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"AV","DirectionUp","entypo:chevron-thin-up");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"AV","Info","typcn-info-large");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"AV","DirectionLeft","entypo:chevron-thin-left");
ui.writeButton(selector,h1,"AV","Enter","mdi:alpha-d-circle");
ui.writeButton(selector,h1,"AV","DirectionRight","entypo:chevron-thin-right");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"new");

ui.writeButton(selector,h1,"AV","Setup","ei-gear");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"AV","DirectionDown","entypo:chevron-thin-down");
ui.writeButton(selector,h1,"blank");
ui.writeButton(selector,h1,"AV","Back","ion-backspace-outline");
ui.writeButton(selector,h1,"new5");

ui.writeButton(selector,h1,"AV","MODE CINEMA TOGGLE","si-glyph:movie-play","small");
ui.writeButton(selector,h1,"AV","MODE MUSIC TOGGLE","ic-sharp-music-video","small");
ui.writeButton(selector,h1,"AV","ModeMultiChStereo","mdi-dice-4-outline","small");
ui.writeButton(selector,h1,"AV","ModeStereo","ic-sharp-speaker-group","small");
ui.writeButton(selector,h1,"AV","ModePureDirect","cil-speaker","small");
ui.writeButton(selector,h1,"AV","ModeDSPSimulation","cil-loop","small");
ui.writeButton(selector,h1,"AV","ModeDTSSurround","vs-d-square","small");
ui.writeButton(selector,h1,"AV","ModeDolbyPrologic","mdi-dolby","small");
ui.writeButton(selector,h1,"new2");

ui.writeButton(selector,h1,"AV","QuickSelect1","ic-round-filter-1");
ui.writeButton(selector,h1,"AV","QuickSelect2","ic-round-filter-2");
ui.writeButton(selector,h1,"AV","QuickSelect3","ic-round-filter-3");
ui.writeButton(selector,h1,"AV","QuickSelect4","ic-round-filter-4");
ui.writeButton(selector,h1,"AV","QuickSelect5","ic-round-filter-5");
ui.writeButton(selector,h1,"new2");

ui.writeButton(selector,h1,"AV","DYN VOL TOGGLE","ic-baseline-loop","small");
ui.writeButton(selector,h1,"AV","DynamicVolOff","mdi-moon-new","small");
ui.writeButton(selector,h1,"AV","DynamicVol(Heavy)","mdi-moon-full","small");
ui.writeButton(selector,h1,"AV","DynamicVol(Medium)","mdi-moon-waning-gibbous","small");
ui.writeButton(selector,h1,"AV","DynamicVol(Light)","mdi-moon-waning-crescent","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","Dimmer","mdi-led-on","small");
ui.writeButton(selector,h1,"new2");

ui.writeButton(selector,h1,"AV","DYN EQ TOGGLE","bx-bx-toggle-left","small");
ui.writeButton(selector,h1,"AV","DYNEQ 0dB","mdi-numeric-0-box","small");
ui.writeButton(selector,h1,"AV","DYNEQ 5dB","mdi-numeric-5-box","small");
ui.writeButton(selector,h1,"AV","DYNEQ 10dB","mdi-numeric-10-box","small");
ui.writeButton(selector,h1,"AV","DYNEQ 15dB","uil-12-plus","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","Option","iwwa-option","small");
ui.writeButton(selector,h1,"new5");

ui.writeButton(selector,h1,"AV","SPKR FL DOWN","fe-speaker","small");
ui.writeButton(selector,h1,"AV","SPKR FL UP","whh-speaker","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","CLevelDown","fe-speaker","small");
ui.writeButton(selector,h1,"AV","CLevelUp","whh-speaker","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","SPKR FR DOWN","fe-speaker","small");
ui.writeButton(selector,h1,"AV","SPKR FR UP","whh-speaker","small");
ui.writeButton(selector,h1,"new5");

ui.writeButton(selector,h1,"AV","SPKR BL DOWN","fe-speaker","small");
ui.writeButton(selector,h1,"AV","SPKR BL UP","whh-speaker","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","SwLevelDown","emojione-v1:white-small-square","small");
ui.writeButton(selector,h1,"AV","SwLevelUp","emojione-v1:white-medium-small-square","small");
ui.writeButton(selector,h1,"blank","","","small");
ui.writeButton(selector,h1,"AV","SPKR BR DOWN","fe-speaker","small");
ui.writeButton(selector,h1,"AV","SPKR BR UP","whh-speaker","small");
ui.writeButton(selector,h1,"new");