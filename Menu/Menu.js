/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function createMenu(menuItems){
  const menu = document.createElement("div");
  const list = document.createElement("ul");
  const item1 = document.createElement('li');
  const item2 = document.createElement('li');
  const item3 = document.createElement('li');
  const item4 = document.createElement('li');
  const item5 = document.createElement('li');
  const item6 = document.createElement('li');

  menu.append(list);
  list.append(item1);
  list.append(item2);
  list.append(item3);
  list.append(item4);
  list.append(item5);
  list.append(item6);
  
  menu.classList.add("menu", "menu--open");

  item1.textContent = "Chicken";
  item2.textContent = "Turkey";
  item3.textContent = "Beef";
  item4.textContent = "Vegan";
  item5.textContent = "Sides";
  item6.textContent = "Drinks";

  const menuOpen = document.querySelector(".menu-button");

  menuOpen.addEventListener("click", event => {
    menu.classList.toggle("menu--open");
  })
  return menu;
}

const dropDown = document.querySelector(".header");

menuItems.forEach(data => {
  dropDown.append(createMenu(data.menuItems))
});