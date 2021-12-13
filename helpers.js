


function createCard(obj){
    let card=document.createElement("div")
    card.classList.add("card")

    card.innerHTML=`
    
         <h1>${obj.name} </h1>
        <img src="${obj.url}">
        <p>${obj.description}</p>
        <p>${obj.price}</p>
    
    `

    return card
}



function atasareCard(arr){

    let container=document.querySelector(".cards")

    container.innerHTML=""

    for(let i=0;i<arr.length;i++){
        let card=createCard(arr[i])

        container.appendChild(card)
    }


}


function pagini(pagina,elemente,arr){

    let v=[]

    for(let i=(pagina-1)*elemente; i<arr.length && i<pagina*elemente;i++){

        v.push(arr[i])
    }

    return v
}


function butoane (nr){


    let butoanee=document.querySelector(".buttons")

    butoanee.innerHTML=""

    for(let i=1;i<=nr;i++){

        let button=document.createElement("button")

        button.classList.add("btn")

        button.textContent=i

        butoanee.appendChild(button)
    }

    // return butoanee
}


function paginare(pagina,arr){

    let btn=document.querySelector("btn")

    let total=1

    total=Math.floor(arr.length/6)+1


    cards=pagini(pagina,6,arr)


    atasareCard(cards)

    butoane(total)
}



function createObj(){

    let name=document.querySelector("#name")

    let url=document.querySelector("#url")

    let descriere=document.querySelector("#descriere")

    let pret=document.querySelector("#price")

    obj={
        name:"",
        price:"",
        description:"",
        price:""
    }

    obj.name=name.value;
    obj.description=descriere.value
    obj.price=pret.value
    obj.url=url.value;

    // console.log(obj)

    products.push(obj)
    
}