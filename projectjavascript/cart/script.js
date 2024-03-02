// show real prducts
var products = [
    {name : "blue Chair" , headline:"fully finished blue soft chair, mat finish", price:"15000",image:"https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMGNoYWlyfGVufDB8fDB8fHww" },
    {name : "Traditional chiar" , headline:"Traditional chiar like older generation", price:"15000",image:"https://images.unsplash.com/photo-1621986233880-bba6cc64269e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWRpdGlvbmFsJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    {name : "White Chair" , headline:"soft like cloud", price:"15000",image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D" },
    {name : "Black headset" , headline:"Black mat finished headset , with mice , 12mm bass boosted ", price:"7999",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D" },
    {name : "smart watch" , headline:"white belts , smart wrest watch ", price:"2999",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
];
var popular = [
    {name : "white shoes " , headline:"white shoes , that has less , and more ", price:"1999",image:"https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
    {name : "Black shoes " , headline:"Black shoes , with less, and many more things ", price:"499",image:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww" },
    {name : "Ancinent Pot" , headline:"Ancient Golder pot , a pot from in the era of hadappa", price:"14999999",image:"https://media.istockphoto.com/id/960223342/photo/decorative-jug-oriental-souvenir-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=HED7xHA2lXS_Y67AaD_YI1g6L8mhbW5Qsm92xBGTZ7k=" },
    {name : "Yellow Dress" , headline:"Yellow Dress , new fashion with less (nada)  ", price:"299",image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" },
    {name : "Dress Set" , headline:"Dress Set , has a collection of dresses includes black hoodie , white paijama ", price:"2999",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" },
];








function addProducts(){
    var clutter = "";
products.forEach(function(product){
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="${product.image}" /></div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline.substring(0,20)}...</h3>
                <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
            </div>
            <button class="w-10 h-10 rounded-full shader text-yellow-400"><i
                    class="ri-add-line"></i></button>
        </div>
    </div>
</div>`;
})



document.querySelector(".products").innerHTML = clutter;
}


function addPopularProducts(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += ` <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}"
                alt="">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
        </div>
    </div>`

    })
    document.querySelector(".populars").innerHTML = clutter;
}
addProducts()
addPopularProducts()

// show real popular products
// on click of product add button add it to the cart