import{r as o,u as g,U as x,j as e,L as l,I as _,a as p}from"./index-deb051c6.js";import{I as i,P as j,S as v,F as y}from"./Component-19fbbef5.js";const b="_login_1r7h0_1",f="_action_1r7h0_11",w="_logo_1r7h0_19",N="_form_1r7h0_49",L="_hidden_visually_1r7h0_89",S="_register_1r7h0_145",P="_buttons_1r7h0_171",s={login:b,action:f,logo:w,form:N,hidden_visually:L,register:S,buttons:P},I=()=>{const[n,c]=o.useState(""),[r,d]=o.useState(""),h=g(),{setUser:m}=o.useContext(x),u=async a=>{a.preventDefault();try{const t=await p.post("/login",{email:n,password:r},{withCredentials:!0});return m(t.data),console.log(t.data),alert("Login successfully"),h("/")}catch{alert("Login failed!")}};return e.jsxs("div",{className:s.login,children:[e.jsx("div",{className:s.logo,children:e.jsx(l,{to:"/",children:e.jsx(_,{name:"airbnb",type:"svg"})})}),e.jsx("div",{className:s.form,children:e.jsxs("form",{action:"",onSubmit:u,children:[e.jsx("h4",{children:"Welcome to Airbnb, lets discover new places, new people, new you!"}),e.jsx("p",{children:"Welcome back, please sign in to continue"}),e.jsx("label",{htmlFor:"email",className:s.hidden_visually,children:"Email"}),e.jsx(i,{type:"email",name:"email",id:"email",placeholder:"Email",value:n,onChange:a=>{c(a.target.value)}}),e.jsx("label",{htmlFor:"password",className:s.hidden_visually,children:"Password"}),e.jsx(i,{type:"password",name:"password",id:"password",placeholder:"Password",value:r,onChange:a=>{d(a.target.value)}}),e.jsxs("div",{className:s.buttons,children:[e.jsx(j,{children:"Sign in"}),e.jsxs(v,{children:["Google ",e.jsx(y,{style:{marginLeft:"5px"},size:20})," "]})]}),e.jsxs("p",{className:s.register,children:["If your have not had a account yet,"," ",e.jsx(l,{to:"/account/register",children:"Register here"})," "]})]})})]})};export{I as default};