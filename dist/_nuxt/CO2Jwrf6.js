import{_ as g}from"./CF7SlA99.js";import{_ as y}from"./BvA_Ya92.js";import{h as b,i as k,r as d,e as V,o,c as a,a as s,b as c,w as m,d as l,t as x,f,g as w}from"./B99yj_T0.js";import{u as h}from"./B2Gs5OKL.js";import"./DPo8dKM2.js";import"./BhTqCcjM.js";const C={class:"mb-5"},N={key:0,class:"text-center"},P={key:1,class:"text-center text-red-500"},B={key:2,class:"overflow-x-auto text-center justify-center items-center"},F={class:"text-sm md:text-xl lg:text-2xl xl:text-3xl font-bold"},E=b({__name:"index",setup(S){const t=h(),p=k(),r=d(!0),n=d(null);return V(async()=>{try{t.user||await t.login("97"),t.user&&t.user.id<=5?p.push("/admin/not-vip"):r.value=!1}catch(i){n.value="Failed to load user data. Please try again.",r.value=!1,console.error(i)}}),(i,e)=>{const _=g,v=y;return o(),a("div",null,[s("div",C,[c(_,{class:"font-semibold text-2xl",to:"/"},{default:m(()=>e[0]||(e[0]=[l(" VIP ")])),_:1}),e[1]||(e[1]=s("div",{class:"text-gray-500"}," Profile Status ",-1))]),c(v,{icon:"fluent-emoji-flat:crown","icon-class":"w-[70px] h-[70px] text-[#FFD700]",class:"mb-5","header-class":"border-none text-center"},{default:m(()=>{var u;return[r.value?(o(),a("div",N,e[2]||(e[2]=[s("p",null,"Loading user data...",-1)]))):n.value?(o(),a("div",P,[s("p",null,x(n.value),1)])):f(t).user?(o(),a("div",B,[s("p",F,[l(" Welcome back, "+x((u=f(t).user)==null?void 0:u.name)+". ",1),e[3]||(e[3]=s("br",null,null,-1)),e[4]||(e[4]=l(" You're a VIP user. "))])])):w("",!0)]}),_:1})])}}});export{E as default};