
let foodgrain=[
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/274120_4-sunpure-refined-sunflower-oil.jpg",
        company:"Aashirvaad",
        product:"Atta/Godihittu - Whole Wheat",
        price:463
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg",
        company:"BB Royal",
        product:"Rice/Akki - Raw, Sona Masoori, 12-17 Months Old",
        price:539
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/30005417_8-bb-popular-sugar.jpg",
        company:"BB Popular",
        product:"Sugar/Sakkare",
        price:226
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40030808_10-bb-royal-cuminjeera-whole.jpg",
        company:"BB Royal",
        product:"Cumin/Jeera/Jeerige - Whole",
        price:353
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40075897_12-bb-royal-sona-masoori-rice-raw-rice-super-premium.jpg",
        company:"BB Royal",
        product:"Sona Masoori Rice/Akki Raw Rice/Akki - Super Premium",
        price:575
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/213273_7-nandini-pure-ghee.jpg",
        company:"Nandini",
        product:"Pure Ghee/Tuppa",
        price:570
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/1204455_2-fortune-sunflower-refined-oil-sun-lite.jpg",
        company:"Fortune",
        product:"Sunflower Refined Oil - Sun Lite",
        price:459
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/274120_4-sunpure-refined-sunflower-oil.jpg",
        company:"Sunpure",
        product:"Refined - Sunflower Oil",
        price:156
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40072494_12-bb-royal-organic-turtoor-dal.jpg",
        company:"BB Royal",
        product:"Organic - Toor Dal/Togari Bele",
        price:155
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/60000007_5-bb-popular-moong-dal.jpg",
        company:"BB Royal",
        product:"Moong Dal/Hesaru Bele",
        price:56.50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/10000407_12-bb-royal-refined-sugar-sulphurless.jpg",
        company:"BB Royal",
        product:"Refined Sugar (Sulphurless)/Sakkare",
        price:239
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/40000291_8-tata-sampann-unpolished-toor-dalarhar-dal.jpg",
        company:"Tata Sampann",
        product:"Toor Dal/Togari Bele",
        price:150
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/241600_5-tata-salt-iodized.jpg",
        company:"Tata Salt",
        product:"Iodized",
        price:142
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/30010377_11-bb-popular-urad-dal-split.jpg",
        company:"BB Popular",
        product:"Urad Dal/Uddina Bele - Split",
        price:55.50
    },
    {
        image:"https://www.bigbasket.com/media/uploads/p/s/10000431_18-bb-royal-pohaavalakkiavalchivda-thick.jpg",
        company:"BB Royal",
        product:"Poha/Avalakki/Aval/Chivda Thick - Flattened & Beaten Rice , Makers Breakfast &  Teatime Snacks",
        price:60.82
    },
]


foodgrain.forEach(function(el){
    let product=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image
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