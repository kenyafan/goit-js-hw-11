import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const m="42733452-f5a48a9f7be4f5b128e192710",p="https://pixabay.com",d="/api/";function h(t){const o=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15});return fetch(`${p}${d}?${o}`).then(e=>{if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);return e.json()}).then(e=>e.hits).catch(e=>{throw console.error(e),e})}function y({webformatURL:t,largeImageURL:o,tags:e,likes:i,views:r,comments:s,downloads:n}){return`
    <li class="gallery-item">
      <a href="${o}" class="gallery-link">
        <img src="${t}" alt="${e}" class="gallery__image" />
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
            <p>Downloads</p> ${n}
          </li>
        </ul>
      </a>
    </li>
  `}function g(t){const o=document.querySelector(".gallery"),e=t.map(y).join("");o.innerHTML=e}function l(t){document.querySelector(".loader").classList.toggle("is-hidden",!t)}function a(t){u.error({title:"Error",message:t,position:"topRight"})}const c=document.querySelector(".form-search");document.querySelector(".gallery");c.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.elements.searchQuery.value.trim();if(!o){a("Please enter a search query.");return}l(!0),h(o).then(e=>{e.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(g(e),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(e=>{a(e.message)}).finally(()=>{l(!1),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map
