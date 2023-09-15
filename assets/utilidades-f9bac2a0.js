(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const m=[{id:"1",marca:"Cottom Co.",nome:"Camisa Larga com Bolsos",preco:70,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Cottom Co.",nome:"Casaco Reto com Lã",preco:85,imagem:"product-2.jpg",feminino:!0},{id:"3",marca:"Cottom Co.",nome:"Jaqueta com Efeito Camurça",preco:60,imagem:"product-3.jpg",feminino:!1},{id:"4",marca:"Cottom Co.",nome:"Sobretudo em Mescla de Lã",preco:160,imagem:"product-4.jpg",feminino:!1},{id:"5",marca:"Cottom Co.",nome:"Camisa Larga Acolchoada de Veludo Cotelê",preco:110,imagem:"product-5.jpg",feminino:!1},{id:"6",marca:"Cottom Co.",nome:"Casaco de Lã com Botões",preco:170,imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Cottom Co.",nome:"Casaco com Botões",preco:75,imagem:"product-7.jpg",feminino:!0},{id:"8",marca:"Cottom Co.",nome:"Colete Comprido com Cinto",preco:88,imagem:"product-8.jpg",feminino:!0}];function l(t,a){localStorage.setItem(t,JSON.stringify(a))}function d(t){return JSON.parse(localStorage.getItem(t))}function p(t){localStorage.removeItem(t)}function u(t,a,c){const r=m.find(s=>s.id===t),e=document.getElementById(a),o=document.createElement("article"),i=["flex","bg-stone-200","rounded-lg","p-1","relative","mb-2","w-96"];for(const s of i)o.classList.add(s);const n=`
    <img
      src="./assets/img/${r.imagem}"
      alt="Carrinho: ${r.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${r.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${r.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${r.id}' class='ml-2'>${c}</p>
    </div>`;o.innerHTML=n,e.appendChild(o)}export{p as a,m as c,u as d,d as l,l as s};
