import{u as c,c as u,a as d,_ as p,b as _}from"./BF-isWpa.js";import{e as f,l as b,m as w,o as g,c as x,a as S,b as t,w as y,g as s,d as h}from"./DSVaGC4_.js";import"./Cpj98o6Y.js";const k={class:"flex items-center justify-center h-full"},V=f({__name:"forgot-password",setup(B){b({title:"Forgot Password"});const{handleSubmit:n}=c({validationSchema:u({email:d().required().email().label("Email")})}),o=n(a=>{console.log(JSON.stringify(a,null,2))});return(a,e)=>{const r=p,l=w("UInput"),m=_;return g(),x("div",k,[S("form",{class:"rounded-lg p-8 w-full max-w-md mx-auto",onSubmit:e[0]||(e[0]=(...i)=>s(o)&&s(o)(...i))},[t(r,{title:"Forgot Password",subtitle:"Please enter your email"}),t(l,{"wrapper-class":"mb-4",name:"email",label:"Email",placeholder:"Email"}),t(m,{type:"submit",color:"primary",block:""},{default:y(()=>e[1]||(e[1]=[h(" Send Password Reset Link ")])),_:1})],32)])}}});export{V as default};
