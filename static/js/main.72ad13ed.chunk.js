(this.webpackJsonpecadastro=this.webpackJsonpecadastro||[]).push([[0],{89:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(24),o=n.n(s),r=(n(77),n(70)),i=n(10),j=n(91),d=n(92),l=n(66),b=n(98),h=n(96),u=n(36),O=n(52),x=n(2),p=function(){return Object(x.jsxs)(b.a,{bg:"success",variant:"dark",children:[Object(x.jsxs)(b.a.Brand,{children:[" ",Object(x.jsx)("h1",{children:Object(x.jsxs)("b",{children:[Object(x.jsx)(O.a,{})," E-cadastro"]})})]}),Object(x.jsxs)(h.a,{className:"mr-auto",children:[Object(x.jsx)(h.a.Link,{href:"#/",children:Object(x.jsxs)("h4",{children:[Object(x.jsx)(u.b,{})," In\xedcio "]})}),Object(x.jsx)(h.a.Link,{href:"#/cadastrosFuncionarios",children:Object(x.jsxs)("h4",{children:[Object(x.jsx)(u.a,{})," Cadastro de Funcion\xe1rios "]})})]})]})},f=function(){return Object(x.jsx)(b.a,{bg:"dark",fixed:"bottom",children:Object(x.jsx)(b.a.Brand,{className:"text-light",children:Object(x.jsxs)("h5",{children:[Object(x.jsx)(O.a,{})," E-cadastro \xa9 - Todos os direito reservados."]})})})},m=function(){return Object(x.jsxs)(j.a,{fluid:!0,className:"p-0",children:[Object(x.jsx)(p,{}),Object(x.jsx)(d.a,{children:Object(x.jsxs)(l.a,{xs:12,lg:6,children:[Object(x.jsx)("h1",{children:Object(x.jsx)("strong",{children:"Seja bem vindo ao E-cadastro!"})}),Object(x.jsx)("p",{children:Object(x.jsx)("h4",{children:"Fa\xe7a o cadastro de novos funcion\xe1rios no menu acima!"})})]})}),Object(x.jsx)(f,{})]})},g=n(30),v=n.n(g),C=n(7),k=n(3),y=n(57),E=n(8),F=n(97),S=n(93),I=n(94),w=n(95),N=n(100),L=n(99),A=n(67),T=n(68),G=n(69),z="https://cadastro-funcionarios-gti.herokuapp.com",B=function(){var e={nome:"",idade:"",genero:"",profissao:"",status:!0},t=Object(c.useState)(e),n=Object(E.a)(t,2),a=n[0],s=n[1],o=Object(c.useState)([]),r=Object(E.a)(o,2),i=r[0],b=r[1],h=Object(c.useState)(!1),O=Object(E.a)(h,2),m=O[0],g=O[1],B=Object(c.useState)({}),D=Object(E.a)(B,2),P=D[0],J=D[1],M=Object(c.useState)(""),_=Object(E.a)(M,2),q=_[0],H=_[1],R=Object(c.useState)(!1),U=Object(E.a)(R,2),K=U[0],Q=U[1],V=Object(c.useState)(!1),W=Object(E.a)(V,2),X=W[0],Y=W[1],Z=a.nome,$=a.idade,ee=a.genero,te=a.profissao,ne=a.status;function ce(){return ae.apply(this,arguments)}function ae(){return(ae=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),t="".concat(z,"/funcionarios"),e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){b(e)})).catch((function(e){console.error("Erro ao obeter o cadastro dos funcionarios: "+e.message)}));case 4:g(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){ce(),document.title="Cadastro de Funcionarios"}),[]);var se=function(){var e={};return Z&&""!==Z?Z.length>100?e.nome="O nome informado \xe9 muito grande!":Z.length<3&&(e.nome="O nome informado \xe9 muito curto!"):e.nome="O campo nome n\xe3o pode estar vazio!",$&&""!==$?$.length>3?e.idade="O campo idade n\xe3o pode ser maior que 999!":$<1&&(e.idade="Idade n\xe3o poder ser menor que 1"):e.idade="O campo idade n\xe3o pode estar vazio!",ee&&""!==ee||(e.genero="O campo genero n\xe3o pode estar vazio!"),te&&""!==te?te.length>100?e.profissao="A profissao informada \xe9 muito grande!":te.length<3&&(e.profissao="A profissao informada \xe9 muito curta!"):e.profissao="O campo profissao n\xe3o pode estar vazio!",e};function oe(){return(oe=Object(y.a)(v.a.mark((function t(n){var c,o,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=se(),!(Object.keys(c).length>0)){t.next=6;break}J(c),t.next=13;break;case 6:return Q(!0),o=a.hasOwnProperty("_id")?"PUT":"POST",a.status=!0===a.status||"ativo"===a.status?"ativo":"inativo",r="".concat(z,"/funcionarios"),t.next=12,fetch(r,{method:o,headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){t._id||t.message?H("Registro salvo com sucesso"):H(""),s(e),ce()})).catch((function(e){console.error("Erro ao salvar o campo: ".concat(e.message))}));case 12:Q(!1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function re(){return(re=Object(y.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(z,"/funcionarios/").concat(a._id),e.next=3,fetch(t,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.message?H(e.message):H(""),ce()})).catch((function(e){console.error("Erro ao excluir o funcionario: ".concat(e.message))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=function(e){s(Object(k.a)(Object(k.a)({},a),{},Object(C.a)({},e.target.name,e.target.value))),J({})};return Object(x.jsxs)(j.a,{fluid:!0,className:"p-0",children:[Object(x.jsx)(p,{}),Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(l.a,{xs:12,lg:4,children:[Object(x.jsxs)("h4",{children:["\xa0 ",Object(x.jsx)(A.a,{})," Cadastro dos Funcion\xe1rios"]}),Object(x.jsxs)(F.a,{method:"post",children:[Object(x.jsxs)(F.a.Group,{controlId:"nome",children:[Object(x.jsx)(F.a.Label,{children:"Nome do funcion\xe1rio"}),Object(x.jsx)(F.a.Control,{name:"nome",placeholder:"Ex: Jo\xe3o",value:Z,onChange:ie,isInvalid:!!P.nome}),Object(x.jsx)(F.a.Control.Feedback,{type:"invalid",children:P.nome})]}),Object(x.jsxs)(F.a.Group,{controlId:"idade",children:[Object(x.jsx)(F.a.Label,{children:"Idade do funcion\xe1rio"}),Object(x.jsx)(F.a.Control,{name:"idade",type:"number",placeholder:"Ex: 22",value:$,onChange:ie,isInvalid:!!P.idade}),Object(x.jsx)(F.a.Control.Feedback,{type:"invalid",children:P.idade})]}),Object(x.jsxs)(F.a.Group,{controlId:"genero",children:[Object(x.jsx)(F.a.Label,{children:"G\xeanero do funcion\xe1rio"}),Object(x.jsxs)(F.a.Select,{"aria-label":"Default select example",name:"genero",value:ee,onChange:ie,isInvalid:!!P.idade,children:[Object(x.jsx)("option",{children:"Selecione aqui"}),Object(x.jsx)("option",{value:"Masculino",children:"Masculino"}),Object(x.jsx)("option",{value:"Feminino",children:"Feminino"})]})]}),Object(x.jsxs)(F.a.Group,{controlId:"profissao",children:[Object(x.jsx)(F.a.Label,{children:"Profiss\xe3o do funcion\xe1rio"}),Object(x.jsx)(F.a.Control,{name:"profissao",placeholder:"Ex: Motorista",value:te,onChange:ie,isInvalid:!!P.profissao}),Object(x.jsx)(F.a.Control.Feedback,{type:"invalid",children:P.profissao})]}),Object(x.jsx)(F.a.Group,{controlId:"status",children:Object(x.jsx)(F.a.Check,{type:"checkbox",label:"Ativo",name:"status",onChange:function(e){return s(Object(k.a)(Object(k.a)({},a),{},Object(C.a)({},e.target.name,e.target.checked)))},checked:ne})}),Object(x.jsx)(S.a,{variant:"success",type:"submit",onClick:function(e){return function(e){return oe.apply(this,arguments)}(e)},title:"Cadastrar",children:K?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(I.a,{animation:"border",size:"sm"})," Aguarde..."]}):Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)(u.d,{})," Cadastrar novo funcion\xe1rio"]})})]})]}),Object(x.jsxs)(l.a,{xs:12,lg:8,children:[Object(x.jsxs)("h4",{children:["\xa0 ",Object(x.jsx)(T.a,{})," Listagem dos Funcion\xe1rios"]}),m&&Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(S.a,{variant:"success",disabled:!0,children:[Object(x.jsx)(I.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Carregando..."]})}),Object(x.jsxs)(w.a,{striped:!0,bordered:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{className:"bg-dark text-light",children:[Object(x.jsx)("th",{children:"Nome"}),Object(x.jsx)("th",{children:"Idade"}),Object(x.jsx)("th",{children:"Genero"}),Object(x.jsx)("th",{children:"Profiss\xe3o"}),Object(x.jsx)("th",{children:"Status"}),Object(x.jsx)("th",{children:"Inclus\xe3o"}),Object(x.jsx)("th",{children:"Op\xe7\xf5es"})]})}),Object(x.jsxs)("tbody",{children:[i.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.nome}),Object(x.jsx)("td",{children:e.idade}),Object(x.jsx)("td",{children:e.genero}),Object(x.jsx)("td",{children:e.profissao}),Object(x.jsx)("td",{children:e.status}),Object(x.jsx)("td",{children:new Date(e.createdAt).toLocaleDateString()}),Object(x.jsxs)("td",{children:[Object(x.jsx)(S.a,{variant:"success",title:"Editar os registos",children:Object(x.jsx)(G.a,{})}),"\xa0",Object(x.jsx)(S.a,{variant:"danger",title:"Deletar o registro",onClick:function(){Y(!0),s(e)},children:Object(x.jsx)(u.c,{})})]})]},e._id)})),Object(x.jsxs)("tr",{className:"bg-secondary text-light",children:[Object(x.jsx)("td",{colSpan:"6",children:"Total de registos"}),Object(x.jsx)("td",{children:i.length})]})]})]})]})]}),Object(x.jsxs)(N.a,{onClose:function(){return H("")},show:q.length>0,animation:!1,delay:4e3,autohide:!0,className:"bg-warning",style:{position:"absolute",top:10,right:10},children:[Object(x.jsx)(N.a.Header,{closeButton:!1,children:"Aviso"}),Object(x.jsx)(N.a.Body,{children:q})]}),Object(x.jsxs)(L.a,{animation:!1,show:X,onHide:function(){return Y(!1)},children:[Object(x.jsx)(L.a.Header,{children:Object(x.jsx)(L.a.Title,{children:"Confirma\xe7\xe3o da Exclus\xe3o"})}),Object(x.jsx)(L.a.Body,{children:"Confirma a exclus\xe3o do funcion\xe1rio selecionado?"}),Object(x.jsxs)(L.a.Footer,{children:[Object(x.jsx)(S.a,{variant:"danger",onClick:function(){return Y(!X)},children:"\u274cCancelar"}),Object(x.jsx)(S.a,{variant:"success",onClick:function(){!function(){re.apply(this,arguments)}(),Y(!X)},children:"\u2705Confirmar"})]})]}),Object(x.jsx)(f,{})]})};function D(){return Object(x.jsx)(r.a,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(x.jsx)(i.a,{exact:!0,path:"/cadastrosFuncionarios",component:B})]})})}var P=function(){return Object(x.jsx)(D,{})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(P,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.72ad13ed.chunk.js.map