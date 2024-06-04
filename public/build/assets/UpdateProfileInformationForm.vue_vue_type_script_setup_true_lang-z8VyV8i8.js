import{d as _,Q as g,T as y,o as r,g as m,b as s,a,u as e,e as u,w as d,j as h,I as x,h as c,J as V,f as k,k as b}from"./app-BM1evEm7.js";import{_ as f,a as p,b as v}from"./TextInput.vue_vue_type_script_setup_true_lang-DGlDAvl_.js";import{P as w}from"./PrimaryButton-BLX0tU8e.js";const N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),S={key:0},B={class:"text-sm mt-2 text-gray-800"},C={class:"mt-2 font-medium text-sm text-green-600"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600"},q=_({__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{},status:{}},setup(U){const l=g().props.auth.user,t=y({name:l.name,email:l.email});return(i,o)=>(r(),m("section",null,[N,s("form",{onSubmit:o[2]||(o[2]=k(n=>e(t).patch(i.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(f,{for:"name",value:"Name"}),a(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).name=n),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(f,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).email=n),required:"",autocomplete:"username"},null,8,["modelValue"]),a(v,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),i.mustVerifyEmail&&e(l).email_verified_at===null?(r(),m("div",S,[s("p",B,[u(" Your email address is unverified. "),a(e(b),{href:i.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:d(()=>[u(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(s("div",C," A new verification link has been sent to your email address. ",512),[[x,i.status==="verification-link-sent"]])])):c("",!0),s("div",E,[a(w,{disabled:e(t).processing},{default:d(()=>[u("Save")]),_:1},8,["disabled"]),a(V,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:d(()=>[e(t).recentlySuccessful?(r(),m("p",P,"Saved.")):c("",!0)]),_:1})])],32)]))}});export{q as _};