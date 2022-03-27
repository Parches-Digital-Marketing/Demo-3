import{j as e,a as i,L as o,r as m,R as u,b as p}from"./vendor.2f6eed72.js";const h=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}};h();function N(){return e("section",{className:"navbar-section",children:e("div",{className:"navbar-container",children:e("nav",{className:"navbar",children:i("ul",{className:"navbar-list",children:[e(o,{activeClass:"active",className:"navbar-list__link",to:"about",spy:!0,isDynamic:!0,smooth:!0,duration:500,children:e("li",{className:"navbar-list__item",children:"Nosotros"})}),e(o,{activeClass:"active",className:"navbar-list__link",to:"membership",spy:!0,isDynamic:!0,smooth:!0,duration:500,children:e("li",{className:"navbar-list__item",children:"Membresia"})}),e(o,{activeClass:"active",className:"navbar-list__link",to:"contact",spy:!0,isDynamic:!0,smooth:!0,duration:500,children:e("li",{className:"navbar-list__item",children:"Contacto"})})]})})})})}var b="/Demo-3/assets/image1.41ae5c1c.jpg",_="/Demo-3/assets/image2.52ccf734.jpg",v="/Demo-3/assets/image3.394f063e.jpg";function f(){const[l,c]=m.exports.useState(0),n=[b,_,v],r=m.exports.useRef(null),a=3500,s=()=>{r.current&&clearTimeout(r.current)};return m.exports.useEffect(()=>(s(),r.current=setTimeout(()=>{c(t=>t===n.length-1?0:t+1)},a),()=>{s()}),[l]),i("div",{className:"intro-section",children:[e("div",{className:"intro-container",children:i("div",{className:"intro-left",children:[e("h1",{className:"intro__title",children:"Si fuera f\xE1cil todos ser\xEDan buenos"}),e("p",{className:"intro__text",children:"Empieza a construir tu cuerpo deseado a partir de ahora"}),e("button",{className:"intro__button",children:"Conocer m\xE1s"})]})}),e("div",{className:"intro-gallery",children:e("ul",{className:"gallery",style:{transform:`translate3d(${-l*100}%, 0, 0)`},children:n.map((t,d)=>e("li",{className:"gallery__item",children:e("img",{className:"gallery__image",src:t,alt:d},d)}))})})]})}function g(){return i("div",{className:"about-section",children:[e("div",{className:"scroll",name:"about"}),i("div",{className:"about-container",children:[i("div",{className:"about-header",children:[e("h2",{className:"about-header__title",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),e("p",{className:"about-header__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio alias rerum sunt unde dolor nostrum voluptate nobis autem. Voluptatibus voluptates placeat quo asperiores, dicta sapiente! Laborum voluptatum reiciendis deleniti."})]}),e("div",{className:"about-cards",children:i("div",{className:"card",children:[i("div",{className:"card-item",children:[e("h3",{className:"card-item__title",children:"Respeto"}),e("p",{className:"card-item__description",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias necessitatibus et nobis voluptas aspernatur atque, natus dolores laudantium laboriosam cupiditate tempore saepe, eligendi ad optio, aperiam corporis iusto ipsa rem?"})]}),i("div",{className:"card-item",children:[e("h3",{className:"card-item__title",children:"Cooperaci\xF3n"}),e("p",{className:"card-item__description",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo magnam atque, debitis blanditiis aspernatur voluptates, error repellendus, suscipit optio iusto aliquam vero itaque. Similique nisi omnis ipsam minus porro? Laudantium?"})]}),i("div",{className:"card-item",children:[e("h3",{className:"card-item__title",children:"Relaci\xF3n social"}),e("p",{className:"card-item__description",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quis incidunt, nobis nostrum aliquam officia similique ipsum quos quibusdam in iure adipisci sint ea, cupiditate id iusto libero non? Asperiores."})]})]})})]})]})}function y(){return i("div",{className:"membership-section",children:[e("div",{className:"scroll",name:"membership"}),i("div",{className:"membership-container",children:[i("div",{className:"membership-header",children:[e("h2",{className:"membership-header__title",children:"Te ofrecemos"}),e("p",{className:"membership-header__description",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil distinctio alias rerum sunt unde dolor nostrum voluptate nobis autem. Voluptatibus voluptates placeat quo asperiores, dicta sapiente! Laborum voluptatum reiciendis deleniti."})]}),i("div",{className:"membership-cards",children:[i("div",{className:"membership-card",children:[e("h3",{className:"membership-card__price",children:"270$"}),e("h4",{className:"membership-card__title",children:"Diario"}),e("p",{className:"membership-card__description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."})]}),i("div",{className:"membership-card",children:[e("h3",{className:"membership-card__price",children:"2,500$"}),e("h4",{className:"membership-card__title",children:"Mensual"}),e("p",{className:"membership-card__description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."})]}),i("div",{className:"membership-card",children:[e("h3",{className:"membership-card__price",children:"16,000$"}),e("h4",{className:"membership-card__title",children:"Anual"}),e("p",{className:"membership-card__description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."})]})]})]})]})}function L(){return i("div",{className:"contact-section",children:[e("div",{className:"scroll",name:"contact"}),e("div",{className:"contact-container"})]})}function x(){return i("div",{className:"app",children:[e(N,{}),i("div",{className:"body",children:[e(f,{}),e(g,{}),e(y,{}),e(L,{})]})]})}u.render(e(p.StrictMode,{children:e(x,{})}),document.getElementById("root"));
