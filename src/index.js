

async function osszesMegjelenites(idezetlista){
    let lista = document.getElementById('lista')
    lista.textContent= '';
    for (let i of idezetlista){
        let li = document.createElement('li');
        li.textContent = i.quote + "; " + i.author;
        lista.appendChild(li);
    }
}


async function theKiemeles(idezetlista){
    let lista = document.getElementById('szamLista')
    lista.textContent= '';
    for (let i of idezetlista){
        let li = document.createElement('li');
        li.textContent = i.quote;
        lista.appendChild(li);
    }
}


async function darabszamMegjelenites(idezetlista){
    let nev = document.getElementById('szerzoNev').value;
    let db = 0;
    let szerzoNevek = idezetlista.filter(function(idezetlista){
        return idezetlista.author == nev;
    })
    for(let i of szerzoNevek){
        if(nev == i.author){
            db++;
        }
        document.getElementById('szerzoOssz').value = db;
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


    let theTomb = [];
    document.getElementById('the').addEventListener('click', async()=>{
        let lista = document.getElementById('lista')
        lista.textContent = "";
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes
        theTomb.push(idezetek.quote)
        theKiemeles(idezetek);
    })

    document.getElementById('buttonDarabszam').addEventListener('click', async()=>{
        let lista = document.getElementById('lista')
        lista.textContent = "";
        let lista1 = document.getElementById('szamLista')
        lista1.textContent= '';
        let response = await fetch('/quotes.json');
        let eredmeny = await response.json();
        let szerzok = eredmeny.quotes;

        darabszamMegjelenites(szerzok);
    })


    
})