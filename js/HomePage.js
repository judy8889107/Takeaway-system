
var foodItem;
var session;

$.get("../phpCode/HomePage.php", function (result) {
    session = result; /* 成功登入，得到該用戶所有資料 */
    console.log("session: "+ session);
    if (session.islogin)
        setForegroundElement();
    else
    $("#m-sign-out").hide();
}, "json");

//當成功登入後 設定前台所有element
function setForegroundElement() {
    $("div.user i.fa.fa-user").text(session.nickName);
    $("#add-address").text(session.address);
    $(".SignIn").hide();
    $("#m-sign-out").show();
}

//多元素Button事件綁定
$("i.fa.fa-user, i.fa.fa-sign-out.Logout").click(function (e) {
    var className = $(e.target).attr("class");
    switch (className) {
        case "fa fa-user Login":
            if (!session.islogin) /* 未登入則會跳轉登入頁面 */
                $(location).prop("href", "Login.html");
            else {
                $(location).prop("href", "UserPage.html");
            }

            break;
        case "fa fa-sign-out  Logout": /* 登出 */
            $.get("../phpCode/Logout.php");
            location.reload();
            break;
    }

})

//當login時方可下拉選單
let hoverLogin = false
let hoverDropdown = false


$("i.fa.fa-user").hover(
    (e) => {   //hoverIn
        if (session.islogin) { /* 已登入 */
            // 判斷使用者是否登入
            hoverLogin = true
            $('.user-dropdown').slideDown(500) /* 選單下拉動畫 */
            console.log("我輩碰到了");
        }
    },
    (e) => { // hoverOut
        if(session.islogin){
                hoverLogin = false
                loginSlideUp()
                console.log("我要縮進去了");
        }
    }
    
    
    // else {   /* 未登入 */
    //     hoverLogin = false
    // }
    // loginSlideUp();

)

$('.user-dropdown').hover(
    () => {
        hoverDropdown = true
    },
    () => {
        hoverDropdown = false
        loginSlideUp()
    }
);

//由於判定hoverLogin、hoverDropdown true false需要幾秒的時間，因此需設hover計時器
function loginSlideUp() {
    setTimeout(() => {
        if (!(hoverDropdown || hoverLogin)) {
            $('.user-dropdown').slideUp(500)
        }
    }, 100)

};

// -------------------------------------------------------------------------
//從資料庫讀取值
$.get("../phpCode/fooditem.php", function (data) {
    foodItem = data;
    console.log(foodItem);
    
    //加入菜單內容
    displayItems();
    displaySearch();
    //加入右邊類別連結區
    //categoryLists();

    //加入購物車
    document.querySelectorAll('.add-to-cart').forEach(item => {
        // console.log("islogin=" + session.islogin);
        if (session.islogin) /* 若登入才可將商品加入購物車 */
            item.addEventListener('click', addToCart);
        else
            item.addEventListener('click', function () {
                alert("請先登入方可選購商品");
            });

            

    })

    //確認送出餐點
   
    
//當rwd時購物車送出則呼叫send()
document.getElementById('m-btn-cart').addEventListener('click', send);

//切換頁面  
// document.getElementById('Robot').addEventListener('click', changPage);
 
document.getElementById('search_btn').addEventListener('click', search)
document.getElementById('searchBtn').addEventListener('click', showSearch);
document.getElementById('m_searchBtn').addEventListener('click', showSearch);


}, "json");

function showSearch(){
    console.log('?');
    let searchBox = document.getElementById('search-Box')
    if(searchBox.style.display == 'block'){
        searchBox.style.display = 'none'
    }else{
        searchBox.style.display = 'block'
    }
    
}

// function changPage(e){
//     e.preventDefault()
//     console.log('Robot');
//     document.getElementById("food-container").src = "../SubPage/Robot.html";
// }

//search
function search(){
    
    const searchbox=document.getElementById("Search").value;
    const storeitems=document.getElementById("product-list");
    console.log(storeitems);
    const product =storeitems.querySelectorAll(".product");
    console.log(product);

    const pname=storeitems.getElementsByTagName("h2");
    console.log(pname);
    console.log(searchbox);
    for(var i=0; i<pname.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];

        if(match){
            
            let textvalue=match.textContent||match.innerHtml
            
            let matchRe = textvalue.match(new RegExp(`${searchbox}`,'gmi'))
            console.log(matchRe);
            if(matchRe!==null){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";

            }
        }
    }
}  

function displaySearch() {
    var product_list_dom = document.getElementById('product-list');
    // dom
    console.log(foodItem);
    var product_list = foodItem // .filter(item => item.price>50);
    // foodItem(指標) -> foodItem(物件)
    // product_list(指標)   -> foodItem(物件)
    
    // array

   
    console.log("product_list");
    console.log(product_list);

   
    product_list.map(item => {
        var product = document.createElement('div');
        product.setAttribute('class', 'product');

        //圖片
        var img = document.createElement('img');
        img.src = item.img;

        var p_details = document.createElement('div');
        p_details.setAttribute('class', 'p-details');
        
        //餐點名稱
        var searchName = document.createElement('h2');
       
        searchName.innerText = item.name;

        //餐點價格
        var searchPrice = document.createElement('h3');
       
        searchPrice.innerText = '價格 : $ ' + item.price;

        //餐點分類
        var searchCategory= document.createElement('h3');
       
        searchCategory.innerText = '類別' + item.category;

        product.appendChild(img);
        product.appendChild(p_details);

        p_details.appendChild(searchName);
        p_details.appendChild(searchPrice);
        p_details.appendChild(searchCategory);
        
        product_list_dom.appendChild(product);


    })
}

function displayItems() {

    var Appetizer = document.getElementById('Appetizer_Item');
    var Soup = document.getElementById('Soup_Item');
    var Salad = document.getElementById('Salad_Item');
    var Entree = document.getElementById('Entree_Item');
    var Main_course = document.getElementById('Main-course_Item');
    var Dessert = document.getElementById('Dessert_Item');
    var Tea = document.getElementById('Tea_Item');

    const AppetizerData = foodItem.filter(item => item.category == 'Appetizer');
    console.log(AppetizerData);

    const SoupData = foodItem.filter(item => item.category == 'Soup');
    console.log(SoupData);

    const SaladData = foodItem.filter(item => item.category == 'Salad');
    console.log(SaladData);

    const EntreeData = foodItem.filter(item => item.category == 'Entree');
    console.log(EntreeData);

    const MainCourseData = foodItem.filter(item => item.category == 'Main-course');
    console.log(MainCourseData);

    const DessertData = foodItem.filter(item => item.category == 'Dessert');
    console.log(DessertData);

    const TeaData = foodItem.filter(item => item.category == 'Tea');
    console.log(TeaData);

    AppetizerData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Appetizer.appendChild(itemCard);


    })

    SoupData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Soup.appendChild(itemCard);


    })

    SaladData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Salad.appendChild(itemCard);


    })

    EntreeData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Entree.appendChild(itemCard);


    })

    MainCourseData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Main_course.appendChild(itemCard);


    })

    DessertData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Dessert.appendChild(itemCard);


    })

    TeaData.map(item => {
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id', 'item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id', 'card-top');

        //新增餐點評價
        var star = document.createElement('i');
        star.setAttribute('class', 'fa fa-star');
        star.setAttribute('id', 'rating');
        star.innerText = ' ' + item.rating;

        var cart = document.createElement('i');
        cart.setAttribute('class', 'fa fa-cart-plus fa-2x add-to-cart');
        cart.setAttribute('id', item.id);

        cardTop.appendChild(star);
        cardTop.appendChild(cart);

        var img = document.createElement('img');
        img.src = item.img;

        //新增餐點名稱
        var itemName = document.createElement('p');
        itemName.setAttribute('id', 'item-name');
        itemName.innerText = item.name;

        //新增餐點價格
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id', 'item-price');
        itemPrice.innerText = '價格 : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Tea.appendChild(itemCard);


    })

}

//右側連結菜單內容btn
function categoryLists() {

    const categoryListData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
    console.log(categoryListData);

    var categoryList = document.getElementById('category-list');

    categoryListData.map(item => {
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        //item的照片
        var listImg = document.createElement('img');
        listImg.src = item.img;

        //item的category名稱
        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;

        //連結到相同category區塊
        listName.setAttribute('href', '#' + item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard);

    })
}



//加入購物車

var cartData = [];

function addToCart() {
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);
    console.log(itemObj);

    var index = cartData.indexOf(itemObj);
    //該餐點是否已經加入購物車過
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-cart');
        cartData = [...cartData, itemObj];
        console.log("我是cartData1");
        console.log(cartData);
    }

    else if (index > -1) {

        alert("已加入購物車，可至購物車調整數量");
    }
    console.log(cartData.length);

    //顯示加入購物車數量
    document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
     document.getElementById('m-cart-plus').innerText=' '+cartData.length;
    totalAmount();
    cartItems();
}

//在購物車頁面新增要加入的餐點
function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('tr');
        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.setAttribute('class', 'item-name');
        var text = document.createElement('b');
        text.innerText = item.name;
        rowData2.appendChild(text);
        var rowData3 = document.createElement('td');
        //減少數量btn
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        //顯示總共數量
        var span = document.createElement('span');
        span.innerText = item.quantity;
        //增加數量btn   
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;
        console.log(item.price);
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem);
    })
}

//增加要購買的該餐點個別數量與該餐點自己價格計算
var currPrice = 0;

function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    console.log("itemToInc");
    console.log(itemToInc);

    var incObj = cartData.find(element => element.name == itemToInc);
    //原本的quantuty為string將他轉int加1後再轉回string並加值傳回資料庫
    var quantity = parseInt(incObj.quantity) + 1;
    incObj.quantity = String(quantity);

    var price = parseInt(incObj.price);

    currPrice = (price * quantity - price * (quantity - 1)) / (quantity - 1);
    incObj.price = String(currPrice * quantity);

    totalAmount();
    cartItems();
}

var flag = false;

function decrementItem() {
    let itemToDec = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToDec);
    let ind = cartData.indexOf(decObj);

    var price = parseInt(decObj.price);
    var quantity = parseInt(decObj.quantity);

    if (quantity > 1) {
        currPrice = (price * quantity - price * (quantity - 1)) / (quantity);

        decObj.quantity = String(quantity - 1);

        decObj.price = String(currPrice * (quantity - 1));
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-cart')
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + ' Item';
        document.getElementById('m-cart-plus').innerHTML=' '+cartData.length;

        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("購物車已沒有餐點，請至首頁點餐");

        }
    }

    totalAmount();
    cartItems();
}

function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += parseInt(item.price);
    })
    document.getElementById('total-item').innerText = '餐點總類 : ' + cartData.length + ' 項';
    document.getElementById('total-price').innerText = '總價格: $' + sum;
    document.getElementById('m-total-amount').innerText = '總價格: $' + sum;

}

//當按下購物車按鈕顯示畫面
document.getElementById('cart-plus').addEventListener('click', cartToggle);
 document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else {
        alert("購物車尚未有餐點，請點選任何一餐點進行點餐");
    }
}

document.getElementById('add-address').addEventListener('click', addAddress);
document.getElementById('m-add-address').addEventListener('click',addAddress);


//新增送達地址
function addAddress() {
    var address = prompt('請輸入您欲送達目的地');
    if (address) {
        document.getElementById('add-address').innerText = ' ' + address;
         document.getElementById('m-add-address').innerText=' '+address;

    }

    else {


        alert("未做填寫或更改")
    }
} 

document.getElementById('btn-cart').addEventListener('click', send);
// document.getElementById('m-btn-cart').addEventListener('touchend', send);
// document.getElementById('m-btn-cart').addEventListener('passive', send);
// document.getElementById('m-btn-cart').addEventListener('click', send);


function send(){
    console.log("我是cartData2");
   
    console.log(cartData );
    alert("餐點已送出，將在十分鐘後送達");
    cartData=[];
    console.log("我是cartData3");
    console.log(cartData );
    location.href ="../SubPage/HomePage.html"
}

window.onresize=window.onload=function(){
    var size=window.innerWidth;
    console.log(size);
    if(size<800){
        var cloneFoodItems=document.getElementById('food-items').cloneNode(true);
        var cloneCartPage=document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();


    }
    if(size>800){
        var cloneFoodItems=document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage=document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents();
        
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart);
    })

    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem);
    })
}
