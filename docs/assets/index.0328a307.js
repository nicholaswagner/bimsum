import{c as l,j as r,R as d,a}from"./vendor.d7bf2b83.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();const f=l({"@global":{body:{margin:0,padding:0}},app:{margin:0,padding:0,backgroundColor:"white",height:"100%"}});function p(){const i=f();return r("div",{className:i.app,children:r("p",{children:"Vite is alivel and kicking!"})})}d.render(r(a.StrictMode,{children:r(p,{})}),document.getElementById("root"));
