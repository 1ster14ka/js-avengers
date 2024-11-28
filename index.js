import{A as w,S as h,N as L,K as b,a as E,i as S}from"./assets/vendor-Bdl5oSAj.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const v=document.querySelectorAll(".project-card"),u=document.querySelector(".js-load-more"),m=document.querySelector(".js-show-less"),k=document.querySelector(".catalog-title");let c=3;function f(){v.forEach((e,t)=>{t<c?e.classList.add("visible"):e.classList.remove("visible")}),c>=v.length?(u.style.display="none",m.style.display="block"):(u.style.display="block",m.style.display="none")}u.addEventListener("click",()=>{c+=3,f()});m.addEventListener("click",()=>{c=3,f(),k.scrollIntoView({behavior:"smooth",block:"start"})});f();function y(e){localStorage.setItem("theme",e),document.documentElement.className=e}(function(){localStorage.getItem("theme")==="theme-dark"?(y("theme-dark"),document.getElementById("slider").checked=!0):(y("theme-light"),document.getElementById("slider").checked=!1)})();const q=document.querySelector(".nav-list"),B=document.querySelector(".modal-overlay");q.addEventListener("click",e=>{if(e.target.classList.contains("modal-link"))B.classList.remove("active");else return});const T=document.querySelector(".burger-btn"),i=document.querySelector(".modal-overlay"),M=i.querySelector(".icon-close");T.addEventListener("click",()=>{i.classList.add("active")});M.addEventListener("click",()=>{i.classList.remove("active")});i.addEventListener("click",e=>{e.target===i&&i.classList.remove("active")});const g="/js-avengers/assets/symbol-defs-B-BGw_Ws.svg",j=document.querySelector(".questions-container"),I=new w(j,{showMultiple:!1,duration:400,onOpen:function(e){e.style.overflow="visible",document.querySelectorAll(".ac").forEach(r=>{r.classList.remove("opened","closed"),r.classList.add("closed")});const o=e.closest(".ac"),s=o.previousElementSibling;s&&(s.style.borderBottom="none"),o.classList.remove("closed"),o.classList.add("opened"),e.querySelector(".faq-icon use").setAttribute("href",`${g}#icon-vector-up`)},onClose:function(e){const t=e.closest(".ac"),o=t.previousElementSibling;o&&(o.style.borderBottom="1px solid #e4e5e6"),t.classList.remove("opened"),t.classList.add("closed"),e.querySelector(".faq-icon use").setAttribute("href",`${g}#icon-vector-down`)}});I.open(0);const x="https://portfolio-js.b.goit.study/api/reviews",O=document.querySelector(".reviews-swiper-list"),P=new h(".reviews-swiper",{modules:[L,b],keyboard:{enabled:!0},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},speed:400,spaceBetween:32,breakpoints:{320:{slidesPerView:1},1280:{slidesPerView:2,centerInsufficientSlides:!0}}});async function A(){const{data:e}=await E(x);return e}function N(e){return e.map(({author:t,avatar_url:o,review:s})=>`<li class="swiper-slide">
            <div class="reviews-text">
              <p class="review-p">${s}</p>
            </div>
          <div class="reviews-info">
            <div class="reviews-wrapper-img">
              <img src="${o}" alt="client" class="reviews-img">
            </div>
            <h3 class="reviews-name">${t}</h3>
          </div>
        </li>`).join("")}A().then(e=>{O.innerHTML=N(e),P.update()}).catch(e=>{document.querySelector(".reviews-swiper").innerHTML='<p class="error">Not found</p>'});const d=document.getElementById("contactForm");document.getElementById("successModal");const $=document.getElementById("closeModal");document.getElementById("errorNotification");const l=document.getElementById("backdrop");d.addEventListener("submit",function(e){e.preventDefault();const t=new FormData(d);console.log("Sending data:",{email:t.get("email"),comment:t.get("comment")});const o={email:t.get("email"),comment:String(t.get("comment"))};console.log(o),fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then(s=>{if(s.ok)return s.json();throw new Error("Network response was not ok")}).then(s=>{console.log("Success:",s),C(s),l.classList.add("is-open"),d.reset()}).catch(s=>{S.error({title:"Error",message:"Something went wrong. Please try again later!"})})});function C(e){const t=document.getElementById("jsTitle"),o=document.getElementById("jsText");if(t){const s=`${e.title}`;t.textContent=s}else console.error('Element with id "jsTitle" not found.');if(o){const s=`${e.message}`;o.textContent=s}else console.error('Element with id "jsText" not found.')}function p(){l.classList.remove("is-open")}$.addEventListener("click",p);l.addEventListener("click",function(e){e.target===l&&p()});document.addEventListener("keydown",function(e){e.key==="Escape"&&p()});const H=document.querySelectorAll(".skills-text, .skills-point");H.forEach(e=>{let t=0;const o=e.innerHTML+"&nbsp;&nbsp;&nbsp;&nbsp;"+e.innerHTML;e.innerHTML=o;function s(){t-=3,e.style.transform=`translateX(${t}px)`,Math.abs(t)>=e.scrollWidth/0&&(t=0)}setInterval(s,20)});
//# sourceMappingURL=index.js.map
