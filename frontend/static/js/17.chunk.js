(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{435:function(e,t,a){"use strict";var n=a(32),c=a(1);t.a=function(e,t){var a=Object(c.useState)(e),r=Object(n.a)(a,2),i=r[0],l=r[1];return Object(c.useEffect)(function(a){var n=setTimeout(function(){l(e)},t);return function(){return clearTimeout(n)}},[e]),i}},480:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(26),i=a(134);a(133);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(i.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},481:function(e,t,a){"use strict";var n=a(32),c=a(1),r=a.n(c),i=a(3),l=a(11),o=a(522),s=a(26);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,E=e.onChange,O=Object(s.b)().t,d=Object(c.useState)([]),b=Object(n.a)(d,2),f=b[0],g=b[1],N="ltr"===O("DIRECTION")?"left":"right",T="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!u&&(u=o.isMobile?l.u.WIDTH_MOBILE:l.u.WIDTH);var t=Math.ceil(u/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<u&&(1===n&&(c=m<u?m:u),c===m&&(n=m-u+1<1?1:m-u+1));for(var r=[],i=n;i<=c;i++)r.push(i);g(r)},[a,m,u]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(i.L,{circle:t},r.a.createElement(i.J,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-double-".concat(N)}))),r.a.createElement(i.J,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-".concat(N)}))),f.map(function(e,t){return r.a.createElement(i.J,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(i.K,{className:"page-link"},e))}),r.a.createElement(i.J,{disabled:a===m,onClick:function(){return E(a+1)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-".concat(T)}))),r.a.createElement(i.J,{disabled:a===m,onClick:function(){return E(m)}},r.a.createElement(i.K,{className:"page-link"},r.a.createElement(i.u,{icon:"angle-double-".concat(T)})))))}},502:function(e,t,a){"use strict";var n=a(24),c=a(28),r=a(27);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.myJobs.myJobs.list,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.myJobs.myJobs.get,e).then(function(e){t(e)},function(e){a(e)})})},activate:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.myJobs.myJobs.activate,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.hire.myJobs.myJobs.delete,e).then(function(e){t(e)},function(e){a(e)})})}}},786:function(e,t,a){},787:function(e,t,a){},802:function(e,t,a){"use strict";a.r(t);var n=a(32),c=a(1),r=a.n(c),i=a(3),l=a(37),o=a(26),s=a(432),m=a(426),u=a(425),E=a(72),O=a(30),d=a(11),b=a(5),f=(a(91),a(123)),g=a(130),N=a(480),T=a(481),C=a(502),p=a(435),M=function(e){var t=e.onChangeType,a=e.onChangeKeyword,l=Object(o.b)().t,s=Object(c.useState)(!1),m=Object(n.a)(s,2),u=m[0],E=m[1],O=Object(c.useState)(d.y.ALL),b=Object(n.a)(O,2),f=b[0],g=b[1],N=Object(c.useState)(""),T=Object(n.a)(N,2),C=T[0],M=T[1],h=Object(p.a)(C,d.i.DELAY2);Object(c.useEffect)(function(e){var t=setTimeout(function(e){E(!0),clearTimeout(t)},d.i.DELAY2)},[]),Object(c.useMemo)(function(e){"function"===typeof t&&u&&t(f)},[f]),Object(c.useMemo)(function(e){"function"===typeof a&&u&&a(h)},[h]);return r.a.createElement(c.Fragment,null,r.a.createElement(i.O,null,r.a.createElement(i.k,{md:"6"},r.a.createElement(i.P,{label:l("HIRE.MY_JOBS.MY_JOBS.FIELDS.TYPE"),outline:!0,className:"mt-sm-5 mt-md-3 mb-0",selected:f,getValue:function(e){return g(e[0])}},r.a.createElement(i.Q,null),r.a.createElement(i.S,null,r.a.createElement(i.R,{value:d.y.ALL,checked:f==d.y.ALL},l("COMMON.SCOPE.ALL")),r.a.createElement(i.R,{value:d.p.ACTIVE,checked:f==d.p.ACTIVE},l("COMMON.JOB_STATUS.ACTIVE")),r.a.createElement(i.R,{value:d.p.INACTIVE,checked:f==d.p.INACTIVE},l("COMMON.JOB_STATUS.INACTIVE"))))),r.a.createElement(i.k,{md:"6"},r.a.createElement(i.w,{id:"name",name:"name",label:l("COMMON.SEARCH.KEYWORD"),outline:!0,containerClass:"mt-3 mb-0",value:C,getValue:M}))))},h=a(59),I=a(438),v=(a(786),function(e){var t=e.data,a=(e.detailLabel,e.activateLabel,e.deactivateLabel,e.deleteLabel,e.page,e.onEdit),n=e.onActivate,c=e.onDelete,l=Object(o.b)().t,s=t.id,m=t.title,u=t.description,E=t.isActive;return r.a.createElement(i.k,{md:"6",lg:"4",className:"mb-3 mb-md-4"},r.a.createElement(i.bb,{hover:!0,className:"card"},r.a.createElement(i.i,{className:"letter-item-wrapper"},r.a.createElement("div",{className:"letter-inner-wrapper"},r.a.createElement("div",{className:"border-dark border-bottom mb-sm-1 mb-md-2"},r.a.createElement("span",{className:"h4-responsive"},m),r.a.createElement(i.c,{pill:!0,color:E?"success":"danger",className:"ml-2"},l("COMMON.JOB_STATUS.".concat(E?"ACTIVE":"INACTIVE")))),r.a.createElement("div",{className:"letter-content",dangerouslySetInnerHTML:{__html:u}}))),r.a.createElement(i.x,{className:"flex-center",overlay:"grey-strong"},r.a.createElement(i.g,{tag:"a",floating:!0,color:"primary",size:"sm",rounded:!0,onClick:function(e){}},r.a.createElement(i.u,{icon:"eye"})),r.a.createElement(i.g,{tag:"a",floating:!0,color:"secondary",size:"sm",rounded:!0,onClick:function(e){return a({id:s})}},r.a.createElement(i.u,{icon:"edit"})),r.a.createElement(i.g,{tag:"a",floating:!0,color:"danger",size:"sm",onClick:function(e){return c({id:s,item:m})},rounded:!0},r.a.createElement(i.u,{icon:"trash"})),r.a.createElement(i.g,{tag:"a",floating:!0,color:E?"warning":"success",size:"sm",onClick:function(e){return n({id:s,item:m,isActive:!E})},rounded:!0},r.a.createElement(i.u,{icon:E?"times":"check"})))))}),A=function(e){var t=e.items,a=Object(h.a)(e,["items"]);return r.a.createElement("div",{className:"row text-left mt-3"},t.map(function(e,t){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(v,Object.assign({data:e},a)))}))};a(787),t.default=function(e){var t=Object(l.h)().page,a=Object(o.b)().t,p=Object(l.g)(),h=Object(O.c)(function(e){return e}),v=h.auth.user,y=(h.myJobs,Object(O.b)(),Object(c.useState)(!1)),S=Object(n.a)(y,2),j=S[0],R=S[1],k=Object(c.useState)({}),L=Object(n.a)(k,2),w=L[0],B=L[1],J=Object(c.useState)({}),_=Object(n.a)(J,2),V=_[0],U=_[1],D=Object(c.useState)(0),Y=Object(n.a)(D,2),x=Y[0],K=Y[1],z=Object(c.useState)([]),H=Object(n.a)(z,2),P=H[0],W=H[1],F=Object(c.useState)(d.y.ALL),Q=Object(n.a)(F,2),q=Q[0],G=Q[1],X=Object(c.useState)(""),Z=Object(n.a)(X,2),$=Z[0],ee=Z[1],te=t?parseInt(t):1,ae=a("NAVBAR.HIRE.MY_JOBS.MY_JOBS"),ne=function(e){U(Object.assign({},V,{show:!V.show}))},ce=function(e){var n=e.id,c=e.isActive;R(!0),C.a.activate({page:t,pageSize:9,id:n,isActive:c,hireId:v.hireId,type:q===d.y.ALL?void 0:q,keyword:$}).then(function(e){e.result===d.x.SUCCESS?(K(e.pageCount),W(e.data),f.b.success(e.message)):f.b.error(e.message),R(!1)}).catch(function(e){f.b.error(a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),R(!1)}),ne()},re=function(e){var n=e.id;R(!0),C.a.delete({page:t,pageSize:9,id:n,hireId:v.hireId,type:q===d.y.ALL?void 0:q,keyword:$}).then(function(e){e.result===d.x.SUCCESS?(K(e.pageCount),W(e.data)):f.b.error(e.message),R(!1)}).catch(function(e){f.b.error(a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),R(!1)}),ne()},ie=function(e){p.push("".concat(b.a.hire.workplace.letters.all,"/").concat(e))},le=function(e){var a=I.Base64.encode(JSON.stringify({id:e.id,page:t}));p.push("".concat(b.a.hire.myJobs.myJobs.edit,"/").concat(a))},oe=function(e){var t=e.id,n=e.item,c=e.isActive,r=a(c?"COMMON.BUTTON.ACTIVATE":"COMMON.BUTTON.DEACTIVATE");U(Object.assign({},V,{type:d.s.TYPE.ACTIVATE,show:!0,title:r,message:a(c?"COMMON.QUESTION.ACTIVATE":"COMMON.QUESTION.DEACTIVATE",{item:n}),primaryButton:{color:c?"success":"warning",text:r},item:{id:t,isActive:c},onYes:ce}))},se=function(e){var t=e.id,n=e.item;U(Object.assign({},V,{type:d.s.TYPE.DELETE,show:!0,title:a("COMMON.BUTTON.DELETE"),message:a("COMMON.QUESTION.DELETE",{item:n}),primaryButton:{color:"danger",text:a("COMMON.BUTTON.DELETE")},item:{id:t},onYes:re}))};Object(c.useEffect)(function(e){E.animateScroll.scrollToTop({duration:d.j.TRANSITION_TIME})},[]),Object(c.useMemo)(function(e){!function(e){R(!0),B({});var n={page:t,pageSize:9,hireId:v.hireId,type:q===d.y.ALL?void 0:q,keyword:$};C.a.list(n).then(function(e){e.result===d.x.SUCCESS?(K(e.pageCount),W(e.data)):(W([]),f.b.error(e.message)),R(!1)}).catch(function(e){W([]),f.b.error(a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),R(!1)})}()},[t,a,q,$]),Object(c.useMemo)(function(e){E.animateScroll.scrollToTop({duration:d.j.TRANSITION_TIME})},[t]);return r.a.createElement(c.Fragment,null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,ae," - ",a("SITE_NAME"))),r.a.createElement(i.e,null,r.a.createElement(i.f,null,a("NAVBAR.HIRE.MY_JOBS.ROOT")),r.a.createElement(i.f,{active:!0},ae)),r.a.createElement(i.O,{className:"my-sm-2 my-md-4"},r.a.createElement(i.k,{md:"5",className:"order-1 order-md-0"}),r.a.createElement(i.k,{md:"7",className:"order-0 order-md-1"},r.a.createElement(M,{onChangeType:G,onChangeKeyword:ee}))),r.a.createElement(i.O,null,w.show&&r.a.createElement(i.k,{md:"12"},r.a.createElement(m.a,null,r.a.createElement(u.a,{in:w.show,classNames:"fade-transition",timeout:d.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(i.b,{color:w.color,dismiss:!0,onClosed:function(){return B({})}},w.message)))),r.a.createElement(i.k,{md:"12"},r.a.createElement(m.a,null,r.a.createElement(u.a,{key:t,timeout:{enter:d.j.TRANSITION_TIME,exit:0},classNames:"fade-transition"},r.a.createElement("div",null,!!j&&r.a.createElement(g.a,{style:{height:d.q.LISTVIEW_HEIGHT}}),!j&&!P.length&&r.a.createElement(N.a,null),!j&&!!P.length&&r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"my-4 text-center"},r.a.createElement(T.a,{circle:!0,current:te,pageCount:x,onChange:ie})),r.a.createElement(A,{items:P,showNewLink:!1,detailLabel:a("COMMON.BUTTON.EDIT"),activateLabel:a("COMMON.BUTTON.ACTIVATE"),deactivateLabel:a("COMMON.BUTTON.DEACTIVATE"),deleteLabel:a("COMMON.BUTTON.DELETE"),page:t,onEdit:le,onActivate:oe,onDelete:se}),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement(T.a,{circle:!0,current:te,pageCount:x,onChange:ie})))))))),r.a.createElement(i.y,{isOpen:!!V.show,toggle:ne,centered:!0,backdropClassName:"modal-backdrop"},r.a.createElement(i.B,{toggle:ne},V.title),r.a.createElement(i.z,{className:"text-left"},V.message),r.a.createElement(i.A,null,r.a.createElement(i.g,{type:"button",color:V.primaryButton&&V.primaryButton.color,size:"sm",rounded:!0,onClick:function(e){V.onYes(V.item),ne()}},V.primaryButton&&V.primaryButton.text),r.a.createElement(i.g,{type:"button",color:"secondary",size:"sm",rounded:!0,onClick:ne},a("COMMON.BUTTON.CANCEL")))))}}}]);