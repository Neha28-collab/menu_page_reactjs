import React, { useState, useEffect } from "react";
import "./Menu.css";

function Menu() {
    const [, setSelectedCategory] = useState("none");
    const [menuItems] = useState({
    none: [{ image: "../public/images/1.png" }], 
    starters: [ 
        { name: "Tomato Soup", price: 185, image: "/images/ss/tomatosoup.png" },
        { name: "Veg Soup", price: 195, image: "/images/ss/vegsoup.png" },
        { name: "Manchow Soup", price: 255, image: "/images/ss/manchowsoup.png" },
        { name: "Chicken Soup", price: 295, image: "/images/ss/chickensoup.png" },
        { name: "Gobi Manchurian", price: 250, image: "/images/ss/gobimanchurian.png" },
        { name: "Panner Tikka", price: 275, image: "/images/ss/pannertikka.png" },
        { name: "Chilli Panner", price: 299, image: "/images/ss/chillipanner.png" },
        { name: "Chilli Mushroom", price: 299, image: "/images/ss/chillimushroom.png" },
        { name: "Chicken Manchurian", price: 255, image: "/images/ss/chickenmanchurian.png" },
        { name: "Chilli Chicken", price: 350, image: "/images/ss/chillichicken.png" },
        { name: "Chicken Tikka", price: 300, image: "/images/ss/chickentikka.png" },
        { name: "Garlic Chicken", price: 399, image: "/images/ss/garlicchicken.png" },
        { name: "Chicken Tandoori", price: 500, image: "/images/ss/chickentandoori.png" },
        { name: "Chicken Lollipop", price: 350, image: "/images/ss/chickenlollipop.png" },
      // Add more starter items with image URLs 
    ], 
    maincourse: [ 
        { name: "Butter Naan", price: 40, image: "/images/mc/butternaan.png" },
        { name: "Garlic Naan", price: 50, image: "/images/mc/garlicnaan.png" },
        { name: "Roti", price: 30, image: "/images/mc/roti.png" },
        { name: "Aloo Paratha", price: 70, image: "/images/mc/alooparatha.png" },
        { name: "Veg Pulao", price: 280, image: "/images/mc/vegpulao.png" },
        { name: "Mushroom Biryani", price: 320, image: "/images/mc/mushroombiryani.png" },
        { name: "Paneer Biryani", price: 370, image: "/images/mc/paneerbiryani.png" },
        { name: "Chicken Dum Biryani", price: 310, image: "/images/mc/chickendumbiryani.png" },
        { name: "Chicken Tandoori Biryani", price: 380, image: "/images/mc/chickentandooribiryani.png" },
        { name: "Mughalai Biryani", price: 380, image: "/images/mc/mughalaibiryani.png" },
        { name: "Egg Biryani", price: 300, image: "/images/mc/eggbiryani.png" },
        { name: "Mutton Biryani", price: 360, image: "/images/mc/muttonbiryani.png" },
        { name: "Prawn Biryani", price: 350, image: "/images/mc/prawnbiryani.png" },
        { name: "Dal Kichidi", price: 200, image: "/images/mc/dalkichidi.png" },
        { name: "Dal Rice", price: 150, image: "/images/mc/dalrice.png" },
        { name: "Curd Rice", price: 90, image: "/images/mc/curdrice.png" },
      // Add more main course items with image URLs 
    ], 
    curry: [ 
        { name: "Paneer Masala", price: 250, image: "/images/cu/paneermasala.png" },
        { name: "Potato Curry", price: 190, image: "/images/cu/potatocurry.png" },
        { name: "Matar Paneer", price: 260, image: "/images/cu/matarpaneer.png" },
        { name: "Aloo Matar", price: 220, image: "/images/cu/aloomatar.png" },
        { name: "Palak Paneer", price: 250, image: "/images/cu/palakpaneer.png" },
        { name: "Kadai Paneer", price: 290, image: "/images/cu/kadaipaneer.png" },
        { name: "Kadai Mushroom", price: 290, image: "/images/cu/kadaimushroom.png" },
        { name: "Paneer Butter Masala", price: 280, image: "/images/cu/paneerbuttermasala.png" },
        { name: "Mushroom Curry", price: 230, image: "/images/cu/mushroomcurry.png" },
        { name: "Chicken Tikka Masala", price: 320, image: "/images/cu/chickentikkamasala.png" },
        { name: "Kadai Chicken", price: 330, image: "/images/cu/kadaichicken.png" },
        { name: "Butter Chicken", price: 320, image: "/images/cu/butterchicken.png" },
        { name: "Egg Curry", price: 200, image: "/images/cu/eggcurry.png" },
        { name: "Mutton Curry", price: 350, image: "/images/cu/muttoncurry.png" },
        { name: "Fish Curry", price: 250, image: "/images/cu/fishcurry.png" },
        { name: "prawn Curry", price: 250, image: "/images/cu/prawncurry.png" },
      // Add more curry items with image URLs 
    ], 
    dessert: [ 
        { name: "Chocolate Icecream", price: 80, image: "/images/d/chocolateicecream.png" },
        { name: "Venella Icecream", price: 80, image: "/images/d/venellaicecream.png" },
        { name: "Butterscotch Icecream", price: 80, image: "/images/d/butterscotchicecream.png" },
        { name: "Strawberry Icecream", price: 80, image: "/images/d/strawberryicecream.png" },
        { name: "Chocolate Truffle Cake", price: 120, image: "/images/d/chocolatetrufflecake.png" },
        { name: "Venella Cake", price: 85, image: "/images/d/venellacake.png" },
        { name: "Butterscotch Cake", price: 85, image: "/images/d/butterscotchcake.png" },
        { name: "Donut", price: 40, image: "/images/d/donut.png" },
        { name: "Red Velvet Cake", price: 180, image: "/images/d/redvelvetcake.png" },
        { name: "Choco Lava Cake", price: 60, image: "/images/d/chocolavacake.png" },
        { name: "Pudding", price: 80, image: "/images/d/pudding.png" },
        { name: "Mousse", price: 100, image: "/images/d/mousse.png" },
        { name: "Waffle", price: 190, image: "/images/d/waffle.png" }, 
      // Add more dessert items with image URLs 
    ], 
    beverages: [ 
        { name: "Tea", price: 15, image: "/images/b/tea.png" },
        { name: "Coffee", price: 25, image: "/images/b/coffee.png" },
        { name: "Lassi", price: 50, image: "/images/b/lassi.png" },
        { name: "Mango Lassi", price: 70, image: "/images/b/mangolassi.png" },
        { name: "Coco Cola", price: 45, image: "/images/b/cococola.png" },
        { name: "Sprite", price: 45, image: "/images/b/sprite.png" },
        { name: "Thumbs Up", price: 45, image: "/images/b/thumbsup.png" },
        { name: "Chocolate Milkshake", price: 120, image: "/images/b/chocolatemilkshake.png" },
        { name: "Venella Milkshake", price: 120, image: "/images/b/venellamilkshake.png" },
        { name: "Straberry Milkshke", price: 120, image: "/images/b/strawberrymilkshake.png" }, 
      // Add more beverage items with image URLs 
    ], 
  }); 

  const handleCategoryChange = (event) => { 
    setSelectedCategory(event.target.value); 
  }; 

  useEffect(() => { 
    const menuSelect = document.getElementById("menuSelect"); 
    const list = document.querySelector(".list"); 
    const imageElement = document.querySelector(".image"); 
    const defaultBackgroundImage = "1.png"; 

    // Set the default background image 
    imageElement.style.backgroundImage = `url(${defaultBackgroundImage})`; 

    menuSelect.addEventListener("change", () => { 
      const selectedCategory = menuSelect.value; 
      const categoryItems = menuItems[selectedCategory]; 

      list.innerHTML = ""; 

      categoryItems.forEach((item) => { 
        createMenuItem(item); 
      }); 

      // Set the default background image when a new category is selected 
      imageElement.style.backgroundImage = `url(${defaultBackgroundImage})`; 
    }); 

    function createMenuItem(item) { 
      const listItem = document.createElement("div"); 
      listItem.classList.add("menu-item"); 

      const itemName = document.createElement("span"); 
      itemName.textContent = item.name; 
      const itemPrice = document.createElement("span"); 
      itemPrice.textContent = `Rs${item.price}`; 
      const quantity = document.createElement("input"); 
      quantity.type = "number"; 
      quantity.value = 0; 
      quantity.min = 0; 

      // When a menu item is clicked, update the background image 
      itemName.addEventListener("click", () => { 
        imageElement.style.backgroundImage = `url(${item.image})`; 
      }); 

      quantity.addEventListener("input", () => { 
        updateTotal(); 
      }); 

      listItem.appendChild(itemName); 
      listItem.appendChild(itemPrice); 
      listItem.appendChild(quantity); 

      list.appendChild(listItem); 
    } 

    function updateTotal() {
        const totalElement = document.querySelector(".total");
        const quantityInputs = document.querySelectorAll(".list input[type='number']");
      
        let total = 0;
      
        if (menuSelect.value !== "none") {
          quantityInputs.forEach((input, index) => {
            const item = menuItems[menuSelect.value][index];
            total += parseInt(input.value) * item.price;
          });
        }
      
        totalElement.textContent = `Total: Rs${total}`;
      }
       

    updateTotal(); 
  }, [menuItems]); 

  return ( 
    <div className="container"> 
      <div className="image"></div> 
      <div className="menu-container"> 
        <div className="header"> 
          <h1>Menu</h1> 
        </div> 
        <div className="dropdown"> 
          <label htmlFor="menuSelect">Select Menu:</label> 
          <select id="menuSelect" name="menuSelect" onChange={handleCategoryChange}> 
            <option value="none">None</option> 
            <option value="starters">Soups&Starters</option> 
            <option value="maincourse">Main Course</option> 
            <option value="curry">Curry</option> 
            <option value="dessert">Dessert</option> 
            <option value="beverages">Beverages</option> 
          </select> 
        </div> 
        <div className="scrollable-list"> 
          <div className="list"> 
            {/* Your menu items will be displayed here */} 
          </div> 
        </div> <br /><br />
        <div className="total">Total: Rs0</div> 
        <div className="order-button"> 
          <button id="orderButton">Order</button> 
        </div> 
      </div> 
    </div> 
  ); 
} 

export default Menu;
