import{A as T,S as x,K as E,M as q,N as V,a as O}from"./assets/vendor-7c8ecbac.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const d=document.querySelector(".nav-wraper"),p=document.querySelector("header"),l=document.querySelector(".hamburger"),$=document.querySelector(".menu-tablet"),D=document.querySelectorAll(".js-nav-link"),c=document.querySelector(".nav-list"),C=document.querySelector(".nav"),g=document.querySelector(".order-project-btn"),b=document.querySelector(".logo"),I=document.body;window.addEventListener("click",B);window.addEventListener("scroll",()=>{window.scrollY>0?(p.classList.add("active"),g.classList.add("active"),C.style.height="80px",C.style.paddingTop="14px",c.style.visibility="hidden",c.style.opacity="0",l.style.alignSelf="center",l.style.marginRight="10px",b.classList.add("active")):(p.classList.remove("active"),g.classList.remove("active"),console.log("test"),b.classList.add("active"),C.style.paddingTop="10px",g.style.marginRight=""),p.classList.contains("active")||(b.classList.remove("active"),l.style.alignSelf=""),p.classList.contains("active")&&g.classList.add("active")});l.addEventListener("click",function(){l.classList.toggle("active"),l.classList.contains("active")?(I.classList.toggle("body-no-scroll"),c.style.visibility="visible",c.style.opacity="1"):I.classList.toggle("body-no-scroll"),d.classList.toggle("active")});$.addEventListener("click",function(e){d.classList.toggle("active"),d.classList.contains("active")?(c.style.visibility="visible",c.style.opacity="1"):(c.style.visibility="hidden",c.style.opacity="0")});D.forEach(e=>e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),n=document.getElementById(o);n&&(n.scrollIntoView({block:"start",behavior:"smooth"}),console.log(o,n)),c.classList.add("active"),!o==="projects"&&c.classList.remove("active"),d.classList.remove("active"),l.classList.remove("active")}));function B(e){!d.contains(e.target)&&!l.contains(e.target)&&d.classList.contains("active")&&(d.classList.remove("active"),c.style.visibility="hidden",c.style.opacity="0")}const R=document.querySelector(".accordeon-list");new T(R,{duration:600,showMultiple:!0,openOnInit:[0]});const F=document.querySelectorAll(".accordeon-title");F.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".title-icon"),o=e.nextElementSibling;t.classList.toggle("active-is"),o.classList.toggle("hidden")})});const H=document.querySelector(".swiper-next"),K=document.querySelector(".about-me-swiper-container"),h=new x(".about-me-skills",{modules:[E,q],speed:800,loop:!0,slidesPerView:2,slideActiveClass:"swiper-content-wrap-active",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},slideToClickedSlide:!0});H.addEventListener("click",()=>{h.slideNext()});K.addEventListener("keydown",function(e){e.preventDefault(),e.key==="Tab"?h.slideNext():h.slidePrev()});new x(".projects-swiper-container",{modules:[E,q,V],speed:800,slidesPerView:1,navigation:{nextEl:".projects-button-slider-next",prevEl:".projects-button-slider-prev"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},slideToClickedSlide:!0});const W=document.querySelector(".faq-list");new T(W,{duration:600,showMultiple:!0,openOnInit:[0]});const J=document.querySelectorAll(".faq-acordeon-wrap");J.forEach(e=>{e.addEventListener("click",function(){const t=e.querySelector(".faq-icon"),o=e.nextElementSibling;t.classList.toggle("faq-is-active"),o.classList.toggle("faq-hidden")})});const U="/Project_CodeCrafters02/assets/Cover1-min-9411e8e8.jpg",Y="/Project_CodeCrafters02/assets/Cover1@2x-min-06f3c971.jpg",z="/Project_CodeCrafters02/assets/Cover2-min-561f650d.jpg",G="/Project_CodeCrafters02/assets/Cover2@2x-min-2dc6fb83.jpg",Q="/Project_CodeCrafters02/assets/Cover3-min-59e3dadf.jpg",X="/Project_CodeCrafters02/assets/Cover3@2x-min-ce60a512.jpg",Z="/Project_CodeCrafters02/assets/Cover4-min-c23b8a83.jpg",ee="/Project_CodeCrafters02/assets/Cover4@2x-min-202dc59c.jpg",te="/Project_CodeCrafters02/assets/Cover5-min-54a43dac.jpg",se="/Project_CodeCrafters02/assets/Cover5@2x-min-d01fd7f5.jpg",oe="/Project_CodeCrafters02/assets/Cover6-min-7627e929.jpg",re="/Project_CodeCrafters02/assets/Cover6@2x-min-024806d3.jpg",ie="/Project_CodeCrafters02/assets/Cover7-min-da0bef7b.jpg",ne="/Project_CodeCrafters02/assets/Cover7@2x-min-8bcc9ed3.jpg",ce="/Project_CodeCrafters02/assets/Cover8-min-1258c29a.jpg",ae="/Project_CodeCrafters02/assets/Cover8@2x-min-8f290f01.jpg",le="/Project_CodeCrafters02/assets/Cover9-min-e88bfda0.jpg",de="/Project_CodeCrafters02/assets/Cover9@2x-min-71094dee.jpg",ue="/Project_CodeCrafters02/assets/Cover10-min-e7f37caa.jpg",me="/Project_CodeCrafters02/assets/Cover10@2x-min-382ef0b9.jpg",M={"js-list-one":[{src:oe,src2x:re,alt:"Cover 6"}],"js-list-two":[{src:U,src2x:Y,alt:"Cover 1"},{src:z,src2x:G,alt:"Cover 2"}],"js-list-three":[{src:te,src2x:se,alt:"Cover 5"},{src:ue,src2x:me,alt:"Cover 10"},{src:Q,src2x:X,alt:"Cover 3"}],"js-list-four":[{src:Z,src2x:ee,alt:"Cover 4"},{src:ie,src2x:ne,alt:"Cover 7"},{src:ce,src2x:ae,alt:"Cover 8"}],"js-list-five":[{src:le,src2x:de,alt:"Cover 9"}]};document.addEventListener("DOMContentLoaded",()=>{const e=s=>s.map(i=>`
            <li class="content-list-item">
                <picture>
                    <source srcset="${i.src2x} 2x, ${i.src}" media="(min-width: 375px)"/>
                    <img class="content-list-image" src="${i.src}" alt="${i.alt}" width="282" height="162"/>
                </picture>
            </li>
        `).join("");Object.keys(M).forEach(s=>{const i=document.querySelector(`.${s}`);i?i.innerHTML=e(M[s]):console.warn(`Element with class ${s} not found.`)});const t=document.querySelector("#covers"),o=document.querySelectorAll(".content-list");function n(s){const{top:i,bottom:w,left:f,right:a}=s.getBoundingClientRect(),{innerHeight:u,innerWidth:m}=window;return i<u&&w>0&&f<m&&a>0}function r(){const s=n(t)?"running":"paused";o.forEach(i=>i.style.animationPlayState=s)}r(),window.addEventListener("scroll",r)});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".reviews-swiper-container"),t=document.querySelector(".reviews-swiper-button-prev"),o=document.querySelector(".reviews-swiper-button-next"),n=new x(e,{modules:[E,q,V],slidesPerView:4,spaceBetween:16,navigation:{nextEl:o,prevEl:t},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{invert:!0},slideToClickedSlide:!0,breakpoints:{320:{slidesPerView:1},340:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:4}}});r();async function r(){try{const a=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!a.ok)throw new Error("Failed to fetch reviews");const u=await a.json();if(u.length===0){i();return}s(u)}catch(a){console.error("Error fetching reviews:",a),w("Failed to fetch reviews. Please try again later.")}}function s(a){const u=a.map(m=>`
        <div class="swiper-slide">
          <div class="review-card">
            <img src="${m.avatar_url}" alt="${m.author}'s avatar" class="review-avatar" />
            <div class="review-author">${m.author}</div>
            <div class="review-text">${m.review}</div>
          </div>
        </div>
      `).join("");e.querySelector(".reviews-swiper-wrapper").innerHTML=u,n.update(),f()}function i(){e.querySelector(".reviews-swiper-wrapper").innerHTML='<p class="not-found">No content available</p>',n.destroy()}function w(a){alert(a)}function f(){n.isBeginning?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled"),n.isEnd?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled")}n.on("slideChange",f)});function ve(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Load state error: ",t);return}}function j(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.error("Save state error: ",o)}}const S=document.querySelector(".footer-form"),A=document.getElementById("user-email"),N=document.getElementById("user-comment"),P=document.querySelector(".backdrop"),fe=document.querySelector(".modal"),pe=document.querySelector(".close-btn"),ge=document.querySelector(".modal-title"),ye=document.querySelector(".modal-message");S.addEventListener("submit",async function(e){e.preventDefault();const t=A.value,o=N.value;if(!t||!o){y("Error!","Please fill in both fields");return}const n={email:t,comment:o};j("email",t),j("comment",o);try{const s=(await O.post("https://portfolio-js.b.goit.study/api/requests",n,{headers:{"Content-Type":"application/json"}})).data;s.error?y("Error!",`${s.error}`):(localStorage.removeItem(_),S.reset(),y("Thank you for your interest in cooperation!","The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."))}catch(r){y("Error!",`Request failed with status code ${r.response.status}`)}});function y(e,t){ge.textContent=e,ye.textContent=t,we()}function we(){P.classList.add("is-open"),document.body.classList.contains("scroll-off")||document.body.classList.add("scroll-off")}function k(){P.classList.remove("is-open"),document.body.classList.contains("scroll-off")&&document.body.classList.remove("scroll-off")}pe.addEventListener("click",k);document.addEventListener("keydown",e=>{e.key==="Escape"&&P.classList.contains("is-open")&&k()});document.addEventListener("click",e=>{e.composedPath().includes(fe)||k()});const _="feedback-form-state",L=ve(_),v={email:"",comments:""};L&&(v.email=L.email,v.comments=L.comments);A.value=v.email;N.value=v.comments;S.addEventListener("input",e=>{v[e.target.name]=e.target.value.trim(),j(_,v)});
//# sourceMappingURL=commonHelpers.js.map
