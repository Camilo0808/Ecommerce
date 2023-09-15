import{c as s}from"./utilidades-f9bac2a0.js";import{a as i,i as a,r,b as d}from"./menuCarrinho-dbcfcced.js";function c(){for(const o of s){const e=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${o.feminino?"feminino":"masculino"}' id="card-produto-${o.id}">
        <img
        src="./assets/img/${o.imagem}"
        alt="Produto 1 do Magazine Hashtag."
        class='group-hover:scale-110 duration-300 my-3 rounded-lg'
        />
        <p class='text-sm text-center py-2'>${o.marca}</p>
        <p class='text-sm text-center py-1'>${o.nome}</p>
        <p class='text-sm text-center text-green-700'>$${o.preco}</p>
        <button id='adicionar-${o.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'
        ><i class="fa-solid fa-cart-plus"></i></button>
        </div>`;document.getElementById("container-produto").innerHTML+=e}for(const o of s)document.getElementById(`adicionar-${o.id}`).addEventListener("click",()=>i(o.id))}const t=document.getElementById("container-produto");function n(){const o=Array.from(t.getElementsByClassName("hidden"));for(const e of o)e.classList.remove("hidden")}function l(){n();const o=Array.from(t.getElementsByClassName("masculino"));for(const e of o)e.classList.add("hidden")}function m(){n();const o=Array.from(t.getElementsByClassName("feminino"));for(const e of o)e.classList.add("hidden")}function u(){document.getElementById("exibir-todos").addEventListener("click",n),document.getElementById("exibir-masculinos").addEventListener("click",m),document.getElementById("exibir-femininos").addEventListener("click",l)}c();a();r();d();u();
