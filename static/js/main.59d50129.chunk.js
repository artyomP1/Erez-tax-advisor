(this["webpackJsonperez-tax-advisor"]=this["webpackJsonperez-tax-advisor"]||[]).push([[0],{145:function(e,a,t){e.exports=t(255)},150:function(e,a,t){},254:function(e,a,t){},255:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(2),r=t.n(l),o=(t(150),t(7)),s=t(8),i=t(10),m=t(9),u=t(11),p=t(30),E=t(15),v=t.n(E),h=t(29),d=t(5),f=function(e){var a=e.ourService;return c.a.createElement("div",{className:"container-ourService"},c.a.createElement("img",{className:"service-img",src:a.imgUrl,alt:""}),c.a.createElement("div",{className:"ourService-details"},c.a.createElement("h2",null," ",a.name),c.a.createElement("p",null,a.text.mainTxt)))},b=function(e){var a=e.ourServices;return c.a.createElement("ul",{className:"ourService-container"},a.map((function(e){return c.a.createElement("li",{key:e._id},c.a.createElement(d.b,{to:"/service/".concat(e._id)},c.a.createElement(f,{ourService:e})))})))},g=(t(97),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("form",{className:"main-form align-center flex column"},c.a.createElement("div",{className:"main-inputs flex"},c.a.createElement("div",{className:"flex column space-between"},c.a.createElement("input",{name:"name",placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0"}),c.a.createElement("input",{name:"phone",placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df"}),c.a.createElement("input",{name:"email",placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email"})),c.a.createElement("div",{className:"textarea space-between flex column "},c.a.createElement("select",{name:"subject",mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},c.a.createElement("option",{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),c.a.createElement("option",{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),c.a.createElement("option",{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),c.a.createElement("option",{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),c.a.createElement("option",{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),c.a.createElement("textarea",{name:"msg",placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50"}))),c.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"})))}}]),a}(c.a.Component)),O=t(63),y=t.n(O);y.a.defaults.withCredentials=!0;var j={getServiceById:function(e){return y.a.get("".concat(N,"/").concat(e)).then((function(e){return e.data}))},query:function(){return y.a.get(N).then((function(e){return e.data}))}},N="/api/ourServices";var x=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={ourServices:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(j.query());case 2:e=a.sent,this.setState({ourServices:e}),console.log(e);case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.ourServices;return c.a.createElement("section",null,c.a.createElement("div",null,c.a.createElement("img",{className:"main-img",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1580384841/is52lb4lcwkzb5texhey.jpg"})),c.a.createElement("div",{className:"about-erez flex column justify-center align-center"},c.a.createElement("h2",{className:""},"\u05de\u05e9\u05e8\u05d3 \u05d0\u05e8\u05d6 \u05e6\u05d5\u05e8 -\u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd"),c.a.createElement("p",null,"\u05de\u05e9\u05e8\u05d3 \u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd \u05e0\u05d5\u05ea\u05df \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea, \u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8 \u05d5\u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05db\u05d1\u05e8 15 \u05e9\u05e0\u05d4, \u05d4\u05de\u05e9\u05e8\u05d3 \u05e0\u05d5\u05ea\u05df \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea, \u05e2\u05e6\u05de\u05d0\u05d9\u05dd \u05d5\u05e9\u05db\u05d9\u05e8\u05d9\u05dd \u05ea\u05d5\u05da \u05d4\u05e7\u05d3\u05e4\u05d4 \u05e2\u05dc \u05d9\u05d7\u05e1 \u05d0\u05d9\u05e9\u05d9, \u05de\u05e7\u05e6\u05d5\u05e2\u05d9\u05d5\u05ea \u05d5\u05d0\u05db\u05e4\u05ea\u05d9\u05d5\u05ea."),c.a.createElement("ul",{className:"top-serveice flex"},c.a.createElement("li",null,c.a.createElement("i",{className:"fa fa-certificate"}),c.a.createElement("span",null,"\u05de\u05e7\u05e6\u05d5\u05e2\u05d9\u05d5\u05ea")),c.a.createElement("li",null," ",c.a.createElement("i",{className:"fa fa-handshake-o"}),c.a.createElement("span",null,"\u05e9\u05d9\u05e8\u05d5\u05ea \u05d0\u05d9\u05e9\u05d9")," "),c.a.createElement("li",null," ",c.a.createElement("i",{className:"fa fa-file-image-o"}),c.a.createElement("span",null,"\u05e9\u05e7\u05d9\u05e4\u05d5\u05ea")),c.a.createElement("li",null," ",c.a.createElement("i",{className:"fa fa-hourglass-start"}),c.a.createElement("span",null,"\u05d6\u05de\u05d9\u05e0\u05d5\u05ea")))),c.a.createElement("div",{className:"services-list"},c.a.createElement("h1",null,"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d4\u05de\u05e9\u05e8\u05d3"),c.a.createElement(b,{ourServices:e})),c.a.createElement("div",{className:"contact-us"},c.a.createElement("h2",null,"\u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d1\u05d9\u05d9\u05e2\u05d5\u05e5 \u05dc\u05dc\u05d0 \u05e2\u05dc\u05d5\u05ea ",c.a.createElement("span",null,"?")),c.a.createElement("h3",null," \u05d7\u05d9\u05d9\u05d2\u05d5 052-603-6402 \u05d0\u05d5 \u05d4\u05e9\u05d0\u05d9\u05e8\u05d5 \u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05db\u05dd \u05d1\u05d4\u05e7\u05d3\u05dd "),c.a.createElement(g,null)))}}]),a}(c.a.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement(g,null))}}]),a}(c.a.Component),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={ourServices:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(j.query());case 2:e=a.sent,this.setState({ourServices:e}),console.log(e);case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.ourServices;return c.a.createElement("section",null,c.a.createElement("h1",null,"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e9\u05dc\u05e0\u05d5"),c.a.createElement(b,{ourServices:e}))}}]),a}(c.a.Component),k=function(e){return{type:"SET_CURR_OUR_SERVICE",ourService:e}},C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={ourService:{}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(this.props.match.params);case 2:return e=a.sent,console.log(e),a.next=6,v.a.awrap(this.props.loadCurrService(e.id));case 6:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.ourService;return e?c.a.createElement("section",null,c.a.createElement("div",{className:"title-img"},c.a.createElement("img",{className:"service-page-img",src:e.imgPageUrl}),c.a.createElement("h1",null,e.name)),c.a.createElement("h2",{className:"page-title"},e.name,"-"),c.a.createElement("section",{className:"ourServicePage"},e.text.mainTxt.map((function(e){return c.a.createElement("p",{key:e.idx},e,".")})),e.text.bodyTxt.map((function(e){return c.a.createElement("div",null,c.a.createElement("p",null,e.header),c.a.createElement("ul",null,e.body.map((function(e){return c.a.createElement("li",{className:"info-service-list",key:e.idx},e,".")}))),c.a.createElement("p",null,e.moreTxt,"."))}))),c.a.createElement("div",{className:"form-service-page flex column"},c.a.createElement("h2",null,"\u05e8\u05d5\u05e6\u05d9\u05dd \u05dc\u05e9\u05de\u05d5\u05e2 \u05e2\u05d5\u05d3 \u05e2\u05dc ",e.name,"?"),c.a.createElement("h3",null," \u05d7\u05d9\u05d9\u05d2\u05d5 052-603-6402 \u05d0\u05d5 \u05d4\u05e9\u05d0\u05d9\u05e8\u05d5 \u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05db\u05dd \u05d1\u05d4\u05e7\u05d3\u05dd "),c.a.createElement(g,null))):c.a.createElement("div",null,c.a.createElement("h1",null,"No service was found"))}}]),a}(n.Component),M={loadCurrService:function(e){return function(a){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(j.getServiceById(e));case 2:return t=n.sent,console.log(t),n.abrupt("return",a(k(t)));case 5:case"end":return n.stop()}}))}}},U=Object(h.b)((function(e){return{ourService:e.ourService.currOurService}}),M)(C),I=t(48),z=t(132),A=t.n(z),R=function(e){var a=e.text;return c.a.createElement("div",null,a)},T=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"map"},c.a.createElement(A.a,{bootstrapURLKeys:{key:"AIzaSyDjhCMNpQUrXmYWvSQ28HKTveqFiKW5Tdc"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},c.a.createElement(R,{lat:32.091124,lng:34.815844,text:"My Marker"})))}}]),a}(n.Component);T.defaultProps={center:{lat:32.091124,lng:34.815844},zoom:15};var q=T,_=t(31),D=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={name:"",tel:"",message:""},t.handleChange=t.handleChange.bind(Object(I.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(I.a)(t)),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("An essay was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("img",{className:"contact-img",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578227821/kovad6bxsxugwfwtryhl.jpg"}),c.a.createElement("div",{className:"contact-container-page flex space-around"},c.a.createElement("div",null,c.a.createElement("h3",null,"\u05e4\u05e8\u05d8\u05d9 \u05d4\u05d4\u05ea\u05e7\u05e9\u05e8\u05d5\u05ea"),c.a.createElement("p",null,"\u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05de\u05e9\u05e8\u05d3: \u05e1\u05d8\u05e8\u05d5\u05de\u05d4 5, \u05e8\u05de\u05ea \u05d2\u05df 5255205 "),c.a.createElement("p",null,"\u05e0\u05d9\u05d9\u05d3: 052-603-6402"),c.a.createElement("p",null,'\u05d3\u05d5\u05d0"\u05dc: erez.tax@gmail.com '),c.a.createElement("div",null,c.a.createElement("div",{className:"social-icons flex"},c.a.createElement(_.SocialIcon,{className:"social facebook",url:"https://www.facebook.com/pogosov"}),c.a.createElement(_.SocialIcon,{className:"social linkedin",url:"https://www.linkedin.com/in/artyom-p"}),c.a.createElement(_.SocialIcon,{className:"social whatsapp",url:"https://api.whatsapp.com/send?phone=972526036402&text=%20test"})))),c.a.createElement("div",null,c.a.createElement("h3",null,"\u05de\u05dc\u05d0\u05d5 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd"),c.a.createElement(g,null))),c.a.createElement("div",{className:"map-container flex"},c.a.createElement(q,{className:"map flex"})))}}]),a}(c.a.Component),V=t(256),F=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isOpenContactUs:!1},t.getOpenContactUs=function(){t.setState({isOpenContactUs:!t.state.isOpenContactUs})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){V.a.Option;var e,a=this.state.isOpenContactUs,t=this.state.isOpenContactUs?"offcanvas-aside offcanvas-aside-open":"offcanvas-aside";return e=a?c.a.createElement("i",{className:"fa fa-times"}):c.a.createElement("i",{className:"fa comment fa-comment","aria-hidden":"true"}),c.a.createElement("section",null,c.a.createElement("div",{className:"offcanvas-btn",onClick:this.getOpenContactUs},e),c.a.createElement("div",{className:t},c.a.createElement("section",{id:"contact"},c.a.createElement("h2",null,"\u05de\u05dc\u05d0\u05d5 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd"),c.a.createElement("form",{className:"asaid-form align-center flex column",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"flex column space-between"},c.a.createElement("input",{name:"name",placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0",value:this.state.name,onChange:this.handleChange,rules:"required|max:255"}),c.a.createElement("input",{name:"phone",placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df",value:this.state.tel,onChange:this.handleChange,rules:"required|max:255"}),c.a.createElement("input",{name:"email",placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email",value:this.state.tel,onChange:this.handleChange,rules:"required"}),c.a.createElement("select",{name:"subject",mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},c.a.createElement("option",{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),c.a.createElement("option",{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),c.a.createElement("option",{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),c.a.createElement("option",{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),c.a.createElement("option",{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),c.a.createElement("textarea",{name:"msg",placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50",value:this.state.message,onChange:this.handleChange})),c.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"}))))," ")}}]),a}(c.a.Component),B=t(62),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isOpenMenu:!1},t.getOpenMenu=function(){t.setState({isOpenMenu:!t.state.isOpenMenu}),console.log(t.state.isOpenMenu)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.isOpenMenu?"openMenu screen":"screen";return c.a.createElement("section",{className:"header flex space-between"},c.a.createElement("div",null,c.a.createElement(d.b,{to:"/"},c.a.createElement("img",{className:"header-logo",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578216837/bcehmx06woctjeqhbo1h.png"}))),c.a.createElement("i",Object(B.a)({className:e,onClick:this.getOpenMenu},"className","fa fa-bars")),c.a.createElement("div",{className:e,onClick:this.getOpenMenu}),c.a.createElement("div",{className:"nav-bar flex"},c.a.createElement("div",{className:"nav-bar-links flex space-around"},c.a.createElement("div",null,c.a.createElement("img",{className:"header-logo",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578216837/bcehmx06woctjeqhbo1h.png"})),c.a.createElement(d.b,{onClick:this.getOpenMenu,to:"/"},"\u05e8\u05d0\u05e9\u05d9"),c.a.createElement(d.b,{onClick:this.getOpenMenu,to:"/about"},"\u05d0\u05d5\u05d3\u05d5\u05ea"),c.a.createElement(d.b,{onClick:this.getOpenMenu,to:"/ourServices"},"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"),c.a.createElement(d.b,{onClick:this.getOpenMenu,to:"/ourServices"},"\u05de\u05d9\u05d3\u05e2 \u05de\u05e7\u05e6\u05d5\u05e2\u05d9"),c.a.createElement(d.b,{onClick:this.getOpenMenu,to:"/contactUs"},"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8"))))}}]),a}(c.a.Component),P=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={isVisible:!1},t.hendelFormModal=function(){t.setState({isVisible:!t.state.isVisible})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isVisible:!0})}),3e3)}},{key:"render",value:function(){var e=this.state.isVisible,a=e?"form-modal open ":"form-modal",t=e?"modal-open  screen":"form-modal";return c.a.createElement("section",null,c.a.createElement("div",{className:t,onClick:this.hendelFormModal}),e?c.a.createElement("div",{className:a},c.a.createElement("h2",null,"\u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d1\u05d9\u05d9\u05e2\u05d5\u05e5 \u05dc\u05dc\u05d0 \u05e2\u05dc\u05d5\u05ea ?"),c.a.createElement("h3",null,"\u05d4\u05e9\u05d0\u05d9\u05e8\u05d5 \u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05db\u05dd \u05d1\u05d4\u05e7\u05d3\u05dd"),c.a.createElement("section",{className:"kwes-form"},c.a.createElement("form",{className:"main-form align-center flex column",method:"POST",action:"https://kwes.io/api/foreign/forms/IozFD5nHiHKFGQD5LtFR"},c.a.createElement("div",{className:"main-inputs flex"},c.a.createElement("div",{className:"flex column "},c.a.createElement("input",{name:"name",placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0"}),c.a.createElement("input",{name:"phone",placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df"}),c.a.createElement("input",{name:"email",placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email"})),c.a.createElement("div",{className:"textarea space-between flex column "},c.a.createElement("select",{name:"subject",mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},c.a.createElement("option",{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),c.a.createElement("option",{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),c.a.createElement("option",{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),c.a.createElement("option",{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),c.a.createElement("option",{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),c.a.createElement("option",{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),c.a.createElement("textarea",{name:"msg",placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50"}))),c.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"})))):c.a.createElement("div",null))}}]),a}(c.a.Component);function W(){return c.a.createElement("section",{className:"footer flex column space-around"},c.a.createElement("section",{className:"footer-details flex space-between"},c.a.createElement("div",{className:"flex column space-between"},c.a.createElement("div",{className:"office-details flex column align-start justify-center"},c.a.createElement("h5",null," \u05db\u05ea\u05d5\u05d1\u05ea\u05e0\u05d5: \u05e1\u05d8\u05e8\u05d5\u05de\u05d4 5, \u05e8\u05de\u05ea \u05d2\u05df 5255205"),c.a.createElement("h5",null,"\u05d8\u05dc\u05e4\u05d5\u05df: 052-603-6402 "),c.a.createElement("h5",null,' \u05d3\u05d5"\u05d0\u05dc: erez.tax@gmail.com '))),c.a.createElement("div",{className:"website-map flex  pointer"},c.a.createElement("div",{className:"flex column pointer"},c.a.createElement(d.b,{to:"/"},"\u05e8\u05d0\u05e9\u05d9"),c.a.createElement(d.b,{to:"/about"},"\u05d0\u05d5\u05d3\u05d5\u05ea"),c.a.createElement(d.b,{to:"/contactUs"},"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8")),c.a.createElement("div",{className:"flex column pointer"},c.a.createElement(d.b,{to:"/service/5a56640269f443a5d64b32ca"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1 "),c.a.createElement(d.b,{to:"/service/5a5664025f6ae9aa24a99fde"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df "),c.a.createElement(d.b,{to:"/service/5a56640252d6acddd183d319"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea "),c.a.createElement(d.b,{to:"/service/5a1110252d6acddd183d319"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1 "),c.a.createElement(d.b,{to:"/service/5a566402ed1cf3412345674d"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),c.a.createElement(d.b,{to:"/service/5a566402ed1cf349f0b47b4d"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"),c.a.createElement(d.b,{to:"/service/5a566402ed1cf349f0b4123"}," \u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"))),c.a.createElement("div",{className:"flex align-start"},c.a.createElement("img",{className:"footer-logo",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578217201/lh8zckfvjyil7jeqz1yo.png"}))),c.a.createElement("div",{className:"social-icons flex"},c.a.createElement(_.SocialIcon,{className:"social facebook",url:"https://www.facebook.com/pogosov"}),c.a.createElement(_.SocialIcon,{className:"social linkedin",url:"https://www.linkedin.com/in/artyom-p"}),c.a.createElement(_.SocialIcon,{className:"social whatsapp",url:"https://api.whatsapp.com/send?phone=972526036402&text=%20test"})),c.a.createElement("div",{className:"flex  space-between"},c.a.createElement("h5",null,"\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d9\u05d5\u05e6\u05e8\u05d9\u05dd \xa9 2019 \u05d0\u05e8\u05d6 \u05e6\u05d5\u05e8 - \u05d9\u05d5\u05e2\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd "),c.a.createElement("h5",null,"\u05d4\u05d0\u05ea\u05e8 \u05e4\u05d5\u05ea\u05d7 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05d0\u05e8\u05d8\u05d9\u05d5\u05dd \u05e4\u05d5\u05d2\u05d5\u05e1\u05d5\u05d1 ")))}t(254);var H=Object(p.f)((function(e){var a=e.history;return Object(n.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null})),Q=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(F,null),c.a.createElement("header",{className:"App-header"},c.a.createElement(K,null)),c.a.createElement(P,null),c.a.createElement(H,null),c.a.createElement(p.c,{className:"main"},c.a.createElement(p.a,{exact:!0,path:"/",component:x}),c.a.createElement(p.a,{exact:!0,path:"/about",component:w}),c.a.createElement(p.a,{exact:!0,path:"/service",component:S}),c.a.createElement(p.a,{exact:!0,path:"/service/:id",component:U}),c.a.createElement(p.a,{exact:!0,path:"/contactUs",component:D})),c.a.createElement("section",{className:"App-footer"},c.a.createElement(W,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(17),L=t(36),G=t(142),X=t(93),Y={currOurService:null,ourServices:[]};var Z=Object(L.c)({ourService:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURR_OUR_SERVICE":return Object(X.a)({},e,{currOurService:a.ourService});case"SET_OUR_SERVICES":return Object(X.a)({},e,{ourServices:a.ourServices});default:return e}}}),$=Object(L.d)(Z,Object(L.a)(G.a)),ee=Object(J.a)();r.a.render(c.a.createElement(h.a,{store:$},c.a.createElement(d.a,{history:ee},c.a.createElement(Q,{id:"App"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.59d50129.chunk.js.map