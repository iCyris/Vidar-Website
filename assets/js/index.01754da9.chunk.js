(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{19:function(e,a,t){e.exports=t(33)},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t(7),m=function(e){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"_logo"},l.a.createElement("a",{className:"header__logo",href:"/"}),l.a.createElement("a",{className:"header__name",href:"/"},l.a.createElement("div",null,"VidarTeam"))),l.a.createElement("div",{className:"_binary"},l.a.createElement("div",{className:"header__binary"},l.a.createElement("span",{className:"zero"},"0"),l.a.createElement("span",{className:"one"},"1"),l.a.createElement("span",{className:"one"},"1"),l.a.createElement("span",{className:"zero"},"0"),l.a.createElement("span",{className:"zero"},"0"),l.a.createElement("span",{className:"one"},"1"),l.a.createElement("span",{className:"one"},"1"))))},s=t(5),o=t(8),i=t(16),u=t.n(i),E=function(e,a){var t=l.a.useRef(null),n=function(){var e=l.a.useState(!0),a=Object(o.a)(e,2),t=a[0],n=a[1];return function(){return n(!t)}}();return l.a.useEffect(function(){if(null!==e.current)return t.current=new u.a(e.current,a),n(),function(){return t.current.destroy()}},[e]),t.current},d=["As we do, as you know.","Growing up with awe of technology.","Those who seek truth must not be arrogant."],_=function(e){var a=l.a.useRef(null);return E(a,{strings:d,typeSpeed:35,backSpeed:25,startDelay:400,backDelay:800,loop:!0}),l.a.createElement("section",{className:"_home"},l.a.createElement("div",{className:"home__subtitle"},"22594e13276480dd456a8441babc227b / \u02c8vid\u0251:, tim"),l.a.createElement("div",{className:"home__title"},l.a.createElement("div",{className:"home__title-background"}),l.a.createElement("div",{className:"home__title-wrap"},l.a.createElement("div",{className:"inner"}))),l.a.createElement("div",{className:"home__slogan"},l.a.createElement("span",{className:"inner",ref:a})))},b=function(e){return l.a.createElement("section",{className:"_about"})},N=function(e){return l.a.createElement("section",{className:"_member"})},h=function(e){return l.a.createElement("section",{className:"_glory"})},p=Object(s.e)(function(e){var a="01",t="02",n="03",c="04",r=["/","/about","/member","/glory"],m=a,o="/about",i=function(){switch(location.pathname){case"/":m=a,o=r[1];break;case"/about":m=t,o=r[2];break;case"/member":m=n,o=r[3];break;case"/glory":m=c,o=r[0];break;default:m=a,o=r[0]}};i();return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"_welcome"},l.a.createElement("div",{className:"welcome__id"},l.a.createElement("div",{className:"id"},m),l.a.createElement("div",{className:"_line"})),l.a.createElement("div",{className:"welcome__text"},"WELCOME")),l.a.createElement("div",{className:"_links"},l.a.createElement("a",{className:"link__item",href:"/"},"Home"),l.a.createElement("span",null,"/"),l.a.createElement("a",{className:"link__item",href:"https://drops.vidar.club/",target:"_blank"},"Drops"),l.a.createElement("span",null,"/"),l.a.createElement("a",{className:"link__item",href:"https://ctf.vidar.club/",target:"_blank"},"CTF"),l.a.createElement("span",null,"/"),l.a.createElement("a",{className:"link__item",href:"https://wiki.vidar.club/",target:"_blank"},"Wiki"),l.a.createElement("span",null,"/"),l.a.createElement("a",{className:"link__item",href:"https://reg.vidar.club/",target:"_blank"},"Join us")),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:_}),l.a.createElement(s.a,{exact:!0,path:"/about",component:b}),l.a.createElement(s.a,{exact:!0,path:"/member",component:N}),l.a.createElement(s.a,{exact:!0,path:"/glory",component:h}),l.a.createElement(s.a,{component:_})),l.a.createElement("button",{className:"_next",onClick:function(){e.history.push(o),i()}}))}),v=function(e){var a=Object(n.useState)("init"),t=Object(o.a)(a,2),c=t[0],r=t[1],m=function(){r("close"===c||"init"===c?"open":"close")};return l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"_button-wrap",onClick:m},l.a.createElement("div",{className:"inner menu__button-open"},l.a.createElement("div",null))),l.a.createElement("div",{className:"_content","data-state":c},l.a.createElement("div",{className:"content__list"},l.a.createElement("a",{href:"/",className:"/"===location.pathname?"current":""},"HOME"),l.a.createElement("a",{href:"/about",className:"/about"===location.pathname?"current":""},"ABOUT"),l.a.createElement("a",{href:"/member",className:"/member"===location.pathname?"current":""},"MEMBER"),l.a.createElement("a",{href:"/glory",className:"/glory"===location.pathname?"current":""},"GLORY"))),l.a.createElement("div",{className:"_button-wrap","data-state":c},l.a.createElement("div",{className:"inner menu__button-close",onClick:m},l.a.createElement("div",{className:"ring"}),l.a.createElement("div",{className:"inner"}))))},f=function(e){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"_sns"},l.a.createElement("a",{className:"footer__sns-github",href:"https://github.com/vidar-team",target:"_blank",title:"GitHub"},l.a.createElement("i",null)),l.a.createElement("a",{className:"footer__sns-weibo",href:"https://weibo.com/HDUISA",target:"_blank",title:"WeiBo"},l.a.createElement("i",null))),l.a.createElement("div",{className:"_contact"},l.a.createElement("div",{className:"footer__line"},l.a.createElement("div",{className:"_line"})),l.a.createElement("div",{className:"footer__email"},l.a.createElement("a",{href:"mailto: public@vidar.club"},"public@vidar.club"))))};t(32);Object(c.render)(l.a.createElement(function(){return l.a.createElement("div",{className:"vidar-team"},l.a.createElement(m,null),l.a.createElement(r.a,null,l.a.createElement(p,null),l.a.createElement(v,null)),l.a.createElement(f,null))},null),document.getElementById("root")),console.log(">  \u300e Vidar-Team \u300f - As we do, as you know."),console.log(">   Hey, we sell hot dogs on the first teaching building. \ud83c\udf2d")}},[[19,2,0]]]);