"use strict";(self.webpackChunk_tracking_software=self.webpackChunk_tracking_software||[]).push([[112],{32869:function(e,r,a){a.d(r,{Ds:function(){return n.Ds}});var n=a(58518);a(58764)},96112:function(e,r,a){a.r(r),a.d(r,{default:function(){return i}});var n=a(6907),t=a(50276),s=a(80184);function i(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.ql,{children:(0,s.jsx)("title",{children:" Jwt: Login"})}),(0,s.jsx)(t.Q,{})]})}},50276:function(e,r,a){a.d(r,{Q:function(){return A},$:function(){return L}});var n=a(74165),t=a(1413),s=a(15861),i=a(29439),o=a(72791),l=a(12258),u=a(92363),c=a(36314),d=a(13400),m=a(4567),p=a(63466),h=a(38072),x=a(83854),f=a(62950),Z=a(33805),v=a(22459),g=a(8976),j=a(44e3),w=a(45987),b=a(61134),y=a(27391),k=a(80184),S=["name","helperText","type"];function E(e){var r=e.name,a=e.helperText,n=e.type,s=(0,w.Z)(e,S),i=(0,b.Gc)().control;return(0,k.jsx)(b.Qr,{name:r,control:i,render:function(e){var r=e.field,i=e.fieldState.error;return(0,k.jsx)(y.Z,(0,t.Z)((0,t.Z)({},r),{},{fullWidth:!0,type:n,value:"number"===n&&0===r.value?"":r.value,onChange:function(e){"number"===n?r.onChange(Number(e.target.value)):r.onChange(e.target.value)},error:!!i,helperText:i?null===i||void 0===i?void 0:i.message:a},s))}})}function P(e){var r=e.children,a=e.onSubmit,n=e.methods;return(0,k.jsx)(b.RV,(0,t.Z)((0,t.Z)({},n),{},{children:(0,k.jsx)("form",{onSubmit:a,children:r})}))}var _=a(99615),C=a(18406),T=a(52073),q=a(32869),N=a(78184);function A(){var e=(0,f.tv)(),r=(0,o.useState)(""),a=(0,i.Z)(r,2),h=a[0],x=(a[1],(0,f.lr)(),(0,o.useState)({email:"adminuser@test.in",password:"defaultPassword",emailErr:!1,passErr:!1})),Z=(0,i.Z)(x,2),g=Z[0],w=Z[1],b=(0,q.Ds)().enqueueSnackbar,S=(0,o.useState)(!1),E=(0,i.Z)(S,2),A=E[0],I=E[1],z=(0,v.k)(),D=function(){var r=(0,s.Z)((0,n.Z)().mark((function r(){var a,s,i,o;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,0!==g.email.length&&a.test(g.email)){r.next=4;break}return w((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!0})})),r.abrupt("return");case 4:if(w((function(e){return(0,t.Z)((0,t.Z)({},e),{},{emailErr:!1})})),0!==g.password.length){r.next=8;break}return w((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!0})})),r.abrupt("return");case 8:return w((function(e){return(0,t.Z)((0,t.Z)({},e),{},{passErr:!1})})),r.prev=10,I(!0),r.next=14,_.ZP.post(_.Hv.auth.login,{email:g.email,password:g.password});case 14:(s=r.sent)&&(i=(0,C.n0)(JSON.stringify(s.data.data.user)),localStorage.setItem(T._.keyUserData,i),o=(0,C.n0)(s.data.data.token),localStorage.setItem(T._.keyUserToken,o),_.ZP.defaults.headers.common.Authorization="Bearer ".concat(s.data.data.token),I(!1),e.push("/dashboard")),r.next=23;break;case 19:r.prev=19,r.t0=r.catch(10),I(!1),b(r.t0.error,{variant:"error"});case 23:case"end":return r.stop()}}),r,null,[[10,19]])})));return function(){return r.apply(this,arguments)}}();(0,o.useEffect)((function(){var r=localStorage.getItem(T._.keyUserToken);if(r){var a=(0,C.sw)(r);if(a){var n=(0,N.oO)(a),t=Math.floor(Date.now()/1e3);n.exp&&n.exp<t?(localStorage.clear(),alert("Your session has expired. Please log in again."),window.location.href="/"):e.push("/dashboard")}}}),[]);var L=(0,k.jsx)(c.Z,{spacing:2,sx:{mb:5},children:(0,k.jsx)(m.Z,{variant:"h4",children:"Sign in to Meridian Logistics"})}),F=(0,k.jsxs)(c.Z,{spacing:2.5,children:[!!h&&(0,k.jsx)(u.Z,{severity:"error",children:h}),(0,k.jsx)(y.Z,{name:"email",label:"Email address",value:g.email,onChange:function(e){w((function(r){return(0,t.Z)((0,t.Z)({},r),{},{email:e.target.value,emailErr:!1})}))},error:g.emailErr,helperText:g.emailErr?"Please enter valid email!":null}),(0,k.jsx)(y.Z,{name:"password",label:"Password",type:z.value?"text":"password",value:g.password,onChange:function(e){w((function(r){return(0,t.Z)((0,t.Z)({},r),{},{password:e.target.value,passErr:!1})}))},error:g.passErr,helperText:g.passErr?"Please enter valid password!":null,InputProps:{endAdornment:(0,k.jsx)(p.Z,{position:"end",children:(0,k.jsx)(d.Z,{onClick:z.onToggle,edge:"end",children:(0,k.jsx)(j.Z,{icon:z.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,k.jsx)(l.Z,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",loading:A,onClick:D,children:"Login"})]});return(0,k.jsxs)(P,{children:[L,F]})}var I=a(8007),z=a(44695),D=a(50533);function L(){var e=(0,g.E)().register,r=(0,f.tv)(),a=(0,o.useState)(""),t=(0,i.Z)(a,2),w=t[0],y=t[1],S=(0,f.lr)().get("returnTo"),_=(0,v.k)(),C=I.Ry().shape({firstName:I.Z_().required("First name required"),lastName:I.Z_().required("Last name required"),email:I.Z_().required("Email is required").email("Email must be a valid email address"),password:I.Z_().required("Password is required")}),T=(0,b.cI)({resolver:(0,z.X)(C),defaultValues:{firstName:"",lastName:"",email:"",password:""}}),q=T.reset,N=T.handleSubmit,A=T.formState.isSubmitting,L=N(function(){var a=(0,s.Z)((0,n.Z)().mark((function a(t){return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,null===e||void 0===e?void 0:e(t.email,t.password,t.firstName,t.lastName);case 3:r.push(S||Z.wd),a.next=11;break;case 6:a.prev=6,a.t0=a.catch(0),console.error(a.t0),q(),y("string"===typeof a.t0?a.t0:a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,6]])})));return function(e){return a.apply(this,arguments)}}()),F=(0,k.jsxs)(c.Z,{spacing:2,sx:{mb:5,position:"relative"},children:[(0,k.jsx)(m.Z,{variant:"h4",children:"Get started absolutely free"}),(0,k.jsxs)(c.Z,{direction:"row",spacing:.5,children:[(0,k.jsx)(m.Z,{variant:"body2",children:" Already have an account? "}),(0,k.jsx)(D.Z,{href:h.H.auth.jwt.login,component:x.r,variant:"subtitle2",children:"Sign in"})]})]}),Q=(0,k.jsxs)(m.Z,{component:"div",sx:{color:"text.secondary",mt:2.5,typography:"caption",textAlign:"center"},children:["By signing up, I agree to ",(0,k.jsx)(D.Z,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",(0,k.jsx)(D.Z,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),U=(0,k.jsx)(P,{methods:T,onSubmit:L,children:(0,k.jsxs)(c.Z,{spacing:2.5,children:[!!w&&(0,k.jsx)(u.Z,{severity:"error",children:w}),(0,k.jsxs)(c.Z,{direction:{xs:"column",sm:"row"},spacing:2,children:[(0,k.jsx)(E,{name:"firstName",label:"First name"}),(0,k.jsx)(E,{name:"lastName",label:"Last name"})]}),(0,k.jsx)(E,{name:"email",label:"Email address"}),(0,k.jsx)(E,{name:"password",label:"Password",type:_.value?"text":"password",InputProps:{endAdornment:(0,k.jsx)(p.Z,{position:"end",children:(0,k.jsx)(d.Z,{onClick:_.onToggle,edge:"end",children:(0,k.jsx)(j.Z,{icon:_.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),(0,k.jsx)(l.Z,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:A,children:"Create account"})]})});return(0,k.jsxs)(k.Fragment,{children:[F,U,Q]})}}}]);
//# sourceMappingURL=112.b10759fe.chunk.js.map