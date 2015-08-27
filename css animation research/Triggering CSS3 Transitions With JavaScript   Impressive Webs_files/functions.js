/*global window $ document confirm */

// Below fixes something with Google fonts
var Detector=function(){var h=document.getElementsByTagName("BODY")[0];var d=document.createElement("DIV");var s=document.createElement("SPAN");d.appendChild(s);d.style.fontFamily="sans";s.style.fontFamily="sans";s.style.fontSize="72px";s.innerHTML="mmmmmmmmmmlil";h.appendChild(d);var defaultWidth=s.offsetWidth;var defaultHeight=s.offsetHeight;h.removeChild(d);function debug(font){h.appendChild(d);var f=[];f[0]=s.style.fontFamily=font;f[1]=s.offsetWidth;f[2]=s.offsetHeight;h.removeChild(d);font=font.toLowerCase();if(font=="serif"){f[3]=true;}else{f[3]=(f[1]!=defaultWidth||f[2]!=defaultHeight);}
return f;}
function test(font){f=debug(font);return f[3];}
this.detailedTest=debug;this.test=test;}

var s = null,
	IW = {

        settings: {
            speed: 600,
            speed_2: 900,
            i: null,
            j: null,
            mySearchBox: null,
            mySearchBoxValue: null,
            HTMLStatus: null,
            typedComment: null,
            ce: null,
            h: null
        },

        // Placeholder text script
        doPlaceHolder: function () {
            s = this.settings;
            s.mySearchBox = $("#s")[0];

            s.mySearchBoxValue = "Search...";
            s.mySearchBox.value = s.mySearchBoxValue
            s.mySearchBox.onfocus = function () {
                
                if (s.mySearchBox.value === s.mySearchBoxValue) {
                    s.mySearchBox.value = "";
                    s.mySearchBox.className = "";
                    s.mySearchBox.className = "searchtxt sbselected";
                }
            };
            
            s.mySearchBox.onblur = function () {
                if (s.mySearchBox.value === '') {
                    s.mySearchBox.value = s.mySearchBoxValue;
                    s.mySearchBox.className = "searchtxt";
                }
            };
        },

        // Below is the message displayed to warn about HTML code in a comment
        doCommentWarning: function () {
            s = this.settings;
            if (document.getElementById("submit")) {
                $("#submit").click(function () {
                    s.typedComment = document.getElementById("comment").value;
                    s.typedComment = s.typedComment.replace("<code>", "");
                    s.typedComment = s.typedComment.replace("</code>", "");
                    s.typedComment = s.typedComment.replace(/<a href=.*>/, "");
                    s.typedComment = s.typedComment.replace("</a>", "");
                    s.typedComment = s.typedComment.replace("<blockquote>", "");
                    s.typedComment = s.typedComment.replace("</blockquote>", "");
                    s.typedComment = s.typedComment.replace("<strong>", "");
                    s.typedComment = s.typedComment.replace("</strong>", "");
                    s.typedComment = s.typedComment.replace("<em>", "");
                    s.typedComment = s.typedComment.replace("</em>", "");

                    if (s.typedComment.indexOf(">") !== -1 || s.typedComment.indexOf("<") !== -1) {
                        s.HTMLStatus = true;
                    } else {
                        s.HTMLStatus = false;
                    }

                    if (s.HTMLStatus === true) {
                        if (!confirm("Your comment seems to contain HTML code. HTML code examples that you want people to see need to be converted to entity references, otherwise they won't show up.\n\nEXAMPLE: <div> becomes &lt;div&gt;\n\nAlso, you should wrap block code examples in <pre> and <code> tags (using normal HTML, not entities), to make the code stand out. Inline code can just use <code> tags.\n\nIf you're using HTML for simple formatting, click OK\n\nTo correct your comment before submitting, click CANCEL.")) {
                                return false;		
                        }
                    }
                });
            }
        },

        doSyntaxHighlighterFix: function () {
            if ($('.dp-highlighter')) {
                $('.dp-highlighter .tools :nth-child(2), .dp-highlighter .tools :nth-child(3)').addClass('displaynone');
            }
        },

        doExtraMessage: function () {
            
            window.onload = function () {
                console.log('true');
                if($('#header-ad').height() === 0) {
                    // adblock not enabled
                    $('.content-left').prepend("<div class='update-box'><p class='xtra'><b>Hey, ad blocker user!</b> Do you mind white listing my site? You can also <a href='http://www.impressivewebs.com/384-pages-of-css/'>buy one of my e-books</a> to show your support. Thanks!</p></div>");
                }
            };

        }

    }; // primary namespace ends

$(function () {
	if (!('placeholder' in document.createElement('input'))) {
		IW.doPlaceHolder();
	}
	IW.doCommentWarning();
	IW.doSyntaxHighlighterFix();
	IW.doExtraMessage();
   
/*! 
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

    (function(a){a.fn.fitVids=function(b){var c={customSelector:null};var d=document.createElement("div"),e=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style";d.innerHTML="<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";e.parentNode.insertBefore(d,e);if(b){a.extend(c,b)}return this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']","object","embed"];if(c.customSelector){b.push(c.customSelector)}var d=a(this).find(b.join(","));d.each(function(){var b=a(this);if(this.tagName.toLowerCase()=="embed"&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length){return}var c=this.tagName.toLowerCase()=="object"?b.attr("height"):b.height(),d=c/b.width();if(!b.attr("id")){var e="fitvid"+Math.floor(Math.random()*999999);b.attr("id",e)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",d*100+"%");b.removeAttr("height").removeAttr("width")})})}})(jQuery)

    $(".entry-content").fitVids({
        customSelector: "iframe[src^='http://blip.tv']"
    });

});

// author: andi smith
// website: www.andismith.com
// version: 0.1

function canIUseDataLoaded(e){canIUse.dataLoaded(e)}var canIUse=function(){function b(e){e=e.toLowerCase();if(m.query){return m.query.results.json.data[e]}else if(m.data){return m.data[e]}else{return null}}function w(e){var t={y:"Yes",x:"With Prefix",n:"No",a:"Partial Support",p:"Polyfill",u:"Unknown"};return t[e]}function E(e){var t={rec:"W3C Recommendation",pr:"W3C Proposed Recommendation",cr:"W3C Candidate Recommendation",wd:"W3C Working Draft",other:"Non-W3C, but Reputable",unoff:"Unofficial or W3C 'Note'"};return t[e]||"Unknown"}function S(e,t){var n={version:-1,prefixed:false},r=-1;for(var i in t){if(t.hasOwnProperty(i)&&t[i].indexOf(e)>-1){r=parseFloat(i.split("-")[0]);if(n.version===-1||n.version>r){n.version=r;n.prefixed=t[i].indexOf("x")>-1}}}return n}function x(e){var t=["y","a","p"],n={};for(var r=0;r<t.length;r++){n=S(t[r],e);if(n.version!==-1){return{result:t[r],prefixed:n.prefixed,version:n.version!=="0"?n.version:"0"}}}return{result:"n",prefixed:false,version:"No"}}function T(e){var t={},n={},i="",s={};t=m.agents||m.query.results.json.agents;n.title=e.title;n.code=e;n.status=E(e.status);n.agents=[];for(var o=0,u=r.length;o<u;o++){i=r[o];if(t[i]){s=x(e.stats[r[o]]);n.agents.push({browsercode:i,prefixed:s.prefixed,supportcode:s.result,support:w(s.result),title:t[i].browser,type:t[i].type.toLowerCase(),version:s.version})}}return n}function N(e){var t="",n="",r="",d="",v=false,m={},g=0,y=0;n=i.replace("{title}",e.title);n+=s.replace("{status}",e.status);n+=o;for(g=0,y=e.agents.length;g<y;g++){m=e.agents[g];if(m.prefixed){v=true}t=l.replace(/\{browsercode\}/g,m.browsercode).replace(/\{prefixed\}/g,m.prefixed===true?"*":"").replace(/\{supportcode\}/g,m.supportcode).replace(/\{support\}/g,m.support).replace(/\{browser\}/g,m.title).replace(/\{version\}/g,m.version);if(m.type==="desktop"){r+=t}else if(m.type==="mobile"){d+=t}}if(r!==""){n+=u;n+=f.replace(/\{items\}/g,r)}if(d!==""){n+=a;n+=f.replace(/\{items\}/g,d)}if(v){n+=c}n+=h;n+=p.replace(/\{feature\}/g,e.featureCode);return n}function C(e){var t=[],n,r="",i={},s={},o=0,u=0;if(typeof e==="undefined"){t=document.querySelectorAll(".caniuse")}else{t.push(document.getElementById(e))}u=t.length;for(o=0;o<u;o++){n=t[o];r=n.getAttribute("data-feature")||"unknown";i=b(r);if(i){s=T(i);s.featureCode=r;n.innerHTML=N(s)}else{n.innerHTML=v.replace(/\{feature\}/g,r)}}}function k(e){var t=[],n,r=0,i=0;if(typeof e==="undefined"){t=document.querySelectorAll(".caniuse")}else{t.push(document.getElementById(e))}i=t.length;for(r=0;r<i;r++){n=t[r];n.innerHTML=d}}function L(t,n){var r="",i=document.createElement("SCRIPT");r="http://query.yahooapis.com/v1/public/yql?q="+"select * from json where url = '"+e+"'"+"&format=json&jsonCompat=new&callback=canIUseDataLoaded";g=t;y=n;i.src=r;document.body.appendChild(i)}function A(e){if(typeof m==="undefined"){k(e);L(e,true)}else{C(e)}}var e="https://raw.github.com/Fyrd/caniuse/master/data.json";var t=true,n=true;var r=["chrome","firefox","ie","opera","safari","ios_saf","android","op_mob","and_chr","and_ff"];var i="<h1>{title}</h1>",s='<p class="status">{status}</p>',o="<p>Supported from the following versions:</p>",u="<h2>Desktop</h2>",a="<h2>Mobile / Tablet</h2>",f='<ul class="agents">{items}</ul>',l='<li title="{browser} - {support}" class="icon-{browsercode} {supportcode}"><span class="version">{version}{prefixed}</span></li>',c="<p>* denotes prefix required.</p>",h='<ul class="legend"><li>Supported:</li><li class="y">Yes</li><li class="n">No</li><li class="a">Partially</li><li class="p">Polyfill</li></ul>',p='<p class="stats">Stats from <a href="http://caniuse.com/#feat={feature}" target="_blank">caniuse.com</a></p>',d="<h1>Loading</h1>",v='<h1>Error</h1><p>Feature "{feature}" not found!</p>';var m,g,y;return{render:A,dataLoaded:function(e){m=e;if(y){C(g)}},init:function(){if(t){A()}else if(n){L(undefined,false)}}()}}()