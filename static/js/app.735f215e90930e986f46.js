webpackJsonp([1],{"1/oy":function(t,s){},"2sEj":function(t,s){},"31kQ":function(t,s){},"5z67":function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("MY-VUEJS")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("WELCOME")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/signin"}},[t._v("LOGIN")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/signup"}},[t._v("REGISTER")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/signout"}},[t._v("LOGOUT")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[t._v("CART")])],1)])])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}]};s.a=a},"9M+g":function(t,s){},AVMz:function(t,s){},GfHa:function(t,s){},Id91:function(t,s){},Jmt5:function(t,s){},M93x:function(t,s,e){"use strict";var a=e("xJD8"),n=e.n(a),r=e("5z67"),i=e("VU/8")(n.a,r.a,!1,null,null,null);s.default=i.exports},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n=e("M93x"),r=e("/ocq"),i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),e("tbody",[t._l(t.carts,function(s){return e("tr",{key:s.id},[e("td",[e("small",[t._v(t._s(s.name))])]),t._v(" "),e("td",[e("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:s.qty}})]),t._v(" "),e("td",{staticClass:"text-right"},[e("small",[t._v(t._s(t._f("currency")(s.price)))])]),t._v(" "),e("td",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-sm btn-danger"},[e("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])}),t._v(" "),e("tr",[t._m(1),t._v(" "),e("td",{staticClass:"text-right",attrs:{colspan:"3"}},[e("strong",[t._v(t._s(t._f("currency")(t.total)))])])])],2)])])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[s("small",[this._v("Product")])]),this._v(" "),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[s("small",[this._v("Quantity")])]),this._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"}},[s("small",[this._v("Price")])]),this._v(" "),s("th")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("strong",[this._v("Total")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col mb-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12  col-md-6"}),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-6 text-right"},[s("button",{staticClass:"btn btn-lg btn-block btn-success text-uppercase"},[this._v("Checkout")])])])])}]};var o={name:"Welcome",components:{CartSide:e("VU/8")({name:"CartSide",computed:{carts:function(){return this.$store.getters.carts},total:function(){return this.$store.getters.cartTotal},domain:function(){return this.$store.state.domainName}}},i,!1,function(t){e("AVMz")},"data-v-31559758",null).exports},created:function(){this.$store.dispatch("products")},computed:{products:function(){return this.$store.getters.products},domain:function(){return this.$store.state.domainName}},methods:{onView:function(t){this.$router.push("product-detail/"+t)},addProductToCart:function(t){this.$store.dispatch("addProductToCart",t)}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pt-md-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"row"},t._l(t.products,function(s){return e("div",{key:s.id,staticClass:"col-md-4"},[e("div",{staticClass:"card mb-4 shadow-sm"},[e("img",{staticClass:"card-img-top",attrs:{src:t.domain+"/img/products/"+s.foto}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(t._f("currency")(s.price)))]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.onView(s.id)}}},[t._v("View")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){t.addProductToCart(s)}}},[t._v("Buy")])]),t._v(" "),e("small",{staticClass:"text-muted"},[t._v("Stock: "+t._s(s.stock))])])])])])}))]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("CartSide")],1)])])},staticRenderFns:[]},l=e("VU/8")(o,c,!1,null,null,null).exports,u={name:"Signin",props:{dataSuccessMessage:{type:String}},data:function(){return{email:"",password:"",serverError:"",successMessage:this.dataSuccessMessage}},methods:{signin:function(){var t=this;this.$store.dispatch("login",{username:this.email,password:this.password}).then(function(s){t.$router.push({name:"Welcome"})}).catch(function(s){t.serverError=s.response.data,t.password="",t.successMessage=""})}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t.successMessage?e("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\r\n  "+t._s(t.successMessage)+"\r\n")]):t._e(),t._v(" "),t.serverError?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("\r\n    "+t._s(t.serverError)+"\r\n")]):t._e(),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.signin(s)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Email address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._v(" "),e("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])])])},staticRenderFns:[]},m=e("VU/8")(u,d,!1,null,null,null).exports,p=e("gRE1"),v=e.n(p),_={name:"Signup",data:function(){return{email:"",name:"",password:"",serverError:"",successMessage:""}},methods:{register:function(){var t=this;this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password}).then(function(s){t.successMessage="Pendaftaran berhasil, silahkan login",t.$router.push({name:"Signin",params:{dataSuccessMessage:t.successMessage}})}).catch(function(s){t.serverError=v()(s.response.data.errors)})}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[t.serverError?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},t._l(t.serverError,function(s,a){return e("ul",{key:a},[e("li",[t._v(t._s(s[0]))])])})):t._e(),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])])},staticRenderFns:[]},h=e("VU/8")(_,f,!1,null,null,null).exports,g={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},C=e("VU/8")({created:function(){var t=this;this.$store.dispatch("logout").then(function(s){t.$router.push("/")})}},g,!1,null,null,null).exports,b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container px-3 py-3 pt-md-5 pb-md-4 mx-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-5"},[e("article",{staticClass:"gallery-wrap"},[e("div",{staticClass:"img-big-wrap"},[e("div",[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:t.domain+"/img/products/"+t.productDetail.foto}})])])])])]),t._v(" "),e("div",{staticClass:"col-sm-7"},[e("h3",{staticClass:"title mb-3"},[t._v(t._s(t.productDetail.name))]),t._v(" "),e("p",{staticClass:"price-detail-wrap"},[e("span",{staticClass:"price h3 text-warning"},[e("span",{staticClass:"num"},[t._v(t._s(t._f("currency")(t.productDetail.price)))])])]),t._v(" "),e("dl",{staticClass:"item-property"},[e("dt",[t._v("Description")]),t._v(" "),e("dd",[e("p",[e("pre",[t._v(t._s(t.productDetail.description))])])])]),t._v(" "),e("hr"),t._v(" "),e("a",{staticClass:"btn btn-lg btn-primary text-uppercase",attrs:{href:"#"}},[t._v(" Buy now ")]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"btn btn-lg btn-outline-primary text-uppercase",attrs:{href:"#"}},[s("i",{staticClass:"fas fa-shopping-cart"}),this._v(" Continue Shopping ")])}]};var y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container px-3 py-3 pt-md-5 pb-md-4 mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"container mb-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped"},[t._m(1),t._v(" "),e("tbody",[t._l(t.carts,function(s){return e("tr",{key:s.id},[e("td",[e("img",{attrs:{src:t.domain+"/img/products/"+s.foto,width:"50px",height:"50px"}})]),t._v(" "),e("td",[t._v(t._s(s.name))]),t._v(" "),e("td",[e("input",{staticClass:"form-control",attrs:{type:"text"},domProps:{value:s.qty}})]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(s.price)))]),t._v(" "),e("td",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-sm btn-danger"},[e("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])}),t._v(" "),e("tr",[e("td"),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),t._m(2),t._v(" "),e("td",{staticClass:"text-right"},[e("strong",[t._v(t._s(t._f("currency")(t.total)))])])])],2)])])]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"jumbotron text-center"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"jumbotron-heading"},[this._v("CART")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),this._v(" "),s("th",{attrs:{scope:"col"}},[this._v("Product")]),this._v(" "),s("th",{staticClass:"text-center",attrs:{scope:"col"}},[this._v("Quantity")]),this._v(" "),s("th",{staticClass:"text-right",attrs:{scope:"col"}},[this._v("Price")]),this._v(" "),s("th")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("strong",[this._v("Total")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col mb-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12  col-md-6"},[s("button",{staticClass:"btn btn-block btn-light"},[this._v("Continue Shopping")])]),this._v(" "),s("div",{staticClass:"col-sm-12 col-md-6 text-right"},[s("button",{staticClass:"btn btn-lg btn-block btn-success text-uppercase"},[this._v("Checkout")])])])])}]};var w=[{path:"/",name:"Welcome",component:l},{path:"/product-detail/:id",name:"ProductDetail",component:e("VU/8")({name:"ProductDetail",props:["id"],created:function(){this.$store.dispatch("productDetail",{id:this.id})},computed:{productDetail:function(){return this.$store.getters.productDetail},domain:function(){return this.$store.state.domainName}}},b,!1,function(t){e("2sEj")},"data-v-3471727d",null).exports,props:!0},{path:"/cart",name:"Cart",component:e("VU/8")({name:"Cart",computed:{carts:function(){return this.$store.getters.carts},total:function(){return this.$store.getters.cartTotal},domain:function(){return this.$store.state.domainName}}},y,!1,function(t){e("31kQ")},"data-v-7659ee71",null).exports},{path:"/signin",name:"Signin",component:m,props:!0},{path:"/signup",name:"Signup",component:h},{path:"/signout",name:"Sigout",component:C}],x=e("//Fk"),k=e.n(x),$=e("NYxO"),E=e("mtWM"),P=e.n(E);a.a.use($.a),P.a.defaults.baseURL="https://tutashop.irfanmg.com/api";var S=new $.a.Store({state:{token:localStorage.getItem("access_token")||null,products:[],domainName:"https://tutashop.irfanmg.com",productDetail:[],cart:[]},mutations:{setToken:function(t,s){t.token=s},destroyToken:function(t){t.token=null},setProducts:function(t,s){t.products=s},setProductDetail:function(t,s){t.productDetail=s},pushProductToCart:function(t,s){t.cart.push({id:s,qty:1})},incrementItemQty:function(t,s){s.qty++},decrementProductStock:function(t,s){s.stock--}},actions:{register:function(t,s){return new k.a(function(t,e){P.a.post("/register",{name:s.name,email:s.email,password:s.password}).then(function(s){t(s)}).catch(function(t){e(t)})})},login:function(t,s){return new k.a(function(e,a){P.a.post("/login",{username:s.username,password:s.password}).then(function(s){var a=s.data.access_token;console.log(s.data),localStorage.setItem("access_token",a),t.commit("setToken",a),e(s)}).catch(function(t){console.log(t),a(t)})})},logout:function(t){if(P.a.defaults.headers.common.Authorization="Bearer "+t.state.token,t.getters.loggedIn)return new k.a(function(s,e){P.a.post("/logout").then(function(e){localStorage.removeItem("access_token"),t.commit("destroyToken"),s(e)}).catch(function(s){localStorage.removeItem("access_token"),t.commit("destroyToken"),e(s)})})},products:function(t){P.a.get("/products/get").then(function(s){t.commit("setProducts",s.data.products)}).catch(function(t){console.log(t)})},productDetail:function(t,s){P.a.get("/products/get-detail/"+s.id).then(function(s){console.log(s.data),t.commit("setProductDetail",s.data)}).catch(function(t){console.log(t)})},addProductToCart:function(t,s){var e=t.state.cart.find(function(t){return t.id===s.id});e?t.commit("incrementItemQty",e):t.commit("pushProductToCart",s.id),t.commit("decrementProductStock",s)}},getters:{products:function(t){return t.products},productDetail:function(t){return t.productDetail.detail},carts:function(t){return t.cart.map(function(s){var e=t.products.find(function(t){return t.id===s.id});return{name:e.name,price:e.price,qty:s.qty,foto:e.foto}})},cartTotal:function(t,s){return s.carts.reduce(function(t,s){return t+s.price*s.qty},0)}}}),T=e("iFuF"),D=e.n(T),M=e("e6fC"),N=(e("Jmt5"),e("9M+g"),e("C/JF")),R=e("fhbW"),V=e("U0v6");N.library.add(R.a,R.b),a.a.use(M.a),a.a.component("font-awesome-icon",V.FontAwesomeIcon),a.a.use(r.a),a.a.use(D.a,{symbol:"Rp.",thousandsSeparator:".",fractionCount:0,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}),a.a.config.productionTip=!1;var F=new r.a({routes:w});new a.a({el:"#app",router:F,store:S,components:{App:n.default},template:"<App/>"})},xJD8:function(t,s){},zj2Q:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.735f215e90930e986f46.js.map