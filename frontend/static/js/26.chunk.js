(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{449:function(e,t,a){"use strict";var n=a(465),l=a.n(n);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},622:function(e,t,a){"use strict";a.r(t);var n=a(32),l=a(1),r=a.n(l),i=a(26),s=a(34),c=a(3),m=a(425),o=a(72),u=a(431),E=a(434),d=a(433),N=a(11),b=(a(449),a(90)),h=a(5),O=a(123),f=a(132);a(623);t.default=function(e){var t=Object(i.b)().t,a=Object(l.useState)(!1),A=Object(n.a)(a,2),S=A[0],g=A[1],p=Object(l.useState)({}),I=Object(n.a)(p,2),w=I[0],T=I[1],R={email:""},v=d.c().shape({email:d.e().required(t("COMMON.VALIDATION.REQUIRED",{field:t("AUTH.EMAIL")})).email(t("COMMON.VALIDATION.INVALID",{field:t("AUTH.EMAIL")}))}),x=function(e,a){var n=e.email,l=a.setSubmitting,r={email:n};g(!0),l(!0),f.a.sendForgotPasswordMail(r).then(function(e){e.result===N.x.SUCCESS?O.b.success(e.message):O.b.error(e.message),g(!1),l(!1)}).catch(function(e){O.b.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")),g(!1),l(!1)})};Object(l.useEffect)(function(){o.animateScroll.scrollToTop({duration:N.j.TRANSITION_TIME})},[e]),Object(l.useMemo)(function(e){},[t]);return r.a.createElement(l.Fragment,null,r.a.createElement(u.Helmet,null,r.a.createElement("title",null,t("AUTH.FORGOT_PASSWORD")," - ",t("SITE_NAME"))),r.a.createElement("div",{className:"admin-nav text-center"},r.a.createElement("img",{className:"logo-img mt-3 mb-5",src:b.a.logo.logo100})),r.a.createElement(c.h,{className:"auth-bg"},r.a.createElement(c.i,{className:"mx-md-4 mx-sm-1"},r.a.createElement(c.O,{className:"text-center"},r.a.createElement(c.k,{className:"col-12 underlined white-border"},r.a.createElement("p",{className:"text-white h5"},t("AUTH.FORGOT_PASSWORD")))),r.a.createElement(E.a,{initialValues:R,validationSchema:v,onSubmit:x},function(e){var a=e.values.email,n=e.errors,l=e.touched,i=e.handleChange,o=e.handleSubmit,u=e.handleBlur;return e.isSubmitting,r.a.createElement("form",{onSubmit:o},r.a.createElement("div",{className:"white-text mt-5"},r.a.createElement(c.w,{id:"email",name:"email",type:"email",icon:"envelope",label:t("AUTH.EMAIL"),background:!0,value:a,onChange:i,onBlur:u},!!l.email&&!!n.email&&r.a.createElement("div",{className:"text-left invalid-field2"},n.email))),r.a.createElement(m.a,{in:w.show,classNames:"fade-transition",timeout:N.j.TRANSITION_TIME,unmountOnExit:!0,appear:!0},r.a.createElement(c.b,{color:w.color,onClosed:function(){return T({})}},w.message)),r.a.createElement("div",{className:"text-center mt-4 mb-3 mx-5"},r.a.createElement(c.g,{type:"submit",color:"white",rounded:!0,className:"full-width z-depth-1a blue-grey-text",disabled:S},!S&&r.a.createElement(c.u,{icon:"lock"}),!!S&&r.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),t("AUTH.RESET_PASSWORD"))),r.a.createElement("p",{className:"font-small white-text d-flex justify-content-end pb-3"},r.a.createElement(s.b,{className:"ml-1 white-text",to:h.a.auth.signIn},t("AUTH.SIGN_IN"))))}))))}},623:function(e,t,a){}}]);