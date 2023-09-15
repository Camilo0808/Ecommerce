import{l as p,c as d,s as a}from"./utilidades-91cddb65.js";const n=p("carrinho")??{};function s(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function x(){Object.keys(n).length!==0&&(window.location.href="./checkout.html")}function y(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),r=document.getElementById("finalizar-compra");t.addEventListener("click",C),e.addEventListener("click",s),r.addEventListener("click",x)}function l(t){delete n[t],a("carrinho",n),i(),b()}function m(t){n[t]++,a("carrinho",n),i(),u(t)}function E(t){if(n[t]===1){l(t);return}n[t]--,a("carrinho",n),i(),u(t)}function u(t){document.getElementById(`quantidade-${t}`).innerText=n[t]}function h(t){const e=d.find(c=>c.id===t),r=document.getElementById("produtos-carrinho"),o=document.createElement("article"),f=["flex","bg-slate-100","rounded-lg","p-1","relative"];for(const c of f)o.classList.add(c);const g=`<button id="remover-item-${e.id}" class="absolute top-0 right-2">
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img
      src="./assets/img/${e.imagem}"
      alt="Carrinho: ${e.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${e.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${e.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${e.id}'>-</button>
        <p id='quantidade-${e.id}' class='ml-2'>${n[e.id]}</p>
        <button class='ml-2' id='incrementar-produto-${e.id}'>+</button>
    </div>`;o.innerHTML=g,r.appendChild(o),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>E(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>m(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>l(e.id))}function b(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in n)h(e)}function I(t){if(t in n){m(t);return}n[t]=1,a("carrinho",n),h(t),i(),s()}function i(){const t=document.getElementById("preco-total");let e=0;for(const r in n)e+=d.find(o=>o.id===r).preco*n[r];t.innerText=`Total: $${e}`}export{I as a,i as b,y as i,b as r};
