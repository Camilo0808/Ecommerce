import{c as i}from"./utilidades-91cddb65.js";import{a as n,i as a,r,b as d}from"./menuCarrinho-75030dcd.js";function c(){for(const o of i){const t=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${o.feminino?"feminino":"masculino"}' id="card-produto-${o.id}">
        <img
        src="./assets/img/${o.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm'>${o.marca}</p>
        <p class='text-sm'>${o.nome}</p>
        <p class='text-sm'>$${o.preco}</p>
        <button id='adicionar-${o.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=t}for(const o of i)document.getElementById(`adicionar-${o.id}`).addEventListener("click",()=>n(o.id))}const e=document.getElementById("container-produto");function s(){const o=Array.from(e.getElementsByClassName("hidden"));for(const t of o)t.classList.remove("hidden")}function l(){s();const o=Array.from(e.getElementsByClassName("masculino"));for(const t of o)t.classList.add("hidden")}function m(){s();const o=Array.from(e.getElementsByClassName("feminino"));for(const t of o)t.classList.add("hidden")}function u(){document.getElementById("exibir-todos").addEventListener("click",s),document.getElementById("exibir-masculinos").addEventListener("click",m),document.getElementById("exibir-femininos").addEventListener("click",l)}c();a();r();d();u();
