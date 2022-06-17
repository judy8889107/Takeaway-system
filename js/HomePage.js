
var foodItem;
//從資料庫讀取值
$.get("../phpCode/fooditem.php", function (data) {
    foodItem = data;
    console.log(foodItem);

    //加入菜單內容
    displayItems();

    //加入右邊類別連結區
    //categoryLists();

    //加入購物車
    document.querySelectorAll('.add-to-cart').forEach(item => {
        item.addEventListener('click', addToCart);
    })



}, "json");


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
        console.log(cartData);
    }

    else if (index > -1) {

        alert("已加入購物車，可至購物車調整數量");
    }
    console.log(cartData.length);

    //顯示加入購物車數量
    document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
    // document.getElementById('m-cart-plus').innerText=' '+cartData.length;
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

    var price=parseInt(decObj.price);
    var quantity=parseInt(decObj.quantity);

    if (quantity > 1) {
        currPrice = (price*quantity - price * (quantity - 1)) / (quantity);

        decObj.quantity=String(quantity-1);

        decObj.price = String(currPrice*(quantity-1));
    }
    else {
        document.getElementById(decObj.id).classList.remove('toggle-cart')
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerHTML = ' ' + cartData.length + ' Item';
        //document.getElementById('m-cart-plus').innerHTML=' '+cartData.length;

        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            //document.getElementById('category-header').classList.toggle('toggle-category');
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
    document.getElementById('total-item').innerText = '餐點總類 : ' + cartData.length+' 項';
    document.getElementById('total-price').innerText = '總價格: $' + sum;

}

//當按下購物車按鈕顯示畫面
document.getElementById('cart-plus').addEventListener('click', cartToggle);
// document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        //document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle');
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        //document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
    }
    else {
        alert("購物車尚未有餐點，請點選任何一餐點進行點餐");
    }
}

document.getElementById('add-address').addEventListener('click',addAddress);
// document.getElementById('m-add-address').addEventListener('click',addAddress);


//新增送達地址
function addAddress(){
    var address=prompt('請輸入您欲送達目的地');
    if(address){
        document.getElementById('add-address').innerText=' '+address;
        // document.getElementById('m-add-address').innerText=' '+address;

    }

    else{
       

        alert("未做填寫或更改")
    }
} 