// atasareCard(products)
 

let cards=document.querySelector(".cards")

let buttons=document.querySelector(".buttons")

let last=1

paginare(1,products)



buttons.addEventListener('click', (e) =>{

    let obj=e.target;

    if(obj.tagName=="BUTTON"){

        last=obj.textContent;

        paginare(last,products);
    }
    
})



let search=document.querySelector("#search")

search.addEventListener("input", () =>{

    let searchItem=search.value;

     searchItem=searchItem.toLowerCase();

    let cards = []


    if(searchItem){

        for(let e of products){
            let name=e.name.toLocaleLowerCase()

            if(name.includes(searchItem))

            cards.push(e)
        }
        atasareCard(cards)
    }else{
        paginare(1,products)

    }

    
})



let submit=document.querySelector(".submit")

submit.addEventListener("click", () =>{
    createObj()
})