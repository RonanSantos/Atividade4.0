const button2 = document.getElementById("botao2");
button2.addEventListener("click", ()=>inserir());


function inserir (){
    const qtdNum = document.querySelector('#qtdNum').value;
    for (let index = 0; index < qtdNum; index++) {        
        const table = document.getElementById("tabela1");
        const row = table.insertRow(1);
        const coluna1 = row.insertCell(0);
        const coluna2 = row.insertCell(1);
        const coluna3 = row.insertCell(2);
        coluna1.innerHTML = `${index}`;
        coluna2.innerHTML = `ALEATÓRIO`;
        coluna3.innerHTML = `<button class="excluir" onclick="this.parentNode.parentNode.remove();">excluir</button>`;
    }
}

