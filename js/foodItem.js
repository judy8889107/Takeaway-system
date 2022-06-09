const foodItem=[
    //開胃菜
    {
        id:1,
        name:'韃靼牛排佐咖哩奶油',
        category:'Appetizer',
        rating: 4.3,
        price:120,
        img:'../images/Appetizer/Vegetarische-steak.jfif',
        quantity:1

    },
    {
        id:2,
        name:'扇貝蘋果雞汁',
        category:'Appetizer',
        rating: 4.9,
        price:100,
        img:'../images/Appetizer/Scallop with Apple and Chicken Gravy Recipe.jfif',
        quantity:1

    },
    {
        id:3,
        name:'綠豆沙鱈魚捲',
        category:'Appetizer',
        rating: 4.5,
        price:140,
        img:'../images/Appetizer/Cod roll.jfif',
        quantity:1

    },
    {
        id:4,
        name:'山羊奶酪佐煙燻鮭魚',
        category:'Appetizer',
        rating:'5.0',
        price:180,
        img:'../images/Appetizer/Asparagus.jfif',
        quantity:1

    },
    {
        id:5,
        name:'柑橘醬海螯蝦',
        category:'Appetizer',
        rating: 3.9,
        price:110,
        img:'../images/Appetizer/Langoustines met citrussaus.jfif',
        quantity:1

    },
    {
        id:6,
        name:'肋眼牛燒紅蘿蔔',
        category:'Appetizer',
        rating: 4.9,
        price:190,
        img:'../images/Appetizer/Rib Eye.jfif',
        quantity:1

    },

    //濃湯
    
    {
        id:7,
        name:'奶油素食番茄湯',
        category:'Soup',
        rating: 3.9,
        price:60,
        img:'../images/Soup/Vegan Tomato Soup.jfif',
        quantity:1

    },

    {
        id:8,
        name:'生薑南瓜奶油濃湯',
        category:'Soup',
        rating: 4.9,
        price:120,
        img:'../images/Soup/Squash Cream with Ginger _ Cravings Journal.jfif',
        quantity:1

    },

    {
        id:9,
        name:'雞肉奶油蘑菇野米濃湯',
        category:'Soup',
        rating: 4.5,
        price:160,
        img:'../images/Soup/Creamy Mushroom Chicken and Wild Rice Soup.jfif',
        quantity:1

    },

    //沙拉

    {
        id:10,
        name:'金槍魚佐芒果沙拉',
        category:'Salad',
        rating:'5.0',
        price:150,
        img:'../images/Salad/Ahi Tuna Poke Salad with Mango _ foodiecrush_com.jfif',
        quantity:1

    },

    {
        id:11,
        name:'烤香菇蓮子蔬食沙拉',
        category:'Salad',
        rating:4.9,
        price:200,
        img:'../images/Salad/Baked potato bowl with avocado, mushroom, and chickpea.jfif',
        quantity:1

    },

    {
        id:12,
        name:'芒果酪梨蝦仁沙拉',
        category:'Salad',
        rating:4.8,
        price:200,
        img:'../images/Salad/Seadfood.jfif',
        quantity:1

    },

    {
        id:13,
        name:'考脆蘆筍芒果番茄沙拉',
        category:'Salad',
        rating:'5.0',
        price:190,
        img:'../images/Salad/Roasted Crispy Asparagus with Mango Tomato Salad.jfif',
        quantity:1

    },

    //前菜

    {
        id:14,
        name:'蒜香三色蝦',
        category:'Entree',
        rating: 4.6,
        price:230,
        img:'../images/Entree/Timbales tricolor.jfif',
        quantity:1

    },

    {
        id:15,
        name:'戰斧豬左蘋果泥',
        category:'Entree',
        rating: 4.0,
        price:180,
        img:'../images/Entree/Paleta.jfif',
        quantity:1

    },

    {
        id:16,
        name:'嫩煎羊肋排',
        category:'Entree',
        rating:4.2,
        price:230,
        img:'../images/Entree/sheep.jfif',
        quantity:1

    },

    {
        id:17,
        name:'培根紐約客',
        category:'Entree',
        rating:4.2,
        price:260,
        img:'../images/Entree/steak.png',
        quantity:1

    },

    //主菜

     {
        id:18,
        name:'焗烤牛肉丸',
        category:'Main-course',
        rating:4.1 ,
        price:300,
        img:'../images/Main/Slow-baked meatballs.png',
        quantity:1

    },

    {
        id:19,
        name:'焗烤臘腸義大利麵',
        category:'Main-course',
        rating : 3.9,
        price:350,
        img:'../images/Main/Half Baked Harvest.jfif',
        quantity:1

    },

    {
        id:20,
        name:'奶油雞肉蝴蝶義大利麵',
        category:'Main-course',
        rating :'5.0',
        price:380,
        img:'../images/Main/Creamy Parmesan.png',
        quantity:1

    },

    {
        id:21,
        name:'焗烤紅醬牛肉千層麵',
        category:'Main-course',
        rating:410 ,
        price:5.0,
        img:'../images/Main/Simple Skillet Pesto Cheese.jfif',
        quantity:1

    },

    {
        id:22,
        name:'橘醬雞肉義大利麵',
        category:'Main-course',
        rating:4.6 ,
        price:360,
        img:'../images/Main/Lighter Creamy Cajun.jfif',
        quantity:1

    },

    {
        id:23,
        name:'焗烤南瓜奶酪疏食義大利麵',
        category:'Main-course',
        rating:'5.0',
        price:320,
        img:'../images/Main/Butternut Squash.jfif',
        quantity:1

    },

    {
        id:24,
        name:'紅燒排骨義大利麵',
        category:'Main-course',
        rating: 4.8,
        price:360,
        img:'../images/Main/Slow Cooker.jfif',
        quantity:1

    },

    //甜點

    {
        id:25,
        name:'芒果蛋糕',
        category:'Dessert',
        rating :'5.0',
        price : 120,
        img:'../images/dessert/Passion Fruit.jfif',
        quantity:1

    },

    {
        id:26,
        name:'覆盆子芒果慕斯',
        category:'Dessert',
        rating :'5.0',
        price : 180,
        img:'../images/dessert/La Bomba.jfif',
        quantity:1

    },

    {
        id:27,
        name:'綜合莓果鬆餅',
        category:'Dessert',
        rating : 3.6 ,
        price : 180,
        img:'../images/dessert/strawbarry.jfif',
        quantity:1

    },

    {
        id:28,
        name:'桑葚奶酪',
        category:'Dessert',
        rating : 4.0 ,
        price : 110 ,
        img:'../images/dessert/Michelin-starred.jfif',
        quantity:1

    },

    {
        id:29,
        name:'綠茶慕斯',
        category:'Dessert',
        rating : 4.8 ,
        price : 170 ,
        img:'../images/dessert/green tea.jfif',
        quantity:1

    },

    //飲料

    {
        id:30,
        name:'熱情水果茶(冰)',
        category:'Tea',
        rating: 4.6,
        price:120,
        img:'../images/tea/fruit tea.jfif',
        quantity:1

    },

    {
        id:31,
        name:'夢幻柳橙',
        category:'Tea',
        rating:4.8 ,
        price:160,
        img:'../images/tea/dream.jfif',
        quantity:1

    },

    {
        id:32,
        name:'抹茶巧克力拿鐵',
        category:'Tea',
        rating:4.7,
        price:130,
        img:'../images/tea/matcha.jfif',
        quantity:1

    },

    {
        id:33,
        name:'芒果奶昔',
        category:'Tea',
        rating: 4.9,
        price:170,
        img:'../images/tea/mango.jfif',
        quantity:1

    },

    {
        id:34,
        name:'荔枝百香果',
        category:'Tea',
        rating: 4.8,
        price:180,
        img:'../images/tea/passion fruit.jfif',
        quantity:1

    },

    {
        id:35,
        name:'草莓奶昔',
        category:'Tea',
        rating: 4.7,
        price:170,
        img:'../images/tea/strawbarry.jfif',
        quantity:1

    },

    {
        id:36,
        name:'水果茶(熱)',
        category:'Tea',
        rating:4.6,
        price:120,
        img:'../images/tea/hot fruit tea.jfif',
        quantity:1

    },

    {
        id:37,
        name:'花茶(熱)',
        category:'Tea',
        rating:4.6,
        price:120,
        img:'../images/tea/flower tea.jfif',
        quantity:1

    },


    /*{
        id:,
        name:'',
        category:'',
        rating: ,
        price:,
        img:'',
        quantity:1

    },*/
]

export{foodItem};