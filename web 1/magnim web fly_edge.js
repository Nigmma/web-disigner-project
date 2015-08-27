/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'fly_solo_home',
            type:'image',
            rect:['0','0px','550px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fly%20solo%20home.jpg",'0px','0px']
         },
         {
            id:'web_try_1',
            type:'image',
            rect:['216px','26px','462px','347px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"web%20try%201.png",'0px','0px']
         },
         {
            id:'FONE_TEAM_LOGO_2',
            type:'image',
            rect:['25px','25px','118px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"FONE%20TEAM%20LOGO%202.jpg",'0px','0px']
         },
         {
            id:'Cracked-Facebook-Logo',
            type:'image',
            rect:['39px','158px','84px','84px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Cracked-Facebook-Logo.png','0px','0px']
         },
         {
            id:'Park_Logo2',
            type:'image',
            rect:['25px','97px','118px','59px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Park_Logo.png','0px','0px']
         },
         {
            id:'Youtube_Logo_2005',
            type:'image',
            rect:['25px','239px','118px','43px','auto','auto'],
            fill:["rgba(0,0,0,0)",'Youtube_Logo_2005.png','0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_fly_solo_home}": [
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Cracked-Facebook-Logo}": [
            ["style", "top", '-84px'],
            ["style", "height", '84px'],
            ["style", "opacity", '0'],
            ["style", "left", '42px'],
            ["style", "width", '84px']
         ],
         "${_FONE_TEAM_LOGO_2}": [
            ["style", "height", '59px'],
            ["style", "top", '25px'],
            ["style", "left", '25px'],
            ["style", "width", '118px']
         ],
         "${_Park_Logo2}": [
            ["style", "top", '-59px'],
            ["style", "height", '59px'],
            ["style", "opacity", '0'],
            ["style", "left", '25px'],
            ["style", "width", '118px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_Youtube_Logo_2005}": [
            ["style", "top", '229px'],
            ["style", "height", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '-124px'],
            ["style", "width", '118px']
         ],
         "${_web_try_1}": [
            ["style", "top", '35px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '347px'],
            ["style", "left", '-345px'],
            ["style", "width", '462px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5176,
         autoPlay: true,
         labels: {
            "menu": 0,
            "end": 5000
         },
         timeline: [
            { id: "eid58", tween: [ "style", "${_Park_Logo2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid92", tween: [ "style", "${_Park_Logo2}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0, easing: "easeInOutBack" },
			
            { id: "eid45", tween: [ "transform", "${_web_try_1}", "rotateZ", '-18deg', { fromValue: '0deg'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid106", tween: [ "transform", "${_web_try_1}", "rotateZ", '-18deg', { fromValue: '-18deg'}], position: 5176, duration: 0, easing: "easeInOutBack" },
			
            { id: "eid74", tween: [ "style", "${_Cracked-Facebook-Logo}", "top", '158px', { fromValue: '-84px'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid94", tween: [ "style", "${_Cracked-Facebook-Logo}", "top", '158px', { fromValue: '158px'}], position: 5000, duration: 0, easing: "easeInOutBack" },
            { id: "eid73", tween: [ "style", "${_Cracked-Facebook-Logo}", "left", '42px', { fromValue: '42px'}], position: 0, duration: 0, easing: "easeInOutBack" },
			
            { id: "eid83", tween: [ "style", "${_Youtube_Logo_2005}", "left", '25px', { fromValue: '-124px'}], position: 0, duration: 4000, easing: "easeInOutBack" },
			
            { id: "eid78", tween: [ "style", "${_Cracked-Facebook-Logo}", "width", '84px', { fromValue: '84px'}], position: 4000, duration: 0, easing: "easeInOutBack" },
            { id: "eid95", tween: [ "style", "${_Cracked-Facebook-Logo}", "width", '84px', { fromValue: '84px'}], position: 5000, duration: 0, easing: "easeInOutBack" },
			
            { id: "eid61", tween: [ "style", "${_Park_Logo2}", "left", '25px', { fromValue: '25px'}], position: 0, duration: 0, easing: "easeInOutBack" },
            { id: "eid60", tween: [ "style", "${_Youtube_Logo_2005}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid66", tween: [ "style", "${_Park_Logo2}", "top", '97px', { fromValue: '-59px'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid84", tween: [ "style", "${_Youtube_Logo_2005}", "top", '242px', { fromValue: '229px'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid59", tween: [ "style", "${_Cracked-Facebook-Logo}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 4000, easing: "easeInOutBack" },
            { id: "eid96", tween: [ "style", "${_Cracked-Facebook-Logo}", "opacity", '1', { fromValue: '1'}], position: 5000, duration: 0, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "style", "${_web_try_1}", "left", '218px', { fromValue: '-345px'}], position: 0, duration: 4000, easing: "easeInOutBack" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-270756091");
