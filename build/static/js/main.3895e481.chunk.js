(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){if(!window.React)throw Error("React must be defined on global variable");e.exports=window.React},200:function(e,t,n){e.exports=n(304)},300:function(e,t,n){},302:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n.n(a),i=n(23),o=n(60),l=n(0),c=n.n(l),s=n(76),u=n.n(s),d=n(198),m=n(8),p=n(2),v=n(5),w=n(1),f=n(3),h=n(4),g=n(78),b=n(199),y=n(194),x=n.n(y);function E(){return(E=Object(i.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.session_db,!window.models){e.next=3;break}return e.abrupt("return",{models:window.models,tools:window.tools,local_db:window.local_db});case 3:return e.prev=3,e.next=6,t.get("session");case 6:return n=e.sent,e.prev=7,e.next=10,_({login:n.login,password:n.password,encrypted:!0,client_js_time:n.client_js_time});case 10:if(a=e.sent){e.next=17;break}return e.next=14,O();case 14:window.location.reload(),e.next=18;break;case 17:a.client_js||(a.client_js=n.client_js);case 18:n=a,e.next=24;break;case 21:e.prev=21,e.t0=e.catch(7),console.log(e.t0);case 24:return S(n),e.abrupt("return",{models:window.models,tools:window.tools,local_db:window.local_db});case 28:return e.prev=28,e.t1=e.catch(3),console.log(e.t1),e.abrupt("return",{});case 32:case"end":return e.stop()}},e,this,[[3,28],[7,21]])}))).apply(this,arguments)}function _(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.encrypted=!!t.encrypted,e.next=3,C("post","json",window.localStorage.rapyd_server_url+"/api/login",t);case 3:if("denied"!==(n=e.sent).status){e.next=8;break}return e.abrupt("return",!1);case 8:if("error"!==n.status){e.next=10;break}throw Error("There are an error on the server");case 10:return e.prev=10,e.next=13,window.session_db.get("session");case 13:a=e.sent,n._rev=a._rev,n.unsaved=a.unsaved,n.client_js=n.client_js||a.client_js,n.client_js_time=n.client_js_time||a.client_js_time,e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),n.unsaved={};case 23:return n._id="session",e.next=26,window.session_db.put(n);case 26:return e.abrupt("return",n);case 27:case"end":return e.stop()}},e,this,[[10,20]])}))).apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.session_db.get("session");case 3:return t=e.sent,e.next=6,window.session_db.remove(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return window.local_db.destroy(),e.abrupt("return",window.location.reload());case 13:case"end":return e.stop()}},e,this,[[0,8]])}))).apply(this,arguments)}function S(e){new Function(e.client_js)();var t=window.tools;t.configuration=Object.assign(t.configuration,window.rapyd_config),t.configuration.url=window.localStorage.rapyd_server_url;var n=window.models;n.env.context.unsaved=e.unsaved||{},n.env.user=n.env["res.users"].browse(),n.env.user.id=e.id,n.env.user.login=e.login,n.env.user.password=e.password}function C(e,t,n,a){return void 0!==a&&(a=N(a)),new Promise(function(r,i){var o=new XMLHttpRequest;o.open(e,n,!0),o.onload=function(){r(this.response)},o.onerror=function(){i(this.statusText)},void 0===t&&(t="json"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.responseType=t;try{o.send(a)}catch(l){i(l)}})}function N(e){var t=[];for(var n in e){var a=e[n];"object"===typeof a?a=JSON.stringify(a):""===a&&(a=null),t.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}return t.join("&")}g.a.plugin(b.a),g.a.plugin(x.a),window.PouchDB=g.a,window.session_db=new g.a("session"),window.rapyd_config||(window.rapyd_config={}),window.localStorage.rapyd_server_url||(window.rapyd_config.url?window.localStorage.rapyd_server_url=window.rapyd_config.url:"file:"===window.location.protocol?window.localStorage.rapyd_server_url="http://localhost:8069":window.localStorage.rapyd_server_url=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:":8069"));var L={preload:function(){var e=document.getElementById("app");if(e){var t=document.createElement("div");return t.className="preloader-modal",t.insertAdjacentHTML("beforeend",'\n    <div class="preloader color-white">\n      <span class="preloader-inner">\n        <span class="preloader-inner-gap"></span>\n        <span class="preloader-inner-left">\n          <span class="preloader-inner-half-circle"></span>\n        </span>\n        <span class="preloader-inner-right">\n          <span class="preloader-inner-half-circle"></span>\n        </span>\n      </span>\n    </div>'),e.insertAdjacentElement("beforeend",t),{done:function(){return t.remove()}}}},get_session:function(){return E.apply(this,arguments)},login:_,logout:O,ORM:S,ajax:C,parseURI:N,hasValue:function(e,t){return void 0!==e&&null!==e&&!1!==e&&([Array,String].indexOf(e.constructor)<0&&(e=e.toString()),e.indexOf(t)>-1)},hasKey:function(e,t){return void 0!==e&&null!==e&&!1!==e&&Object.keys(e).indexOf(t)>-1}},P=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(f.a)(t).call(this,e))).state={username:"",password:""},n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=!0,t=!1,n=void 0;try{for(var a,r=document.querySelectorAll("input[type=text], input[type=password]")[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){a.value.addEventListener("keyup",this.clickEvent.bind(this))}}catch(i){t=!0,n=i}finally{try{e||null==r.return||r.return()}finally{if(t)throw n}}}},{key:"render",value:function(){var e=this;return c.a.createElement(m.Page,{noToolbar:!0,noNavbar:!0,noSwipeback:!0,loginScreen:!0},c.a.createElement(m.LoginScreenTitle,null,"Welcome"),c.a.createElement(m.List,{form:!0},c.a.createElement(m.ListInput,{label:"Username",type:"text",placeholder:"Your username",value:this.state.username,onInput:function(t){e.setState({username:t.target.value})},autofocus:!0}),c.a.createElement(m.ListInput,{label:"Password",type:"password",placeholder:"Your password",value:this.state.password,onInput:function(t){e.setState({password:t.target.value})}}),c.a.createElement(m.Button,{onClick:this.signIn.bind(this),style:{float:"left",marginLeft:"10px"}},"Login"),c.a.createElement(m.Button,{onClick:this.setUrl.bind(this),style:{float:"right",marginRight:"10px"}},"Settings")))}},{key:"clickEvent",value:function(e){e.preventDefault(),13===e.keyCode&&this.signIn()}},{key:"setUrl",value:function(){this.$f7.dialog.prompt("","Server URL",function(e){return localStorage.rapyd_server_url=e});var e=document.querySelector("input.dialog-input");e&&(e.value=localStorage.rapyd_server_url)}},{key:"signIn",value:function(){var e=Object(i.a)(r.a.mark(function e(){var t,n,a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=L.preload(),a=(n=this).$f7,e.prev=3,e.next=6,L.login({login:n.state.username,password:n.state.password,encrypted:!1});case 6:if(i=e.sent,t.done(),i){e.next=10;break}return e.abrupt("return",a.dialog.alert("Username/Password wrong, relogin"));case 10:a.dialog.alert("Login Successful!",function(){window.location.reload()}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),t.done(),a.dialog.alert("Network Error");case 17:case"end":return e.stop()}},e,this,[[3,13]])}));return function(){return e.apply(this,arguments)}}()}]),t}(c.a.Component),R=n(20),T=function(e){return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,{backLink:"/"!==window.models.env.context.active_url&&"Back"},"/"===window.models.env.context.active_url&&c.a.createElement(m.NavLeft,null,c.a.createElement(m.Link,{iconMd:"material:menu",panelOpen:"left"})),c.a.createElement(m.NavTitle,null,e.title),c.a.createElement(m.NavRight,null,c.a.createElement(m.Link,{iconMd:"material:person",panelOpen:"right"}))),e.children)},B=n(195),I=(n(242),n(244),function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(v.a)(t,[{key:"render",value:function(e){return c.a.createElement("div",{style:{height:"100%"},className:"ag-theme-material"},c.a.createElement(B.AgGridReact,{rowSelection:"multiple",paginationPageSize:e.paginationPageSize,pagination:!0,enableColResize:!0,enableServerSideSorting:!0,enableServerSideFilter:!0,suppressMultiSort:!0,suppressRowClickSelection:!0,onGridReady:e.onGridReady,onRowClicked:e.onRowClicked,onPaginationChanged:e.onPaginationChanged,onSortChanged:e.onSortChanged,onFilterChanged:e.onFilterChanged,columnDefs:e.columnDefs,rowData:e.rowData}))}}]),t}(c.a.Component));var F=function(e){function t(e){var n;Object(p.a)(this,t),n=Object(w.a)(this,Object(f.a)(t).call(this,e));var a=e.model||window.models.env.context.active_model;function r(){return!(e.isTreeView&&!e.editable)&&!!window.models.env.context.editing}var i=(e.children.constructor===Array?e.children:[e.children]).map(function(e,t){return{headerName:e.attributes.string||window.models.env[a]._fields[e.attributes.name].string,field:e.attributes.name,filterParams:{applyButton:!0,clearButton:!0},editable:r}});i[0].checkboxSelection=!0,i[0].headerCheckboxSelection=!0;return n.state={fields:i,records:[],limit:50,model:a},window.c=e,e.field&&(n.state.tree_field=e.field),n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"paginate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e.length<1)return e;var n=e[0]._search_count;if(t>0)for(var a=0;a<this.state.limit*t;)e.unshift({}),a+=1;for(;e.length<n;)e.push({});return e}},{key:"sort",value:function(e,t){var n=window.models;e.length>0?n.env.context.active_sort=e[0].colId+" "+e[0].sort:delete n.env.context.active_sort,0!==t.api.paginationGetCurrentPage()?t.api.paginationGoToFirstPage():(t.newData=!1,this.paging.bind(this)(0,t))}},{key:"filter",value:function(e,t){var n=window.models,a=this.state.tree_field?[[this.state.tree_field,"in",window.models.env.context.active_ids]]:[],r=[];for(var i in e){var o=[e[i]],l="AND";void 0!==e[i].operator&&(o=[e[i].condition1,e[i].condition2],l=e[i].operator);var c={startsWith:"ilike",endsWith:"ilike",contains:"ilike",notContains:"not ilike",equals:"=",notEqual:"!="};"OR"===l&&a.push("|");for(var s=0;s<o.length;s++){var u=o[s];a.push([i,c[u.type],u.filter]),r.push(u.filter)}}n.env.context.active_args=a;var d=0,m=!0,p=!1,v=void 0;try{for(var w,f=function(){var e=w.value;if(void 0!==r[d]){var t=r[d];setTimeout(function(){return e.value=t},1e3)}d+=1},h=window.document.getElementsByClassName("ag-filter-filter")[Symbol.iterator]();!(m=(w=h.next()).done);m=!0)f()}catch(g){p=!0,v=g}finally{try{m||null==h.return||h.return()}finally{if(p)throw v}}0!==t.api.paginationGetCurrentPage()?t.api.paginationGoToFirstPage():(t.newData=!1,this.paging.bind(this)(0,t))}},{key:"paging",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){var a,i,o,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===n.newData){e.next=2;break}return e.abrupt("return");case 2:return a=L.preload(),e.prev=3,o=window.models,l=o.env.context.active_args||(this.state.tree_field?[[this.state.tree_field,"in",window.models.env.context.active_ids]]:[]),o.env.context.active_limit=this.state.limit,o.env.context.active_index=t,e.next=10,(i=o.env[this.state.model]).search.apply(i,Object(R.a)(l));case 10:(c=e.sent).length>0&&this.setState({records:this.paginate(c.values.constructor===Array?c.values:[c.values],t)}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:a.done();case 18:case"end":return e.stop()}},e,this,[[3,14]])}));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t=this,n=e.model||window.models.env.context.active_model,a=window.models,r=c.a.createElement("div",{className:"card-body",style:{height:48*this.state.records.length+112<=440?48*this.state.records.length+112+"px":"67vh"}},c.a.createElement(I,{onGridReady:function(e){return(window.onresize=function(){return function(e){var t=e.api,n=t.gridPanel.getWidthForSizeColsToFit(),a=t.gridPanel.columnController.getAllDisplayedColumns();t.gridPanel.columnController.getWidthOfColsInList(a)<n&&t.sizeColumnsToFit()}(e)})()},onRowClicked:function(e){return a.env[n].browse([]).then(function(e){return a.env.context.active_id=a.env[n].browse()}).then(function(){return a.env.context.active_id.values=e.data}).then(function(){return t.$f7.router.navigate("/form/"+n+"?id="+e.data.id)})},onPaginationChanged:function(e){return t.paging.bind(t)(e.api.paginationGetCurrentPage(),e)},onSortChanged:function(e){return t.sort.bind(t)(e.api.getSortModel(),e)},onFilterChanged:function(e){return t.filter.bind(t)(e.api.getFilterModel(),e)},paginationPageSize:this.state.limit,columnDefs:this.state.fields,rowData:this.state.records}));return e.isTreeView?c.a.createElement(T,{title:window.tools.view[n].string},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"data-table-title"},window.tools.view[n].string,c.a.createElement("br",null),c.a.createElement(m.Button,{onClick:function(){return t.$f7.router.navigate("/form/"+n)},style:{display:"inline-block"},fill:!0},"Create"))),r)):(delete r.props.children[0].props.onRowClicked,r)}}]),t}(c.a.Component),q=n(196),M=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a,i,o,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.models,a=window.models.env.context,i=a.active_id&&a.active_id[this.props.name],console.log(window.models.env.context.active_id),!this.refs.input){e.next=8;break}this.refs.input.$listEl[0].querySelector("input").value=i,e.next=22;break;case 8:if(t.children){e.next=22;break}if(i){e.next=11;break}return e.abrupt("return",this.setState({value:void 0}));case 11:return o=window.models.env.context.active_model,l=window.models.env[o]._fields[t.name],e.next=15,n.env[l.relation].browse(i);case 15:if(c=e.sent,i.constructor!==String){e.next=20;break}return e.abrupt("return",this.setState({value:{id:c.id,text:c[c._rec_name||"name"]}}));case 20:if(i.constructor!==Array){e.next=22;break}return e.abrupt("return",this.setState({value:c.values.map(function(e){return{id:e.id,text:e[e._rec_name||"name"]}})}));case 22:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t=window.models,n=window.models.env.context.active_model,a=window.models.env[n]._fields[e.name],o=e.string||a.string,l=a.type,s=window.models.env.context;function u(){return(u=Object(i.a)(r.a.mark(function e(n,i,o){var l,c,s,u,d,m,p,v,w;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=10,t.env.context.active_limit=l,t.env.context.active_index=o.offset/l,e.next=5,t.env[a.relation].search([t.env[a.relation]._rec_name||"name","ilike",o.term]);case 5:for(c=e.sent,s=[],u=!0,d=!1,m=void 0,e.prev=10,p=c[Symbol.iterator]();!(u=(v=p.next()).done);u=!0)w=v.value,s.push({id:w.id,text:w[w._rec_name||"name"]});e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),d=!0,m=e.t0;case 18:e.prev=18,e.prev=19,u||null==p.return||p.return();case 21:if(e.prev=21,!d){e.next=24;break}throw m;case 24:return e.finish(21);case 25:return e.finish(18);case 26:return t.env.context.active_index=0,e.abrupt("return",{results:s,more:(o.offset/l+1)*l<c._search_count});case 28:case"end":return e.stop()}},e,this,[[10,14,18,26],[19,,21,25]])}))).apply(this,arguments)}return L.hasValue(["many2many","one2many"],l)&&e.children?e.children:c.a.createElement(m.List,null,L.hasValue(["many2many","one2many","many2one","one2one"],l)?c.a.createElement(q.React,{ajax:{url:window.tools.configuration.url,minimumInputLength:0,params:function(){return{}},placeholder:"",fetch:function(e,t,n){return u.apply(this,arguments)}},placeholder:e.placeholder||"",readOnly:!s.editing,multiple:L.hasValue(["many2many","one2many"],l),defaultValue:this.state.value,allowClear:!0}):c.a.createElement(m.ListInput,{ref:"input",label:o,type:{char:"text",text:"textarea",float:"number",integer:"number"}[l],placeholder:e.placeholder||"",disabled:!s.editing,onChange:function(t){return window.models.env.context.active_id[e.name]=t.target.value}}))}}]),t}(c.a.Component),D={Tree:F,Field:M};var A={},U=function(e){console.log(e);var t=window.models.env.context.active_model;e.f7route?(t=e.f7route.params.model,window.models.env.context.active_url=e.f7route.url):window.models.env.context.active_url="/";var n=window.tools.view[t].tree;return window.models.env.context.active_model=t,A[n]||(A[n]=function(e){return function e(t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var s=o.value,u=D[s.tagName[0].toUpperCase()+s.tagName.toLowerCase().slice(1)]||D[s.tagName]||s.tagName,d={},m=!0,p=!1,v=void 0;try{for(var w,f=s.attributes[Symbol.iterator]();!(m=(w=f.next()).done);m=!0){var h=w.value;d[h.name]=h.value}}catch(g){p=!0,v=g}finally{try{m||null==f.return||f.return()}finally{if(p)throw v}}console.log(s.tagName),d.isTreeView=!0,n.push(c.a.createElement(u,d,e(s.children)))}}catch(g){r=!0,i=g}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n=1===n.length?n[0]:n}([e=(new DOMParser).parseFromString(e,"text/xml").children[0]])}(n)),A[n]},V=function(e){function t(e){var n;Object(p.a)(this,t),n=Object(w.a)(this,Object(f.a)(t).call(this,e));var a=window.models;return a.env.context.editing=!1,n.state=a.env.context,n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a,i,o=this;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.models.env.context.active_model,(a=window.models).env.context.active_ids[0]){e.next=9;break}return a.env.context.active_id=a.env[n].browse(),a.env.context.editing=!0,this.setState(a.env.context),e.abrupt("return");case 9:if(a.env.context.active_id){e.next=13;break}return e.next=12,a.env[n].browse(a.env.context.active_ids);case 12:a.env.context.active_id=e.sent;case 13:i=function(){return o.setState({active_id:a.env.context.active_id})},a.env.context.refresh=i,i();case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.models,this.state.editing){e.next=5;break}return t.env.context.editing=!0,this.setState(t.env.context),e.abrupt("return");case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t=window.models.env.context.active_model;return console.log(this.state),c.a.createElement(T,{title:window.tools.view[t].string},c.a.createElement("div",{className:"card",style:{margin:0,boxShadow:"none"}},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"data-table-title"},window.tools.view[t].string,c.a.createElement("span",{style:{color:"#666666"}}," / "+(this.state.active_id&&this.state.active_id.id?this.state.active_id.name:"New")),c.a.createElement(m.Button,{onClick:this.edit.bind(this),style:{width:"50px"},fill:!0},this.state.editing?"Save":"Edit"))),e.children))}}]),t}(c.a.Component),H=function(e){return c.a.createElement("div",{style:{margin:0,backgroundColor:"#8F8F8F"}},e.children)};function G(){return(G=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=L.preload(),!t.name){e.next=11;break}return e.prev=2,e.next=5,window.models.env.context.active_id[t.name]();case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0),n.done();case 11:return e.next=13,window.models.env.context.refresh();case 13:n.done();case 14:case"end":return e.stop()}},e,this,[[2,7]])}))).apply(this,arguments)}var z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(f.a)(t).call(this,e))).state=window.models.env.context,n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"render",value:function(e){var t=this;return c.a.createElement(m.Button,{fill:!0,onClick:function(){return function(e){return G.apply(this,arguments)}.bind(t)(e)},style:{display:"inline-block",margin:"10px"}},e.string)}}]),t}(c.a.Component),W=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(v.a)(t,[{key:"render",value:function(e){return c.a.createElement("div",{className:"card",style:{minHeight:"250px",marginTop:"20px"}},c.a.createElement("div",{className:"card-content form-sheet"},e.children))}}]),t}(c.a.Component),$=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(f.a)(t).call(this,e))).state.lastHeight=0,n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(e){var t=this;this.haveChild&&null===this.refs.group.previousElementSibling||setTimeout(function(){var e=t.refs.group.previousElementSibling.clientHeight-20;t.setState({lastHeight:e})},500)}},{key:"render",value:function(e){return this.haveChild=void 0!==e.children,e.width&&"%"===e.width.slice(-1)&&parseInt(e.width.slice(0,-1))>97&&(e.width="97%"),c.a.createElement("div",{ref:"group",style:{float:"left",width:e.width||"46.5%",padding:"10px",marginTop:"20px",height:e.children?"auto":this.state.lastHeight+"px"}},e.children)}}]),t}(c.a.Component),J=function(e){function t(){return Object(p.a)(this,t),Object(w.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(v.a)(t,[{key:"render",value:function(e){return c.a.createElement("div",{className:"card",style:{margin:0,boxShadow:"none",padding:"20px",minHeight:"30%",marginTop:"30px"}},c.a.createElement("div",{className:"card-header"},e.children))}}]),t}(c.a.Component),Y=Object(o.a)({},window.rapydComponents,{Form:V,Header:H,Button:z,Sheet:W,Group:$,Field:M,Tree:F,Footer:J});var K={},X=function(e){var t=window.models.env.context.active_model;e.f7route?(t=e.f7route.params.model,window.models.env.context.active_url=e.f7route.url):window.models.env.context.active_url="/";var n=e.f7route.query.id,a=window.tools.view[t].form;return window.models.env.context.active_model=t,window.models.env.context.active_ids=[n],K[a]||(K[a]=function(e,t){return function e(n,a){var r=[],i=!0,o=!1,l=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var d=s.value,m=L.hasValue(d.tagName,"-")?d.tagName.split("-").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}):Y[d.tagName[0].toUpperCase()+d.tagName.toLowerCase().slice(1)]||Y[d.tagName]||d.tagName,p={},v=!0,w=!1,f=void 0;try{for(var h,g=d.attributes[Symbol.iterator]();!(v=(h=g.next()).done);v=!0){var b=h.value;p[b.name]=b.value}}catch(y){w=!0,f=y}finally{try{v||null==g.return||g.return()}finally{if(w)throw f}}m===F&&(p.model=window.models.env[t]._fields[a.name].relation,p.field=window.models.env[t]._fields[a.name].inverse),r.push(c.a.createElement(m,p,e(d.children,p)))}}catch(y){o=!0,l=y}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}return r=1===r.length?r[0]:r}([e=(new DOMParser).parseFromString(e,"text/xml").children[0]])}(a,t)),K[a]},Q=Object(o.a)({},window.rapydComponents,{Form:V,Header:H,Button:z,Sheet:W,Group:$,Field:M,Tree:F,Footer:J});var Z={},ee=[{path:"/",component:function(e){if(void 0===window.models)return c.a.createElement(P,null);if(window.tools.configuration.home_view){var t=window.tools.configuration.home_view.split(".").slice(-1)[0],n=window.tools.configuration.home_view.split(".").slice(0,-1).join(".");if(window.models.env.context.active_model=n,"tree"===t)return c.a.createElement(U,null);if("form"===t)return c.a.createElement(X,null)}return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,null,c.a.createElement(m.NavLeft,null,c.a.createElement(m.Link,{iconMd:"material:menu",panelOpen:"left"})),c.a.createElement(m.NavTitle,null,"Home"),c.a.createElement(m.NavRight,null,c.a.createElement(m.Link,{iconMd:"material:person",panelOpen:"right"}))),c.a.createElement(m.Toolbar,null,c.a.createElement(m.Link,null,"Left Link"),c.a.createElement(m.Link,null,"Right Link")),c.a.createElement(m.Block,{strong:!0},c.a.createElement("p",null,"Here is your blank Framework7 app. Let's see what we have here.")),c.a.createElement(m.BlockTitle,null,"Navigation"),c.a.createElement(m.List,null,c.a.createElement(m.ListItem,{link:"/about/",title:"About"}),c.a.createElement(m.ListItem,{link:"/form/",title:"Form"})),c.a.createElement(m.BlockTitle,null,"Modals"),c.a.createElement(m.Block,{strong:!0},c.a.createElement(m.Row,null,c.a.createElement(m.Col,{width:"50"},c.a.createElement(m.Button,{fill:!0,raised:!0,popupOpen:"#popup"},"Popup")),c.a.createElement(m.Col,{width:"50"},c.a.createElement(m.Button,{fill:!0,raised:!0,loginScreenOpen:"#login-screen"},"Login Screen")))),c.a.createElement(m.BlockTitle,null,"Panels"),c.a.createElement(m.Block,{strong:!0},c.a.createElement(m.Row,null,c.a.createElement(m.Col,{width:"50"},c.a.createElement(m.Button,{fill:!0,raised:!0,panelOpen:"left"},"Left Panel")),c.a.createElement(m.Col,{width:"50"},c.a.createElement(m.Button,{fill:!0,raised:!0,panelOpen:"right"},"Right Panel")))),c.a.createElement(m.List,null,c.a.createElement(m.ListItem,{link:"/dynamic-route/blog/45/post/125/?foo=bar#about",title:"Dynamic Route"}),c.a.createElement(m.ListItem,{link:"/load-something-that-doesnt-exist/",title:"Default Route (404)"})))}},{path:"/panel-left/",component:function(){return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,{title:"Menu"}),c.a.createElement("div",{id:"menu",className:"list list-block media-list chevron-center inset",style:{fontWeight:500},panelClose:!0},window.tools.keys(window.tools.menu,"sequence").as_array().map(function(e,t){return c.a.createElement("ul",null,c.a.createElement("li",{className:"accordion-item"},c.a.createElement("a",{className:"item-link item-content"+(window.tools.menu[e].childs.length<1?" panel-close":""),href:window.tools.menu[e].childs.length<1&&"/"+(window.tools.menu[e].view_id?"view":"tree")+"/"+(window.tools.menu[e].view_id||window.tools.menu[e].model),"data-view":"#main-view"},c.a.createElement("div",{className:"item-inner"},c.a.createElement("div",{className:"item-title"},window.tools.menu[e].string))),window.tools.menu[e].childs.as_array().map(function(e,t){return c.a.createElement("div",{className:"accordion-item-content"},c.a.createElement("a",{className:"item-content panel-close",href:"/"+(e.view_id?"view":"tree")+"/"+(e.view_id||e.model),"data-view":"#main-view"},c.a.createElement("div",{className:"item-inner"},c.a.createElement("div",{className:"item-title"},e.string))))})))})),c.a.createElement(m.Button,{fill:!0,onClick:L.logout,style:{display:"inline-block",margin:"10px"}},"Logout"))}},{path:"/panel-right/",component:function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(f.a)(t).call(this,e))).render=function(e){return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,null,c.a.createElement(m.NavLeft,{className:"user-link"},c.a.createElement(m.List,null,c.a.createElement(m.ListItem,{link:"#",title:n.state.name},c.a.createElement(m.Icon,{material:"person"}))))),c.a.createElement(m.Toolbar,{tabbar:!0},c.a.createElement(m.Link,{tabLink:"#notification",tabLinkActive:!0},"Notifications")),c.a.createElement(m.Tabs,null,c.a.createElement(m.Tab,{id:"notification",className:"page-content",tabActive:!0,style:{paddingTop:"0px"}},c.a.createElement(m.List,{mediaList:!0,style:{marginTop:"0px"}},c.a.createElement(m.ListItem,{link:"#",title:"Sales Order",after:"17:20",text:"Approval Needed"})))))},n.state={name:""},n}return Object(h.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,window.models.env.user.browse(window.models.env.user.id.toString()).then(function(e){return e.name});case 3:e.t1=e.sent,e.t2={name:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(c.a.Component)},{path:"/about/",component:function(){return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,{title:"About",backLink:"Back"}),c.a.createElement(m.BlockTitle,null,"About My App"),c.a.createElement(m.Block,{strong:!0},c.a.createElement("p",null,"Here is About page!"),c.a.createElement("p",null,"You can go ",c.a.createElement(m.Link,{back:!0},"back"),"."),c.a.createElement("p",null,"Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst."),c.a.createElement("p",null,"Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi. Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.")))}},{path:"/tree/:model",component:U},{path:"/form/:model",component:X},{path:"/view/:view_id",component:function(e){var t,n=window.models.env.context.active_model;if(e.f7route){var a=e.f7route.params.view_id.split(".");n=a.slice(0,-1).join("."),t=a[a.length-1],window.models.env.context.active_url=e.f7route.url}else window.models.env.context.active_url="/";var r=window.tools.view[n][t];return window.models.env.context.active_model=n,Z[r]||(Z[r]=function(e,t){return function e(n,a){var r=[],i=!0,o=!1,l=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var d=s.value,m=L.hasValue(d.tagName,"-")?d.tagName.split("-").map(function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}):Q[d.tagName[0].toUpperCase()+d.tagName.toLowerCase().slice(1)]||Q[d.tagName]||d.tagName,p={},v=!0,w=!1,f=void 0;try{for(var h,g=d.attributes[Symbol.iterator]();!(v=(h=g.next()).done);v=!0){var b=h.value;p[b.name]=b.value}}catch(y){w=!0,f=y}finally{try{v||null==g.return||g.return()}finally{if(w)throw f}}m===F&&(p.model=window.models.env[t]._fields[a.name].relation,p.field=window.models.env[t]._fields[a.name].inverse),r.push(c.a.createElement(m,p,e(d.children,p)))}}catch(y){o=!0,l=y}finally{try{i||null==u.return||u.return()}finally{if(o)throw l}}return r=1===r.length?r[0]:r}([e=(new DOMParser).parseFromString(e,"text/xml").children[0]])}(r,n)),Z[r]}},{path:"(.*)",component:function(){return c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,{title:"Not found",backLink:"Back"}),c.a.createElement(m.Block,{strong:!0},c.a.createElement("p",null,"Sorry"),c.a.createElement("p",null,"Requested content not found.")))}}],te=function(e){var t={id:"org.rapyd.client",name:"App",theme:"md",routes:ee,panel:{leftBreakpoint:960}};return c.a.createElement(m.App,{params:t,colorTheme:window.tools&&window.tools.configuration.color_theme?window.tools&&window.tools.configuration.color_theme:"gray"},c.a.createElement(m.Statusbar,null),void 0!==window.models&&c.a.createElement(m.Panel,{left:!0,reveal:!0},c.a.createElement(m.View,{url:"/panel-left/"})),void 0!==window.models&&c.a.createElement(m.Panel,{right:!0,cover:!0},c.a.createElement(m.View,{url:"/panel-right/"})),c.a.createElement(m.View,{id:"main-view",url:"/",main:!0,className:"ios-edges",pushState:!0}),c.a.createElement(m.Popup,{id:"popup"},c.a.createElement(m.View,null,c.a.createElement(m.Page,null,c.a.createElement(m.Navbar,{title:"Popup"},c.a.createElement(m.NavRight,null,c.a.createElement(m.Link,{popupClose:!0},"Close"))),c.a.createElement(m.Block,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.")))),c.a.createElement(m.LoginScreen,{id:"login-screen"},c.a.createElement(m.View,null,c.a.createElement(m.Page,{loginScreen:!0},c.a.createElement(m.LoginScreenTitle,null,"Login"),c.a.createElement(m.List,{form:!0},c.a.createElement(m.ListItem,null,c.a.createElement(m.Label,null,"Username"),c.a.createElement(m.Input,{name:"username",placeholder:"Username",type:"text"})),c.a.createElement(m.ListItem,null,c.a.createElement(m.Label,null,"Password"),c.a.createElement(m.Input,{name:"password",type:"password",placeholder:"Password"}))),c.a.createElement(m.List,null,c.a.createElement(m.ListButton,{title:"Sign In",loginScreenClose:!0}),c.a.createElement(m.BlockFooter,null,c.a.createElement("p",null,"Click Sign In to close Login Screen")))))))};n(298),n(300),n(302);n(197).install(),d.a.use(m.default),window.React=c.a,window.ReactDOM=u.a,window.rapydComponents=Object(o.a)({},window.rapydComponents,m,{Page:T}),Object(i.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get_session();case 2:return e.next=4,u.a.render(c.a.createElement(te),document.getElementById("app"));case 4:window.tools&&window.tools.configuration.custom_navbar&&((t=document.createElement("style")).innerHTML=".navbar, .toolbar {background-color: "+window.tools.configuration.custom_navbar+"!important}",document.querySelector("head").append(t)),document.querySelector("div.navbar")&&((n=document.createElement("meta")).name="theme-color",n.content="#"+getComputedStyle(document.querySelector(".navbar"),null).backgroundColor.replace("rgb(","").replace(")","").split(", ").map(function(e){return parseInt(e).toString(16)}).map(function(e){return 1===e.length?"0"+e:e}).join(""),document.querySelector("head").appendChild(n));case 6:case"end":return e.stop()}},e,this)}))()},76:function(e,t){if(!window.ReactDOM)throw Error("ReactDOM must be defined on global variable");e.exports=window.ReactDOM}},[[200,2,1]]]);
//# sourceMappingURL=main.3895e481.chunk.js.map