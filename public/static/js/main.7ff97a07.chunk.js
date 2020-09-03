(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{272:function(e,t,n){e.exports=n(429)},278:function(e,t,n){},429:function(e,t,n){"use strict";n.r(t);var a=n(69),r=n.n(a);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(0),l=n.n(o),c=n(38),s=n(20),m=n(439),i=(n(277),n(278),n(18)),u=n(65),d=n(239),p=n.n(d),b={user:null};if(localStorage.getItem("jwtToken")){var E=p()(localStorage.getItem("jwtToken"));1e3*E.exp<Date.now()?localStorage.removeItem("jwtToken"):b.user=E}var g=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function f(e,t){switch(t.type){case"LOGIN":return Object(u.a)(Object(u.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(u.a)(Object(u.a)({},e),{},{user:null});default:return e}}function v(e){var t=Object(o.useReducer)(f,{user:b}),n=Object(i.a)(t,2),a=n[0],r=n[1];return l.a.createElement(g.Provider,Object.assign({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var h=n(265);var j=function(e){var t=e.component,n=Object(h.a)(e,["component"]),a=Object(o.useContext)(g).user;return console.log("AuthRoute",a),l.a.createElement(s.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(s.a,{to:"/"}):l.a.createElement(t,e)}}))},O=n(445);var y=function(){var e=Object(o.useContext)(g),t=e.user,n=e.logout,a=window.location.pathname,r="/"===a?"home":a.substr(1),s=Object(o.useState)(r),m=Object(i.a)(s,2),u=m[0],d=m[1],p=function(e,t){var n=t.name;return d(n)};return t?l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:t.username,active:!0,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"logout",onClick:n}))):l.a.createElement(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal"},l.a.createElement(O.a.Item,{name:"home",active:"home"===u,onClick:p,as:c.b,to:"/"}),l.a.createElement(O.a.Menu,{position:"right"},l.a.createElement(O.a.Item,{name:"login",active:"login"===u,onClick:p,as:c.b,to:"/login"}),l.a.createElement(O.a.Item,{name:"register",active:"register"===u,onClick:p,as:c.b,to:"/register"})))},C=n(27),w=n(447),I=n(443),k=n(448),P=n(261),S=n(444),$=n(85),x=n(138),N=n(101),A=n.n(N),D=n(29),L=n(19),M=n.n(L),Q=n(441);var R=function(e){var t=e.content,n=e.children;return l.a.createElement(Q.a,{inverted:!0,content:t,trigger:n})};function T(){var e=Object(D.a)(["\n    mutation likePost($postId: ID!){\n        likePost(postId: $postId){\n            id\n            likes{\n                id\n                username\n            }\n            likeCount\n        }\n    }\n"]);return T=function(){return e},e}var U=M()(T()),q=function(e){var t=e.user,n=e.post,a=n.id,r=n.likeCount,s=n.likes,m=Object(o.useState)(!1),u=Object(i.a)(m,2),d=u[0],p=u[1];Object(o.useEffect)((function(){t&&s.find((function(e){return e.username===t.username}))?p(!0):p(!1)}),[t,s]);var b=Object(C.useMutation)(U,{variables:{postId:a}}),E=Object(i.a)(b,1)[0],g=t?d?l.a.createElement(S.a,{color:"teal"},l.a.createElement($.a,{name:"heart"})):l.a.createElement(S.a,{color:"teal",basic:!0},l.a.createElement($.a,{name:"heart"})):l.a.createElement(S.a,{as:c.b,to:"/login",color:"teal",basic:!0},l.a.createElement($.a,{name:"heart"}));return l.a.createElement(S.a,{as:"div",labelPosition:"right",onClick:E},l.a.createElement(R,{content:d?"Unlike":"Like"},g),l.a.createElement(x.a,{basic:!0,color:"teal",pointing:"left"},r))},z=n(442);function B(){var e=Object(D.a)(["\n{\n    getPosts{\n        id \n        body \n        createdAt \n        username \n        likeCount\n        likes{\n            username\n        }\n        commentCount\n        comments{\n            id \n            username \n            createdAt \n            body\n        }\n    }\n}    \n"]);return B=function(){return e},e}var G=M()(B());function H(){var e=Object(D.a)(["\n    mutation deleteComment($postId: ID!, $commentId: ID!){\n        deleteComment(postId: $postId, commentId: $commentId){\n            id\n            comments{\n                id\n                username\n                createdAt\n                body\n            }\n            commentCount\n        }\n    }\n"]);return H=function(){return e},e}function F(){var e=Object(D.a)(["\n    mutation deletePost($postId: ID!){\n        deletePost(postId: $postId)\n      \n    }\n"]);return F=function(){return e},e}var J=M()(F()),V=M()(H()),W=function(e){var t=e.postId,n=e.commentId,a=e.callback,r=Object(o.useState)(!1),c=Object(i.a)(r,2),s=c[0],m=c[1],u=n?V:J,d=Object(C.useMutation)(u,{update:function(e){if(m(!1),!n){var r=e.readQuery({query:G});r.getPosts=r.getPosts.filter((function(e){return e.id!==t})),e.writeQuery({query:G,data:r})}a&&a()},variables:{postId:t,commentId:n}}),p=Object(i.a)(d,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{content:n?"Delete comment":"Delete post"},l.a.createElement(S.a,{as:"div",color:"red",onClick:function(){return m(!0)},floated:"right"},l.a.createElement($.a,{name:"trash",style:{margin:0}}))),l.a.createElement(z.a,{open:s,onCancel:function(){m(!1)},onConfirm:p}))};var K=function(e){var t=e.post,n=t.body,a=t.createdAt,r=t.id,s=t.username,m=t.likeCount,i=t.commentCount,u=t.likes,d=e.props,p=Object(o.useContext)(g).user;return l.a.createElement(k.a,{fluid:!0},l.a.createElement(k.a.Content,null,l.a.createElement(P.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"}),l.a.createElement(k.a.Header,null,s),l.a.createElement(k.a.Meta,{as:c.b,to:"/posts/".concat(r)},A()(a).fromNow(!0)),l.a.createElement(k.a.Description,null,n)),l.a.createElement(k.a.Content,{extra:!0},l.a.createElement(q,{user:p,post:{id:r,likes:u,likeCount:m}}),l.a.createElement(R,{content:"Comment on post"},l.a.createElement(S.a,{labelPosition:"right",as:c.b,to:"/posts/".concat(r)},l.a.createElement(S.a,{color:"blue",basic:!0},l.a.createElement($.a,{name:"comments"})),l.a.createElement(x.a,{basic:!0,color:"blue",pointing:"left"},i))),p&&p.username===s&&l.a.createElement(W,{postId:r,callback:function(){d.history.push("/")}})))},X=n(263),Y=n(440),Z=n(127),_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.useState)(t),a=Object(i.a)(n,2),r=a[0],l=a[1],c=function(e){l(Object(u.a)(Object(u.a)({},r),{},Object(Z.a)({},e.target.name,e.target.value)))},s=function(t){t.preventDefault(),e()};return{onChange:c,onSubmit:s,values:r}};function ee(){var e=Object(D.a)(["\n    mutation createPost($body: String!){\n        createPost(body: $body){\n            id\n            body\n            createdAt\n            username\n            likes{\n                id\n                username\n                createdAt\n            }\n            likeCount\n            comments{\n                id\n                body\n                username\n                createdAt\n            }\n            commentCount\n        }\n    }\n"]);return ee=function(){return e},e}var te=M()(ee()),ne=function(e){var t=e.props,n=_((function(){m()}),{body:""}),a=n.values,r=n.onChange,o=n.onSubmit,c=Object(C.useMutation)(te,{update:function(e,n){var r=e.readQuery({query:G});r.getPosts=[n.data.createPost].concat(Object(X.a)(r.getPosts)),e.writeQuery({query:G,data:r}),a.body="",t.history.push("/")},variables:a}),s=Object(i.a)(c,2),m=s[0],u=s[1].error;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y.a,{onSubmit:o},l.a.createElement("h2",null,"Create a post:"),l.a.createElement(Y.a.Field,null,l.a.createElement(Y.a.Input,{placeholder:"Hi world",name:"body",onChange:r,value:a.body,error:!!u}),l.a.createElement(S.a,{type:"submit",color:"teal"},"Submit"))),u&&l.a.createElement("div",{className:"ui error message",style:{marginBottom:20}},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,u.graphQLErrors[0].message))))};var ae=function(e){var t=Object(o.useContext)(g).user,n=Object(C.useQuery)(G),a=n.loading,r=n.data,c=(r=void 0===r?{}:r).getPosts;return console.log("home post",c),l.a.createElement(w.a,{columns:3},l.a.createElement(w.a.Row,{className:"page-title"},l.a.createElement("h1",null,"Recent Posts")),l.a.createElement(w.a.Row,null,t&&l.a.createElement(w.a.Column,null,l.a.createElement(ne,{props:e})),a?l.a.createElement("h1",null,"Loading posts..."):l.a.createElement(I.a.Group,null,c&&c.map((function(t){return l.a.createElement(w.a.Column,{key:t.id,style:{marginBottom:20}},l.a.createElement(K,{post:t,props:e}))})))))};function re(){var e=Object(D.a)(["\n    mutation login(\n        $username: String!\n        $password: String!\n    ){\n        login(\n                username: $username\n                password: $password\n        ){\n            id\n            email\n            username\n            createdAt\n            token\n        }\n    }\n"]);return re=function(){return e},e}var oe=M()(re()),le=function(e){var t=Object(o.useContext)(g),n=Object(o.useState)({}),a=Object(i.a)(n,2),r=a[0],c=a[1],s=_((function(){E()}),{username:"",password:""}),m=s.onChange,u=s.onSubmit,d=s.values,p=Object(C.useMutation)(oe,{update:function(n,a){var r=a.data.login;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.errors)},variables:d}),b=Object(i.a)(p,2),E=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Login page"),l.a.createElement(Y.a.Input,{label:"Username",placeholder:"Username...",name:"username",type:"text",value:d.username,error:!!r.username,onChange:m}),l.a.createElement(Y.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:d.password,error:!!r.password,onChange:m}),l.a.createElement("div",{className:"field"},l.a.createElement(S.a,{type:"submit",primary:!0},"Login"))),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))};function ce(){var e=Object(D.a)(["\n    mutation register(\n        $username: String!\n        $email: String!\n        $password: String!\n        $confirmPassword: String!\n    ){\n        register(\n            registerInput: {\n                username: $username\n                email: $email\n                password: $password\n                confirmPassword: $confirmPassword\n            }\n        ){\n            id\n            email\n            username\n            createdAt\n            token\n        }\n    }\n"]);return ce=function(){return e},e}var se=M()(ce()),me=function(e){var t=Object(o.useContext)(g),n=Object(o.useState)({}),a=Object(i.a)(n,2),r=a[0],c=a[1],s=_((function(){E()}),{username:"",email:"",password:"",confirmPassword:""}),m=s.onChange,u=s.onSubmit,d=s.values,p=Object(C.useMutation)(se,{update:function(n,a){var r=a.data.register;t.login(r),e.history.push("/")},onError:function(e){c(e.graphQLErrors[0].extensions.errors)},variables:d}),b=Object(i.a)(p,2),E=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:u,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Register page"),l.a.createElement(Y.a.Input,{label:"Username",placeholder:"Username...",name:"username",type:"text",value:d.username,error:!!r.username,onChange:m}),l.a.createElement(Y.a.Input,{label:"Email",placeholder:"Email...",name:"email",type:"email",value:d.email,error:!!r.email,onChange:m}),l.a.createElement(Y.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:d.password,error:!!r.password,onChange:m}),l.a.createElement(Y.a.Input,{label:"Confirm Password",placeholder:"Confirm Password...",name:"confirmPassword",type:"password",value:d.confirmPassword,error:!!r.confirmPassword,onChange:m}),l.a.createElement("div",{className:"field"},l.a.createElement(S.a,{type:"submit",primary:!0},"Register"))),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))},ie=n(139);function ue(){var e=Object(D.a)(["\n    query ($postId: ID!){\n        getPost(postId: $postId){\n            id\n            body\n            createdAt\n            username\n            likeCount\n            likes{\n                username\n            }\n            commentCount\n            comments{\n                id\n                body\n                createdAt\n                username\n            }\n        }\n    }\n"]);return ue=function(){return e},e}function de(){var e=Object(D.a)(["\n    mutation($postId: String!, $body: String!){\n        createComment(postId: $postId, body: $body){\n            id\n            comments{\n                id\n                body\n                createdAt\n                username\n            }\n            commentCount\n        }\n    }\n"]);return de=function(){return e},e}var pe=M()(de()),be=M()(ue()),Ee=function(e){var t,n=e.match.params.postId,a=Object(o.useContext)(g).user,r=Object(o.useRef)(null),c=Object(o.useState)(""),s=Object(i.a)(c,2),m=s[0],u=s[1],d=Object(C.useQuery)(be,{variables:{postId:n}}).data,p=(d=void 0===d?{}:d).getPost,b=Object(C.useMutation)(pe,{update:function(){u(""),r.current.blur()},variables:{postId:n,body:m}}),E=Object(i.a)(b,1)[0];if(p){var f=p.id,v=p.body,h=p.createdAt,j=p.username,O=p.comments,y=p.likes,I=p.commentCount,N=p.likeCount;t=l.a.createElement(w.a,{columns:3},l.a.createElement(w.a.Row,null,l.a.createElement(w.a.Column,{width:2},l.a.createElement(P.a,{floated:"right",size:"small",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"})),l.a.createElement(w.a.Column,{width:10},l.a.createElement(k.a,{fluid:!0},l.a.createElement(k.a.Content,null,l.a.createElement(k.a.Header,null,j),l.a.createElement(k.a.Meta,null,A()(h).fromNow()),l.a.createElement(k.a.Description,null,v)),l.a.createElement("hr",null),l.a.createElement(k.a.Content,{extra:!0},l.a.createElement(q,{user:a,post:{id:f,likeCount:N,likes:y}}),l.a.createElement(R,{content:"Comment on post"},l.a.createElement(S.a,{as:"div",labelPosition:"right",onClick:function(){console.log("Comment on post")}},l.a.createElement(S.a,{basic:!0,color:"blue"},l.a.createElement($.a,{name:"comments"})),l.a.createElement(x.a,{basic:!0,color:"blue",pointing:"left"},I))),a&&a.username===j&&l.a.createElement(W,{postId:f,callback:function(){e.history.push("/")}}))),a&&l.a.createElement(k.a,{fluid:!0},l.a.createElement(ie.a,null,l.a.createElement("p",null,"Post a comment"),l.a.createElement(Y.a,null,l.a.createElement("div",{className:"ui action input fluid"},l.a.createElement("input",{type:"text",placeholder:"Comment...",name:"comment",value:m,onChange:function(e){return u(e.target.value)},ref:r}),l.a.createElement("button",{type:"submit",className:"ui button teal",disabled:""===m.trim(),onClick:E},"Submit"))))),O.map((function(e){return l.a.createElement(k.a,{fluid:!0,key:e.id},l.a.createElement(ie.a,null,a&&a.username===e.username&&l.a.createElement(W,{postId:f,commentId:e.id}),l.a.createElement(k.a.Header,null,e.username),l.a.createElement(k.a.Meta,null,A()(e.createdAt).fromNow()),l.a.createElement(k.a.Description,null,e.body)))})))))}else t=l.a.createElement("p",null,"Loading post...");return t};var ge=function(){return l.a.createElement(v,null,l.a.createElement(c.a,null,l.a.createElement(m.a,null,l.a.createElement(y,null),l.a.createElement(s.b,{exact:!0,path:"/",component:ae}),l.a.createElement(j,{exact:!0,path:"/login",component:le}),l.a.createElement(j,{exact:!0,path:"/register",component:me}),l.a.createElement(s.b,{exact:!0,path:"/posts/:postId",component:Ee}))))},fe=n(260),ve=n(262),he=n(264),je=n(259),Oe=Object(he.a)({uri:"http://localhost:5000"}),ye=Object(je.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),Ce=new fe.a({link:ye.concat(Oe),cache:new ve.a}),we=l.a.createElement(C.ApolloProvider,{client:Ce},l.a.createElement(ge,null));r.a.render(we,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[272,1,2]]]);
//# sourceMappingURL=main.7ff97a07.chunk.js.map