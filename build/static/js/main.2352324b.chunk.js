(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){e.exports=n(217)},213:function(e,t,n){},215:function(e,t,n){},217:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n.n(a),l=n(26),i=n(0),o=n(161),c=n(8),u=n(2),s=n(5),d=n(1),m=n(3),f=n(4),p=n(72),v=n(162),w=n(158),h=n.n(w);function g(){return(g=Object(l.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.session_db,!window.models){e.next=3;break}return e.abrupt("return",{models:window.models,tools:window.tools,local_db:window.local_db});case 3:return e.prev=3,e.next=6,t.get("session");case 6:return n=e.sent,e.prev=7,e.next=10,b({login:n.login,password:n.password,encrypted:!0,client_js_time:n.client_js_time});case 10:if(a=e.sent){e.next=17;break}return e.next=14,y();case 14:window.location.reload(),e.next=18;break;case 17:a.client_js||(a.client_js=n.client_js);case 18:n=a,e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0);case 24:return _(n),e.abrupt("return",{models:window.models,tools:window.tools,local_db:window.local_db});case 28:return e.prev=28,e.t1=e.catch(3),console.log(e.t1),e.abrupt("return",{});case 32:case"end":return e.stop()}},e,this,[[3,28],[7,21]])}))).apply(this,arguments)}function b(e){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.encrypted=!!t.encrypted,e.next=3,k("post","json",window.localStorage.rapyd_server_url+"/api/login",t);case 3:if("denied"!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",!1);case 8:if("error"!==n.status){e.next=10;break}throw"There are an error on the server";case 10:return e.prev=10,e.next=13,window.session_db.get("session");case 13:a=e.sent,n._rev=a._rev,n.unsaved=a.unsaved,n.client_js=n.client_js||a.client_js,n.client_js_time=n.client_js_time||a.client_js_time,e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),n.unsaved={};case 23:return n._id="session",e.next=26,window.session_db.put(n);case 26:return e.abrupt("return",n);case 27:case"end":return e.stop()}},e,this,[[10,20]])}))).apply(this,arguments)}function y(){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.session_db.get("session");case 3:return t=e.sent,e.next=6,window.session_db.remove(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return window.local_db.destroy(),e.abrupt("return",window.location.reload());case 13:case"end":return e.stop()}},e,this,[[0,8]])}))).apply(this,arguments)}function _(e){new Function(e.client_js)();var t=window.tools;t.configuration=Object.assign(t.configuration,window.rapyd_config),t.configuration.url=window.localStorage.rapyd_server_url;var n=window.models;n.env.context.unsaved=e.unsaved||{},n.env.user=n.env["res.users"].browse(),n.env.user.id=e.id,n.env.user.login=e.login,n.env.user.password=e.password}function k(e,t,n,a){return void 0!==a&&(a=j(a)),new Promise(function(r,l){var i=new XMLHttpRequest;i.open(e,n,!0),i.onload=function(){r(this.response)},i.onerror=function(){l(this.statusText)},void 0===t&&(t="json"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.responseType=t;try{i.send(a)}catch(o){l(o)}})}function j(e){var t=[];for(var n in e){var a=e[n];"object"===typeof a?a=JSON.stringify(a):""===a&&(a=null),t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}return t.join("&")}p.a.plugin(v.a),p.a.plugin(h.a),window.PouchDB=p.a,window.session_db=new p.a("session"),window.localStorage.rapyd_server_url||(window.rapyd_config.url?window.localStorage.rapyd_server_url=window.rapyd_config.url:window.localStorage.rapyd_server_url=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:":8069"));var S={preload:function(){var e=document.getElementById("app");if(e){var t=document.createElement("div");return t.className="preloader-modal",t.insertAdjacentHTML("beforeend",'\n    <div class="preloader color-white">\n      <span class="preloader-inner">\n        <span class="preloader-inner-gap"></span>\n        <span class="preloader-inner-left">\n          <span class="preloader-inner-half-circle"></span>\n        </span>\n        <span class="preloader-inner-right">\n          <span class="preloader-inner-half-circle"></span>\n        </span>\n      </span>\n    </div>'),e.insertAdjacentElement("beforeend",t),{done:function(){return t.remove()}}}},get_session:function(){return g.apply(this,arguments)},login:b,logout:y,ORM:_,ajax:k,parseURI:j,hasValue:function(e,t){return void 0!==e&&null!==e&&!1!==e&&([Array,String].indexOf(e.constructor)<0&&(e=e.toString()),e.indexOf(t)>-1)},hasKey:function(e,t){return void 0!==e&&null!==e&&!1!==e&&Object.keys(e).indexOf(t)>-1}},O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:""},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=document.querySelectorAll("input[type=text], input[type=password]")[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){a.value.addEventListener("keyup",this.clickEvent.bind(this))}}catch(l){t=!0,n=l}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"render",value:function(){var e=this;return i.default.createElement(c.t,{noToolbar:!0,noNavbar:!0,noSwipeback:!0,loginScreen:!0},i.default.createElement(c.o,null,"Welcome"),i.default.createElement(c.j,{form:!0},i.default.createElement(c.l,{label:"Username",type:"text",placeholder:"Your username",value:this.state.username,onInput:function(t){e.setState({username:t.target.value})},autofocus:!0}),i.default.createElement(c.l,{label:"Password",type:"password",placeholder:"Your password",value:this.state.password,onInput:function(t){e.setState({password:t.target.value})}}),i.default.createElement(c.e,{onClick:this.signIn.bind(this),style:{float:"left",marginLeft:"10px"}},"Login"),i.default.createElement(c.e,{onClick:this.setUrl.bind(this),style:{float:"right",marginRight:"10px"}},"Settings")))}},{key:"clickEvent",value:function(e){e.preventDefault(),13===e.keyCode&&this.signIn()}},{key:"setUrl",value:function(){this.$f7.dialog.prompt("","Server URL",function(e){return localStorage.rapyd_server_url=e});var e=document.querySelector("input.dialog-input");e&&(e.value=localStorage.rapyd_server_url)}},{key:"signIn",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t,n,a,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=S.preload(),a=(n=this).$f7,e.prev=3,e.next=6,S.login({login:n.state.username,password:n.state.password,encrypted:!1});case 6:if(l=e.sent,t.done(),l){e.next=10;break}return e.abrupt("return",a.dialog.alert("Username/Password wrong, relogin"));case 10:a.dialog.alert("Login Successful!",function(){window.location.reload()}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),t.done(),a.dialog.alert("Network Error");case 17:case"end":return e.stop()}},e,this,[[3,13]])}));return function(){return e.apply(this,arguments)}}()}]),t}(i.default.Component),C=n(19),N=function(e){return i.default.createElement(c.t,null,i.default.createElement(c.s,{backLink:"/"!==window.models.env.context.active_url&&"Back"},"/"===window.models.env.context.active_url&&i.default.createElement(c.p,null,i.default.createElement(c.i,{iconMd:"material:menu",panelOpen:"left"})),i.default.createElement(c.r,null,e.title),i.default.createElement(c.q,null,i.default.createElement(c.i,{iconMd:"material:person",panelOpen:"right"}))),e.children)},q=n(159),P=(n(207),n(209),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return i.default.createElement("div",{style:{height:"100%"},className:"ag-theme-material"},i.default.createElement(q.AgGridReact,{rowSelection:"multiple",paginationPageSize:e.paginationPageSize,pagination:!0,enableColResize:!0,enableServerSideSorting:!0,enableServerSideFilter:!0,suppressMultiSort:!0,suppressRowClickSelection:!0,onGridReady:e.onGridReady,onRowClicked:e.onRowClicked,onPaginationChanged:e.onPaginationChanged,onSortChanged:e.onSortChanged,onFilterChanged:e.onFilterChanged,columnDefs:e.columnDefs,rowData:e.rowData}))}}]),t}(i.default.Component));var R=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(d.a)(this,Object(m.a)(t).call(this,e)),console.log(e);var a=e.model||window.models.env.context.active_model;function r(){return!(e.isTreeView&&!e.editable)&&!!window.models.env.context.editing}var l=(e.children.constructor===Array?e.children:[e.children]).map(function(e,t){return{headerName:e.attributes.string||window.models.env[a]._fields[e.attributes.name].string,field:e.attributes.name,filterParams:{applyButton:!0,clearButton:!0},editable:r}});l[0].checkboxSelection=!0,l[0].headerCheckboxSelection=!0;return n.state={fields:l,records:[],limit:50,model:a},window.c=e,e.field&&(n.state.tree_field=e.field),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"paginate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e.length<1)return e;var n=e[0]._search_count;if(t>0)for(var a=0;a<this.state.limit*t;)e.unshift({}),a+=1;for(;e.length<n;)e.push({});return console.log(n),e}},{key:"sort",value:function(e,t){var n=window.models;e.length>0?n.env.context.active_sort=e[0].colId+" "+e[0].sort:delete n.env.context.active_sort,0!==t.api.paginationGetCurrentPage()?t.api.paginationGoToFirstPage():(t.newData=!1,this.paging.bind(this)(0,t))}},{key:"filter",value:function(e,t){var n=window.models,a=this.state.tree_field?[[this.state.tree_field,"in",window.models.env.context.active_ids]]:[],r=[];for(var l in e){var i=[e[l]],o="AND";void 0!==e[l].operator&&(i=[e[l].condition1,e[l].condition2],o=e[l].operator);var c={startsWith:"ilike",endsWith:"ilike",contains:"ilike",notContains:"not ilike",equals:"=",notEqual:"!="};"OR"===o&&a.push("|");for(var u=0;u<i.length;u++){var s=i[u];a.push([l,c[s.type],s.filter]),r.push(s.filter)}}n.env.context.active_args=a;var d=0,m=!0,f=!1,p=void 0;try{for(var v,w=function(){var e=v.value;if(void 0!==r[d]){var t=r[d];setTimeout(function(){return e.value=t},1e3)}d+=1},h=window.document.getElementsByClassName("ag-filter-filter")[Symbol.iterator]();!(m=(v=h.next()).done);m=!0)w()}catch(g){f=!0,p=g}finally{try{m||null==h.return||h.return()}finally{if(f)throw p}}0!==t.api.paginationGetCurrentPage()?t.api.paginationGoToFirstPage():(t.newData=!1,this.paging.bind(this)(0,t))}},{key:"paging",value:function(){var e=Object(l.a)(r.a.mark(function e(t,n){var a,l,i,o,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===n.newData){e.next=2;break}return e.abrupt("return");case 2:return a=S.preload(),e.prev=3,i=window.models,o=i.env.context.active_args||(this.state.tree_field?[[this.state.tree_field,"in",window.models.env.context.active_ids]]:[]),i.env.context.active_limit=this.state.limit,i.env.context.active_index=t,e.next=10,(l=i.env[this.state.model]).search.apply(l,Object(C.a)(o));case 10:c=e.sent,console.log(c),c.length>0&&this.setState({records:this.paginate(c.values.constructor===Array?c.values:[c.values],t)}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0);case 18:a.done();case 19:case"end":return e.stop()}},e,this,[[3,15]])}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t=this,n=e.model||window.models.env.context.active_model,a=window.models,r=i.default.createElement("div",{className:"card-body",style:{height:48*this.state.records.length+112<=440?48*this.state.records.length+112+"px":"67vh"}},i.default.createElement(P,{onGridReady:function(e){return(window.onresize=function(){return function(e){var t=[];e.columnApi.getAllColumns().forEach(function(e){t.push(e.colId)}),e.columnApi.autoSizeColumns(t)}(e)})()},onRowClicked:function(e){return a.env[n].browse([]).then(function(e){return a.env.context.active_id=a.env[n].browse()}).then(function(){return a.env.context.active_id.values=e.data}).then(function(){return t.$f7.router.navigate("/form/"+n+"?id="+e.data.id)})},onPaginationChanged:function(e){return t.paging.bind(t)(e.api.paginationGetCurrentPage(),e)},onSortChanged:function(e){return t.sort.bind(t)(e.api.getSortModel(),e)},onFilterChanged:function(e){return t.filter.bind(t)(e.api.getFilterModel(),e)},paginationPageSize:this.state.limit,columnDefs:this.state.fields,rowData:this.state.records}));return e.isTreeView?i.default.createElement(N,{title:window.tools.view[n].string},i.default.createElement("div",{className:"card"},i.default.createElement("div",{className:"card-header"},i.default.createElement("div",{className:"data-table-title"},window.tools.view[n].string,i.default.createElement("br",null),i.default.createElement(c.e,{onClick:function(){return t.$f7.router.navigate("/form/"+n)},style:{display:"inline-block"},fill:!0},"Create"))),r)):(delete r.props.onRowClicked,r)}}]),t}(i.default.Component),L=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){var e=window.models.env.context,t=e.active_id&&e.active_id[this.props.name];console.log(window.models.env.context.active_id),this.refs.input&&(this.refs.input.$listEl[0].querySelector("input").value=t)}},{key:"render",value:function(e){var t=window.models.env.context.active_model,n=window.models.env[t]._fields[e.name],a=e.string||n.string,r=n.type,l=window.models.env.context;return S.hasValue(["many2many","one2many"],r)&&e.children?e.children:i.default.createElement(c.j,null,i.default.createElement(c.l,{ref:"input",label:a,type:{char:"text",text:"textarea",float:"number",integer:"number"}[r],placeholder:e.placeholder||"",disabled:!l.editing,onChange:function(t){return window.models.env.context.active_id[e.name]=t.target.value}}))}}]),t}(i.default.Component),F={Tree:R,Field:L};var A={},M=function(e){console.log(e);var t=window.models.env.context.active_model;e.f7route?(t=e.f7route.params.model,window.models.env.context.active_url=e.f7route.url):window.models.env.context.active_url="/";var n=window.tools.view[t].tree;return window.models.env.context.active_model=t,A[n]||(A[n]=function(e){return function e(t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var u=o.value,s=F[u.tagName[0].toUpperCase()+u.tagName.toLowerCase().slice(1)]||F[u.tagName]||u.tagName,d={},m=!0,f=!1,p=void 0;try{for(var v,w=u.attributes[Symbol.iterator]();!(m=(v=w.next()).done);m=!0){var h=v.value;d[h.name]=h.value}}catch(g){f=!0,p=g}finally{try{m||null==w.return||w.return()}finally{if(f)throw p}}console.log(u.tagName),d.isTreeView=!0,n.push(i.default.createElement(s,d,e(u.children)))}}catch(g){r=!0,l=g}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n=1===n.length?n[0]:n}([e=(new DOMParser).parseFromString(e,"text/xml").children[0]])}(n)),A[n]},D=function(e){function t(e){var n;Object(u.a)(this,t),n=Object(d.a)(this,Object(m.a)(t).call(this,e));var a=window.models;return a.env.context.editing=!1,n.state=a.env.context,n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.models.env.context.active_model,(a=window.models).env.context.active_ids[0]){e.next=9;break}return a.env.context.active_id=a.env[n].browse(),a.env.context.editing=!0,this.setState(a.env.context),e.abrupt("return");case 9:if(a.env.context.active_id){e.next=13;break}return e.next=12,a.env[n].browse(a.env.context.active_ids);case 12:a.env.context.active_id=e.sent;case 13:this.setState({active_id:a.env.context.active_id});case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(l.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.models,this.state.editing){e.next=5;break}return t.env.context.editing=!0,this.setState(t.env.context),e.abrupt("return");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t=window.models.env.context.active_model;return console.log(this.state),i.default.createElement(N,{title:window.tools.view[t].string},i.default.createElement("div",{className:"card",style:{margin:0,boxShadow:"none"}},i.default.createElement("div",{className:"card-header"},i.default.createElement("div",{className:"data-table-title"},window.tools.view[t].string,i.default.createElement("span",{style:{color:"#666666"}}," / "+(this.state.active_id&&this.state.active_id.id?this.state.active_id.name:"New")),i.default.createElement(c.e,{onClick:this.edit.bind(this),style:{width:"50px"},fill:!0},this.state.editing?"Save":"Edit"))),e.children))}}]),t}(i.default.Component);function T(){return(T=Object(l.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=S.preload(),!t.name){e.next=11;break}return e.prev=2,e.next=5,window.models.env.context.active_id[t.name]();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0),n.done();case 11:n.done();case 12:case"end":return e.stop()}},e,this,[[2,7]])}))).apply(this,arguments)}var I=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return i.default.createElement("div",{className:"card",style:{minHeight:"250px",marginTop:"20px"}},i.default.createElement("div",{className:"card-content form-sheet"},e.children))}}]),t}(i.default.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return i.default.createElement("div",{className:"card",style:{margin:0,boxShadow:"none",padding:"20px",minHeight:"30%",marginTop:"30px"}},i.default.createElement("div",{className:"card-header"},e.children))}}]),t}(i.default.Component),z={Form:D,Header:function(e){return i.default.createElement("div",{style:{margin:0,backgroundColor:"#8F8F8F"}},e.children)},Button:function(e){return i.default.createElement(c.e,{fill:!0,onClick:function(){return function(e){return T.apply(this,arguments)}.bind(void 0)(e)},style:{display:"inline-block",margin:"10px"}},e.string)},Sheet:I,Group:function(e){return i.default.createElement("div",{style:{float:"left",width:e.width||"46.5%",padding:"10px",marginTop:"20px"}},e.children)},Field:L,Tree:R,Footer:U};var B={},G=function(e){var t=window.models.env.context.active_model;e.f7route?(t=e.f7route.params.model,window.models.env.context.active_url=e.f7route.url):window.models.env.context.active_url="/";var n=e.f7route.query.id,a=window.tools.view[t].form;return window.models.env.context.active_model=t,window.models.env.context.active_ids=[n],B[a]||(B[a]=function(e,t){return function e(n,a){var r=[],l=!0,o=!1,c=void 0;try{for(var u,s=n[Symbol.iterator]();!(l=(u=s.next()).done);l=!0){var d=u.value,m=z[d.tagName[0].toUpperCase()+d.tagName.toLowerCase().slice(1)]||z[d.tagName]||d.tagName,f={},p=!0,v=!1,w=void 0;try{for(var h,g=d.attributes[Symbol.iterator]();!(p=(h=g.next()).done);p=!0){var b=h.value;f[b.name]=b.value}}catch(E){v=!0,w=E}finally{try{p||null==g.return||g.return()}finally{if(v)throw w}}m===R&&(f.model=window.models.env[t]._fields[a.name].relation,f.field=window.models.env[t]._fields[a.name].inverse),r.push(i.default.createElement(m,f,e(d.children,f)))}}catch(E){o=!0,c=E}finally{try{l||null==s.return||s.return()}finally{if(o)throw c}}return r=1===r.length?r[0]:r}([e=(new DOMParser).parseFromString(e,"text/xml").children[0]])}(a,t)),B[a]},H=[{path:"/",component:function(e){if(void 0===window.models)return i.default.createElement(O,null);if(window.tools.configuration.home_view){var t=window.tools.configuration.home_view.split(".").slice(-1)[0],n=window.tools.configuration.home_view.split(".").slice(0,-1).join(".");if(window.models.env.context.active_model=n,"tree"===t)return i.default.createElement(M,null);if("form"===t)return i.default.createElement(G,null)}return i.default.createElement(c.t,null,i.default.createElement(c.s,null,i.default.createElement(c.p,null,i.default.createElement(c.i,{iconMd:"material:menu",panelOpen:"left"})),i.default.createElement(c.r,null,"Home"),i.default.createElement(c.q,null,i.default.createElement(c.i,{iconMd:"material:person",panelOpen:"right"}))),i.default.createElement(c.y,null,i.default.createElement(c.i,null,"Left Link"),i.default.createElement(c.i,null,"Right Link")),i.default.createElement(c.b,{strong:!0},i.default.createElement("p",null,"Here is your blank Framework7 app. Let's see what we have here.")),i.default.createElement(c.d,null,"Navigation"),i.default.createElement(c.j,null,i.default.createElement(c.m,{link:"/about/",title:"About"}),i.default.createElement(c.m,{link:"/form/",title:"Form"})),i.default.createElement(c.d,null,"Modals"),i.default.createElement(c.b,{strong:!0},i.default.createElement(c.w,null,i.default.createElement(c.f,{width:"50"},i.default.createElement(c.e,{fill:!0,raised:!0,popupOpen:"#popup"},"Popup")),i.default.createElement(c.f,{width:"50"},i.default.createElement(c.e,{fill:!0,raised:!0,loginScreenOpen:"#login-screen"},"Login Screen")))),i.default.createElement(c.d,null,"Panels"),i.default.createElement(c.b,{strong:!0},i.default.createElement(c.w,null,i.default.createElement(c.f,{width:"50"},i.default.createElement(c.e,{fill:!0,raised:!0,panelOpen:"left"},"Left Panel")),i.default.createElement(c.f,{width:"50"},i.default.createElement(c.e,{fill:!0,raised:!0,panelOpen:"right"},"Right Panel")))),i.default.createElement(c.j,null,i.default.createElement(c.m,{link:"/dynamic-route/blog/45/post/125/?foo=bar#about",title:"Dynamic Route"}),i.default.createElement(c.m,{link:"/load-something-that-doesnt-exist/",title:"Default Route (404)"})))}},{path:"/panel-left/",component:function(){return i.default.createElement(c.t,null,i.default.createElement(c.s,{title:"Menu"}),i.default.createElement("div",{id:"menu",className:"list list-block media-list chevron-center inset",style:{fontWeight:500},panelClose:!0},window.tools.keys(window.tools.menu,"sequence").as_array().map(function(e,t){return i.default.createElement("ul",null,i.default.createElement("li",{className:"accordion-item"},i.default.createElement("a",{className:"item-link item-content"+(window.tools.menu[e].childs.length<1?" panel-close":""),href:window.tools.menu[e].childs.length<1&&"/tree/"+window.tools.menu[e].model,"data-view":"#main-view"},i.default.createElement("div",{className:"item-inner"},i.default.createElement("div",{className:"item-title"},window.tools.menu[e].string))),window.tools.menu[e].childs.as_array().map(function(e,t){return i.default.createElement("div",{className:"accordion-item-content"},i.default.createElement("a",{className:"item-content panel-close",href:"/tree/"+e.model,"data-view":"#main-view"},i.default.createElement("div",{className:"item-inner"},i.default.createElement("div",{className:"item-title"},e.string))))})))})),i.default.createElement(c.e,{fill:!0,onClick:S.logout,style:{display:"inline-block",margin:"10px"}},"Logout"))}},{path:"/panel-right/",component:function(){return i.default.createElement(c.t,null,i.default.createElement(c.s,{title:"Right Panel"}),i.default.createElement(c.b,{strong:!0},i.default.createElement("p",null,"Right panel content goes here")),i.default.createElement(c.d,null,"Load page in panel"),i.default.createElement(c.j,null,i.default.createElement(c.m,{link:"/about/",title:"About"}),i.default.createElement(c.m,{link:"/form/",title:"Form"})),i.default.createElement(c.d,null,"Load page in main view"),i.default.createElement(c.j,null,i.default.createElement(c.m,{link:"/about/",title:"About",view:"#main-view",panelClose:!0}),i.default.createElement(c.m,{link:"/form/",title:"Form",view:"#main-view",panelClose:!0})))}},{path:"/about/",component:function(){return i.default.createElement(c.t,null,i.default.createElement(c.s,{title:"About",backLink:"Back"}),i.default.createElement(c.d,null,"About My App"),i.default.createElement(c.b,{strong:!0},i.default.createElement("p",null,"Here is About page!"),i.default.createElement("p",null,"You can go ",i.default.createElement(c.i,{back:!0},"back"),"."),i.default.createElement("p",null,"Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst."),i.default.createElement("p",null,"Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")))}},{path:"/tree/:model",component:M},{path:"/form/:model",component:G},{path:"(.*)",component:function(){return i.default.createElement(c.t,null,i.default.createElement(c.s,{title:"Not found",backLink:"Back"}),i.default.createElement(c.b,{strong:!0},i.default.createElement("p",null,"Sorry"),i.default.createElement("p",null,"Requested content not found.")))}}],V=function(e){var t={id:"org.rapyd.client",name:"App",theme:"md",routes:H,panel:{leftBreakpoint:960}};return i.default.createElement(c.a,{params:t,colorTheme:window.tools&&window.tools.configuration.color_theme?window.tools&&window.tools.configuration.color_theme:"gray"},i.default.createElement(c.x,null),void 0!==window.models&&i.default.createElement(c.u,{left:!0,reveal:!0},i.default.createElement(c.z,{url:"/panel-left/"})),void 0!==window.models&&i.default.createElement(c.u,{right:!0,cover:!0},i.default.createElement(c.z,{url:"/panel-right/"})),i.default.createElement(c.z,{id:"main-view",url:"/",main:!0,className:"ios-edges",pushState:!0}),i.default.createElement(c.v,{id:"popup"},i.default.createElement(c.z,null,i.default.createElement(c.t,null,i.default.createElement(c.s,{title:"Popup"},i.default.createElement(c.q,null,i.default.createElement(c.i,{popupClose:!0},"Close"))),i.default.createElement(c.b,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.")))),i.default.createElement(c.n,{id:"login-screen"},i.default.createElement(c.z,null,i.default.createElement(c.t,{loginScreen:!0},i.default.createElement(c.o,null,"Login"),i.default.createElement(c.j,{form:!0},i.default.createElement(c.m,null,i.default.createElement(c.h,null,"Username"),i.default.createElement(c.g,{name:"username",placeholder:"Username",type:"text"})),i.default.createElement(c.m,null,i.default.createElement(c.h,null,"Password"),i.default.createElement(c.g,{name:"password",type:"password",placeholder:"Password"}))),i.default.createElement(c.j,null,i.default.createElement(c.k,{title:"Sign In",loginScreenClose:!0}),i.default.createElement(c.c,null,i.default.createElement("p",null,"Click Sign In to close Login Screen")))))))};n(211),n(213),n(215);n(160).install(),o.a.use(c.A),Object(l.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get_session();case 2:return e.next=4,i.default.render(i.default.createElement(V),document.getElementById("app"));case 4:window.tools&&window.tools.configuration.custom_navbar&&((t=document.createElement("style")).innerHTML=".navbar {background-color: "+window.tools.configuration.custom_navbar+"!important}",document.querySelector("head").append(t)),document.querySelector("div.navbar")&&((n=document.createElement("meta")).name="theme-color",n.content="#"+getComputedStyle(document.querySelector(".navbar"),null).backgroundColor.replace("rgb(","").replace(")","").split(", ").map(function(e){return parseInt(e).toString(16)}).map(function(e){return 1===e.length?"0"+e:e}).join(""),document.querySelector("head").appendChild(n));case 6:case"end":return e.stop()}},e,this)}))()}},[[163,2,1]]]);
//# sourceMappingURL=main.2352324b.chunk.js.map