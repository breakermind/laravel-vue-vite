import{_,o as t,c as n,w as c,v as i,a as o,F as d,r as p,t as l,d as u}from"../js/index.js";const v={},g={class:"locale-changer"},$=["value"];function h(a,s,r,B,k,x){return t(),n("div",g,[c(o("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>a.$i18n.locale=e),class:"locale-changer-select"},[(t(!0),n(d,null,p(a.$i18n.availableLocales,e=>(t(),n("option",{key:`locale-${e}`,value:e},l(e),9,$))),128))],512),[[i,a.$i18n.locale]])])}var m=_(v,[["render",h],["__scopeId","data-v-0541e696"]]);const f={class:"greetings"},L={class:"text"},y={name:"Lang",setup(a){return(s,r)=>(t(),n("div",f,[o("p",L,[o("span",null,l(s.$t("message.helloBig")),1),u(m)])]))}};var b=_(y,[["__scopeId","data-v-5a650bf0"]]);export{b as default};