"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[465],{4465:(ft,v,r)=>{r.r(v),r.d(v,{ProductModule:()=>_t});var g=r(4755),h=r(2480),y=r(3144),s=r(9401),q=r(2944),E=r(4800),P=r(3276),D=r(2611),A=r(5437),t=r(2223),b=r(4289),S=r(3966),O=r(9016),F=r(430),J=r(8097),M=r(9114),I=r(2214),c=r(3204);function L(o,l){1&o&&(t.TgZ(0,"th",34),t._uU(1," SKU "),t.qZA())}function w(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",n.SKU," ")}}function k(o,l){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Danh m\u1ee5c"),t.qZA())}function Q(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",n.Danhmuc.Title," ")}}function Y(o,l){1&o&&(t.TgZ(0,"th",36),t._uU(1," Th\u01b0\u01a1ng hi\u1ec7u "),t.qZA())}function H(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",n.Thuonghieu," ")}}function G(o,l){1&o&&(t.TgZ(0,"th",36),t._uU(1,"S\u1ea3n ph\u1ea9m"),t.qZA())}function B(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",n.Tieude," ")}}function K(o,l){1&o&&(t.TgZ(0,"th",37),t._uU(1," Tra\u0323ng tha\u0301i "),t.qZA())}function $(o,l){if(1&o&&(t.TgZ(0,"td",38),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",1===n.Trangthai?"Sale":2===n.Trangthai?"H\u1ebft h\xe0ng":"M\u1edbi"," ")}}function j(o,l){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Gia\u0301"),t.qZA())}function z(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.Gia,"VND")," ")}}function R(o,l){1&o&&(t.TgZ(0,"th",36),t._uU(1,"Hi\u0300nh a\u0309nh"),t.qZA())}const X=function(o){return{hidden:o}};function W(o,l){if(1&o&&(t.TgZ(0,"td",35),t._UZ(1,"img",39),t.qZA()),2&o){const n=l.$implicit;t.xp6(1),t.MGl("src","https://drive.google.com/uc?id=",n.Image,"",t.LSH),t.Q6J("ngClass",t.VKq(2,X,""===n.image))}}function V(o,l){1&o&&t._UZ(0,"th",36)}function tt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"td",35)(1,"button",40),t.NdJ("click",function(){const i=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.selectProduct(i))}),t.TgZ(2,"span",41),t.NdJ("click",function(){t.CHM(n),t.oxw();const a=t.MAs(3);return t.KtG(a.opened=!0)}),t._uU(3,"edit"),t.qZA(),t._uU(4),t.TgZ(5,"span",42),t.NdJ("click",function(){const i=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.deleteProduct(i.id))}),t._uU(6," delete "),t.qZA()()()}if(2&o){const n=l.$implicit;t.xp6(2),t.s9C("routerLink",n.Slug),t.xp6(2),t.hij(" ",n.Slug," ")}}function et(o,l){1&o&&t._UZ(0,"tr",43)}function nt(o,l){1&o&&t._UZ(0,"tr",44),2&o&&t.Q6J("cdkDragData",l.$implicit)}const ot=function(){return[10,25,100]};let it=(()=>{class o{constructor(n,e,a,i){this.fb=n,this._productService=e,this._danhmucService=a,this.isSelectProduct=!1,this.percentage=0,this.listKeyRemove=[],this.listkey={},this.listimage=[],this.isupdateListImage=!1,this.chipsnhan=[],this.Tags={},this.i=0,this.displayedColumns=["sku","danhmuc","name","thuonghieu","status","price","Image","action"],this.notifier=i}onSubmit(){this.resetForm()}drop(n){const e=this.dataSource.findIndex(u=>u.id===n.item.data.id);let a=this.dataSource[e],i=this.dataSource[n.currentIndex];a.Ordering=n.currentIndex,e>n.currentIndex&&(i.Ordering=n.currentIndex+1),e<n.currentIndex&&(i.Ordering=n.currentIndex-1),this._productService.updateProduct(a).subscribe(),this._productService.updateProduct(i).subscribe(),(0,A.bA)(this.dataSource,e,n.currentIndex)}applyFilter(n){this.dataSource.filter=n.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}selectProduct(n){this.resetForm(),this.listimage=[],this.isSelectProduct=!0,this.thumb=n.Image,this.listkey=n.ListImage||{},this.Tags=n.Tags}selectFile(n){this.selectedFiles=n.target.files}onUpdate(){console.log("ss")}onDelete(){this._productService.deleteSanpham(this.productList.value).subscribe(n=>{this.resetForm(),this.notifier.notify("success","X\xf3a s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng"),this.isSelectProduct=!1,this.thumb=""})}deleteProduct(n){this._productService.deleteSanpham(n).subscribe(e=>{e&&alert("Xo\xe1 s\u1ea3n ph\u1ea9m th\xe0nh c\xf4ng")})}selectionDanhmuc(n){this.danhmucs.find(e=>{})}resetForm(){this.productList={Tieude:"",Mota:" ",Thanhphan:"",Huongdan:"",idDM:"",Khoiluong:"",Thuonghieu:"",Code:"",Slug:"",SKU:"",Tags:{},ListImage:{},ContentImage:this.fb.group({contentImage1:"",contentImage2:"",contentImage3:""}),GiaSale:0,Gia:0,Image:"",Type:"",Thongtin:"",Ordering:0,Trangthai:0},this.listimage=[],this.Tags={},this.chipsnhan=[],this.isSelectProduct=!1}ngOnInit(){this.resetForm(),this._productService.getProduct().subscribe(),this._productService.products$.subscribe(n=>{n&&(console.log(n),this.products=n,this.products=this.products.filter(e=>!e.sort),this.products?.sort((e,a)=>e.Ordering-a.Ordering),this.dataSource=this.products,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort)})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(b.M),t.Y36(S.f),t.Y36(O.lG))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tazagroup-product"]],viewQuery:function(n,e){if(1&n&&(t.Gf(P.NW,5),t.Gf(D.YE,5)),2&n){let a;t.iGM(a=t.CRH())&&(e.paginator=a.first),t.iGM(a=t.CRH())&&(e.sort=a.first)}},decls:51,vars:7,consts:[[1,"flex","flex-col","flex-auto","w-full","product"],["autosize","",1,"example-container"],["mode","side","opened","false","position","end",1,"example-sidenav","relative","w-2/3","px-4","py-2"],["drawer",""],[1,"text-2xl","text-center","pb-5","font-bold"],[1,"material-icons","absolute","left-5","top-5","cursor-pointer",3,"click"],[1,"example-sidenav-content","w-full"],[1,"flex","flex-col","w-full"],[1,"text-2xl","text-center","py-2","font-bold"],[1,"flex","items-center"],[1,"fuse-mat-no-subscript","rounded-full","m-auto","w-full","p-2"],["matInput","","type","text","placeholder","T\xecm Ki\u1ebfm",1,"w-full","min-w-0","py-1","border-0",3,"maxLength","keyup"],["input",""],["matPrefix",""],[1,"material-icons"],[1,"material-icons","ml-2","mr-3","cursor-pointer",3,"click"],[1,"w-full","overflow-auto"],["mat-table","","matSort","","cdkDropList","",1,"w-full","product-table",3,"dataSource","cdkDropListData"],["matColumnDef","sku"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","danhmuc"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","thuonghieu"],["matColumnDef","name"],["matColumnDef","status"],["mat-header-cell","","class","text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["matColumnDef","price"],["matColumnDef","Image"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","cdkDrag","",3,"cdkDragData",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-header-cell","",1,"text-center"],["mat-cell","",1,"text-center"],[1,"w-10","h-10","object-contain",3,"src","ngClass"],[1,"text-blue-400","flex","items-center",3,"click"],[1,"material-icons","text-lg","mr-2",3,"routerLink","click"],["title","Xo\xe1",1,"material-icons","cursor-pointer","text-red-500",3,"click"],["mat-header-row",""],["mat-row","","cdkDrag","",3,"cdkDragData"]],template:function(n,e){if(1&n){const a=t.EpF();t.TgZ(0,"div",0)(1,"mat-drawer-container",1)(2,"mat-drawer",2,3)(4,"div",4),t._uU(5," S\u1ea3n ph\u1ea9m chi ti\u1ebft "),t.qZA(),t.TgZ(6,"span",5),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(3);return t.KtG(u.close())}),t._uU(7," highlight_off "),t.qZA(),t._UZ(8,"router-outlet"),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8),t._uU(12," Danh s\xe1ch s\u1ea3n ph\u1ea9m "),t.qZA(),t.TgZ(13,"div",9)(14,"mat-form-field",10)(15,"input",11,12),t.NdJ("keyup",function(u){return e.applyFilter(u)}),t.qZA(),t.TgZ(17,"mat-icon",13)(18,"span",14),t._uU(19," search "),t.qZA()()(),t.TgZ(20,"span",15),t.NdJ("click",function(){t.CHM(a);const u=t.MAs(3);return t.KtG(u.toggle())})("click",function(){return e.resetForm()}),t._uU(21," add_circle_outline "),t.qZA()(),t.TgZ(22,"div",16)(23,"table",17),t.ynx(24,18),t.YNc(25,L,2,0,"th",19),t.YNc(26,w,2,1,"td",20),t.BQk(),t.ynx(27,21),t.YNc(28,k,2,0,"th",22),t.YNc(29,Q,2,1,"td",20),t.BQk(),t.ynx(30,23),t.YNc(31,Y,2,0,"th",22),t.YNc(32,H,2,1,"td",20),t.BQk(),t.ynx(33,24),t.YNc(34,G,2,0,"th",22),t.YNc(35,B,2,1,"td",20),t.BQk(),t.ynx(36,25),t.YNc(37,K,2,0,"th",26),t.YNc(38,$,2,1,"td",27),t.BQk(),t.ynx(39,28),t.YNc(40,j,2,0,"th",22),t.YNc(41,z,3,4,"td",20),t.BQk(),t.ynx(42,29),t.YNc(43,R,2,0,"th",22),t.YNc(44,W,2,4,"td",20),t.BQk(),t.ynx(45,30),t.YNc(46,V,1,0,"th",22),t.YNc(47,tt,7,2,"td",20),t.BQk(),t.YNc(48,et,1,0,"tr",31),t.YNc(49,nt,1,1,"tr",32),t.qZA(),t._UZ(50,"mat-paginator",33),t.qZA()()()()()}2&n&&(t.xp6(15),t.Q6J("maxLength",30),t.xp6(8),t.Q6J("dataSource",e.dataSource)("cdkDropListData",e.dataSource),t.xp6(25),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,ot)))},dependencies:[g.mk,A.Wj,A.Zt,F.Hw,J.Nt,M.KE,M.qo,P.NW,I.jA,I.kh,D.YE,D.nU,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,h.lC,h.rH,g.H9],styles:[".product[_ngcontent-%COMP%]   .mat-drawer-container[_ngcontent-%COMP%]{height:100vh}"]}),o})();var N=r(6729),at=r(6550),lt=r(4355),rt=r(1217),ut=r(787);function dt(o,l){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.Title)}}function ct(o,l){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n.Tieude)}}function st(o,l){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const n=l.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n.Tieude)}}function pt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"div",35),t._UZ(1,"img",24),t.TgZ(2,"span",36),t.NdJ("click",function(){const i=t.CHM(n).$implicit,u=t.oxw();return t.KtG(u.removeImage(i.key))}),t._uU(3," cancel "),t.qZA()()}if(2&o){const n=l.$implicit;t.xp6(1),t.MGl("src","https://drive.google.com/uc?id=",n.value,"",t.LSH)}}function gt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"span",37),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.onSubmit())}),t._uU(1,"T\u1ea1o m\u1edbi"),t.qZA()}}function mt(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"span",38),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.updateSanpham())}),t._uU(1,"C\u1eadp nh\u1eadt"),t.qZA()}}const d=function(){return{standalone:!0}},ht=function(o,l){return{"":o,"hover:bg-white hover:text-blue-500":l}};let x=(()=>{class o{constructor(n,e,a,i,u){this._productService=n,this._DanhmucService=e,this.route=a,this.sanitizer=i,this._tagService=u,this.danhmucs=[],this.ListImage={},this.tagsTinhtrangData=[],this.tagsLoaiSpData=[],this.configTiny={plugins:"lists link image table code help wordcount media save",toolbar:"undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image media save",image_advtab:!1,image_description:!0,image_dimensions:!1,block_unsupported_drop:!0,images_reuse_filename:!0,paste_data_images:!1,height:"300px",images_upload_handler:p=>{const _=p.blob(),Z=new FormData;return Z.append("file",_),new Promise((f,U)=>{this._productService.uploadDriver(Z).subscribe(T=>{T&&f(`https://drive.google.com/uc?id=${T.idDrive}`)})})},entity_encoding:"raw",file_picker_types:"image media",file_picker_callback:function(p,_,Z){if("media"==Z.filetype){const m=document.createElement("input");m.setAttribute("type","file"),m.setAttribute("accept","image/*"),m.setAttribute("accept","media/*"),m.onchange=function(){const f=m.files[0],U=new FileReader;this.file=f;const T=new FormData;T.append("file",f),fetch(N.N.APIURL+"/upload/file",{method:"POST",body:T}).then(C=>C.json()).then(C=>p(`https://drive.google.com/uc?id=${C.idDrive}`)).catch(C=>console.log(C)),U.readAsDataURL(f)},m.click()}}},this.APITINYMCE=N.N.APITINYMCE}onFileBrowse(n,e){const a=n.target.files[0],i=new FormData;i.append("file",a),this._productService.uploadDriver(i).subscribe(u=>{u&&(1==e?this.product.Image=u.idDrive:2==e?this.product.Image1=u.idDrive:3==e?this.product.ContentImage=u.idDrive:4==e&&(this.product.Imagecachsudung=u.idDrive))})}selectFile(n){this.selectedFiles=n.target.files}removeImage(n){delete this.product.ListImage[n]}uploadListImage(){if(this.selectedFiles){const n=Object.keys(this.ListImage).length;for(let e=0;e<this.selectedFiles.length;e++){const a=this.selectedFiles[e];if(a){const i=new FormData;i.append("file",a);new Promise(p=>{this._productService.uploadDriver(i).subscribe(_=>{_&&p(_.idDrive)})}).then(n>0?p=>{this.ListImage[e+n]=p}:p=>{this.ListImage[e]=p})}}this.selectedFiles=void 0}}selectTags(){}onSubmit(){this._productService.postProduct(this.product).subscribe()}updateSanpham(){console.log(this.product),console.log(this.product);const n=this.tagsLoaiSpData.concat(this.tagsTinhtrangData);this.product.Tags=n,this._productService.updateProduct(this.product).subscribe(e=>{e&&alert("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng")})}compareFn(n,e){return n.id==e.id}ngOnInit(){this.product={Tieude:"",Mota:" ",Thanhphan:"",Huongdan:"",idDM:"",Khoiluong:"",Thuonghieu:"",Code:"",Slug:"",SKU:"",Tags:[],ListImage:{},ContentImage:"",GiaSale:0,Gia:0,Image:"",Type:"",Thongtin:"",Ordering:0,Trangthai:0},this._DanhmucService.getDanhmucs().subscribe(),this._DanhmucService.danhmucs$.subscribe(n=>{n&&(this.danhmucs=n)}),this._tagService.getTags().subscribe(),this._tagService.tags$.subscribe(n=>{n&&(this.tags=n,this.tinhtrangdas=n.filter(e=>0==e.Loaitag),this.loaisanphams=n.filter(e=>1==e.Loaitag))}),this.ListImage=this.product.ListImage,this.route.params.subscribe(n=>{this.slug=n.slug,this.slug&&(this._productService.getProductDetail(this.slug).subscribe(),this._productService.product$.subscribe(e=>{e&&(this.product=e,this.tagsLoaiSpData=this.product.Tags.filter(a=>1==a.Loaitag),this.tagsTinhtrangData=this.product.Tags.filter(a=>0==a.Loaitag),this.ListImage=this.product.ListImage)}))})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(b.M),t.Y36(S.f),t.Y36(h.gz),t.Y36(at.H7),t.Y36(lt.i))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tazagroup-product-detail"]],decls:110,vars:95,consts:[["action",""],[1,"flex","flex-col","space-y-4","px-2"],[1,"example-full-width","hidden"],["matInput","","placeholder","M\xe3 s\u1ea3n ph\u1ea9m","value","",3,"ngModel","ngModelOptions","ngModelChange"],["appearance","outline",1,"w-full"],[3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"example-full-width"],["matInput","","placeholder","T\xean s\u1ea3n ph\u1ea9m","value","",3,"ngModel","ngModelOptions","ngModelChange"],[3,"apiKey","ngModel","ngModelOptions","init","ngModelChange"],["hidden","","matInput","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Slug","value","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Th\u01b0\u01a1ng hi\u1ec7u","value","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Tr\u1ea1ng th\xe1i","value","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","T\xecnh Tr\u1ea1ng","value","",3,"ngModel","ngModelOptions","ngModelChange"],["multiple","",3,"ngModel","ngModelOptions","ngModelChange"],["value","0"],["value","1"],["matInput","","placeholder","Gi\xe1 s\u1ea3n ph\u1ea9m","value","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Gi\xe1 Sale","value","",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","hidden","",3,"ngModel","ngModelOptions","ngModelChange"],["multiple","",3,"ngModel","ngModelOptions","compareWith","ngModelChange"],["for","",1,"font-bold"],["type","file","accept","image/*",3,"change"],["alt","",3,"src"],[1,"flex","flex-col","space-y-3"],[1,"font-bold"],["type","file","multiple","",1,"text-nowrap","text-truncate",3,"change"],[1,"w-1/2","border-2","border-blue-500","p-2","bg-blue-500","text-white",3,"ngClass","disabled","click"],[1,"grid","grid-cols-2","gap-5"],["class","relative",4,"ngFor","ngForOf"],[1,"flex","items-center"],["class","px-3 py-1 text-white rounded bg-green-500 cursor-pointer",3,"click",4,"ngIf"],["class","px-3 py-1 text-white rounded bg-blue-500 cursor-pointer",3,"click",4,"ngIf"],[3,"value"],[1,"relative"],[1,"material-icons","absolute","right-[-10px]","top-[-10px]","cursor-pointer",3,"click"],[1,"px-3","py-1","text-white","rounded","bg-green-500","cursor-pointer",3,"click"],[1,"px-3","py-1","text-white","rounded","bg-blue-500","cursor-pointer",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"M\xe3 s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(5,"input",3),t.NdJ("ngModelChange",function(i){return e.product.SKU=i}),t.qZA()(),t.TgZ(6,"mat-form-field",4)(7,"mat-label"),t._uU(8,"Danh m\u1ee5c"),t.qZA(),t.TgZ(9,"mat-select",5),t.NdJ("ngModelChange",function(i){return e.product.idDM=i}),t.YNc(10,dt,2,2,"mat-option",6),t.qZA()(),t.TgZ(11,"mat-form-field",7)(12,"mat-label"),t._uU(13,"T\xean s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(14,"input",8),t.NdJ("ngModelChange",function(i){return e.product.Tieude=i}),t.qZA()(),t.TgZ(15,"mat-form-field",7)(16,"p"),t._uU(17,"M\xf4 t\u1ea3"),t.qZA(),t.TgZ(18,"editor",9),t.NdJ("ngModelChange",function(i){return e.product.Mota=i}),t.qZA(),t.TgZ(19,"textarea",10),t.NdJ("ngModelChange",function(i){return e.product.Mota=i}),t.qZA()(),t.TgZ(20,"mat-form-field",7)(21,"mat-label"),t._uU(22,"Slug"),t.qZA(),t.TgZ(23,"input",11),t.NdJ("ngModelChange",function(i){return e.product.Slug=i}),t.qZA()(),t.TgZ(24,"mat-form-field",7)(25,"mat-label"),t._uU(26,"Th\u01b0\u01a1ng hi\u1ec7u"),t.qZA(),t.TgZ(27,"input",12),t.NdJ("ngModelChange",function(i){return e.product.Thuonghieu=i}),t.qZA()(),t.TgZ(28,"mat-form-field",7)(29,"mat-label"),t._uU(30,"Tr\u1ea1ng th\xe1i"),t.qZA(),t.TgZ(31,"input",13),t.NdJ("ngModelChange",function(i){return e.product.Trangthai=i}),t.qZA()(),t.TgZ(32,"mat-form-field",7)(33,"mat-label"),t._uU(34,"T\xecnh Tr\u1ea1ng"),t.qZA(),t.TgZ(35,"input",14),t.NdJ("ngModelChange",function(i){return e.product.Tinhtrang=i}),t.qZA()(),t.TgZ(36,"mat-form-field",4)(37,"mat-label"),t._uU(38,"S\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt"),t.qZA(),t.TgZ(39,"mat-select",15),t.NdJ("ngModelChange",function(i){return e.product.Noibat=i}),t.TgZ(40,"mat-option",16),t._uU(41,"S\u1ea3n ph\u1ea9m y\xeau th\xedch nh\u1ea5t"),t.qZA(),t.TgZ(42,"mat-option",17),t._uU(43,"S\u1ea3n ph\u1ea9m b\xe1n ch\u1ea1y"),t.qZA()()(),t.TgZ(44,"mat-form-field",7)(45,"mat-label"),t._uU(46,"Gi\xe1 s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(47,"input",18),t.NdJ("ngModelChange",function(i){return e.product.Gia=i}),t.qZA()(),t.TgZ(48,"mat-form-field",7)(49,"mat-label"),t._uU(50,"Gi\xe1 Sale"),t.qZA(),t.TgZ(51,"input",19),t.NdJ("ngModelChange",function(i){return e.product.GiaSale=i}),t.qZA()(),t.TgZ(52,"mat-form-field",7)(53,"p"),t._uU(54,"Th\xe0nh ph\u1ea7n n\u1ed5i b\u1eadt"),t.qZA(),t.TgZ(55,"editor",9),t.NdJ("ngModelChange",function(i){return e.product.Thannhphannoibat=i}),t.qZA(),t.TgZ(56,"textarea",10),t.NdJ("ngModelChange",function(i){return e.product.Thannhphannoibat=i}),t.qZA()(),t.TgZ(57,"mat-form-field",7)(58,"p"),t._uU(59,"Th\xe0nh ph\u1ea7n chi ti\u1ebft"),t.qZA(),t.TgZ(60,"editor",9),t.NdJ("ngModelChange",function(i){return e.product.Thannhphanchitiet=i}),t.qZA(),t.TgZ(61,"textarea",10),t.NdJ("ngModelChange",function(i){return e.product.Thannhphanchitiet=i}),t.qZA()(),t.TgZ(62,"mat-form-field",7)(63,"p"),t._uU(64,"H\u01b0\u1edbng d\u1eabn"),t.qZA(),t.TgZ(65,"editor",9),t.NdJ("ngModelChange",function(i){return e.product.Huongdan=i}),t.qZA(),t.TgZ(66,"textarea",20),t.NdJ("ngModelChange",function(i){return e.product.Huongdan=i}),t.qZA()(),t.TgZ(67,"mat-form-field",7)(68,"p"),t._uU(69,"Lo\u1ea1i da ph\xf9 h\u1ee3p"),t.qZA(),t.TgZ(70,"editor",9),t.NdJ("ngModelChange",function(i){return e.product.Loaidaphuhop=i}),t.qZA(),t.TgZ(71,"textarea",20),t.NdJ("ngModelChange",function(i){return e.product.Loaidaphuhop=i}),t.qZA()(),t.TgZ(72,"mat-form-field",4)(73,"mat-label"),t._uU(74,"T\xecnh tr\u1ea1ng da"),t.qZA(),t.TgZ(75,"mat-select",21),t.NdJ("ngModelChange",function(i){return e.tagsTinhtrangData=i})("ngModelChange",function(){return e.selectTags()}),t.YNc(76,ct,2,2,"mat-option",6),t.qZA()(),t.TgZ(77,"mat-form-field",4)(78,"mat-label"),t._uU(79,"Lo\u1ea1i s\u1ea3n ph\u1ea9m"),t.qZA(),t.TgZ(80,"mat-select",21),t.NdJ("ngModelChange",function(i){return e.tagsLoaiSpData=i})("ngModelChange",function(){return e.selectTags()}),t.YNc(81,st,2,2,"mat-option",6),t.qZA()(),t.TgZ(82,"label",22),t._uU(83,"Content Image"),t.qZA(),t.TgZ(84,"input",23),t.NdJ("change",function(i){return e.onFileBrowse(i,3)}),t.qZA(),t._UZ(85,"img",24),t.TgZ(86,"label",22),t._uU(87,"H\xecnh c\xe1ch s\u1eed d\u1ee5ng"),t.qZA(),t.TgZ(88,"input",23),t.NdJ("change",function(i){return e.onFileBrowse(i,4)}),t.qZA(),t._UZ(89,"img",24),t.TgZ(90,"label",22),t._uU(91,"H\xecnh Thumbnail"),t.qZA(),t.TgZ(92,"input",23),t.NdJ("change",function(i){return e.onFileBrowse(i,1)}),t.qZA(),t._UZ(93,"img",24),t.TgZ(94,"label",22),t._uU(95,"H\xecnh 2"),t.qZA(),t.TgZ(96,"input",23),t.NdJ("change",function(i){return e.onFileBrowse(i,2)}),t.qZA(),t._UZ(97,"img",24),t.TgZ(98,"div",25)(99,"label",26),t._uU(100,"Danh s\xe1ch h\xecnh"),t.qZA(),t.TgZ(101,"input",27),t.NdJ("change",function(i){return e.selectFile(i)}),t.qZA(),t.TgZ(102,"button",28),t.NdJ("click",function(){return e.uploadListImage()}),t._uU(103," Upload File H\xecnh "),t.qZA(),t.TgZ(104,"div",29),t.YNc(105,pt,4,1,"div",30),t.ALo(106,"keyvalue"),t.qZA()(),t.TgZ(107,"div",31),t.YNc(108,gt,2,0,"span",32),t.YNc(109,mt,2,0,"span",33),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngModel",e.product.SKU)("ngModelOptions",t.DdM(70,d)),t.xp6(4),t.Q6J("ngModel",e.product.idDM)("ngModelOptions",t.DdM(71,d)),t.xp6(1),t.Q6J("ngForOf",e.danhmucs),t.xp6(4),t.Q6J("ngModel",e.product.Tieude)("ngModelOptions",t.DdM(72,d)),t.xp6(4),t.Q6J("apiKey",e.APITINYMCE)("ngModel",e.product.Mota)("ngModelOptions",t.DdM(73,d))("init",e.configTiny),t.xp6(1),t.Q6J("ngModel",e.product.Mota)("ngModelOptions",t.DdM(74,d)),t.xp6(4),t.Q6J("ngModel",e.product.Slug)("ngModelOptions",t.DdM(75,d)),t.xp6(4),t.Q6J("ngModel",e.product.Thuonghieu)("ngModelOptions",t.DdM(76,d)),t.xp6(4),t.Q6J("ngModel",e.product.Trangthai)("ngModelOptions",t.DdM(77,d)),t.xp6(4),t.Q6J("ngModel",e.product.Tinhtrang)("ngModelOptions",t.DdM(78,d)),t.xp6(4),t.Q6J("ngModel",e.product.Noibat)("ngModelOptions",t.DdM(79,d)),t.xp6(8),t.Q6J("ngModel",e.product.Gia)("ngModelOptions",t.DdM(80,d)),t.xp6(4),t.Q6J("ngModel",e.product.GiaSale)("ngModelOptions",t.DdM(81,d)),t.xp6(4),t.Q6J("apiKey",e.APITINYMCE)("ngModel",e.product.Thannhphannoibat)("ngModelOptions",t.DdM(82,d))("init",e.configTiny),t.xp6(1),t.Q6J("ngModel",e.product.Thannhphannoibat)("ngModelOptions",t.DdM(83,d)),t.xp6(4),t.Q6J("apiKey",e.APITINYMCE)("ngModel",e.product.Thannhphanchitiet)("ngModelOptions",t.DdM(84,d))("init",e.configTiny),t.xp6(1),t.Q6J("ngModel",e.product.Thannhphanchitiet)("ngModelOptions",t.DdM(85,d)),t.xp6(4),t.Q6J("apiKey",e.APITINYMCE)("ngModel",e.product.Huongdan)("ngModelOptions",t.DdM(86,d))("init",e.configTiny),t.xp6(1),t.Q6J("ngModel",e.product.Huongdan)("ngModelOptions",t.DdM(87,d)),t.xp6(4),t.Q6J("apiKey",e.APITINYMCE)("ngModel",e.product.Loaidaphuhop)("ngModelOptions",t.DdM(88,d))("init",e.configTiny),t.xp6(1),t.Q6J("ngModel",e.product.Loaidaphuhop)("ngModelOptions",t.DdM(89,d)),t.xp6(4),t.Q6J("ngModel",e.tagsTinhtrangData)("ngModelOptions",t.DdM(90,d))("compareWith",e.compareFn),t.xp6(1),t.Q6J("ngForOf",e.tinhtrangdas),t.xp6(4),t.Q6J("ngModel",e.tagsLoaiSpData)("ngModelOptions",t.DdM(91,d))("compareWith",e.compareFn),t.xp6(1),t.Q6J("ngForOf",e.loaisanphams),t.xp6(4),t.MGl("src","https://drive.google.com/uc?id=",e.product.ContentImage,"",t.LSH),t.xp6(4),t.MGl("src","https://drive.google.com/uc?id=",e.product.Imagecachsudung,"",t.LSH),t.xp6(4),t.MGl("src","https://drive.google.com/uc?id=",e.product.Image,"",t.LSH),t.xp6(4),t.MGl("src","https://drive.google.com/uc?id=",e.product.Image1,"",t.LSH),t.xp6(5),t.Q6J("ngClass",t.WLB(92,ht,!e.selectedFiles,e.selectedFiles))("disabled",!e.selectedFiles),t.xp6(3),t.Q6J("ngForOf",t.lcZ(106,68,e.product.ListImage)),t.xp6(3),t.Q6J("ngIf",!e.slug),t.xp6(1),t.Q6J("ngIf",e.slug))},dependencies:[g.mk,g.sg,g.O5,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,rt.ey,J.Nt,M.KE,M.hX,ut.gD,E.PG,g.Nd]}),o})(),_t=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,s.u5,y.JF,q.q,s.UX,E.Z_,h.Bz.forChild([{path:"",component:it,children:[{path:":slug",component:x},{path:"",component:x}]}]),h.Bz]}),o})()}}]);