(function(e){function t(t){for(var i,a,l=t[0],s=t[1],o=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&b.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,o||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],i=!0,l=1;l<c.length;l++){var s=c[l];0!==r[s]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=c[0]))}return e}var i={},r={app:0},n=[];function a(t){if(i[t])return i[t].exports;var c=i[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=i,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(c,i,function(t){return e[t]}.bind(null,i));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-pos/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var u=s;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"19c3":function(e,t,c){},a2ee:function(e,t,c){},a709:function(e,t,c){"use strict";c("b62d")},b62d:function(e,t,c){},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var i=c("7a23"),r={class:"flex flex-row h-full w-full bg-gray-50 min-w-[1000px]"},n={id:"nav",class:"flex flex-col font-bold w-12 min-w-[3rem] text-2xl bg-blue-800 text-white"},a=Object(i["i"])("div",{class:"w-full text-center py-6"},[Object(i["i"])("i",{class:"far fa-file-alt"})],-1),l=Object(i["i"])("div",{class:"w-full text-center py-6"},[Object(i["i"])("i",{class:"far fa-chart-bar"})],-1),s=Object(i["i"])("div",{class:"w-full text-center py-6"},[Object(i["i"])("i",{class:"fas fa-sliders-h"})],-1),o={class:"flex-1 flex flex-row justify-center"};function u(e,t,c,u,d,b){var f=Object(i["B"])("router-link"),j=Object(i["B"])("router-view");return Object(i["s"])(),Object(i["e"])("div",r,[Object(i["i"])("div",n,[Object(i["i"])(f,{to:"/entry",class:"flex-1 flex justify-center items-center"},{default:Object(i["I"])((function(){return[a]})),_:1}),Object(i["i"])(f,{to:"/history",class:"flex-1 flex justify-center items-center"},{default:Object(i["I"])((function(){return[l]})),_:1}),Object(i["i"])(f,{to:"/settings",class:"flex-1 flex justify-center items-center"},{default:Object(i["I"])((function(){return[s]})),_:1})]),Object(i["i"])("div",o,[Object(i["i"])(j,{class:"flex-1"})])])}var d=c("5502"),b=Object(i["j"])({setup:function(){var e=Object(d["b"])();return e.commit("loadData"),{store:e}}});c("a709");b.render=u;var f=b,j=c("6c02"),O=(c("b0c0"),Object(i["K"])("data-v-7bdf29ca"));Object(i["v"])("data-v-7bdf29ca");var v={class:"flex flex-row h-full"},p={class:"flex flex-col content-start p-2 w-7/12"},x={class:"flex flex-row flex-wrap justify-around overflow-auto"},m={class:"font-bold"},y={class:"text-gray-500"},w={class:"flex flex-row justify-around font-bold text-2xl"},g=Object(i["i"])("div",{class:"flex-1"},null,-1),h={class:"bg-white rounded-xl m-2 text-center shadow w-[30rem] self-center text-lg"},C={class:""},k={class:"flex flex-row justify-around leading-[4rem] p-1 border-b"},A={class:"flex flex-row justify-around leading-[4rem] p-1"},D={id:"cart",class:"flex-1 flex flex-col justify-center text-sm w-6/12 shadow bg-white p-5 min-w-[480px]"},q=Object(i["i"])("h2",{class:"font-bold text-4xl pb-2"},"Cart",-1),S={class:"text-lg"},P=Object(i["g"])('<div class="font-bold flex flex-row text-center py-2 border-b" data-v-7bdf29ca><div class="w-6/12 text-left" data-v-7bdf29ca> Article</div><div class="w-2/12" data-v-7bdf29ca> Quantity</div><div class="w-2/12" data-v-7bdf29ca> Price</div><div class="w-2/12" data-v-7bdf29ca> Total</div></div>',1),I={class:"w-6/12 text-left"},E={class:"w-2/12"},M={class:"w-2/12"},T={class:"w-2/12"},J={class:"my-5 text-lg "},_={class:"flex font-bold py-1"},z=Object(i["i"])("div",{class:"w-3/12"},"Total",-1),N={class:"w-2/12 font-bold text-right"},F={class:"flex py-1"},B=Object(i["i"])("div",{class:"w-3/12"},"Cash",-1),H={class:"w-2/12 text-right"},K={class:"flex py-1"},R=Object(i["i"])("div",{class:"w-3/12"},"Return",-1),U={class:"w-2/12 text-right"},V=Object(i["i"])("div",{class:"flex-1"},null,-1),$={class:"text-xl flex flex-row justify-around"},G=Object(i["i"])("i",{class:"far fa-save px-2"},null,-1),L=Object(i["h"])(" Checkout");Object(i["t"])();var W=O((function(e,t,c,r,n,a){return Object(i["s"])(),Object(i["e"])("div",v,[Object(i["i"])("div",p,[Object(i["i"])("div",x,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(e.sortedArticles,(function(t){return Object(i["s"])(),Object(i["e"])("div",{key:t,class:" text-xl mb-2 p-3 w-[200px] bg-white rounded text-center shadow"},[Object(i["i"])("div",m,Object(i["D"])(t.name),1),Object(i["i"])("div",y,Object(i["D"])(t.price)+" €",1),Object(i["i"])("div",w,[Object(i["i"])("button",{class:"hover:bg-blue-100 rounded-full p-2 text-blue-800 w-4/12",onClick:function(c){return e.decreaseCart(t)}},"-",8,["onClick"]),Object(i["i"])("button",{class:"hover:bg-blue-100 rounded-full p-2 text-blue-800 w-4/12",onClick:function(c){return e.increaseCart(t)}},"+",8,["onClick"])])])})),128))]),g,Object(i["i"])("div",h,[Object(i["i"])("div",C,[Object(i["i"])("div",k,[(Object(i["s"])(),Object(i["e"])(i["a"],null,Object(i["z"])(["1","2","3","4","5","6"],(function(t){return Object(i["i"])("div",{key:t,onClick:function(c){return e.updateCashReturn(t)},class:"w-16 h-16 hover:bg-gray-100 rounded-full cursor-pointer"},Object(i["D"])(t),9,["onClick"])})),64))]),Object(i["i"])("div",A,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(["7","8","9","0","C","."],(function(t){return Object(i["s"])(),Object(i["e"])("div",{key:t,onClick:function(c){return e.updateCashReturn(t)},class:"w-16 h-16 hover:bg-gray-100 rounded-full cursor-pointer"},Object(i["D"])(t),9,["onClick"])})),128))])])])]),Object(i["i"])("div",D,[q,Object(i["i"])("div",S,[P,(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(e.store.state.cart,(function(e){return Object(i["s"])(),Object(i["e"])("div",{key:e,class:"flex flex-row text-center py-2 border-b"},[Object(i["i"])("div",I,Object(i["D"])(e.name),1),Object(i["i"])("div",E,Object(i["D"])(e.quantity),1),Object(i["i"])("div",M,Object(i["D"])(e.price)+" € ",1),Object(i["i"])("div",T,Object(i["D"])(e.quantity*e.price)+" € ",1)])})),128))]),Object(i["i"])("div",J,[Object(i["i"])("div",_,[z,Object(i["i"])("div",N,Object(i["D"])(e.store.getters.cartTotalPrice)+" €",1)]),Object(i["i"])("div",F,[B,Object(i["i"])("div",H,Object(i["D"])(e.cash)+" €",1)]),Object(i["i"])("div",K,[R,Object(i["i"])("div",U,Object(i["D"])(Math.round(100*(e.cash-e.store.getters.cartTotalPrice))/100)+" €",1)])]),V,Object(i["i"])("div",$,[Object(i["i"])("button",{class:"hover:bg-gray-100 rounded-full px-4 py-2 text-gray-600",onClick:t[1]||(t[1]=function(t){return e.resetCart()})},"Cancel order"),Object(i["i"])("button",{class:"bg-blue-800 hover:bg-blue-700 text-white rounded-full px-5 py-2 font-bold",onClick:t[2]||(t[2]=function(t){return e.checkoutCart()})},[G,L])])])])})),Q=(c("fb6a"),Object(i["K"])("data-v-58630543"));Object(i["v"])("data-v-58630543");var X={key:0,id:"ctn",class:"bg-gray-900 text-white shadow py-3 px-5 rounded flex flex-row items-center"},Y=Object(i["i"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"white"},[Object(i["i"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1);Object(i["t"])();var Z=Q((function(e,t,c,r,n,a){return Object(i["s"])(),Object(i["e"])("div",null,[Object(i["i"])(i["b"],{name:"fade"},{default:Q((function(){return[e.showing?(Object(i["s"])(),Object(i["e"])("div",X,[Object(i["i"])("div",null,Object(i["D"])(e.message),1),Object(i["i"])("button",{class:"ml-5 w-8 h-8 leading-8 rounded-full flex flex-row justify-center items-center\n\t\t\t\t\t\t\tfocus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 focus:bg-gray-500\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\thover:bg-gray-500",onClick:t[1]||(t[1]=function(t){return e.close()})},[Y])])):Object(i["f"])("",!0)]})),_:1})])})),ee=Object(i["j"])({props:{message:String},setup:function(e){var t=Object(i["x"])(!1);function c(){t.value=!1}return Object(i["q"])((function(){return t.value=!0})),{showing:t,close:c}}});c("fcca");ee.render=Z,ee.__scopeId="data-v-58630543";var te=ee,ce={showToast:function(e){var t=document.createElement("div");document.body.appendChild(t);var c=Object(i["i"])(te,{message:e},null);Object(i["y"])(c,t),setTimeout((function(){Object(i["y"])(null,t),document.body.removeChild(t)}),2500)}},ie={install:function(e){e.provide("Toaster",ce)}};var re=Object(i["j"])({setup:function(){var e=Object(d["b"])(),t=e.state.articles,c=Object(i["x"])(0),r=Object(i["x"])("C"),n=Object(i["c"])((function(){var t=e.state.articles.slice();return t.sort((function(e,t){return e.name.localeCompare(t.name)}))}));function a(t){e.commit("increaseCart",t)}function l(t){e.commit("decreaseCart",t)}function s(){window.confirm("Order will be cancelled")&&e.commit("resetCart")}function o(){e.state.cart.length>0&&(e.commit("checkoutCart"),ce.showToast("Transaction saved in the history"),c.value=0)}function u(e){"C"===e?c.value=0:"."===r.value?c.value=parseFloat(c.value+"."+e):c.value=parseFloat(c.value+e),console.log("Key : "+e+" / Previous : "+r.value+" / Total : "+c.value),r.value=e}return{store:e,articles:t,sortedArticles:n,increaseCart:a,decreaseCart:l,resetCart:s,checkoutCart:o,updateCashReturn:u,cash:c,previousKey:r}}});re.render=W,re.__scopeId="data-v-7bdf29ca";var ne=re,ae={class:"overflow-auto w-full"},le={class:"max-w-[1000px] m-auto px-3 py-4"},se={class:"bg-white shadow"},oe={class:"flex flex-row p-2"},ue={class:"w-6/12 p-2 flex flex-col justify-around"},de={class:"flex flex-row"},be=Object(i["i"])("div",{class:"text-gray-500 w-8/12 text-right pr-5 self-center"},"Number of transactions",-1),fe={class:"text-4xl"},je={class:"flex flex-row"},Oe=Object(i["i"])("div",{class:"text-gray-500 w-8/12 text-right pr-5 self-center"},"Sum of revenue",-1),ve={class:"text-4xl"},pe={class:"w-6/12 p-2"},xe=Object(i["i"])("div",{class:"text-gray-500 mb-2"},"Top 3 selling articles",-1),me={class:"flex flex-row items-center"},ye={class:"w-4/12"},we={class:"w-2/12"},ge={class:"w-6/12"},he={class:"mt-2"},Ce={key:0},ke={class:"flex flex-row p-2 items-center bg-white shadow mb-2"},Ae={class:"w-2/12 flex justify-center"},De={class:"w-2/12 flex justify-center"},qe={class:"w-7/12"},Se={class:"w-4/12 text-right"},Pe={class:"pl-3"},Ie={class:"w-1/12 flex justify-center"},Ee=Object(i["i"])("i",{class:"far fa-trash-alt"},null,-1);function Me(e,t,c,r,n,a){return Object(i["s"])(),Object(i["e"])("div",ae,[Object(i["i"])("div",le,[Object(i["i"])("div",se,[Object(i["i"])("div",oe,[Object(i["i"])("div",ue,[Object(i["i"])("div",de,[be,Object(i["i"])("div",fe,Object(i["D"])(e.store.getters.numberOfTransactions),1)]),Object(i["i"])("div",je,[Oe,Object(i["i"])("div",ve,Object(i["D"])(e.store.getters.transactionsTotalPrice)+" €",1)])]),Object(i["i"])("div",pe,[xe,(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(e.store.getters.topSellingArticles,(function(e){return Object(i["s"])(),Object(i["e"])("div",{class:"text-base",key:e},[Object(i["i"])("div",me,[Object(i["i"])("div",ye,Object(i["D"])(e.name),1),Object(i["i"])("div",we,Object(i["D"])(e.quantity),1),Object(i["i"])("div",ge,[Object(i["i"])("div",{class:"bg-blue-600 rounded h-[5px]",style:{width:e.progress+"%"}},null,4)])])])})),128))])])]),Object(i["i"])("div",he,[0===e.store.state.transactions.length?(Object(i["s"])(),Object(i["e"])("div",Ce,"No transaction to show")):Object(i["f"])("",!0),(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(e.transactions,(function(c){return Object(i["s"])(),Object(i["e"])("div",{key:c,class:""},[Object(i["i"])("div",ke,[Object(i["i"])("div",Ae,"#"+Object(i["D"])(c.id),1),Object(i["i"])("div",De,Object(i["D"])(c.totalPrice)+" €",1),Object(i["i"])("div",qe,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(c.cart,(function(e){return Object(i["s"])(),Object(i["e"])("div",{key:e,class:"flex flex-row"},[Object(i["i"])("div",Se,Object(i["D"])(e.quantity),1),Object(i["i"])("div",Pe,Object(i["D"])(e.name),1)])})),128))]),Object(i["i"])("div",Ie,[Object(i["i"])("button",{class:"w-12 h-12 text-center cursor-pointer hover:bg-red-100 rounded-full text-red-500",onClick:t[1]||(t[1]=function(t){return e.removeArticle(e.article.id,e.article.name)})},[Ee])])])])})),128))])])])}var Te=Object(i["j"])({setup:function(){var e=Object(d["b"])(),t=Object(i["c"])((function(){return e.state.transactions.slice(0).reverse()}));return{store:e,transactions:t}}});Te.render=Me;var Je=Te,_e={class:"overflow-auto w-full"},ze={class:"max-w-[1000px] m-auto px-3 py-4"},Ne=Object(i["i"])("h1",{class:"font-bold text-4xl pb-4"},"Settings",-1),Fe={class:"bg-white shadow p-4 text-lg"},Be={class:"flex flex-row mb-2"},He=Object(i["i"])("h2",{class:"flex-1 font-bold text-2xl pb-2"},"Edit articles",-1),Ke=Object(i["i"])("i",{class:"fas fa-plus pr-2"},null,-1),Re=Object(i["h"])(" Add an article"),Ue=Object(i["g"])('<div class="flex flex-row font-bold py-2 border-b text-lg"><div class="flex-1">Article</div><div class="w-2/12">Price</div><div class="w-1/12"></div><div class="w-1/12"></div></div>',1),Ve={class:"flex-1"},$e={class:"w-2/12"},Ge={class:"w-1/12"},Le=Object(i["i"])("i",{class:"far fa-edit"},null,-1),We={class:"w-1/12"},Qe=Object(i["i"])("i",{class:"far fa-trash-alt"},null,-1),Xe={class:"bg-white shadow p-4 mt-3 flex flex-row justify-around text-base"},Ye=Object(i["i"])("i",{class:"far fa-file-alt pr-2"},null,-1),Ze=Object(i["h"])(" Load demo data "),et=Object(i["i"])("i",{class:"far fa-trash-alt pr-2"},null,-1),tt=Object(i["h"])(" Delete all data "),ct=Object(i["h"])(" Add an article "),it={class:"flex flex-row items-center mb-2"},rt=Object(i["i"])("div",{class:"w-5/12"},"Article name",-1),nt={class:"flex flex-row  items-center mb-2"},at=Object(i["i"])("div",{class:"w-5/12"},"Price (€)",-1),lt={class:"flex justify-around flex-row"},st=Object(i["h"])(" Edit an article "),ot={class:"flex flex-row items-center mb-2"},ut=Object(i["i"])("div",{class:"w-5/12"},"Article name",-1),dt={class:"flex flex-row  items-center mb-2"},bt=Object(i["i"])("div",{class:"w-5/12"},"Price (€)",-1),ft={class:"flex justify-around flex-row"};function jt(e,t,c,r,n,a){var l=Object(i["B"])("Modal");return Object(i["s"])(),Object(i["e"])("div",_e,[Object(i["i"])("div",ze,[Ne,Object(i["i"])("div",Fe,[Object(i["i"])("div",Be,[He,Object(i["i"])("button",{class:"self-center bg-blue-800 hover:bg-blue-700 text-white rounded-full px-5 py-1 font-bold text-base",onClick:t[1]||(t[1]=function(t){return e.modalContext="NewArticle"})},[Ke,Re])]),Ue,(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["z"])(e.articles,(function(t){return Object(i["s"])(),Object(i["e"])("div",{key:t,class:"flex flex-row border-b last:border-0 py-1 items-center"},[Object(i["i"])("div",Ve,Object(i["D"])(t.name),1),Object(i["i"])("div",$e,Object(i["D"])(t.price)+" €",1),Object(i["i"])("div",Ge,[Object(i["i"])("div",{class:"w-10 h-10 leading-[2.5rem] text-center cursor-pointer hover:bg-gray-100 rounded-full text-gray-500",onClick:function(c){return e.editArticle(t)}},[Le],8,["onClick"])]),Object(i["i"])("div",We,[Object(i["i"])("div",{class:"w-10 h-10 leading-[2.5rem] text-center cursor-pointer hover:bg-red-100 rounded-full text-red-500",onClick:function(c){return e.removeArticle(t.id,t.name)}},[Qe],8,["onClick"])])])})),128))]),Object(i["i"])("div",Xe,[Object(i["i"])("button",{class:"hover:bg-gray-100 rounded-full py-1 px-4",onClick:t[2]||(t[2]=function(t){return e.loadDemo()})},[Ye,Ze]),Object(i["i"])("button",{class:"hover:bg-red-100 rounded-full text-red-500 py-1 px-4",onClick:t[3]||(t[3]=function(t){return e.deleteAllData()})},[et,tt])]),Object(i["J"])(Object(i["i"])(l,{onClose:e.closeModal},{title:Object(i["I"])((function(){return[ct]})),content:Object(i["I"])((function(){return[Object(i["i"])("div",it,[rt,Object(i["J"])(Object(i["i"])("input",{class:"border-2 border-gray-100 p-2","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.newArticle.name=t}),placeholder:"Article name",type:"text"},null,512),[[i["F"],e.newArticle.name]])]),Object(i["i"])("div",nt,[at,Object(i["J"])(Object(i["i"])("input",{class:"border-2 border-gray-100 p-2","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.newArticle.price=t}),type:"number"},null,512),[[i["F"],e.newArticle.price]])])]})),footer:Object(i["I"])((function(){return[Object(i["i"])("div",lt,[Object(i["i"])("button",{onClick:t[6]||(t[6]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)}),class:"hover:bg-gray-100 rounded-full px-3"},"Cancel"),Object(i["i"])("button",{onClick:t[7]||(t[7]=function(t){return e.addArticle(e.newArticle)}),class:"hover:bg-blue-100 rounded-full px-3 h-8 text-blue-800 font-bold"},"Add article")])]})),_:1},8,["onClose"]),[[i["G"],"NewArticle"===e.modalContext]]),Object(i["J"])(Object(i["i"])(l,{onClose:e.closeModal},{title:Object(i["I"])((function(){return[st]})),content:Object(i["I"])((function(){return[Object(i["i"])("div",ot,[ut,Object(i["J"])(Object(i["i"])("input",{class:"border-2 border-gray-100 p-2","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.articleEdited.name=t}),placeholder:"Nom de l'article",type:"text"},null,512),[[i["F"],e.articleEdited.name]])]),Object(i["i"])("div",dt,[bt,Object(i["J"])(Object(i["i"])("input",{class:"border-2 border-gray-100 p-2","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.articleEdited.price=t}),type:"number"},null,512),[[i["F"],e.articleEdited.price]])])]})),footer:Object(i["I"])((function(){return[Object(i["i"])("div",ft,[Object(i["i"])("button",{onClick:t[10]||(t[10]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)}),class:"hover:bg-gray-100 rounded-full px-3"},"Cancel"),Object(i["i"])("button",{onClick:t[11]||(t[11]=function(t){return e.saveEdition(e.articleEdited)}),class:"hover:bg-blue-100 rounded-full px-3 h-8 text-blue-800 font-bold"},"Save article")])]})),_:1},8,["onClose"]),[[i["G"],"EditArticle"===e.modalContext]])])])}var Ot=Object(i["K"])("data-v-43dd1c25");Object(i["v"])("data-v-43dd1c25");var vt={id:"modal",class:"flex flex-row justify-center items-center pt-10"},pt={class:"ctn bg-white p-4 rounded-lg"},xt={class:"flex flex-row"},mt={class:"flex-1 text-xl font-bold pb-5"},yt=Object(i["h"])("Modal tile"),wt=Object(i["i"])("i",{class:"fas fa-times"},null,-1),gt=Object(i["h"])("Modal body"),ht={class:"pt-10"},Ct=Object(i["h"])("Modal footer");Object(i["t"])();var kt=Ot((function(e,t,c,r,n,a){return Object(i["s"])(),Object(i["e"])("div",vt,[Object(i["i"])("div",pt,[Object(i["i"])("div",xt,[Object(i["i"])("div",mt,[Object(i["A"])(e.$slots,"title",{},(function(){return[yt]}),{},!0)]),Object(i["i"])("button",{class:" h-8 w-8 leading-8 text-center hover:bg-gray-100 rounded-full",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})},[wt])]),Object(i["A"])(e.$slots,"content",{},(function(){return[gt]}),{},!0),Object(i["i"])("div",ht,[Object(i["A"])(e.$slots,"footer",{},(function(){return[Ct]}),{},!0)])])])})),At=Object(i["j"])({emits:["close"],setup:function(){return{}}});c("f489");At.render=kt,At.__scopeId="data-v-43dd1c25";var Dt=At,qt=Object(i["j"])({components:{Modal:Dt},setup:function(){var e=Object(d["b"])(),t=Object(i["c"])((function(){return e.state.articles})),c={id:0,name:"",price:2};function r(t){e.commit("addArticle",{id:t.id,name:t.name,price:t.price}),t.name="",t.price=2,b.value="Hidden"}var n=Object(i["w"])({id:0,name:"",price:2});function a(e){b.value="EditArticle",n.id=e.id,n.name=e.name,n.price=e.price}function l(t){e.commit("saveEdition",t),b.value="Hidden"}function s(t,c){window.confirm('Delete article "'+c+'" ?')&&e.commit("removeArticle",t)}function o(){window.confirm("Delete all data ?")&&e.commit("deleteAllData")}function u(){Tt.push("demo")}var b=Object(i["x"])("Hidden");function f(){c.name="",c.price=2,b.value="Hidden"}return{articles:t,newArticle:c,addArticle:r,removeArticle:s,editArticle:a,modalContext:b,articleEdited:n,saveEdition:l,closeModal:f,deleteAllData:o,loadDemo:u}}});qt.render=jt;var St=qt,Pt=(c("a4d3"),c("e01a"),c("d3b7"),c("159b"),c("c740"),c("4de4"),c("7db0"),c("a434"),c("13d5"),{articles:[{id:1,name:"Water",price:2.5},{id:2,name:"Coke",price:2},{id:3,name:"Fanta",price:2},{id:4,name:"Beer",price:4},{id:6,name:"Hot dog",price:4},{id:7,name:"French fries",price:2},{id:8,name:"Pizza",price:7.5},{id:9,name:"Donut",price:2},{id:10,name:"Cookie",price:2},{id:11,name:"Ice cream",price:2}],transactions:[{id:1,totalPrice:2.5,cart:[{id:1,name:"Water",price:2.5,quantity:1}]},{id:2,totalPrice:11.5,cart:[{id:4,name:"Beer",price:4,quantity:1},{id:8,name:"Pizza",price:7.5,quantity:1}]},{id:3,totalPrice:4,cart:[{id:11,name:"Ice cream",price:2,quantity:2}]},{id:4,totalPrice:33,cart:[{id:8,name:"Pizza",price:7.5,quantity:2},{id:6,name:"Hot dog",price:4,quantity:1},{id:4,name:"Beer",price:4,quantity:1},{id:3,name:"Fanta",price:2,quantity:2},{id:10,name:"Cookie",price:2,quantity:3}]},{id:5,totalPrice:10,cart:[{id:2,name:"Coke",price:2,quantity:3},{id:7,name:"French fries",price:2,quantity:2}]},{id:6,totalPrice:2,cart:[{id:9,name:"Donut",price:2,quantity:1}]},{id:7,totalPrice:17,cart:[{id:8,name:"Pizza",price:7.5,quantity:2},{id:2,name:"Coke",price:2,quantity:1}]}]}),It=(Symbol(),Object(d["a"])({state:{articles:[],cart:[],transactions:[]},mutations:{loadData:function(e){localStorage.getItem("articles")&&(e.articles=JSON.parse(localStorage.getItem("articles")||"")),localStorage.getItem("transactions")&&(e.transactions=JSON.parse(localStorage.getItem("transactions")||""))},saveData:function(e){localStorage.setItem("articles",JSON.stringify(e.articles)),localStorage.setItem("transactions",JSON.stringify(e.transactions))},addArticle:function(e,t){var c=1;e.articles.forEach((function(e){e.id>=c&&(c=e.id+1)})),t.id=c,e.articles.push(t),localStorage.setItem("articles",JSON.stringify(e.articles))},saveEdition:function(e,t){var c=e.articles.findIndex((function(e){return e.id===t.id}));e.articles[c].name=t.name,e.articles[c].price=t.price,localStorage.setItem("articles",JSON.stringify(e.articles))},removeArticle:function(e,t){e.articles=e.articles.filter((function(e){return e.id!=t})),localStorage.setItem("articles",JSON.stringify(e.articles))},deleteAllData:function(e){e.articles=[],e.cart=[],e.transactions=[]},increaseCart:function(e,t){var c=e.cart.find((function(e){return e.id===t.id}));c?c.quantity++:e.cart.push({id:t.id,name:t.name,price:t.price,quantity:1})},decreaseCart:function(e,t){var c=e.cart.find((function(e){return e.id===t.id})),i=e.cart.findIndex((function(e){return e.id===t.id}));c&&c.quantity>1&&c.quantity--,c&&1===c.quantity&&e.cart.splice(i,1)},resetCart:function(e){e.cart=[]},checkoutCart:function(e){var t=e.transactions.reduce((function(e,t){return e>=t.id?e=t.id+1:e}),1),c=e.cart.reduce((function(e,t){return e+t.price*t.quantity}),0);e.transactions.push({id:t,totalPrice:c,cart:e.cart}),localStorage.setItem("transactions",JSON.stringify(e.transactions)),e.cart=[]},loadDemo:function(e){e.articles=Pt.articles,e.transactions=Pt.transactions,localStorage.setItem("articles",JSON.stringify(e.articles)),localStorage.setItem("transactions",JSON.stringify(e.transactions))}},getters:{cartTotalPrice:function(e){return e.cart.reduce((function(e,t){return e+t.price*t.quantity}),0)},numberOfTransactions:function(e){return e.transactions.length},transactionsTotalPrice:function(e){return e.transactions.reduce((function(e,t){return e+t.totalPrice}),0)},topSellingArticles:function(e){var t=[];return e.transactions.forEach((function(e){e.cart.forEach((function(e){var c=t.find((function(t){return t.id===e.id}));c?c.quantity+=e.quantity:t.push({id:e.id,name:e.name,quantity:e.quantity,progress:0})}))})),t.sort((function(e,t){return e.quantity>t.quantity?-1:e.quantity<t.quantity?1:0})),t=t.slice(0,3),t.length>=1&&(t[0].progress=100),t.length>=2&&(t[1].progress=Math.round(t[1].quantity/t[0].quantity*100)),t.length>=3&&(t[2].progress=Math.round(t[2].quantity/t[0].quantity*100)),t}},modules:{}}));var Et=[{path:"/",redirect:{name:"Entry"}},{path:"/entry",name:"Entry",component:ne},{path:"/history",name:"History",component:Je},{path:"/settings",name:"Settings",component:St},{path:"/demo",component:ne,beforeEnter:function(e,t,c){It.commit("loadDemo"),ce.showToast("Demo mode loaded"),c({name:"Entry"})}}],Mt=Object(j["a"])({history:Object(j["b"])(),routes:Et}),Tt=Mt,Jt=(c("b972"),Object(i["d"])(f));Jt.use(It),Jt.use(Tt),Jt.use(ie),Jt.mount("#app")},f489:function(e,t,c){"use strict";c("a2ee")},fcca:function(e,t,c){"use strict";c("19c3")}});
//# sourceMappingURL=app.e2426d5d.js.map