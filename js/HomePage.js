import { foodItem } from "./foodItem.js";

function displayItems(){
    var Appetizer=document.getElementById('Appetizer_Item');
    var Soup=document.getElementById('Soup_Item');
    var Salad=document.getElementById('Salad_Item');
    var Entree=document.getElementById('Entree_Item');
    var Main_course=document.getElementById('Main-course_Item');
    var Dessert=document.getElementById('Dessert_Item');
    var Tea=document.getElementById('Tea_Item');
    
    const AppetizerData=foodItem.filter(item=>item.category=='Appetizer');
    console.log(AppetizerData);

    const SoupData=foodItem.filter(item=>item.category=='Soup');
    console.log(SoupData);

    const SaladData=foodItem.filter(item=>item.category=='Salad');
    console.log(SaladData);

    const EntreeData=foodItem.filter(item=>item.category=='Entree');
    console.log(EntreeData);

    const MainCourseData=foodItem.filter(item=>item.category=='Main-course');
    console.log(MainCourseData);

    const DessertData=foodItem.filter(item=>item.category=='Dessert');
    console.log(DessertData);

    const TeaData=foodItem.filter(item=>item.category=='Tea');
    console.log(TeaData);

    AppetizerData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Appetizer.appendChild(itemCard);


    })

    SoupData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Soup.appendChild(itemCard);


    })

    SaladData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Salad.appendChild(itemCard);


    })

    EntreeData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Entree.appendChild(itemCard);


    })

    MainCourseData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Main_course.appendChild(itemCard);


    })

    DessertData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Dessert.appendChild(itemCard);


    })

    TeaData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        //新增餐點評價
        var star=document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var cart=document.createElement('i');
        cart.setAttribute('class','fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id',item.id);
        
        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img=document.createElement('img');
        img.src=item.img;

        //新增餐點名稱
        var itemName=document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=item.name;

        //新增餐點價格
        var itemPrice=document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText='價格 : $ '+item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
  
        Tea.appendChild(itemCard);


    })

}
displayItems();