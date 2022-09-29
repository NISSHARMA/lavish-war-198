
let Kart=JSON.parse(localStorage.getItem("cartitem"))||[]


let fruit=[
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/1201414_1-fresho-onion.jpg",
    company:"Fresho",
    product:"onion",
    price:  134.98
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/40162469_6-fresho-potato-new-crop.jpg",
    company:"Fresho",
    product:"Potato",
    price:  78.50
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000070_15-fresho-carrot-orange.jpg",
    company:"Fresho",
    product:"Carrot - Orange (Loose)",
    price: 75.50
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
    company:"Fresho",
    product:"Ladies' Fingers (Loose)",
    price:52.60,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/40089742_2-fresho-beans-haricot.jpg",
    company:"Fresho",
    product:"Beans - Haricot (Loose)",
    price:25,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/1203441_1-fresho-onion-1-kg-new-potato-1-kg-tomato-hybrid-1-kg.jpg",
    company:"Fresho",
    product:"Onion 1 kg + New Potato 1 kg + Tomato - Hybrid  1 kg",
    price: 86,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000204_16-fresho-tomato-local.jpg",
    company:"Fresho",
    product:"Tomato - Hybrid (Loose)",
    price: 45,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000269_31-fresho-pomegranate.jpg",
    company:"Fresho",
    product:"Pomegranate (Loose)",
    price: 46,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000031_21-fresho-banana-yelakki.jpg",
    company:"Fresho",
    product:"Banana - Yelakki",
    price:  42,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
    company:"Fresho",
    product:"Cauliflower",
    price: 49,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000273_16-fresho-mushrooms-button.jpg",
    company:"Fresho",
    product:"Mushrooms - Button",
    price:50.02,
    },
    {
    img:"https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    company:"Fresho",
    product:"Capsicum - Green (Loose)",
    price: 80,
    },
    {
    
    img:"https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
    company:"Fresho",
    product:"Cucumber (Loose)",
    price:26.50,
    },
    
    {    
    img:"https://www.bigbasket.com/media/uploads/p/s/40134281_13-fresho-baby-apple-shimla.jpg",
    company:"Fresho",
    product:"Baby Apple Shimla",
    price: 112,
    },
    
    {    
    img:"https://www.bigbasket.com/media/uploads/p/s/10000098_9-fresho-coriander-leaves.jpg",
    company:"Fresho",
    product:"Coriander Leaves",
    price: 31,
    },
    
    {    
    img:"https://www.bigbasket.com/media/uploads/p/s/40022638_4-fresho-tomato-local-organically-grown.jpg",
    company:"Fresho",
    product:"Tomato - Local, Organically Grown (Loose)",
    price: 26.40,
    },
    
    {
    
    img:"https://www.bigbasket.com/media/uploads/p/s/10000027_28-fresho-banana-robusta.jpg",
    company:"Fresho",
    product:"Banana - Robusta",
    price:16.50,
    },
    
    {
    
    img:"https://www.bigbasket.com/media/uploads/p/s/10000127_17-fresho-lemon.jpg",
    company:"Fresho",
    product:"Lemon (Loose)",
    price:48.75
    },
    
    {
    
    img:"https://www.bigbasket.com/media/uploads/p/s/1203678_1-fresho-tender-coconut-medium.jpg",
    company:"Fresho",
    product:"Tender Coconut - Medium",
    price:180
    }
]

fruit.forEach(function(el){
    let product=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.img
    product.append(image)

    let company=document.createElement("p")
    company.innerText=el.company
    product.append(company)

    let pro=document.createElement("p")
    pro.innerText=el.product
    product.append(pro)

    let price=document.createElement("h4")
    price.innerText=el.price
    product.append(price)

    let btn=document.createElement("button")
    btn.innerText="Add To Cart"
    product.append(btn)
    btn.addEventListener("click", function(){
        addtocart(el)
    })

    document.getElementById("abc").append(product)

})

 function addtocart(el){
    Kart.push(el)   
    localStorage.setItem("cartitem",JSON.stringify(Kart))
 }


  
 


    
    