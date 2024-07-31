"use strict";(self.webpackChunkgifsApp=self.webpackChunkgifsApp||[]).push([[89],{7089:(f,a,o)=>{o.r(a),o.d(a,{default:()=>p});var l=o(7078),e=o(4438),m=o(3326),r=o(4341),u=o(177),d=o(4685);let g=(()=>{class i{constructor(s){this.formBuilder=s,this.authService=(0,e.WQX)(d.u),this.registerForm=this.formBuilder.group({name:["",[r.k0.required,r.k0.minLength(4)]],email:["",[r.k0.required,r.k0.email]],username:["",[r.k0.required,r.k0.minLength(4)]],password:["",[r.k0.required]]})}ngOnInit(){}onSubmit(){this.registerForm.valid&&this.authService.register(this.registerForm.value).subscribe(t=>{console.log("User registered successfully",t)},t=>{console.error("Error registering user",t)})}static#e=this.\u0275fac=function(t){return new(t||i)(e.rXU(r.ok))};static#r=this.\u0275cmp=e.VBU({type:i,selectors:[["app-register-page"]],standalone:!0,features:[e.aNF],decls:58,vars:13,consts:[[1,"bg-orange-400","flex","items-center","justify-center","h-screen"],[1,"bg-white","mx-2","p-6","rounded-lg","shadow-lg","w-full","max-w-sm"],[1,"text-4xl","font-bold","text-center","text-orange-400"],[1,"text-sm","text-gray-700","mb-6","text-center"],["autocomplete","off",1,"space-y-4",3,"ngSubmit","formGroup"],[1,"block","text-sm","font-medium","text-gray-700"],["type","text","formControlName","name","required","",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-orange-500","focus:border-orange-500","sm:text-sm"],["type","email","formControlName","email",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-orange-500","focus:border-orange-500","sm:text-sm"],[1,"text-sm","text-red-500"],["type","text","formControlName","username",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-orange-500","focus:border-orange-500","sm:text-sm"],["type","password","formControlName","password","pattern","^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$","required","",1,"mt-1","block","w-full","px-3","py-2","border","border-gray-300","rounded-md","shadow-sm","focus:outline-none","focus:ring-orange-500","focus:border-orange-500","sm:text-sm"],[1,"flex","items-center"],["id","terms","name","terms","type","checkbox","required","",1,"h-4","w-4","text-orange-600","focus:ring-orange-500","border-gray-300","rounded"],[1,"ml-2","block","text-sm","text-gray-900"],["href","#",1,"text-orange-600","hover:text-orange-500"],["type","submit",1,"w-full","bg-orange-500","text-white","px-4","py-2","rounded-md","shadow","hover:bg-orange-600","focus:outline-none","focus:ring-2","focus:ring-offset-2","focus:ring-orange-500"],[1,"mt-6","text-center","text-sm","text-gray-600"],["routerLink","/auth/login",1,"text-orange-600","hover:text-orange-500"]],template:function(t,n){1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"h2",2),e.EFF(3,"Ordenaly"),e.k0s(),e.j41(4,"p",3),e.EFF(5,"Registro de usuario"),e.k0s(),e.j41(6,"form",4),e.bIt("ngSubmit",function(){return n.onSubmit()}),e.j41(7,"div")(8,"label",5),e.EFF(9,"Nombre"),e.k0s(),e.nrm(10,"input",6),e.k0s(),e.j41(11,"div")(12,"label",5),e.EFF(13,"Email"),e.k0s(),e.nrm(14,"input",7),e.j41(15,"span",8),e.EFF(16,"Email es requerido"),e.k0s()(),e.j41(17,"div")(18,"label",5),e.EFF(19,"Nombre de usuario"),e.k0s(),e.nrm(20,"input",9),e.k0s(),e.j41(21,"div")(22,"label",5),e.EFF(23,"Contrase\xf1a"),e.k0s(),e.nrm(24,"input",10),e.k0s(),e.j41(25,"div",11),e.nrm(26,"input",12),e.j41(27,"label",13),e.EFF(28,"Acepto los "),e.j41(29,"a",14),e.EFF(30,"t\xe9rminos y condiciones"),e.k0s()()(),e.j41(31,"div")(32,"button",15),e.EFF(33,"Registrar"),e.k0s()()(),e.j41(34,"p",16),e.EFF(35," \xbfYa tienes una cuenta? "),e.j41(36,"a",17),e.EFF(37,"Inicia sesi\xf3n"),e.k0s()()()(),e.j41(38,"p"),e.EFF(39,"\xbfFormulario valido?: "),e.j41(40,"span")(41,"pre"),e.EFF(42),e.nI1(43,"json"),e.k0s()()(),e.j41(44,"p"),e.EFF(45,"\xbfFormulario intacto? "),e.k0s(),e.j41(46,"span")(47,"pre"),e.EFF(48),e.nI1(49,"json"),e.k0s()(),e.j41(50,"p"),e.EFF(51,"\xbfFormulario manipulado? "),e.k0s(),e.j41(52,"pre"),e.EFF(53),e.nI1(54,"json"),e.k0s(),e.j41(55,"pre"),e.EFF(56),e.nI1(57,"json"),e.k0s()),2&t&&(e.R7$(6),e.Y8G("formGroup",n.registerForm),e.R7$(36),e.JRh(e.bMT(43,5,n.registerForm.valid)),e.R7$(6),e.JRh(e.bMT(49,7,n.registerForm.pristine)),e.R7$(5),e.JRh(e.bMT(54,9,n.registerForm.touched)),e.R7$(3),e.JRh(e.bMT(57,11,n.registerForm.controls[""])))},dependencies:[u.MD,u.TG,m.iI,m.Wk,r.YN,r.qT,r.me,r.BC,r.cb,r.YS,r.R_,r.X1,r.j4,r.JD],encapsulation:2})}return i})();var c=o(4135);const p=[{path:"",children:[{path:"login",component:l.X},{path:"register",component:g},{path:"x",component:c.Z}]}]}}]);