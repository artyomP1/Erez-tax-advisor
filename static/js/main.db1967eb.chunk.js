(this["webpackJsonperez-tax-advisor"]=this["webpackJsonperez-tax-advisor"]||[]).push([[0],{145:function(e,a,t){e.exports=t(256)},150:function(e,a,t){},255:function(e,a,t){},256:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(5),r=t.n(c),o=(t(150),t(11)),s=t(12),i=t(14),m=t(13),u=t(15),h=t(36),p=t(19),v=t.n(p),d=t(33),E=t(16),g=t(260),f=function(e){var a=e.ourService;return l.a.createElement("div",{className:"container-ourService"},l.a.createElement(g.a,{hoverable:!0,cover:l.a.createElement("img",{alt:"example",src:a.imgUrl})},l.a.createElement("h2",null," ",a.name)))},b=function(e){var a=e.ourServices;return l.a.createElement("ul",{className:"ourService-container"},a.map((function(e){return l.a.createElement("li",{key:e._id},l.a.createElement(E.b,{to:"/service/".concat(e._id)},l.a.createElement(f,{ourService:e})))})))},y=t(35),O=(t(87),t(258)),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={name:"",tel:"",message:""},t.handleChange=t.handleChange.bind(Object(y.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(y.a)(t)),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("An essay was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){var e=O.a.Option;return l.a.createElement("form",{className:"main-form align-center flex column",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"main-inputs flex"},l.a.createElement("div",{className:"flex column space-between"},l.a.createElement("input",{placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df",value:this.state.tel,onChange:this.handleChange}),l.a.createElement("input",{placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email",value:this.state.tel,onChange:this.handleChange})),l.a.createElement("div",{className:"textarea flex column space-between"},l.a.createElement(O.a,{mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},l.a.createElement(e,{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),l.a.createElement(e,{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),l.a.createElement(e,{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),l.a.createElement(e,{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),l.a.createElement(e,{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),l.a.createElement(e,{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),l.a.createElement(e,{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),l.a.createElement("textarea",{placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50",value:this.state.message,onChange:this.handleChange}))),l.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"}))}}]),a}(l.a.Component),C={query:function(){return Promise.resolve(x)}};var x=[{_id:"5a56640269f443a5d64b32ca",name:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1 \u05dc\u05e9\u05db\u05d9\u05e8\u05d9\u05dd",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578159227/b44vtbz3lvep7kvuwtou.jpg"},{_id:"5a5664025f6ae9aa24a99fde",name:"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1577873365/dln0vf5es7qhy5ifv8uk.jpg"},{_id:"5a56640252d6acddd183d319",name:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578159336/c8itpj7wi1xltqh2skxk.jpg"},{_id:"5a1110252d6acddd183d319",name:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578158617/xjgy0zrh7kqxbfdnqxqs.jpg"},{_id:"5a566402ed1cf3412345674d",name:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578159686/jhdvdjguhmqnv1spydo6.jpg"},{_id:"5a566402ed1cf349f0b47b4d",name:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578159573/acpujepzg4dsoetva2pm.jpg"},{_id:"5a566402ed1cf349f0b4123",name:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df",imgUrl:"https://res.cloudinary.com/artyompogosov/image/upload/v1578124570/s6r9xg11gwrnsqxkiyes.jpg"}],S=t(259),w=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={ourServices:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(C.query());case 2:e=a.sent,this.setState({ourServices:e}),console.log(e);case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.ourServices;return l.a.createElement("section",null,l.a.createElement("div",null,l.a.createElement(S.a,{autoplay:!0},l.a.createElement("div",null,l.a.createElement("img",{className:"img-carousel",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578156229/pkwxnjnca3ozf7rgkkpt.jpg",alt:""})),l.a.createElement("div",null,l.a.createElement("img",{className:"img-carousel",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578156840/poys6igemn36h8achd8x.jpg",alt:""})),l.a.createElement("div",null,l.a.createElement("img",{className:"img-carousel",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578156292/saswokwfqyboapxhd7ad.jpg",alt:""})))),l.a.createElement("div",{className:"about-erez flex column justify-center align-center"},l.a.createElement("h2",{className:""},"\u05de\u05e9\u05e8\u05d3 \u05d0\u05e8\u05d6 \u05e6\u05d5\u05e8 -\u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd"),l.a.createElement("p",null,"\u05de\u05e9\u05e8\u05d3 \u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd \u05e0\u05d5\u05ea\u05df \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea, \u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8 \u05d5\u05d9\u05d9\u05e2\u05d5\u05e5 \u05de\u05e1 \u05db\u05d1\u05e8 15 \u05e9\u05e0\u05d4, \u05d4\u05de\u05e9\u05e8\u05d3 \u05e0\u05d5\u05ea\u05df \u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05dc\u05d7\u05d1\u05e8\u05d5\u05ea\u05ea \u05e2\u05e6\u05de\u05d0\u05d9\u05dd \u05d5\u05e9\u05db\u05d9\u05e8\u05d9\u05dd\u05ea\u05d5\u05da \u05d4\u05e7\u05d3\u05e4\u05d4 \u05e2\u05dc \u05d9\u05d7\u05e1 \u05d0\u05d9\u05e9\u05d9, \u05de\u05e7\u05e6\u05d5\u05e2\u05d9\u05d5\u05ea \u05d5\u05d0\u05db\u05e4\u05ea\u05d9\u05d5\u05ea.")),l.a.createElement("div",{className:"services-list"},l.a.createElement("h1",null,"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e9\u05dc\u05e0\u05d5"),l.a.createElement(b,{ourServices:e})),l.a.createElement("div",{className:"contact-us"},l.a.createElement("h2",null,"\u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d1\u05d9\u05d9\u05e2\u05d5\u05e5 \u05dc\u05dc\u05d0 \u05e2\u05dc\u05d5\u05ea ",l.a.createElement("span",null,"?")),l.a.createElement("h3",null," \u05d7\u05d9\u05d9\u05d2\u05d5 052-603-6402 \u05d0\u05d5 \u05d4\u05e9\u05d0\u05d9\u05e8\u05d5 \u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05db\u05dd \u05d1\u05d4\u05e7\u05d3\u05dd "),l.a.createElement(j,null)))}}]),a}(l.a.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("h1",null,"About")}}]),a}(l.a.Component),k=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={ourServices:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.awrap(C.query());case 2:e=a.sent,this.setState({ourServices:e}),console.log(e);case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.ourServices;return l.a.createElement("section",null,l.a.createElement("h1",null,"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd \u05e9\u05dc\u05e0\u05d5"),l.a.createElement(b,{ourServices:e}))}}]),a}(l.a.Component),U=function(e){return{type:"SET_CURR_OUR_SERVICE",ourService:e}},M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={ourService:{}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.props.match.params._id,a.next=3,v.a.awrap(this.props.loadCurrService(e));case 3:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this.props.ourService;return e?l.a.createElement("section",null,l.a.createElement("h1",null,e.name)):l.a.createElement("div",null,l.a.createElement("h1",null,"No service was found"))}}]),a}(n.Component),q={loadCurrService:function(e){return function(a){var t;return v.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.awrap(C.getServiceById(e));case 2:return t=n.sent,n.abrupt("return",a(U(t)));case 4:case"end":return n.stop()}}))}}},z=Object(d.b)((function(e){return{ourService:e.OurService.currOurService}}),q)(M),A=t(138),_=t.n(A),D=function(e){var a=e.text;return l.a.createElement("div",null,a)},R=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"map"},l.a.createElement(_.a,{bootstrapURLKeys:{key:"AIzaSyDjhCMNpQUrXmYWvSQ28HKTveqFiKW5Tdc"},defaultCenter:this.props.center,defaultZoom:this.props.zoom},l.a.createElement(D,{lat:32.091124,lng:34.815844,text:"My Marker"})))}}]),a}(n.Component);R.defaultProps={center:{lat:32.091124,lng:34.815844},zoom:15};var T=R,I=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={name:"",tel:"",message:""},t.handleChange=t.handleChange.bind(Object(y.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(y.a)(t)),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("An essay was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){var e=O.a.Option;return l.a.createElement("section",null,l.a.createElement("img",{className:"contact-img",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578227821/kovad6bxsxugwfwtryhl.jpg"}),l.a.createElement("div",{className:"contact-container-page flex space-around"},l.a.createElement("div",null,l.a.createElement("h3",null,"\u05e4\u05e8\u05d8\u05d9 \u05d4\u05d4\u05ea\u05e7\u05e9\u05e8\u05d5\u05ea"),l.a.createElement("p",null,"\u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05de\u05e9\u05e8\u05d3: \u05e1\u05d8\u05e8\u05d5\u05de\u05d4 5, \u05e8\u05de\u05ea \u05d2\u05df 5255205 "),l.a.createElement("p",null,"\u05e0\u05d9\u05d9\u05d3: 052-603-6402"),l.a.createElement("p",null,'\u05d3\u05d5\u05d0"\u05dc: erez.tax@gmail.com ')),l.a.createElement("form",{className:"asaid-form align-center flex column",onSubmit:this.handleSubmit,action:"https://formsubmit.co/artyomp@outlook.com",method:"POST"},l.a.createElement("h3",null,"\u05de\u05dc\u05d0\u05d5 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd"),l.a.createElement("div",{className:"flex column space-between"},l.a.createElement("input",{name:"\u05e9\u05dd",placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{name:"\u05d8\u05dc\u05e4\u05d5\u05df",placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df",value:this.state.tel,onChange:this.handleChange}),l.a.createElement("input",{name:"\u05de\u05d9\u05d9\u05dc",placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email",value:this.state.tel,onChange:this.handleChange}),l.a.createElement(O.a,{name:"\u05e0\u05d5\u05e9\u05d0",mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},l.a.createElement(e,{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),l.a.createElement(e,{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),l.a.createElement(e,{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),l.a.createElement(e,{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),l.a.createElement(e,{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),l.a.createElement(e,{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),l.a.createElement(e,{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),l.a.createElement("textarea",{name:"\u05d4\u05d5\u05d3\u05e2\u05d4",placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50",value:this.state.message,onChange:this.handleChange})),l.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"})),l.a.createElement(T,null)))}}]),a}(l.a.Component),P=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={isOpenContactUs:!1},t.getOpenContactUs=function(){t.setState({isOpenContactUs:!t.state.isOpenContactUs})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e,a=O.a.Option,t=this.state.isOpenContactUs,n=this.state.isOpenContactUs?"offcanvas-aside offcanvas-aside-open":"offcanvas-aside";return e=t?l.a.createElement("i",{className:"fa fa-times"}):l.a.createElement("i",{className:"fa comment fa-comment","aria-hidden":"true"}),l.a.createElement("section",null,l.a.createElement("div",{className:"offcanvas-btn",onClick:this.getOpenContactUs},e),l.a.createElement("div",{className:n},l.a.createElement("section",{id:"contact"},l.a.createElement("h2",null,"\u05de\u05dc\u05d0\u05d5 \u05d0\u05ea \u05d4\u05d8\u05d5\u05e4\u05e1 \u05d5\u05e0\u05d7\u05d6\u05d5\u05e8 \u05d0\u05dc\u05d9\u05da \u05d1\u05d4\u05e7\u05d3\u05dd"),l.a.createElement("form",{className:"asaid-form align-center flex column",onSubmit:this.handleSubmit,action:"https://formsubmit.co/artyomp@outlook.com",method:"POST"},l.a.createElement("div",{className:"flex column space-between"},l.a.createElement("input",{name:"\u05e9\u05dd",placeholder:"* \u05e9\u05dd \u05de\u05dc\u05d0",value:this.state.name,onChange:this.handleChange}),l.a.createElement("input",{name:"\u05d8\u05dc\u05e4\u05d5\u05df",placeholder:"* \u05d8\u05dc\u05e4\u05d5\u05df",value:this.state.tel,onChange:this.handleChange}),l.a.createElement("input",{name:"\u05de\u05d9\u05d9\u05dc",placeholder:"* \u05de\u05d9\u05d9\u05dc",type:"email",value:this.state.tel,onChange:this.handleChange}),l.a.createElement(O.a,{name:"\u05e0\u05d5\u05e9\u05d0",mode:"multiple",style:{width:"100%"},placeholder:"\u05d1\u05d7\u05e8 \u05e0\u05d5\u05e9\u05d0"},l.a.createElement(a,{value:"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"},"\u05d4\u05e0\u05d4\u05dc\u05ea \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea"),l.a.createElement(a,{value:"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"},"\u05d7\u05e9\u05d1\u05d5\u05ea \u05e9\u05db\u05e8"),l.a.createElement(a,{value:"\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05d5\u05df"},"\u05d4\u05e6\u05d4\u05e8\u05d5\u05ea \u05d4\u05d5\u05df"),l.a.createElement(a,{value:"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"},"\u05d4\u05d7\u05d6\u05e8\u05d9 \u05de\u05e1"),l.a.createElement(a,{value:"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"},"\u05ea\u05db\u05e0\u05d5\u05df \u05de\u05e1"),l.a.createElement(a,{value:"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"},"\u05d2\u05d9\u05d5\u05e1 \u05d4\u05d5\u05df"),l.a.createElement(a,{value:"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"},"\u05d3\u05d5\u05d7\u05d5\u05ea \u05e9\u05e0\u05ea\u05d9\u05d9\u05dd")),l.a.createElement("textarea",{name:"\u05d4\u05d5\u05d3\u05e2\u05d4",placeholder:"\u05ea\u05d5\u05db\u05df \u05d4\u05e4\u05e0\u05d9\u05d9\u05d4",rows:"6",cols:"50",value:this.state.message,onChange:this.handleChange})),l.a.createElement("input",{className:"send-ms-btn",type:"submit",value:"\u05e9\u05dc\u05d7"}))))," ")}}]),a}(l.a.Component),W=t(139),B=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={isOpenMenu:!1},t.getOpenMenu=function(){t.setState({isOpenMenu:!t.state.isOpenMenu}),console.log(t.state.isOpenMenu)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.isOpenMenu?"openMenu screen":"screen";return l.a.createElement("section",{className:"header flex space-between"},l.a.createElement("div",null,l.a.createElement(E.b,{to:"/"},l.a.createElement("img",{className:"header-logo",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578216837/bcehmx06woctjeqhbo1h.png"}))),l.a.createElement("i",Object(W.a)({className:e,onClick:this.getOpenMenu},"className","fa fa-bars")),l.a.createElement("div",{className:e,onClick:this.getOpenMenu}),l.a.createElement("div",{className:"nav-bar flex space-around"},l.a.createElement(E.b,{onClick:this.getOpenMenu,to:"/"},"\u05e8\u05d0\u05e9\u05d9"),l.a.createElement(E.b,{onClick:this.getOpenMenu,to:"/about"},"\u05d0\u05d5\u05d3\u05d5\u05ea"),l.a.createElement(E.b,{onClick:this.getOpenMenu,to:"/ourServices"},"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd"),l.a.createElement(E.b,{onClick:this.getOpenMenu,to:"/ourServices"},"\u05de\u05d9\u05d3\u05e2 \u05de\u05e7\u05e6\u05d5\u05e2\u05d9"),l.a.createElement(E.b,{onClick:this.getOpenMenu,to:"/contactUs"},"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8")))}}]),a}(l.a.Component);function K(){return l.a.createElement("section",{className:"footer flex column space-around"},l.a.createElement("section",{className:"footer-details flex space-between"},l.a.createElement("div",{className:"flex  align-center"},l.a.createElement("img",{className:"footer-logo",src:"https://res.cloudinary.com/artyompogosov/image/upload/v1578217201/lh8zckfvjyil7jeqz1yo.png"})),l.a.createElement("div",{className:"flex column space-between"},l.a.createElement("div",{className:"office-details flex column align-center justify-center"},l.a.createElement("h5",null,".5255205 ,\u05db\u05ea\u05d5\u05d1\u05ea\u05e0\u05d5: \u05e1\u05d8\u05e8\u05d5\u05de\u05d4 5, \u05e8\u05de\u05ea \u05d2\u05df "),l.a.createElement("h5",null,"\u05d8\u05dc\u05e4\u05d5\u05df: 052-603-6402 "),l.a.createElement("h5",null,"erez.tax@gmail.com :\u05de\u05d9\u05d9\u05dc")),l.a.createElement("div",null,l.a.createElement("div",{className:"flex pointer"},l.a.createElement(E.b,{to:"/"},"\u05e8\u05d0\u05e9\u05d9 |"),l.a.createElement(E.b,{to:"/about"},"\u05d0\u05d5\u05d3\u05d5\u05ea |"),l.a.createElement(E.b,{to:"/about"},"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9\u05dd |"),l.a.createElement(E.b,{to:"/about"},"\u05de\u05d9\u05d3\u05e2 \u05de\u05e7\u05e6\u05d5\u05e2\u05d9  |"),l.a.createElement(E.b,{to:"/contactUs"},"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8")))),l.a.createElement(T,null)),l.a.createElement("div",{className:"flex space-between"},l.a.createElement("h5",null,"\u05d6\u05db\u05d5\u05d9\u05d5\u05ea \u05d9\u05d5\u05e6\u05e8\u05d9\u05dd \xa9 2019 \u05d0\u05e8\u05d6 \u05e6\u05d5\u05e8 - \u05d9\u05d5\u05e2\u05e5 \u05de\u05e1 \u05d5\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05dd "),l.a.createElement("h5",null,"\u05d4\u05d0\u05ea\u05e8 \u05e4\u05d5\u05ea\u05d7 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05d0\u05e8\u05d8\u05d9\u05d5\u05dd \u05e4\u05d5\u05d2\u05d5\u05e1\u05d5\u05d1 ")))}t(255);var J=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(P,null),l.a.createElement("header",{className:"App-header"},l.a.createElement(B,null)),l.a.createElement(h.c,{className:"main"},l.a.createElement(h.a,{exact:!0,path:"/",component:w}),l.a.createElement(h.a,{exact:!0,path:"/about",component:N}),l.a.createElement(h.a,{exact:!0,path:"/ourServices",component:k}),l.a.createElement(h.a,{exact:!0,path:"/ourServices/:id",component:z}),l.a.createElement(h.a,{exact:!0,path:"/contactUs",component:I})),l.a.createElement("section",{className:"App-footer"},l.a.createElement(K,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(21),F=t(56),H=t(140),L=Object(F.c)(Object(F.a)(H.a)),V=Object(Q.a)();r.a.render(l.a.createElement(d.a,{store:L},l.a.createElement(E.a,{history:V},l.a.createElement(J,{id:"App"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[145,1,2]]]);
//# sourceMappingURL=main.db1967eb.chunk.js.map