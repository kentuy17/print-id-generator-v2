import{m as h,j as e,L as f}from"./app-8u4XjYch.js";import"./TextInput-DbAgMN9G.js";import{G as j}from"./GuestLayout-Cho6h1tz.js";import{C as g,a as v,b as w,c as N,d as L}from"./card-QofHGZsq.js";import{I as i}from"./input-DxVPZQDH.js";import{L as o}from"./label-BDtU2UQC.js";import{c as b,B as n}from"./button-BtLD4Ebk.js";import"./index-DAa-CRdv.js";import"./index-YPWYFSg4.js";function B({className:m,status:r,canResetPassword:d,...c}){const{data:a,setData:l,post:x,reset:u}=h({email:"",password:"",remember:!1}),p=s=>{s.preventDefault(),x(route("login"),{onFinish:t=>{u("password"),localStorage.setItem("email",a.email)},onError:t=>{alert(t.email)}})};return e.jsxs(j,{children:[e.jsx(f,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:r}),e.jsx("div",{className:b("flex flex-col gap-6",m),...c,children:e.jsxs(g,{children:[e.jsxs(v,{children:[e.jsx(w,{className:"text-2xl",children:"Login"}),e.jsx(N,{children:"Enter your email below to login to your account"})]}),e.jsxs(L,{children:[e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("form",{className:"flex flex-col gap-6",onSubmit:p,children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(o,{htmlFor:"email",children:"Email"}),e.jsx(i,{id:"email",type:"email",placeholder:"m@example.com",onChange:s=>l("email",s.target.value),value:a.email,required:!0})]}),d&&e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{htmlFor:"password",children:"Password"}),e.jsx("a",{href:route("password.request"),className:"ml-auto inline-block text-sm underline-offset-4 hover:underline",children:"Forgot your password?"})]}),e.jsx(i,{id:"password",value:a.password,onChange:s=>l("password",s.target.value),type:"password",required:!0})]}),e.jsx(n,{type:"submit",className:"w-full",children:"Login"})]}),e.jsx(n,{variant:"outline",className:"w-full",children:"Login with Google"})]}),e.jsxs("div",{className:"mt-4 text-center text-sm",children:["Don't have an account?"," ",e.jsx("a",{href:route("register"),className:"underline underline-offset-4",children:"Sign up"})]})]})]})})]})}export{B as default};
