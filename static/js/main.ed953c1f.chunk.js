(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{24:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(18),i=a.n(s),r=(a(24),a(9)),o=a(3),l=a(5),j=a.n(l),d=a(8),m=a(19),b=a(0);var h=function(e){var t=Object(m.useMediaQuery)({query:"(max-width: 1224px)"});function a(){e.onNominated(e.title,e.year)}return Object(b.jsx)("div",{children:t?Object(b.jsxs)("div",{className:"search-result-mobile",children:[Object(b.jsx)("p",{className:"movie-title-mobile",children:Object(b.jsx)("b",{children:e.title})}),Object(b.jsxs)("p",{className:"movie-year-mobile",children:[" (",e.year,") "]}),e.nominations.some((function(t){return t.title===e.title&&t.year===e.year}))?Object(b.jsx)("span",{className:"material-icons",children:"star"}):Object(b.jsx)("span",{onClick:a,className:"material-icons",children:"star_border"})]}):Object(b.jsxs)("div",{className:"search-result-mobile",children:[Object(b.jsx)("p",{className:"movie-title-mobile",children:Object(b.jsx)("b",{children:e.title})}),Object(b.jsxs)("p",{className:"movie-year-mobile",children:[" (",e.year,") "]}),e.nominations.some((function(t){return t.title===e.title&&t.year===e.year}))?Object(b.jsxs)("button",{disabled:!0,className:"nominate-button",children:[Object(b.jsx)("span",{className:"material-icons",children:"star"}),"Nominated"]}):Object(b.jsxs)("button",{onClick:a,className:"nominate-button",children:[Object(b.jsx)("span",{className:"material-icons",children:"star_border"}),"Nominate"]})]})})};var u=function(e){var t=Object(n.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)([]),l=Object(o.a)(r,2),m=l[0],u=l[1],p=Object(n.useState)(!1),O=Object(o.a)(p,2),x=O[0],v=O[1];function f(){return(f=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Enter"===t.key&&(u([]),v(!1),i(t.target.value),N(t.target.value));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(j.a.mark((function e(t){var n,c,s,i,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=1,c=[],s=a(27),e.next=5,s("http://www.omdbapi.com/?s=".concat(t,"&type=movie&apikey=").concat("caeac616","&page=").concat(n));case 5:i=e.sent,r=i.data.totalResults,"False"===i.data.Response&&v(!0);case 8:if(!(r>0)){e.next=18;break}for(o=0;o<i.data.Search.length;o++)i.data&&c.push({title:i.data.Search[o].Title,year:i.data.Search[o].Year});return r-=i.data.Search.length,n+=1,console.log(c),e.next=15,s("http://www.omdbapi.com/?s=".concat(t,"&apikey=").concat("caeac616","&page=").concat(n));case 15:i=e.sent,e.next=8;break;case 18:u(c);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"search-bar",children:[Object(b.jsx)("input",{onKeyPress:function(e){return f.apply(this,arguments)},type:"text",name:"search",placeholder:"Enter a movie title"}),Object(b.jsx)("span",{className:"material-icons md-dark",children:"search"})]}),Object(b.jsx)("div",{className:"search-results-container",children:x?Object(b.jsxs)("h4",{children:['No results matching "',s,'"']}):Object(b.jsx)("div",{children:""!==s&&0===m.length?Object(b.jsx)("div",{id:"loader"}):Object(b.jsxs)("div",{children:[""===s?Object(b.jsx)("div",{}):Object(b.jsx)("div",{children:Object(b.jsxs)("h4",{children:['Search results for "',s,'"']})}),m.map((function(t,a){return Object(b.jsx)(h,{nominations:e.nominations,onNominated:e.onNominated,title:t.title,year:t.year},a)}))]})})})]})};var p=function(e){return Object(b.jsxs)("div",{className:"nominations-list-mobile",children:[Object(b.jsx)("span",{onClick:function(){e.deleteNomination(e.title,e.year)},className:"material-icons",children:"remove_circle"}),Object(b.jsxs)("p",{className:"nominations-title-mobile",children:[Object(b.jsx)("b",{children:e.title})," (",e.year,") "]})]})};a(46);var O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];function s(e,t){var n=-1;a.map((function(a,c){a.title===e&&a.year===t&&(n=c)}));var s=Object(r.a)(a);s.splice(n,1),c(s)}return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("div",{className:"noms-header mobile",children:[Object(b.jsx)("h1",{children:"Nominations"}),a.map((function(e,t){return Object(b.jsx)(p,{deleteNomination:s,title:e.title,year:e.year},t)}))]}),Object(b.jsxs)("div",{className:"main-content",children:[Object(b.jsx)("h1",{children:"The Shoppies"}),Object(b.jsx)(u,{nominations:a,onNominated:function(e,t){var n=Object(r.a)(a);n.length<5&&(n.push({title:e,year:t}),c(n)),5===n.length&&function(){var e=document.getElementById("noms-done-snackbar");e.className="show",setTimeout((function(){e.className=e.className.replace("show","")}),3e3)}()}})]}),Object(b.jsxs)("div",{id:"noms-done-snackbar",children:[Object(b.jsx)("span",{className:"material-icons",children:"done\xa0"}),"Successfully nominated 5 films"]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[47,1,2]]]);
//# sourceMappingURL=main.ed953c1f.chunk.js.map