import{i as d,S as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();function y(t){const o="42733452-f5a48a9f7be4f5b128e192710",s="https://pixabay.com",i="/api/",r=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${s}${i}?${r}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw console.error(e),e})}function h(t){const o=document.querySelector(".gallery"),s=t.map(({webformatURL:i,largeImageURL:r,tags:e,likes:a,views:u,comments:f,downloads:m})=>`
        <li class="gallery-item">
        <a href="${r}" class="gallery-link">
          <img src="${i}" alt="${e}"" class="gallery__image" />
          <ul class="info">
            <li class="info-item">
              <p>Likes</p> ${a}
            </li>
            <li class="info-item">
            <p>Views</p> ${u}
            </li>
            <li class="info-item">
              <p>Comments</p> ${f}
            </li>
            <li class="info-item">
              <p>Downloads</p> ${m}
            </li>
          </ul>
        </a>
      </li>
      `).join("");o.innerHTML=s}function n(t){document.querySelector(".loader").classList.toggle("is-hidden",!t)}function l(t){d.error({title:"Error",message:t,position:"topRight"})}const c=document.querySelector(".form-search");document.querySelector(".gallery");c.addEventListener("submit",async t=>{t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();if(o){n(!0);try{const s=await y(o);s.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(h(s),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}catch(s){l(s.message)}finally{n(!1),c.reset()}}});
//# sourceMappingURL=commonHelpers.js.map
