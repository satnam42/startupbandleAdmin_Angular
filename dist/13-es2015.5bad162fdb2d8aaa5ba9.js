(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{jASi:function(e,t,n){"use strict";n.r(t),n.d(t,"AppFormsModule",(function(){return Q}));var o=n("iInd"),i=n("SVse"),r=n("s7LF"),s=n("Dxy4"),a=n("PDjf"),l=n("pMoy"),d=n("UhP/"),c=n("TN/R"),u=n("Tj54"),b=n("e6WT"),m=n("SqCe"),h=n("BTe0"),f=n("zQhy"),p=n("hzfI"),g=n("u9T3"),C=n("8Y7J"),W=n("mrSG");n("cUpR");const v={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},X=new C.r("config");let w=(()=>{class e{constructor(e){this.config=e,this.count=0,this.config||(this.config={modules:v})}getQuill(){return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise(e=>Object(W.a)(this,void 0,void 0,(function*(){var t,o;const i=yield n.e(17).then(n.t.bind(null,"kzlf",7));this.Quill=i.default?i.default:i,null===(t=this.config.customOptions)||void 0===t||t.forEach(e=>{const t=this.Quill.import(e.import);t.whitelist=e.whitelist,this.Quill.register(t,!0,this.config.suppressGlobalRegisterWarning)}),null===(o=this.config.customModules)||void 0===o||o.forEach(({implementation:e,path:t})=>{this.Quill.register(t,e,this.config.suppressGlobalRegisterWarning)}),e(this.Quill)})))),this.$importPromise}}return e.\u0275fac=function(t){return new(t||e)(C.fc(X))},e.\u0275prov=Object(C.Nb)({factory:function(){return new e(Object(C.fc)(X))},token:e,providedIn:"root"}),e})(),M=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:X,useValue:t}]}}}return e.\u0275mod=C.Pb({type:e}),e.\u0275inj=C.Ob({factory:function(t){return new(t||e)},providers:[w],imports:[[i.c]]}),e})();var y=n("w9WL"),x=n("pYyI"),j=n("nm5K"),R=n("3sEA"),N=n("DTeB"),P=n("5rO5"),F=n("EApP"),I=n("BSbQ"),O=n("VDRc"),k=n("Q2Ze"),S=n("ZTz/");let L=(()=>{class e{constructor(e,t,n,o,i,r,s){this.service=e,this.dataRoute=t,this.dataservice=n,this.apiservice=o,this.route=i,this.toast=r,this.loader=s,this.formData={},this.rows=[],this.columns=[],this.temp=[],this.role={type:"",permissions:{}},this.rolesList=[],this.usersData={},this.show=!0,this.action=!0,this.setAutoHide=!0,this.autoHide=4e3,this.permissions={view:!1,add:!1,edit:!1,all:!1}}back(){this.route.navigate(["tables/roles"])}ngOnInit(){this.roleForm=new r.g({type:new r.d("",r.u.required),permissions:new r.d("")})}onChange(e){let t=Object.keys(this.permissions);for(let n of t)this.permissions[n]=n==e}addRoles(){this.role.permissions=this.permissions,this.apiservice.addRoles(this.role).subscribe(e=>{console.log("resssssss",e)})}onSubmit(){this.submitted=!0,console.log(this.roleForm.value),this.addRoles()}}return e.\u0275fac=function(t){return new(t||e)(C.Rb(P.a),C.Rb(o.a),C.Rb(N.a),C.Rb(j.a),C.Rb(o.j),C.Rb(F.b),C.Rb(R.a))},e.\u0275cmp=C.Lb({type:e,selectors:[["app-basic-form"]],decls:28,vars:3,consts:[[1,"p-0"],[1,"title"],[1,"card-title-text"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-xs","75",1,"pr-1"],[1,"pb-1"],[1,"full-width"],["matInput","","name","type","placeholder","Role type","formControlName","type",3,"ngModel","ngModelChange"],["name","permissions","placeholder","Permissions","formControlName","permissions",3,"ngModelChange"],["value","view"],["value","add"],["value","edit"],["value","all"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",1,"submitBtn"]],template:function(e,t){1&e&&(C.Xb(0,"mat-card",0),C.Xb(1,"mat-card-title",1),C.Xb(2,"div",2),C.Wc(3),C.Wb(),C.Sb(4,"mat-divider"),C.Wb(),C.Xb(5,"mat-card-content"),C.Xb(6,"form",3),C.jc("ngSubmit",(function(){return t.onSubmit()})),C.Xb(7,"div",4),C.Xb(8,"div",5),C.Xb(9,"div",6),C.Xb(10,"mat-form-field",7),C.Xb(11,"input",8),C.jc("ngModelChange",(function(e){return t.role.type=e})),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Xb(12,"div",5),C.Xb(13,"div",6),C.Xb(14,"mat-form-field",7),C.Xb(15,"mat-select",9),C.jc("ngModelChange",(function(e){return t.onChange(e)})),C.Xb(16,"mat-option",10),C.Wc(17,"view"),C.Wb(),C.Xb(18,"mat-option",11),C.Wc(19,"add"),C.Wb(),C.Xb(20,"mat-option",12),C.Wc(21,"edit"),C.Wb(),C.Xb(22,"mat-option",13),C.Wc(23,"all"),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Xb(24,"button",14),C.jc("click",(function(){return t.back()})),C.Wc(25,"Back"),C.Wb(),C.Xb(26,"button",15),C.Wc(27,"Submit"),C.Wb(),C.Wb(),C.Wb(),C.Wb()),2&e&&(C.Cb(3),C.Xc(t.formName),C.Cb(3),C.uc("formGroup",t.roleForm),C.Cb(5),C.uc("ngModel",t.role.type))},directives:[a.a,a.d,I.a,a.b,r.w,r.o,r.h,O.c,O.a,k.a,b.b,r.b,r.n,r.f,S.a,d.p,s.a],styles:[".mat-card[_ngcontent-%COMP%]{box-shadow:none!important}.title[_ngcontent-%COMP%]{text-align:center}.submitBtn[_ngcontent-%COMP%]{align-items:flex-end;margin-left:15px}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();var A=n("zHaW");function _(e,t){1&e&&(C.Xb(0,"div",16),C.Wc(1,"Add Admin"),C.Wb())}function z(e,t){1&e&&(C.Xb(0,"div",16),C.Wc(1,"Edit Admin"),C.Wb())}function U(e,t){if(1&e&&(C.Xb(0,"mat-option",17),C.Wc(1),C.Wb()),2&e){const e=t.$implicit;C.uc("value",e.value),C.Cb(1),C.Yc(" ",e.name," ")}}function H(e,t){if(1&e){const e=C.Yb();C.Xb(0,"div",6),C.Xb(1,"mat-form-field",7),C.Xb(2,"input",18),C.jc("ngModelChange",(function(t){return C.Nc(e),C.nc().admin.password=t})),C.Wb(),C.Xb(3,"mat-icon",19),C.jc("click",(function(){C.Nc(e);const t=C.nc();return t.show=!t.show})),C.Wc(4),C.Wb(),C.Wb(),C.Wb()}if(2&e){const e=C.nc();C.Cb(2),C.uc("type",e.show?"password":"text")("formControl",e.adminForm.controls.password)("ngModel",e.admin.password),C.Cb(2),C.Xc(e.show?"visibility_off":"visibility")}}let q=(()=>{class e{constructor(e,t,n,o,i,r,s,a){this.service=e,this.dataRoute=t,this.dataservice=n,this.apiservice=o,this.snack=i,this.toast=r,this.route=s,this.loader=a,this.formData={},this.admin={name:"",email:"",password:"",status:"",sex:"",roleId:"5ff5a043c51e0042898fe15e"},this.genders=[{name:"Male",value:"male"},{name:"Female",value:"female"},{name:"Other",value:"other"}],this.rolesList=[],this.usersData={},this.show=!0,this.message="User Added Successfully!",this.action=!0,this.setAutoHide=!0,this.autoHide=4e3,this.horizontalPosition="center",this.verticalPosition="bottom";let l=new A.b;l.verticalPosition=this.verticalPosition,l.horizontalPosition=this.horizontalPosition,l.duration=this.setAutoHide?this.autoHide:0}back(){this.route.navigate(["tables/filter"])}ngOnInit(){this.adminForm=new r.g({name:new r.d("",r.u.required),lastName:new r.d("",r.u.required),email:new r.d("",r.u.required),password:new r.d(""),sex:new r.d("",r.u.required),roleId:new r.d("")})}addAdmins(){let e=this.admin.email.toLowerCase();this.admin.email=e,this.apiservice.addAdmins(this.admin).subscribe(e=>{console.log("resssssss",e)})}onSubmit(){if(this.submitted=!0,!this.admin._id)return this.addAdmins()}}return e.\u0275fac=function(t){return new(t||e)(C.Rb(P.a),C.Rb(o.a),C.Rb(N.a),C.Rb(j.a),C.Rb(A.a),C.Rb(F.b),C.Rb(o.j),C.Rb(R.a))},e.\u0275cmp=C.Lb({type:e,selectors:[["app-user-manage"]],decls:28,vars:10,consts:[[1,"p-0"],[1,"title"],["class","card-title-text",4,"ngIf"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-xs","50",1,"pr-1"],[1,"pb-1"],[1,"full-width"],["matInput","","name","name","placeholder","Name","formControlName","name",3,"ngModel","ngModelChange"],["matInput","","type","email","name","email","placeholder","Email","formControlName","email",3,"ngModel","ngModelChange"],["name","sex","placeholder","Gender","formControlName","sex",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","status","placeholder","status",3,"formControl","ngModel","ngModelChange"],["class","pb-1",4,"ngIf"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",1,"submitBtn"],[1,"card-title-text"],[3,"value"],["matInput","","name","password","placeholder","Password",3,"type","formControl","ngModel","ngModelChange"],["matSuffix","",1,"cursor-pointer",3,"click"]],template:function(e,t){1&e&&(C.Xb(0,"mat-card",0),C.Xb(1,"mat-card-title",1),C.Uc(2,_,2,0,"div",2),C.Uc(3,z,2,0,"div",2),C.Sb(4,"mat-divider"),C.Wb(),C.Xb(5,"mat-card-content"),C.Xb(6,"form",3),C.jc("ngSubmit",(function(){return t.onSubmit()})),C.Xb(7,"div",4),C.Xb(8,"div",5),C.Xb(9,"div",6),C.Xb(10,"mat-form-field",7),C.Xb(11,"input",8),C.jc("ngModelChange",(function(e){return t.admin.name=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(12,"div",6),C.Xb(13,"mat-form-field",7),C.Xb(14,"input",9),C.jc("ngModelChange",(function(e){return t.admin.email=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(15,"div",6),C.Xb(16,"mat-form-field",7),C.Xb(17,"mat-select",10),C.jc("ngModelChange",(function(e){return t.admin.sex=e})),C.Uc(18,U,2,2,"mat-option",11),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Xb(19,"div",5),C.Xb(20,"div",6),C.Xb(21,"mat-form-field",7),C.Xb(22,"input",12),C.jc("ngModelChange",(function(e){return t.admin.status=e})),C.Wb(),C.Wb(),C.Wb(),C.Uc(23,H,5,4,"div",13),C.Wb(),C.Wb(),C.Xb(24,"button",14),C.jc("click",(function(){return t.back()})),C.Wc(25,"Back"),C.Wb(),C.Xb(26,"button",15),C.Wc(27,"Submit"),C.Wb(),C.Wb(),C.Wb(),C.Wb()),2&e&&(C.Cb(2),C.uc("ngIf",!t.admin._id),C.Cb(1),C.uc("ngIf",t.admin._id),C.Cb(3),C.uc("formGroup",t.adminForm),C.Cb(5),C.uc("ngModel",t.admin.name),C.Cb(3),C.uc("ngModel",t.admin.email),C.Cb(3),C.uc("ngModel",t.admin.sex),C.Cb(1),C.uc("ngForOf",t.genders),C.Cb(4),C.uc("formControl",t.adminForm.controls.status)("ngModel",t.admin.status),C.Cb(1),C.uc("ngIf",!t.admin._id))},directives:[a.a,a.d,i.n,I.a,a.b,r.w,r.o,r.h,O.c,O.a,k.a,b.b,r.b,r.n,r.f,S.a,i.m,r.e,s.a,d.p,u.a,k.d],styles:[".mat-card[_ngcontent-%COMP%]{box-shadow:none!important}.title[_ngcontent-%COMP%]{text-align:center}.submitBtn[_ngcontent-%COMP%]{align-items:flex-end;margin-left:15px}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),e})();var B=n("HHV2");function D(e,t){if(1&e&&(C.Xb(0,"mat-option",22),C.Wc(1),C.Wb()),2&e){const e=t.$implicit;C.uc("value",e.value),C.Cb(1),C.Yc(" ",e.name," ")}}function G(e,t){if(1&e){const e=C.Yb();C.Xb(0,"div",6),C.Xb(1,"mat-form-field",7),C.Xb(2,"input",23),C.jc("ngModelChange",(function(t){return C.Nc(e),C.nc().user.password=t})),C.Wb(),C.Xb(3,"mat-icon",24),C.jc("click",(function(){C.Nc(e);const t=C.nc();return t.show=!t.show})),C.Wc(4),C.Wb(),C.Wb(),C.Wb()}if(2&e){const e=C.nc();C.Cb(2),C.uc("type",e.show?"password":"text")("formControl",e.userForm.controls.password)("ngModel",e.user.password),C.Cb(2),C.Xc(e.show?"visibility_off":"visibility")}}const E=[{path:"",children:[{path:"basic",component:L,data:{title:"Roles",breadcrumb:"ROLES"}},{path:"user",component:q,data:{title:"Admin",breadcrumb:"ADMIN"}},{path:"update",component:(()=>{class e{constructor(e,t,n,o,i,r,s,a,l){this.service=e,this.dataRoute=t,this.dataservice=n,this.apiservice=o,this.snack=i,this.ngxLoader=r,this.route=s,this.toast=a,this.loader=l,this.formData={},this.rows=[],this.columns=[],this.temp=[],this.user={firstName:"",lastName:"",email:"",password:"",roleId:"5ff5a043c51e0042898fe15e",phoneNumber:"",sex:""},this.genders=[{name:"Male",value:"male"},{name:"Female",value:"female"},{name:"Other",value:"other"}],this.rolesList=[],this.usersData={},this.show=!0,this.message="User Added Successfully!",this.action=!0,this.setAutoHide=!0,this.autoHide=4e3,this.horizontalPosition="center",this.verticalPosition="bottom";let d=new A.b;d.verticalPosition=this.verticalPosition,d.horizontalPosition=this.horizontalPosition,d.duration=this.setAutoHide?this.autoHide:0;let c=n.getOption();0===Object.keys(c).length&&c.constructor===Object?(this.formName="Add user",this.user.email=null,this.user.password=null):(this.user=c,this.formName="Edit User")}back(){this.route.navigate(["tables/filter"])}ngOnInit(){this.userForm=new r.g({firstName:new r.d("",r.u.required),lastName:new r.d("",r.u.required),email:new r.d("",r.u.required),password:new r.d(""),phoneNumber:new r.d("",r.u.required),sex:new r.d("",r.u.required),addressLine1:new r.d(""),addressLine2:new r.d(""),roleId:new r.d(""),city:new r.d(""),country:new r.d(""),zipCode:new r.d("")})}addUsers(){let e=this.user.email.toLowerCase();this.user.email=e,this.apiservice.addUsers(this.user).subscribe(e=>{console.log("resssssss",e)})}onSubmit(){if(this.submitted=!0,!this.user.id)return this.addUsers()}}return e.\u0275fac=function(t){return new(t||e)(C.Rb(P.a),C.Rb(o.a),C.Rb(N.a),C.Rb(j.a),C.Rb(A.a),C.Rb(B.b),C.Rb(o.j),C.Rb(F.b),C.Rb(R.a))},e.\u0275cmp=C.Lb({type:e,selectors:[["app-update-user"]],decls:46,vars:22,consts:[[1,"p-0"],[1,"title"],[1,"card-title-text"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap"],["fxFlex","100","fxFlex.gt-xs","50",1,"pr-1"],[1,"pb-1"],[1,"full-width"],["matInput","","name","firstName","placeholder","Name","formControlName","firstName",3,"ngModel","ngModelChange"],["matInput","","type","email","name","email","placeholder","Email","formControlName","email",3,"ngModel","ngModelChange"],["name","sex","placeholder","Gender","formControlName","sex",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","name","address_line1","placeholder","Address Line1",3,"formControl","ngModel","ngModelChange"],["matInput","","name","country","placeholder","Country",3,"formControl","ngModel","ngModelChange"],["matInput","","name","zip_code","placeholder","Zip Code","maxlength","6",3,"formControl","ngModel","ngModelChange"],["matInput","","name","lastName","placeholder","Last name",3,"formControl","ngModel","ngModelChange"],["class","pb-1",4,"ngIf"],["matInput","","name","phone","placeholder","Phone number","maxlength","10",3,"formControl","ngModel","ngModelChange"],["matInput","","name","address_line2","placeholder","Address Line2",3,"formControl","ngModel","ngModelChange"],["matInput","","name","city","placeholder","City",3,"formControl","ngModel","ngModelChange"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",1,"submitBtn",3,"disabled"],[3,"value"],["matInput","","name","password","placeholder","Password",3,"type","formControl","ngModel","ngModelChange"],["matSuffix","",1,"cursor-pointer",3,"click"]],template:function(e,t){1&e&&(C.Xb(0,"mat-card",0),C.Xb(1,"mat-card-title",1),C.Xb(2,"div",2),C.Wc(3),C.Wb(),C.Sb(4,"mat-divider"),C.Wb(),C.Xb(5,"mat-card-content"),C.Xb(6,"form",3),C.jc("ngSubmit",(function(){return t.onSubmit()})),C.Xb(7,"div",4),C.Xb(8,"div",5),C.Xb(9,"div",6),C.Xb(10,"mat-form-field",7),C.Xb(11,"input",8),C.jc("ngModelChange",(function(e){return t.user.firstName=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(12,"div",6),C.Xb(13,"mat-form-field",7),C.Xb(14,"input",9),C.jc("ngModelChange",(function(e){return t.user.email=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(15,"div",6),C.Xb(16,"mat-form-field",7),C.Xb(17,"mat-select",10),C.jc("ngModelChange",(function(e){return t.user.sex=e})),C.Uc(18,D,2,2,"mat-option",11),C.Wb(),C.Wb(),C.Wb(),C.Xb(19,"div",6),C.Xb(20,"mat-form-field",7),C.Xb(21,"input",12),C.jc("ngModelChange",(function(e){return t.user.addressLine1=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(22,"div",6),C.Xb(23,"mat-form-field",7),C.Xb(24,"input",13),C.jc("ngModelChange",(function(e){return t.user.country=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(25,"div",6),C.Xb(26,"mat-form-field",7),C.Xb(27,"input",14),C.jc("ngModelChange",(function(e){return t.user.zipCode=e})),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Xb(28,"div",5),C.Xb(29,"div",6),C.Xb(30,"mat-form-field",7),C.Xb(31,"input",15),C.jc("ngModelChange",(function(e){return t.user.lastName=e})),C.Wb(),C.Wb(),C.Wb(),C.Uc(32,G,5,4,"div",16),C.Xb(33,"div",6),C.Xb(34,"mat-form-field",7),C.Xb(35,"input",17),C.jc("ngModelChange",(function(e){return t.user.phoneNumber=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(36,"div",6),C.Xb(37,"mat-form-field",7),C.Xb(38,"input",18),C.jc("ngModelChange",(function(e){return t.user.addressLine2=e})),C.Wb(),C.Wb(),C.Wb(),C.Xb(39,"div",6),C.Xb(40,"mat-form-field",7),C.Xb(41,"input",19),C.jc("ngModelChange",(function(e){return t.user.city=e})),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Wb(),C.Xb(42,"button",20),C.jc("click",(function(){return t.back()})),C.Wc(43,"Back"),C.Wb(),C.Xb(44,"button",21),C.Wc(45,"Submit"),C.Wb(),C.Wb(),C.Wb(),C.Wb()),2&e&&(C.Cb(3),C.Xc(t.formName),C.Cb(3),C.uc("formGroup",t.userForm),C.Cb(5),C.uc("ngModel",t.user.firstName),C.Cb(3),C.uc("ngModel",t.user.email),C.Cb(3),C.uc("ngModel",t.user.sex),C.Cb(1),C.uc("ngForOf",t.genders),C.Cb(3),C.uc("formControl",t.userForm.controls.addressLine1)("ngModel",t.user.addressLine1),C.Cb(3),C.uc("formControl",t.userForm.controls.country)("ngModel",t.user.country),C.Cb(3),C.uc("formControl",t.userForm.controls.zipCode)("ngModel",t.user.zipCode),C.Cb(4),C.uc("formControl",t.userForm.controls.lastName)("ngModel",t.user.lastName),C.Cb(1),C.uc("ngIf",!t.user._id),C.Cb(3),C.uc("formControl",t.userForm.controls.phoneNumber)("ngModel",t.user.phoneNumber),C.Cb(3),C.uc("formControl",t.userForm.controls.addressLine2)("ngModel",t.user.addressLine2),C.Cb(3),C.uc("formControl",t.userForm.controls.city)("ngModel",t.user.city),C.Cb(3),C.uc("disabled",t.userForm.invalid))},directives:[a.a,a.d,I.a,a.b,r.w,r.o,r.h,O.c,O.a,k.a,b.b,r.b,r.n,r.f,S.a,i.m,r.e,r.j,i.n,s.a,d.p,u.a,k.d],styles:[".mat-card[_ngcontent-%COMP%]{box-shadow:none!important}.title[_ngcontent-%COMP%]{text-align:center}.submitBtn[_ngcontent-%COMP%]{align-items:flex-end;margin-left:15px}mat-icon[_ngcontent-%COMP%]{cursor:pointer}"]}),e})(),data:{title:"User",breadcrumb:"USER"}}]}];let Q=(()=>{class e{}return e.\u0275mod=C.Pb({type:e}),e.\u0275inj=C.Ob({factory:function(t){return new(t||e)},imports:[[i.c,r.i,r.s,b.c,m.c,a.c,c.c,d.n,h.b,f.a,l.a,S.b,s.b,u.b,p.a,g.a,M,y.d,x.a,o.n.forChild(E)]]}),e})()}}]);