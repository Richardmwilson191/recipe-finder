(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={recipe:"recipe_recipe__L27FH",calorie:"recipe_calorie__17vXK"}},function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=(a(13),a(2)),l=a.n(s),o=a(5),u=a(1),m=a(6),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("p",null,a," ",c.a.createElement("strong",null,"Calories")),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("ol",{className:"ingredients"},r.map(function(e){return c.a.createElement("li",null,e.text)})))};a(15);var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],p=s[1],d=Object(n.useState)("chicken"),b=Object(u.a)(d,2),h=b[0],E=b[1];Object(n.useEffect)(function(){g()},[h]);var g=function(){var e=Object(o.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("d8609a2b","&app_key=").concat("8d4c2ccdf3319237f0d176389117b7ee"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("h4",{className:"instruction"},"Search for any ingredient to get a selection of recipes containing that ingredient"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(m),p("")},className:"search-form"},c.a.createElement("input",{onChange:function(e){p(e.target.value)},className:"search-bar",type:"text",value:m}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map(function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})})))};i.a.render(c.a.createElement(d,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.8f8b51ec.chunk.js.map