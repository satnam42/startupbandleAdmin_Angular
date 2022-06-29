!function(){function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{VVaf:function(r,t,o){"use strict";o.r(t),o.d(t,"SessionsModule",(function(){return j}));var i=o("aLe/"),s=o("SVse"),a=o("s7LF"),c=o("iInd"),u=o("zMWy"),b=o("u9T3"),l=o("IYfF"),d=o("BTe0"),m=o("Dxy4"),f=o("3sEA"),p=o("8Y7J"),g=o("EApP"),h=o("PDjf"),w=o("Q2Ze"),W=o("e6WT"),v=o("Tj54"),X=o("VDRc");function y(e,r){1&e&&p.Sb(0,"mat-progress-bar",16)}function C(e,r){1&e&&(p.Xb(0,"small",17),p.Wc(1," Username is required "),p.Wb())}function I(e,r){1&e&&(p.Xb(0,"small",17),p.Wc(1," Password is required "),p.Wb())}var k,F,S,L=function(){return["/"]},M=[{path:"",children:[{path:"signin",component:(F=function(){function r(n,t,o,i){e(this,r),this.router=n,this.toast=t,this.authservice=o,this.loader=i,this.credentials={email:"",password:""},this.isLoading=!1,this.userData={},this.show=!0}return n(r,[{key:"logIn",value:function(){var e=this;if(this.credentials.email){var r=this.credentials.email.toLowerCase();this.credentials.email=r}localStorage.removeItem("token"),this.loader.open(),this.authservice.login(this.credentials).subscribe((function(r){if(e.userData=r,e.loader.close(),!0!==e.userData.isSuccess)return e.toast.error(r.error),e.isLoading=!1;e.toast.success("Successfully LoggedIn"),e.router.navigate(["dashboard/analytics"]),e.loader.close()}))}},{key:"ngOnInit",value:function(){this.signinForm=new a.g({username:new a.d("",a.u.required),password:new a.d("",a.u.required),rememberMe:new a.d(!1)})}}]),r}(),F.\u0275fac=function(e){return new(e||F)(p.Rb(c.j),p.Rb(g.b),p.Rb(l.a),p.Rb(f.a))},F.\u0275cmp=p.Lb({type:F,selectors:[["app-signin"]],viewQuery:function(e,r){var n;1&e&&(p.bd(d.a,!0),p.bd(m.a,!0)),2&e&&(p.Ic(n=p.kc())&&(r.progressBar=n.first),p.Ic(n=p.kc())&&(r.submitButton=n.first))},decls:24,vars:11,consts:[[1,"page-wrap","height-100","grey"],[1,"session-form-hold"],["mode","indeterminate","class","session-progress",4,"ngIf"],[1,"text-center","pt-8","pb-16"],["width","90px","src","assets/images/mainLogo.png","alt","",1,"mb-05"],[1,"text-muted","m-0"],[3,"formGroup","ngSubmit"],[1,""],[1,"full-width"],["matInput","","name","username","placeholder","Username","value","",3,"formControl","ngModel","ngModelChange"],["class","form-error-msg",4,"ngIf"],["matInput","","placeholder","Password",3,"type","formControl","ngModel","ngModelChange"],["matSuffix","",1,"cursor-pointer",3,"click"],["mat-raised-button","",1,"mat-primary","full-width","mb-1",3,"disabled"],[1,"text-center"],["fxFlex",""],["mode","indeterminate",1,"session-progress"],[1,"form-error-msg"]],template:function(e,r){1&e&&(p.Xb(0,"div",0),p.Xb(1,"div",1),p.Uc(2,y,1,0,"mat-progress-bar",2),p.Xb(3,"mat-card"),p.Xb(4,"mat-card-content"),p.Xb(5,"div",3),p.Sb(6,"img",4),p.Xb(7,"p",5),p.Wc(8,"Sign in to your account"),p.Wb(),p.Wb(),p.Xb(9,"form",6),p.jc("ngSubmit",(function(){return r.logIn()})),p.Xb(10,"div",7),p.Xb(11,"mat-form-field",8),p.Xb(12,"input",9),p.jc("ngModelChange",(function(e){return r.credentials.email=e})),p.Wb(),p.Wb(),p.Uc(13,C,2,0,"small",10),p.Wb(),p.Xb(14,"div",7),p.Xb(15,"mat-form-field",8),p.Xb(16,"input",11),p.jc("ngModelChange",(function(e){return r.credentials.password=e})),p.Wb(),p.Xb(17,"mat-icon",12),p.jc("click",(function(){return r.show=!r.show})),p.Wc(18),p.Wb(),p.Wb(),p.Uc(19,I,2,0,"small",10),p.Wb(),p.Xb(20,"button",13),p.Wc(21,"Sign in"),p.Wb(),p.Xb(22,"div",14),p.Sb(23,"span",15),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.Cb(2),p.uc("ngIf",r.isLoading),p.Cb(7),p.uc("formGroup",r.signinForm),p.Cb(3),p.uc("formControl",r.signinForm.controls.username)("ngModel",r.credentials.email),p.Cb(1),p.uc("ngIf",r.signinForm.controls.username.hasError("required")&&r.signinForm.controls.username.touched),p.Cb(3),p.uc("type",r.show?"password":"text")("formControl",r.signinForm.controls.password)("ngModel",r.credentials.password),p.Cb(2),p.Xc(r.show?"visibility_off":"visibility"),p.Cb(1),p.uc("ngIf",r.signinForm.controls.password.hasError("required")&&r.signinForm.controls.password.touched),p.Cb(1),p.uc("disabled",r.signinForm.invalid))},directives:[s.n,h.a,h.b,a.w,a.o,a.h,w.a,W.b,a.b,a.n,a.e,v.a,w.d,m.a,X.a,d.a],styles:[".cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),F),data:{title:"Signin"}},{path:"404",component:(k=function(){function r(){e(this,r)}return n(r,[{key:"ngOnInit",value:function(){}}]),r}(),k.\u0275fac=function(e){return new(e||k)},k.\u0275cmp=p.Lb({type:k,selectors:[["app-not-found"]],decls:15,vars:2,consts:[[1,"page-wrap","height-100","default-bg"],[1,"app-error"],[1,"fix"],["color","warn",1,"error-icon"],[1,"error-text"],[1,"error-title"],[1,"error-subtitle"],[1,"error-actions"],["mat-raised-button","","color","primary",1,"mb-1","mr-05",3,"routerLink"],["mat-raised-button","","color","warn"]],template:function(e,r){1&e&&(p.Xb(0,"div",0),p.Xb(1,"div",1),p.Xb(2,"div",2),p.Xb(3,"mat-icon",3),p.Wc(4,"error"),p.Wb(),p.Xb(5,"div",4),p.Xb(6,"h1",5),p.Wc(7,"404"),p.Wb(),p.Xb(8,"div",6),p.Wc(9,"Page Not Found!"),p.Wb(),p.Wb(),p.Wb(),p.Xb(10,"div",7),p.Xb(11,"button",8),p.Wc(12,"Back to Dashboard"),p.Wb(),p.Xb(13,"button",9),p.Wc(14,"Report this Problem"),p.Wb(),p.Wb(),p.Wb(),p.Wb()),2&e&&(p.Cb(11),p.uc("routerLink",p.zc(1,L)))},directives:[v.a,m.a,c.k],styles:[""]}),k),data:{title:"Not Found"}}]}],x=o("HHV2"),j=((S=function r(){e(this,r)}).\u0275mod=p.Pb({type:S}),S.\u0275inj=p.Ob({factory:function(e){return new(e||S)},imports:[[s.c,a.i,a.s,u.a,b.a,i.c,h.c,x.a,c.n.forChild(M)]]}),S)}}])}();