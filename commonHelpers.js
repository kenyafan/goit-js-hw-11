import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const m="42733452-f5a48a9f7be4f5b128e192710",p="https://pixabay.com",g="/api/";function h(o){const t=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${p}${g}?${t}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw console.error(e),e})}const d="/goit-js-hw-11/assets/Error-7962080a.svg";function y({webformatURL:o,largeImageURL:t,tags:e,likes:i,views:r,comments:s,downloads:a}){return`
    <li class="gallery-item">
      <a href="${t}" class="gallery-link">
        <img src="${o}" alt="${e}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${i}
          </li>
          <li class="info-item">
            <p>Views</p> ${r}
          </li>
          <li class="info-item">
            <p>Comments</p> ${s}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${a}
          </li>
        </ul>
      </a>
    </li>
  `}function b(o){const t=document.querySelector(".gallery"),e=o.map(y).join("");t.innerHTML=e}function l(o){document.querySelector(".loader").classList.toggle("is-hidden",!o)}const n=o=>{const t={position:"topRight",iconUrl:d,timeout:1e4,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",title:"Error",titleColor:"#fafafb",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5"};u.error({...t,message:o})},c=document.querySelector(".form-search");document.querySelector(".gallery");c.addEventListener("submit",o=>{o.preventDefault();const t=o.currentTarget.elements.searchQuery.value.trim();if(!t){n("Please enter a search query.");return}l(!0),h(t).then(e=>{e.length===0?n("Sorry, there are no images matching <br> your search query. Please try again!"):(b(e),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(e=>{n(e.message)}).finally(()=>{l(!1),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
