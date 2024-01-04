let bars = document.querySelector(".fa-bars")
let navText = document.querySelector(".nav_text")
let navClose = document.querySelector(".fa-close")
let navCard = document.querySelector(".fa-cart-shopping")
let prev = document.querySelector(".fa-circle-left");
let next = document.querySelector(".fa-circle-right");
let img = document.querySelectorAll(".header_slider img");
let i = 0;
let list = document.querySelector(".product-right-bottom")
let circle = document.querySelectorAll(".fa-circle")
let li = document.querySelectorAll(".list")
let bookType = document.querySelectorAll(".book-type")
let body = document.querySelector("body")
let closeShopping = document.querySelector(".closeShopping")
let listCard = document.querySelector(".listCard")
let quantity = document.querySelector(".quanity")
let total = document.querySelector(".total")
let listCards = []
let products = [
    {
        id: 0,
        type: "modern",
        title: "big magic",
        author: "donna karan",
        image: "1.PNG",
        price: 20.0,
    },
    {
        id: 1,
        type: "classic",
        title: "i was born width music",
        author: "dolce & cabanna",
        image: "2.PNG",
        price: 200.0,
    },
    {
        id: 2,
        type: "biography",
        title: "i'm glad my mom died",
        author: "jennette mcCurdy",
        image: "3.PNG",
        price: 21.99,
    },
    {
        id: 3,
        type: "detective",
        title: "Warrior Soul: A Tye Caine Wilderness Mystery",
        author: "David Barbur",
        image: "4.PNG",
        price: 4.99,
    },
    {
        id: 4,
        type: "fantasy",
        title: "The Mountain in the Sea: A Novel",
        author: "Ray Nayler",
        image: "5.PNG",
        price: 18.0,
    },
    {
        id: 5,
        type: "cookbook",
        title: "Sweet Enough: A Dessert Cookbook",
        author: "Alison Roman",
        image: "6.PNG",
        price: 32.55,
    },
    {
        id: 6,
        type: "fairy tale",
        title: "Fairy Tale",
        author: "Stephen King",
        image: "7.PNG",
        price: 30.23,
    },
    {
        id: 7,
        type: "fiction",
        title: "Flash Fiction America: 73 Very Short Stories",
        author: "John DuFresne , et al.",
        image: "8.PNG",
        price: 15.76,
    },
    {
        id: 8,
        type: "horror",
        title: "Taaqtumi: An Anthology of Arctic Horror Stories",
        author: "Thomas Anguti Johnston , et al.",
        image: "9.PNG",
        price: 15.76,
    },
    {
        id: 9,
        type: "historical fiction",
        title:
            "The Things We Cannot Say: A WWII Historical Fiction Novel (Original)",
        author: "Kelly Rimmer",
        image: "10.PNG",
        price: 15.8,
    },
    {
        id: 10,
        type: "history",
        title: "The Secret History",
        author: "Donna Tartt",
        image: "11.PNG",
        price: 16.74,
    },
    {
        id: 11,
        type: "romance",
        title: "Daughter of the Moon Goddess: A Fantasy Romance Novel",
        author: "Sue Lynn Tan",
        image: "12.PNG",
        price: 16.73,
    },
    {
        id: 12,
        type: "modern",
        title: "Women Without Men: A Novel of Modern Iran",
        author: "Shahrnush Parsipur , et al.",
        image: "13.PNG",
        price: 14.83,
    },
    {
        id: 13,
        type: "classic",
        title: "War and Peace",
        author: "Leo Tolstoy , et al.",
        image: "14.PNG",
        price: 20.46,
    },
    {
        id: 14,
        type: "biography",
        title: "Barkley: A Biography (Original)",
        author: "Timothy Bella",
        image: "15.PNG",
        price: 27.89,
    },
    {
        id: 15,
        type: "detective",
        title: "The Detective Up Late",
        author: "Adrian McKinty",
        image: "16.PNG",
        price: 25.1,
    },
    {
        id: 16,
        type: "fantasy",
        title: "Legends & Lattes: A Novel of High Fantasy and Low Stakes",
        author: "Travis Baldree",
        image: "17.PNG",
        price: 16.73,
    },
    {
        id: 17,
        type: "cookbook",
        title: "The Everlasting Meal Cookbook: Leftovers A-Z",
        author: "Tamar Adler , et al.",
        image: "18.PNG",
        price: 32.55,
    },
    {
        id: 18,
        type: "fairy tale",
        title: "Fairy Tales for Fearless Girls",
        author: "Anita Ganeri , et al.",
        image: "19.PNG",
        price: 18.59,
    },
    {
        id: 19,
        type: "fiction",
        title: "Wonderbook (Revised and Expanded)",
        author: "Jeff VanderMeer",
        image: "20.PNG",
        price: 25.58,
    },
    {
        id: 20,
        type: "horror",
        title: "Nightmare Fuel: The Science of Horror Films",
        author: "Nina Nesseth",
        image: "21.PNG",
        price: 24.17,
    },
    {
        id: 21,
        type: "historical fiction",
        title: "Falconland: A Novel of Medieval",
        author: "Reggie Connell",
        image: "22.PNG",
        price: 14.99,
    },
    {
        id: 22,
        type: "history",
        title: "We Are the Land: A History of Native California",
        author: "Damon B. Akins , et al.",
        image: "23.PNG",
        price: 27.85,
    },
    {
        id: 23,
        type: "romance",
        title: "Rough Around the Hedges: an Uncanny Romance Novel",
        author: "Lish McBride",
        image: "24.PNG",
        price: 16.73,
    },
];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("book-card");
        newDiv.setAttribute("data-item", `${value.type}`)
        newDiv.innerHTML = `
        <div class="book-image">
        <img src="./assets/img/${value.image}" alt="" class="book-imagish" />
      </div>
      <div class="book-details">
        <div class="book-type">${value.type}</div>
        <div class="book-title">${value.title}</div>
        <div class="book-author">${value.author}</div>
        <div class="book-price">
          <span class="book-price-symbol">$</span>${value.price}
        </div>
        <div class="buttons">
          <button class="addToCart" onclick="addToCard(${key})">Add to cart</button>
          <i class="ri-heart-line" id="heart"></i>
          <i class='bx bx-dots-vertical-rounded options' onclick="option(${key})" ></i>
          <div class="inOption">
                      <i class='bx bx-pencil' onclick="renameItem(${key})"></i>
                      <i class="fa-solid fa-trash" onclick="removeItem(this)"></i>
                    </div>
        </div>
      </div>
        `
        list.appendChild(newDiv)
    })
}
initApp()

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]))
        listCards[key].quantity = 1
    }

    reloadCard()
}

function reloadCard(){
    listCard.innerHTML = ""
    let count = 0
    let totalPrice = 0
    listCards.forEach((value, key) => {
        totalPrice += value.price
        count += value.quantity
        if(value != null){
            let newDiv = document.createElement("li")
            newDiv.innerHTML = `
            <div><img src="./assets/img/${value.image}"></div>
            <div>${value.title}</div>
            <div>$ ${value.price}</div>
            <div>
            <button onclick="changeQuanity(${key},${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuanity(${key},${value.quantity + 1})">+</button>
            </div>
            `

            listCard.appendChild(newDiv)
            
        }
    })
    total.innerHTML = `$ ${totalPrice.toLocaleString()}`
    quantity.innerHTML = count
}


function changeQuanity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}

let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    let mood = document.getElementById("mood")
    btn.classList.toggle("fa-sun")
    if(btn.classList.toggle("fa-moon")){
        mood.href = "./Css/style.css"
    }else{
        mood.href = "./Css/black.css"
    }
})
console.log(btn);

bars.addEventListener("click", () => {
    navText.classList.toggle("actives")
    navClose.style.display = "block"
})

navCard.addEventListener("click", () => {
    body.classList.toggle("addModal")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("addModal")
})

navClose.addEventListener("click", () => {
    navText.classList.remove("actives")
    navClose.style.display = "none"
})

next.addEventListener("click", () => {
    img[i].style.display = "none";
    i++;
    if (img.length <= i) {
        i = 0
    }
    img[i].style.display = "block";

})

prev.addEventListener("click", () => {
    img[i].style.display = "none";
    i--;
    if (i < 0) {
        i = img.length - 1;
    }

    img[i].style.display = "block";
})

for (let i = 0; i < circle.length; i++) {
    li[i].addEventListener("click", () => {
        for (let h = 0; h < li.length; h++) {
            li[h].classList.remove("active")
        }
        li[i].classList.add("active")
        let dataFilter = li[i].getAttribute("data-filter")
        bookType.forEach((item, index) => {
            console.log(item)
        })
        for (let k = 0; k < products.length; k++) {
            let box = list.querySelectorAll(".book-card")
            box[k].classList.remove("show")
            box[k].classList.add("hide")
            if (products[k].type == dataFilter || dataFilter == "all") {
                box[k].classList.remove("hide")
                box[k].classList.add("show")
            } else {
                console.log("error");
            }
        }
    })
}

let mySearch = document.getElementById("mySearch")
let bookCards = document.querySelectorAll(".book-card")

mySearch.addEventListener("keyup", () => {
    let input = mySearch.value.toUpperCase()
    let bookTitle = document.querySelectorAll(".book-title");

    bookTitle.forEach((item, index) => {
        if (item.innerHTML.toUpperCase().indexOf(input) > -1) {
            bookCards[index].style.display ="block"
        }else{
            bookCards[index].style.display ="none"
        }
    })
})

