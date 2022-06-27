/*!
 DataTables Foundation integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return d(a,window,document)}):"object"===typeof exports?module.exports=function(a,b){a||(a=window);if(!b||!b.fn.dataTable)b=require("datatables.net")(a,b).$;return d(b,a,a.document)}:d(jQuery,window,document)})(function(d){var a=d.fn.dataTable;d.extend(a.ext.classes,{sWrapper:"dataTables_wrapper dt-foundation",sProcessing:"dataTables_processing panel"});d.extend(!0,a.defaults,{dom:"<'row'<'small-6 columns'l><'small-6 columns'f>r>t<'row'<'small-6 columns'i><'small-6 columns'p>>",
renderer:"foundation"});a.ext.renderer.pageButton.foundation=function(b,j,q,r,g,k){var l=new a.Api(b),s=b.oClasses,h=b.oLanguage.oPaginate,t=b.oLanguage.oAria.paginate||{},e,f,p=function(a,m){var i,n,o,c,j=function(a){a.preventDefault();!d(a.currentTarget).hasClass("unavailable")&&l.page()!=a.data.action&&l.page(a.data.action).draw("page")};i=0;for(n=m.length;i<n;i++)if(c=m[i],d.isArray(c))p(a,c);else{f=e="";switch(c){case "ellipsis":e="&#x2026;";f="unavailable";break;case "first":e=h.sFirst;f=c+
(0<g?"":" unavailable");break;case "previous":e=h.sPrevious;f=c+(0<g?"":" unavailable");break;case "next":e=h.sNext;f=c+(g<k-1?"":" unavailable");break;case "last":e=h.sLast;f=c+(g<k-1?"":" unavailable");break;default:e=c+1,f=g===c?"current":""}e&&(o=d("<li>",{"class":s.sPageButton+" "+f,"aria-controls":b.sTableId,"aria-label":t[c],tabindex:b.iTabIndex,id:0===q&&"string"===typeof c?b.sTableId+"_"+c:null}).append(d("<a>",{href:"#"}).html(e)).appendTo(a),b.oApi._fnBindAction(o,{action:c},j))}};p(d(j).empty().html('<ul class="pagination"/>').children("ul"),
r)};return a});
