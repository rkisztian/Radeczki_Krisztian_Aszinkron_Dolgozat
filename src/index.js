

async function osszesMegjelenites(idezetlista){
    let lista = document.getElementById('lista')
    lista.textContent= '';
    for (let i of idezetlista){
        let li = document.createElement('li');
        li.textContent = i.quote + ";" + i.author;
        lista.appendChild(li);
    }
}


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('ossz').addEventListener('click', async()=>{
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        let szerzo = eredmeny.quotes;
        szerzo = szerzo.sort((a,b)=>{
            if(a.author < b.author){
                return -1;
            }
        });
        osszesMegjelenites(szerzo);
    })
})