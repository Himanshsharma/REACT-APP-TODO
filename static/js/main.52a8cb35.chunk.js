(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{233:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(86),i=o.n(r),c=o(44),l=o(6),d=o(7),s=o(9),p=o(8),u=o(10);o(93);var h={paddingTop:"20px",height:"100px",background:"#333",color:"#fff",textAlign:"center"},m=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TODO LIST"))},f=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={},o.getStyle=function(){return o.props.todo.completed?{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:"line-through"}:{textDecoration:"none"}},o}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("h2",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,this.props.todo.id)})," ","                ",this.props.todo.title," "),a.a.createElement("button",{style:b,onClick:this.props.delTodo.bind(this,this.props.todo.id)},"x"))}}]),e}(n.Component),b={background:"#ff0000",color:"#fff",border:"none",padding:"5px 8px",borderRadius:"50%",cursor:"pointer",float:"right"},v=f,y=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={},o}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(v,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),e}(n.Component),g=(o(94),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onChange=function(t){o.setState({title:t.target.value})},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex",height:"70px"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"add todo",style:{flex:"10",width:"80%",padding:"5px",borderStyle:"solid",borderWidth:"4px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",classNmae:"btn",style:{flex:"1"}}))}}]),e}(n.Component)),O=o(87),k=o.n(O),j=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{id:1,title:"take out the crash",completed:!1},{id:2,title:"take out the crash",completed:!1},{id:3,title:"take out the crash",completed:!1}]},o.markComplete=function(t){o.setState({todos:o.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},o.delTodo=function(t){o.setState({todos:Object(c.a)(o.state.todos.filter((function(e){return e.id!==t})))})},o.addTodo=function(t){var e={id:k.a.v4(),title:t,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[e])})},o}return Object(u.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{class:"container"},a.a.createElement(m,null),a.a.createElement(g,{addTodo:this.addTodo}),a.a.createElement(y,{todos:this.state.todos,markComplete:this.markComplete,delTodo:this.delTodo})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},88:function(t,e,o){t.exports=o(233)},93:function(t,e,o){}},[[88,1,2]]]);
//# sourceMappingURL=main.52a8cb35.chunk.js.map