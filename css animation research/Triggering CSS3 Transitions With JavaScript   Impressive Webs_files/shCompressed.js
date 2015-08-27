var dp={sh:{Toolbar:{},Utils:{},RegexLib:{},Brushes:{},Strings:{AboutDialog:"<html><head><title>About...</title></head><body class=\"dp-about\"><table cellspacing=\"0\"><tr><td class=\"copy\"><p class=\"title\">dp.SyntaxHighlighter</div><div class=\"para\">Version: {V}</p><p><a href=\"http://www.dreamprojections.com/syntaxhighlighter/?ref=about\" target=\"_blank\">http://www.dreamprojections.com/syntaxhighlighter</a></p>&copy;2004-2007 Alex Gorbatchev.</td></tr><tr><td class=\"footer\"><input type=\"button\" class=\"close\" value=\"OK\" onClick=\"window.close()\"/></td></tr></table></body></html>"},ClipboardSwf:null,Version:"1.5"}};
dp.SyntaxHighlighter=dp.sh;
dp.sh.Toolbar.Commands={ExpandSource:{label:"+ expand source",check:function(_1){
return _1.collapse;
},func:function(_2,_3){
_2.parentNode.removeChild(_2);
_3.div.className=_3.div.className.replace("collapsed","");
}},ViewSource:{label:"view plain",func:function(_4,_5){
var _6=_5.originalCode.replace(/</g,"&lt;");
var _7=window.open("","_blank","width=750, height=400, location=0, resizable=1, menubar=0, scrollbars=0");
_7.document.write("<textarea style=\"width:99%;height:99%\">"+_6+"</textarea>");
_7.document.close();
}},CopyToClipboard:{label:"copy to clipboard",check:function(){
return window.clipboardData!=null||dp.sh.ClipboardSwf!=null;
},func:function(_8,_9){
var _a=_9.originalCode;
if(window.clipboardData){
window.clipboardData.setData("text",_a);
}else{
if(dp.sh.ClipboardSwf!=null){
var _b=_9.flashCopier;
if(_b==null){
_b=document.createElement("div");
_9.flashCopier=_b;
_9.div.appendChild(_b);
}
_b.innerHTML="<embed src=\""+dp.sh.ClipboardSwf+"\" FlashVars=\"clipboard="+encodeURIComponent(_a)+"\" width=\"0\" height=\"0\" type=\"application/x-shockwave-flash\"></embed>";
}
}
alert("The code is in your clipboard now");
}},PrintSource:{label:"print",func:function(_c,_d){
var _e=document.createElement("IFRAME");
var _f=null;
_e.style.cssText="position:absolute;width:0px;height:0px;left:-500px;top:-500px;";
document.body.appendChild(_e);
_f=_e.contentWindow.document;
dp.sh.Utils.CopyStyles(_f,window.document);
_f.write("<div class=\""+_d.div.className.replace("collapsed","")+" printing\">"+_d.div.innerHTML+"</div>");
_f.close();
_e.contentWindow.focus();
_e.contentWindow.print();
alert("Printing...");
document.body.removeChild(_e);
}},About:{label:"?",func:function(_10){
var wnd=window.open("","_blank","dialog,width=300,height=150,scrollbars=0");
var doc=wnd.document;
dp.sh.Utils.CopyStyles(doc,window.document);
doc.write(dp.sh.Strings.AboutDialog.replace("{V}",dp.sh.Version));
doc.close();
wnd.focus();
}}};
dp.sh.Toolbar.Create=function(_13){
var div=document.createElement("DIV");
div.className="tools";
for(var _15 in dp.sh.Toolbar.Commands){
var cmd=dp.sh.Toolbar.Commands[_15];
if(cmd.check!=null&&!cmd.check(_13)){
continue;
}
div.innerHTML+="<a href=\"#\" onclick=\"dp.sh.Toolbar.Command('"+_15+"',this);return false;\">"+cmd.label+"</a>";
}
return div;
};
dp.sh.Toolbar.Command=function(_17,_18){
var n=_18;
while(n!=null&&n.className.indexOf("dp-highlighter")==-1){
n=n.parentNode;
}
if(n!=null){
dp.sh.Toolbar.Commands[_17].func(_18,n.highlighter);
}
};
dp.sh.Utils.CopyStyles=function(_1a,_1b){
var _1c=_1b.getElementsByTagName("link");
for(var i=0;i<_1c.length;i++){
if(_1c[i].rel.toLowerCase()=="stylesheet"){
_1a.write("<link type=\"text/css\" rel=\"stylesheet\" href=\""+_1c[i].href+"\"></link>");
}
}
};
dp.sh.RegexLib={MultiLineCComments:new RegExp("/\\*[\\s\\S]*?\\*/","gm"),SingleLineCComments:new RegExp("//.*$","gm"),SingleLinePerlComments:new RegExp("#.*$","gm"),DoubleQuotedString:new RegExp("\"(?:\\.|(\\\\\\\")|[^\\\"\"])*\"","g"),SingleQuotedString:new RegExp("'(?:\\.|(\\\\\\')|[^\\''])*'","g")};
dp.sh.Match=function(_1e,_1f,css){
this.value=_1e;
this.index=_1f;
this.length=_1e.length;
this.css=css;
};
dp.sh.Highlighter=function(){
this.noGutter=false;
this.addControls=true;
this.collapse=false;
this.tabsToSpaces=true;
this.wrapColumn=80;
this.showColumns=true;
};
dp.sh.Highlighter.SortCallback=function(m1,m2){
if(m1.index<m2.index){
return -1;
}else{
if(m1.index>m2.index){
return 1;
}else{
if(m1.length<m2.length){
return -1;
}else{
if(m1.length>m2.length){
return 1;
}
}
}
}
return 0;
};
dp.sh.Highlighter.prototype.CreateElement=function(_23){
var _24=document.createElement(_23);
_24.highlighter=this;
return _24;
};
dp.sh.Highlighter.prototype.GetMatches=function(_25,css){
var _27=0;
var _28=null;
while((_28=_25.exec(this.code))!=null){
this.matches[this.matches.length]=new dp.sh.Match(_28[0],_28.index,css);
}
};
dp.sh.Highlighter.prototype.AddBit=function(str,css){
if(str==null||str.length==0){
return;
}
var _2b=this.CreateElement("SPAN");
str=str.replace(/ /g,"&nbsp;");
str=str.replace(/</g,"&lt;");
str=str.replace(/\n/gm,"&nbsp;<br>");
if(css!=null){
if((/br/gi).test(str)){
var _2c=str.split("&nbsp;<br>");
for(var i=0;i<_2c.length;i++){
_2b=this.CreateElement("SPAN");
_2b.className=css;
_2b.innerHTML=_2c[i];
this.div.appendChild(_2b);
if(i+1<_2c.length){
this.div.appendChild(this.CreateElement("BR"));
}
}
}else{
_2b.className=css;
_2b.innerHTML=str;
this.div.appendChild(_2b);
}
}else{
_2b.innerHTML=str;
this.div.appendChild(_2b);
}
};
dp.sh.Highlighter.prototype.IsInside=function(_2e){
if(_2e==null||_2e.length==0){
return false;
}
for(var i=0;i<this.matches.length;i++){
var c=this.matches[i];
if(c==null){
continue;
}
if((_2e.index>c.index)&&(_2e.index<c.index+c.length)){
return true;
}
}
return false;
};
dp.sh.Highlighter.prototype.ProcessRegexList=function(){
for(var i=0;i<this.regexList.length;i++){
this.GetMatches(this.regexList[i].regex,this.regexList[i].css);
}
};
dp.sh.Highlighter.prototype.ProcessSmartTabs=function(_32){
var _33=_32.split("\n");
var _34="";
var _35=4;
var tab="\t";
function InsertSpaces(_37,pos,_39){
var _3a=_37.substr(0,pos);
var _3b=_37.substr(pos+1,_37.length);
var _3c="";
for(var i=0;i<_39;i++){
_3c+=" ";
}
return _3a+_3c+_3b;
}
function ProcessLine(_3e,_3f){
if(_3e.indexOf(tab)==-1){
return _3e;
}
var pos=0;
while((pos=_3e.indexOf(tab))!=-1){
var _41=_3f-pos%_3f;
_3e=InsertSpaces(_3e,pos,_41);
}
return _3e;
}
for(var i=0;i<_33.length;i++){
_34+=ProcessLine(_33[i],_35)+"\n";
}
return _34;
};
dp.sh.Highlighter.prototype.SwitchToList=function(){
var _43=this.div.innerHTML.replace(/<(br)\/?>/gi,"\n");
var _44=_43.split("\n");
if(this.addControls==true){
this.bar.appendChild(dp.sh.Toolbar.Create(this));
}
if(this.showColumns){
var div=this.CreateElement("div");
var _46=this.CreateElement("div");
var _47=10;
var i=1;
while(i<=150){
if(i%_47==0){
div.innerHTML+=i;
i+=(i+"").length;
}else{
div.innerHTML+="&middot;";
i++;
}
}
_46.className="columns";
_46.appendChild(div);
this.bar.appendChild(_46);
}
for(var i=0,lineIndex=this.firstLine;i<_44.length-1;i++,lineIndex++){
var li=this.CreateElement("LI");
var _4b=this.CreateElement("SPAN");
li.className=(i%2==0)?"alt":"";
_4b.innerHTML=_44[i]+"&nbsp;";
li.appendChild(_4b);
this.ol.appendChild(li);
}
this.div.innerHTML="";
};
dp.sh.Highlighter.prototype.Highlight=function(_4c){
function Trim(str){
return str.replace(/^\s*(.*?)[\s\n]*$/g,"$1");
}
function Chop(str){
return str.replace(/\n*$/,"").replace(/^\n*/,"");
}
function Unindent(str){
var _50=str.split("\n");
var _51=new Array();
var _52=new RegExp("^\\s*","g");
var min=1000;
for(var i=0;i<_50.length&&min>0;i++){
if(Trim(_50[i]).length==0){
continue;
}
var _55=_52.exec(_50[i]);
if(_55!=null&&_55.length>0){
min=Math.min(_55[0].length,min);
}
}
if(min>0){
for(var i=0;i<_50.length;i++){
_50[i]=_50[i].substr(min);
}
}
return _50.join("\n");
}
function Copy(_57,_58,_59){
return _57.substr(_58,_59-_58);
}
var pos=0;
if(_4c==null){
_4c="";
}
this.originalCode=_4c;
this.code=Chop(Unindent(_4c));
this.div=this.CreateElement("DIV");
this.bar=this.CreateElement("DIV");
this.ol=this.CreateElement("OL");
this.matches=new Array();
this.div.className="dp-highlighter";
this.div.highlighter=this;
this.bar.className="bar";
this.ol.start=this.firstLine;
if(this.CssClass!=null){
this.ol.className=this.CssClass;
}
if(this.collapse){
this.div.className+=" collapsed";
}
if(this.noGutter){
this.div.className+=" nogutter";
}
if(this.tabsToSpaces==true){
this.code=this.ProcessSmartTabs(this.code);
}
this.ProcessRegexList();
if(this.matches.length==0){
this.AddBit(this.code,null);
this.SwitchToList();
this.div.appendChild(this.ol);
return;
}
this.matches=this.matches.sort(dp.sh.Highlighter.SortCallback);
for(var i=0;i<this.matches.length;i++){
if(this.IsInside(this.matches[i])){
this.matches[i]=null;
}
}
for(var i=0;i<this.matches.length;i++){
var _5d=this.matches[i];
if(_5d==null||_5d.length==0){
continue;
}
this.AddBit(Copy(this.code,pos,_5d.index),null);
this.AddBit(_5d.value,_5d.css);
pos=_5d.index+_5d.length;
}
this.AddBit(this.code.substr(pos),null);
this.SwitchToList();
this.div.appendChild(this.bar);
this.div.appendChild(this.ol);
};
dp.sh.Highlighter.prototype.GetKeywords=function(str){
return "\\b"+str.replace(/ /g,"\\b|\\b")+"\\b";
};
dp.sh.HighlightAll=function(_5f,_60,_61,_62,_63,_64){
function FindValue(){
var a=arguments;
for(var i=0;i<a.length;i++){
if(a[i]==null){
continue;
}
if(typeof (a[i])=="string"&&a[i]!=""){
return a[i]+"";
}
if(typeof (a[i])=="object"&&a[i].value!=""){
return a[i].value+"";
}
}
return null;
}
function IsOptionSet(_67,_68){
for(var i=0;i<_68.length;i++){
if(_68[i]==_67){
return true;
}
}
return false;
}
function GetOptionValue(_6a,_6b,_6c){
var _6d=new RegExp("^"+_6a+"\\[(\\w+)\\]$","gi");
var _6e=null;
for(var i=0;i<_6b.length;i++){
if((_6e=_6d.exec(_6b[i]))!=null){
return _6e[1];
}
}
return _6c;
}
function FindTagsByName(_70,_71,_72){
var _73=document.getElementsByTagName(_72);
for(var i=0;i<_73.length;i++){
if(_73[i].getAttribute("name")==_71){
_70.push(_73[i]);
}
}
}
var _75=[];
var _76=null;
var _77={};
var _78="innerHTML";
FindTagsByName(_75,_5f,"pre");
FindTagsByName(_75,_5f,"textarea");
if(_75.length==0){
return;
}
for(var _79 in dp.sh.Brushes){
var _7a=dp.sh.Brushes[_79].Aliases;
if(_7a==null){
continue;
}
for(var i=0;i<_7a.length;i++){
_77[_7a[i]]=_79;
}
}
for(var i=0;i<_75.length;i++){
var _7d=_75[i];
var _7e=FindValue(_7d.attributes["class"],_7d.className,_7d.attributes["language"],_7d.language);
var _7f="";
if(_7e==null){
continue;
}
_7e=_7e.split(":");
_7f=_7e[0].toLowerCase();
if(_77[_7f]==null){
continue;
}
_76=new dp.sh.Brushes[_77[_7f]]();
_7d.style.display="none";
_76.noGutter=(_60==null)?IsOptionSet("nogutter",_7e):!_60;
_76.addControls=(_61==null)?!IsOptionSet("nocontrols",_7e):_61;
_76.collapse=(_62==null)?IsOptionSet("collapse",_7e):_62;
_76.showColumns=(_64==null)?IsOptionSet("showcolumns",_7e):_64;
if(_76.Style){
document.write("<style>"+_76.Style+"</style>");
}
_76.firstLine=(_63==null)?parseInt(GetOptionValue("firstline",_7e,1)):_63;
_76.Highlight(_7d[_78]);
_76.source=_7d;
_7d.parentNode.insertBefore(_76.div,_7d);
}
};

dp.sh.Brushes.Php = function()
{
	var funcs	=	'abs acos acosh addcslashes addslashes ' +
					'array_change_key_case array_chunk array_combine array_count_values array_diff '+
					'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
					'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
					'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
					'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
					'array_push array_rand array_reduce array_reverse array_search array_shift '+
					'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
					'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
					'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
					'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
					'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
					'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
					'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
					'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
					'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
					'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
					'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
					'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
					'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
					'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
					'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
					'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
					'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
					'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
					'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
					'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
					'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
					'parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir '+
					'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
					'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
					'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
					'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
					'strtoupper strtr strval substr substr_compare';

	var keywords =	'and or xor __FILE__ __LINE__ array as break case ' +
					'cfunction class const continue declare default die do else ' +
					'elseif empty enddeclare endfor endforeach endif endswitch endwhile ' +
					'extends for foreach function include include_once global if ' +
					'new old_function return static switch use require require_once ' +
					'var while __FUNCTION__ __CLASS__ ' +
					'__METHOD__ abstract interface public implements extends private protected throw';

	this.regexList = [
		{ regex: dp.sh.RegexLib.SingleLineCComments,				css: 'comment' },			// one line comments
		{ regex: dp.sh.RegexLib.MultiLineCComments,					css: 'comment' },			// multiline comments
		{ regex: dp.sh.RegexLib.DoubleQuotedString,					css: 'string' },			// double quoted strings
		{ regex: dp.sh.RegexLib.SingleQuotedString,					css: 'string' },			// single quoted strings
		{ regex: new RegExp('\\$\\w+', 'g'),						css: 'vars' },				// variables
		{ regex: new RegExp(this.GetKeywords(funcs), 'gmi'),		css: 'func' },				// functions
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
		];

	this.CssClass = 'dp-c';
}

dp.sh.Brushes.Php.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Php.Aliases	= ['php'];

dp.sh.Brushes.JScript = function()
{
	var keywords =	'abstract boolean break byte case catch char class const continue debugger ' +
					'default delete do double else enum export extends false final finally float ' +
					'for function goto if implements import in instanceof int interface long native ' +
					'new null package private protected public return short static super switch ' +
					'synchronized this throw throws transient true try typeof var void volatile while with';

	this.regexList = [
		{ regex: dp.sh.RegexLib.SingleLineCComments,				css: 'comment' },			// one line comments
		{ regex: dp.sh.RegexLib.MultiLineCComments,					css: 'comment' },			// multiline comments
		{ regex: dp.sh.RegexLib.DoubleQuotedString,					css: 'string' },			// double quoted strings
		{ regex: dp.sh.RegexLib.SingleQuotedString,					css: 'string' },			// single quoted strings
		{ regex: new RegExp('^\\s*#.*', 'gm'),						css: 'preprocessor' },		// preprocessor tags like #region and #endregion
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),		css: 'keyword' }			// keywords
		];

	this.CssClass = 'dp-c';
}

dp.sh.Brushes.JScript.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.JScript.Aliases	= ['js', 'jscript', 'javascript'];

dp.sh.Brushes.CSS = function()
{
	var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
					'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
					'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
					'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
					'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
					'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
					'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
					'height letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
					'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
					'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
					'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
					'quotes richness right size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
					'table-layout text-align text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
					'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index important';

	var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
					'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
					'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
					'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
					'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
					'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
					'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
					'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
					'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
					'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
					'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
					'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
					'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
					'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';
	
	var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif';

	this.regexList = [
		{ regex: dp.sh.RegexLib.MultiLineCComments,					css: 'comment' },	// multiline comments
		{ regex: dp.sh.RegexLib.DoubleQuotedString,					css: 'string' },	// double quoted strings
		{ regex: dp.sh.RegexLib.SingleQuotedString,					css: 'string' },	// single quoted strings
		{ regex: new RegExp('\\#[a-zA-Z0-9]{3,6}', 'g'),			css: 'colors' },	// html colors
		{ regex: new RegExp('(\\d+)(px|pt|\:)', 'g'),				css: 'string' },	// size specifications
		{ regex: new RegExp(this.GetKeywords(keywords), 'gm'),		css: 'keyword' },	// keywords
		{ regex: new RegExp(this.GetKeywords(values), 'g'),			css: 'string' },	// values
		{ regex: new RegExp(this.GetKeywords(fonts), 'g'),			css: 'string' }		// fonts
		];

	this.CssClass = 'dp-css';
	this.Style =	'.dp-css .colors { color: darkred; }' +
					'.dp-css .vars { color: #d00; }';
}

dp.sh.Brushes.CSS.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.CSS.Aliases	= ['css'];

dp.sh.Brushes.Xml = function()
{
	this.CssClass = 'dp-xml';
	this.Style =	'.dp-xml .cdata { color: #ff1493; }' +
					'.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }' +
					'.dp-xml .attribute { color: red; }' +
					'.dp-xml .attribute-value { color: blue; }';
}

dp.sh.Brushes.Xml.prototype	= new dp.sh.Highlighter();
dp.sh.Brushes.Xml.Aliases	= ['xml', 'xhtml', 'xslt', 'html', 'xhtml'];

dp.sh.Brushes.Xml.prototype.ProcessRegexList = function()
{
	function push(array, value)
	{
		array[array.length] = value;
	}
	
	/* If only there was a way to get index of a group within a match, the whole XML
	   could be matched with the expression looking something like that:
	
	   (<!\[CDATA\[\s*.*\s*\]\]>)
	   | (<!--\s*.*\s*?-->)
	   | (<)*(\w+)*\s*(\w+)\s*=\s*(".*?"|'.*?'|\w+)(/*>)*
	   | (</?)(.*?)(/?>)
	*/
	var index	= 0;
	var match	= null;
	var regex	= null;

	// Match CDATA in the following format <![ ... [ ... ]]>
	// (\&lt;|<)\!\[[\w\s]*?\[(.|\s)*?\]\](\&gt;|>)
	this.GetMatches(new RegExp('(\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\&gt;|>)', 'gm'), 'cdata');
	
	// Match comments
	// (\&lt;|<)!--\s*.*\s*?--(\&gt;|>)
	this.GetMatches(new RegExp('(\&lt;|<)!--\\s*.*\\s*?--(\&gt;|>)', 'gm'), 'comments');

	// Match attributes and their values
	// (:|\w+)\s*=\s*(".*?"|\'.*?\'|\w+)*
	regex = new RegExp('([:\\w-\.]+)\\s*=\\s*(".*?"|\'.*?\'|\\w+)*|(\\w+)', 'gm'); // Thanks to Tomi Blinnikka of Yahoo! for fixing namespaces in attributes
	while((match = regex.exec(this.code)) != null)
	{
		if(match[1] == null)
		{
			continue;
		}
			
		push(this.matches, new dp.sh.Match(match[1], match.index, 'attribute'));
	
		// if xml is invalid and attribute has no property value, ignore it	
		if(match[2] != undefined)
		{
			push(this.matches, new dp.sh.Match(match[2], match.index + match[0].indexOf(match[2]), 'attribute-value'));
		}
	}

	// Match opening and closing tag brackets
	// (\&lt;|<)/*\?*(?!\!)|/*\?*(\&gt;|>)
	this.GetMatches(new RegExp('(\&lt;|<)/*\\?*(?!\\!)|/*\\?*(\&gt;|>)', 'gm'), 'tag');

	// Match tag names
	// (\&lt;|<)/*\?*\s*(\w+)
	regex = new RegExp('(?:\&lt;|<)/*\\?*\\s*([:\\w-\.]+)', 'gm');
	while((match = regex.exec(this.code)) != null)
	{
		push(this.matches, new dp.sh.Match(match[1], match.index + match[0].indexOf(match[1]), 'tag-name'));
	}
}