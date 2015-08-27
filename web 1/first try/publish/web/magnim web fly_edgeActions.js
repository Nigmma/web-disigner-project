
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop("menu");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_FONE_TEAM_LOGO_2}","mouseout",function(sym,e){sym.playReverse("end");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Cracked-Facebook-Logo}","click",function(sym,e){window.open("https://www.facebook.com/magnim.batale","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Park_Logo2}","click",function(sym,e){window.open("https://my.park.edu/ICS/Portlets/CRM/CXWebLinks/Portlet.CXStuAcRec/CXStuAcRecPage.aspx?DestURL=http://open.park.edu/cgi-bin/student/degaud.cgi","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_FONE_TEAM_LOGO_2}","click",function(sym,e){sym.play("menu");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-270756091");