(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[3],{34:function(e,t,s){"use strict";s(1),s(37);var i=s(0);t.a=function(e){var t=e.name,s=e.handleClick;return Object(i.jsx)("button",{className:"rounded-button",type:"button",onClick:s,children:t})}},36:function(e,t,s){"use strict";t.a=s.p+"static/media/about-sec-img.c99b514e.png"},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},56:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=(s(38),s(36)),n=s(34),r=(s(39),s(2)),o=function(){var e=Object(r.f)();return function(t){e.push(t)}},l=s(52),d=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),s=t[0],c=t[1];return{isShown:s,toggle:function(){return c(!s)}}},j=s(0),m=function(){var e=o();return Object(j.jsx)("section",{className:"about",children:Object(j.jsxs)("div",{className:"container about__container",children:[Object(j.jsxs)("div",{className:"about__story story",children:[Object(j.jsxs)("div",{className:"storyt__header header-story",children:[Object(j.jsx)("p",{className:"header-story__subtitle",children:"Let me introduce myself"}),Object(j.jsx)("h2",{className:"header-story__title",children:"About me"})]}),Object(j.jsx)("div",{className:"story__text",children:Object(j.jsx)("p",{children:"I am a Front-end Developer. I'm keen on creating web interfaces and their developing. To find additional information about me and my education click through to my"})}),Object(j.jsxs)("div",{className:"story__actions actions",children:[Object(j.jsx)("div",{className:"actions__works",children:Object(j.jsx)(n.a,{name:"Works",handleClick:function(){return e("/projects")}})}),Object(j.jsx)("div",{className:"actions__more",children:Object(j.jsx)(n.a,{name:"Read more",handleClick:function(){return e("/about")}})}),Object(j.jsx)("div",{})]})]}),Object(j.jsx)("div",{className:"about__photo photo-wrapper",children:Object(j.jsx)("img",{src:a.a,alt:"Photo",className:"photo"})})]})})},h=(s(40),s(35)),p=function(e){var t=e.name,s=e.handleClick;return Object(j.jsxs)("button",{className:"interaction-button",type:"button",onClick:s,children:[t,Object(j.jsx)("i",{children:Object(j.jsx)(h.a,{style:{fontSize:"20px"}})})]})},b=(s(41),function(){var e=o();return Object(j.jsx)("section",{className:"demonstration",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"demonstration__content content",children:[Object(j.jsxs)("div",{className:"content__header",children:[Object(j.jsx)("p",{className:"content__subtitle",children:"Hello, my name is"}),Object(j.jsx)("h1",{className:"content__title",children:"Bohdan Bihanskyi"})]}),Object(j.jsxs)("div",{className:"content__body",children:[Object(j.jsx)("p",{className:"content__profession",children:"and I'm a Front-end Developer"}),Object(j.jsx)("div",{className:"content__actions",children:Object(j.jsx)(p,{name:"See my works",handleClick:function(){e("/projects")}})})]})]}),Object(j.jsx)("div",{className:"demonstration__background",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{}),Object(j.jsx)("li",{})]})})]})})}),u=(s(42),function(e){var t=e.name,s=e.description,i=e.image;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"face face1",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("img",{src:i}),Object(j.jsx)("h3",{children:t})]})}),Object(j.jsx)("div",{className:"face face2",children:Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("p",{children:s})})})]})}),g=(s(43),[{id:1,name:"responsive",image:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",description:"My layout fits all devices. It responses to any screen resolution; from 320px(small mobile devices) to 1920px(widescreen monitors)."},{id:2,name:"speed",image:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true",description:"Fast loading is my main priority. I use the most updated technics for image optimization, minimization, compression, code splitting, etc."},{id:3,name:"code quality",image:"https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true",description:"Clean, scalable, structured, scalable and well organized are the main developing criteria of my code. For this purpose I use DRY Principle and the best practices for writing super readable code."}]),x=function(){return Object(j.jsx)("section",{className:"cases",children:Object(j.jsxs)("div",{className:"container cases__container",children:[Object(j.jsx)("div",{className:"cases__header",children:Object(j.jsx)("h2",{children:"Cases"})}),Object(j.jsx)("div",{className:"cases__body",children:g.map((function(e){return Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)(u,{name:e.name,description:e.description,image:e.image})},e.id)}))})]})})},O=(s(44),s(45),s(13)),v=s.n(O),f=(s(46),function(e){var t=e.isShown,s=e.hide,a=e.modalContent,n=e.headerText,r=function(e){27===e.keyCode&&t&&s()};Object(i.useEffect)((function(){return document.body.style.overflow=t?"hidden":"unset",document.addEventListener("keydown",r,!1),function(){document.removeEventListener("keydown",r,!1)}}),[t]);var o=Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("div",{className:"backdrop",onClick:s}),Object(j.jsx)("div",{"aria-modal":!0,"aria-labelledby":n,tabIndex:-1,role:"dialog",className:"modal-wrapper",children:Object(j.jsxs)("div",{className:"styled-modal",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"header__text",children:n}),Object(j.jsx)("button",{onClick:s,className:"close-button",children:Object(j.jsx)(h.b,{style:{fontSize:"35px"}})})]}),Object(j.jsx)("div",{className:"content",children:a})]})})]});return t?v.a.createPortal(o,document.body):null}),_=(s(47),s(57)),S=s.p+"static/media/EmployeersCount.b3e2efae.png",y=s.p+"static/media/MarvelService.145435fc.png",N=s.p+"static/media/toDoList.7fa1497d.png",C=s.p+"static/media/LandingPagePNG.90bd22a6.png",k=s.p+"static/media/currency-exchange.33370008.png",w=s.p+"static/media/Chat.50da6ba2.png",P=s.p+"static/media/usShipLanding.7063b899.png",M=s.p+"static/media/ratingPro.bcde0be1.png",T=s.p+"static/media/FineService.de437aeb.png",F=s.p+"static/media/ratingProProject.462f0787.png",I=[{id:Object(_.a)(),name:"RatingPro",title:"Rating Pro",type:"Freelancing platform",img:M,projectImg:F,description:"The user can send the message in the chat and receive an automatic response in 10-15 seconds. The Chuck Norris API is used to generate an automatic response, namely random jokes.",technologies:"HTML, CSS, SCSS, JavaScript, React, API, CSSTransition",tools:"Webpack, NPM, Git",url:"",source:""},{id:Object(_.a)(),name:"YouFine",title:"You Fine",type:"Freelancing platform",img:T,projectImg:T,description:"The user can send the message in the chat and receive an automatic response in 10-15 seconds. The Chuck Norris API is used to generate an automatic response, namely random jokes.",technologies:"HTML, CSS, SCSS, JavaScript, React, API, CSSTransition",tools:"Webpack, NPM, Git",url:"https://youfine.vercel.app/",source:""},{id:Object(_.a)(),name:"USShip",title:"Ship landing page",type:"Freelancing platform",img:P,projectImg:P,description:"Modern landing page",technologies:"HTML, CSS, SCSS, JavaScript",tools:"Webpack, Galp, NPM, Git",url:"https://bihanskiy.github.io/us-ship-landing/",source:"https://github.com/Bihanskiy/us-ship-landing"},{id:Object(_.a)(),name:"Chat",title:"Chat",type:"Freelancing platform",img:w,projectImg:w,description:"The user can send the message in the chat and receive an automatic response in 10-15 seconds. The Chuck Norris API is used to generate an automatic response, namely random jokes.",technologies:"HTML, CSS, SCSS, JavaScript, React, API, CSSTransition",tools:"Webpack, NPM, Git",url:"https://bihanskiy.github.io/react-chat/",source:"https://github.com/Bihanskiy/react-chat"},{id:Object(_.a)(),name:"CurrencyConverter",title:"Currency Converter",type:"Freelancing platform",img:k,projectImg:k,description:"A real time currency converter using api in react",technologies:"HTML, CSS, SCSS, JavaScript, React, API",tools:"Webpack, NPM, Git",url:"https://bihanskiy.github.io/currency-exchange-calculator/",source:"https://github.com/Bihanskiy/currency-exchange-calculator"},{id:Object(_.a)(),name:"MarvelService",title:"Marvel Service",type:"Freelancing platform",img:y,projectImg:y,description:"Marvel Service is an application where you can view Marvel characters and the comics with their participation.",technologies:"HTML, CSS, SCSS, React, React Router, Marvel Comics API",tools:"Webpack, NPM, Git, Figma",url:"https://bihanskiy.github.io/marvel-portal/",source:"https://github.com/Bihanskiy/marvel-portal"},{id:Object(_.a)(),name:"EDA",title:"EDA",type:"Freelancing platform",img:S,projectImg:S,description:"Employees data arrangement (EDA) web app. There are the features of changing and filtering the employees data in the app.",technologies:"HTML, CSS, SCSS, React",tools:"Webpack, NPM, Git",url:"https://bihanskiy.github.io/employeersCount/",source:"https://github.com/Bihanskiy/employeersCount"},{id:Object(_.a)(),name:"ToDoList",title:"ToDoList",type:"Freelancing platform",img:N,projectImg:N,description:"In my opinion, a todo application is the best practical task for beginner. It is perfect for a short code review.",technologies:"HTML, CSS, SCSS, Vanilla JS",tools:"Gulp NPM, Git",url:"https://bihanskiy.github.io/todolist-vanilaJS/",source:"https://github.com/Bihanskiy/todolist-vanilaJS"},{id:Object(_.a)(),name:"Furniture",title:"Landing Page Furniture",type:"Freelancing platform",img:C,projectImg:C,description:"This modern landing page is made of Figma layout. The possibility of usage such dynamic tools as Swiper.js and Gallery has been implemented in the project. The site is responsive as well. Interaction with the client is the main goal of the project.",technologies:"HTML, CSS, SCSS, Vanilla JS, Mustache",tools:"Gulp, NPM, Git, Figma",url:"https://bihanskiy.github.io/landing-furniture-js/",source:"https://github.com/Bihanskiy/landing-furniture-js"}],L=function(e){var t=e.id,s=Object(i.useMemo)((function(){return I.filter((function(e){return e.id===t}))[0]}),[t]);return Object(j.jsxs)("div",{className:"project",children:[Object(j.jsx)("div",{className:"project__image",children:Object(j.jsx)("img",{src:s.projectImg,alt:s.title,className:"image"})}),Object(j.jsxs)("div",{className:"project__description description",children:[Object(j.jsx)("div",{className:"description__text",children:s.description}),Object(j.jsxs)("div",{className:"description__tools tools",children:[Object(j.jsxs)("div",{className:"tools__box",children:[Object(j.jsx)("span",{className:"tools__title",children:"Technologies:"}),Object(j.jsx)("span",{className:"tools__subtitle",children:s.technologies})]}),Object(j.jsxs)("div",{className:"tools__box",children:[Object(j.jsx)("span",{className:"tools__title",children:"Tools:"}),Object(j.jsx)("span",{className:"tools__subtitle",children:s.tools})]}),s.source&&Object(j.jsxs)("div",{className:"tools__box",children:[Object(j.jsx)("span",{className:"tools__title",children:"Source:"}),Object(j.jsx)("span",{className:"tools__subtitle",children:s.source})]})]})]}),s.url&&Object(j.jsx)("div",{className:"project__actions",children:Object(j.jsx)("a",{href:s.url,target:"_blank",children:Object(j.jsx)(n.a,{name:"Visit"})})})]})},D={RatingPro:"RatingPro-card",YouFine:"YouFine-card",Chat:"Chat-card",CurrencyConverter:"CurrencyConverter-card",MarvelService:"MarvelService-card",USShip:"USShip-card",EDA:"EDA-card",ToDoList:"ToDoList-card",Furniture:"Furniture-card"},A=function(e){var t=e.id,s=e.name,i=e.title,c=e.type,a=e.image,n=d(),r=n.isShown,o=n.toggle;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"projects-item "+D[s],children:Object(j.jsxs)("a",{className:"projects-item__action",onClick:o,children:[Object(j.jsx)("div",{className:"c-wrapper"}),Object(j.jsx)("div",{className:"main-img",children:Object(j.jsx)("img",{src:a,alt:"RatingPro project image",className:"main-img__item"})}),Object(j.jsxs)("div",{className:"overlay",children:[Object(j.jsxs)("div",{className:"overlay-text",children:[Object(j.jsx)("span",{className:"project-subtitle",children:c}),Object(j.jsx)("div",{className:"project-title",children:i})]}),Object(j.jsxs)("div",{className:"project-more",children:[Object(j.jsx)("span",{className:"project-more__text",children:"see project"}),Object(j.jsx)(h.a,{style:{fontSize:"22px"}})]})]})]})}),Object(j.jsx)(f,{isShown:r,hide:o,modalContent:Object(j.jsx)(L,{id:t})})]})},R=function(){var e=o();return Object(j.jsxs)("section",{className:"projects",children:[Object(j.jsxs)("div",{className:"projects__header header-projects",children:[Object(j.jsx)("p",{className:"header-projects__subtitle",children:"some of my recent works"}),Object(j.jsx)("h2",{className:"header-projects__title",children:"Projects"})]}),Object(j.jsxs)("div",{className:"projects-wrapper",children:[I.map((function(e,t){return t<5?Object(j.jsx)(c.a.Fragment,{children:Object(j.jsx)(A,{id:e.id,name:e.name,title:e.title,type:e.type,image:e.img})},e.id):null})),Object(j.jsx)("div",{className:"projects-item",children:Object(j.jsxs)("a",{className:"projects-item__action",onClick:function(){return e("/projects")},children:[Object(j.jsxs)("span",{className:"c-wrapper__more",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{}),Object(j.jsx)("span",{})]}),Object(j.jsxs)("span",{className:"overlay__more",children:[Object(j.jsx)("span",{className:"overlay-more__text-more",children:"see all projects"}),Object(j.jsx)(h.a,{style:{fontSize:"25px"}})]})]})})]})]})};t.default=function(){return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)(b,{}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{}),Object(j.jsx)(R,{})]})}}}]);
//# sourceMappingURL=3.d93aad23.chunk.js.map