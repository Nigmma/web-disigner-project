/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop("menu");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_FONE_TEAM_LOGO_2}", "mouseout", function(sym, e) {
         sym.playReverse("end");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Cracked-Facebook-Logo}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://www.facebook.com/magnim.batale", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Park_Logo2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("https://my.park.edu/ICS/Portlets/CRM/CXWebLinks/Portlet.CXStuAcRec/CXStuAcRecPage.aspx?DestURL=http://open.park.edu/cgi-bin/student/degaud.cgi", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_FONE_TEAM_LOGO_2}", "click", function(sym, e) {
         sym.play("menu");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-270756091");