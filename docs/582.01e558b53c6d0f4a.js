"use strict";(self.webpackChunkcomputer_store=self.webpackChunkcomputer_store||[]).push([[582],{7582:(v,u,a)=>{a.r(u),a.d(u,{CarrinhoModule:()=>x});var c=a(433),l=a(6895),s=a(9541),t=a(1571),d=a(5087);function C(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"li"),t._UZ(1,"img",6),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.ALo(6,"currency"),t.qZA(),t.TgZ(7,"label"),t._uU(8," Quantidade: "),t.TgZ(9,"input",7),t.NdJ("ngModelChange",function(e){const h=t.CHM(n).$implicit;return t.KtG(h.quantidade=e)})("change",function(){t.CHM(n);const e=t.oxw(2);return t.KtG(e.calcularTotal())}),t.qZA()(),t.TgZ(10,"button",8),t.NdJ("click",function(){const p=t.CHM(n).$implicit,h=t.oxw(2);return t.KtG(h.removerDoCarrinho(p.id))}),t._UZ(11,"i",9),t.qZA()()}if(2&o){const n=i.$implicit;t.xp6(1),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.hij(" ",n.descricao," "),t.xp6(2),t.hij(" ",t.xi3(6,4,n.preco,"")," "),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function m(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"ul"),t.YNc(2,C,12,7,"li",3),t.qZA(),t.TgZ(3,"h2",4),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.compraFinalizada())}),t._uU(7,"Comprar"),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(2),t.Q6J("ngForOf",n.itemsCarrinho),t.xp6(2),t.hij("Total: ",t.xi3(5,2,n.total,"BRL")," ")}}function g(o,i){1&o&&t._uU(0,"Nenhum produto foi adicionado ao carrinho")}const f=[{path:"",component:(()=>{class o{constructor(n,r){this.serviceCarrinho=n,this.route=r,this.itemsCarrinho=[],this.total=0}ngOnInit(){this.itemsCarrinho=this.serviceCarrinho.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itemsCarrinho.reduce((n,r)=>n+r.quantidade*r.preco,0)}removerDoCarrinho(n){this.itemsCarrinho=this.itemsCarrinho.filter(r=>r.id!==n),this.serviceCarrinho.removerDoCarrinho(n),this.calcularTotal()}compraFinalizada(){alert("Parab\xe9ns, voc\xea finalizou sua compra!"),this.serviceCarrinho.limparCarrinho(),this.route.navigate(["produtos"])}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.e),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["carrinhoVazio",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],["alt","",3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(n,r){if(1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,m,8,5,"div",1),t.YNc(3,g,1,0,"ng-template",null,2,t.W1O)),2&n){const e=t.MAs(4);t.xp6(2),t.Q6J("ngIf",r.itemsCarrinho.length>0)("ngIfElse",e)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(f),s.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,_,c.u5]}),o})()}}]);