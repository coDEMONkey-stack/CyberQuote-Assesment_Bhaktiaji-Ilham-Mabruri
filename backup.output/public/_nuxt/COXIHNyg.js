import{ap as l}from"./D6WxgO_k.js";import{u as s}from"./CrdTo_oj.js";function a({authTokenKey:e,authUserKey:t}={authTokenKey:"auth.token",authUserKey:"auth.user"}){const o=s(t),u=s(e);return{store:(r,n)=>{u.value=r,o.value=n},clear:()=>{o.value=null,u.value=""},user:o,token:u}}const f=l({id:"auth",state:()=>{const{token:e,user:t}=a();return{loggedIn:!!e.value,user:t.value,loading:!1}},actions:{logout(){const{clear:e}=a();e(),this.loggedIn=!1,this.user=null}}});export{a,f as u};