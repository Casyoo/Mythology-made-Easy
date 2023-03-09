//SCRIPT FOR SAVED PAGE
//Dropdown menu on navbar

$('.regionLinks').on('mouseenter',function(){
    $('.regionDropdown').removeClass('hiddenClass')
    }
);

$('.regionDropdown').on('mouseleave',function(){
    $('.regionDropdown').addClass('hiddenClass')
    }
);

//Logo animation
$(".logo").addClass("rotate");

//Calling functions to be used for saving and displaying items
initialiseArraySavedItems();    
displayStoredItems();
   
//Function to initialise saved item array
function initialiseArraySavedItems(){
    if (userSavedItems = JSON.parse(localStorage.getItem('userSavedItems')) === null){
        userSavedItems = [];
        localStorage.setItem('userSavedItems',JSON.stringify(userSavedItems));
    }
        else{ 
            userSavedItems = JSON.parse(localStorage.getItem('userSavedItems'));
        }
};

//Function to display items
function displayStoredItems(){
//If no saved items are available
    if (userSavedItems = JSON.parse(localStorage.getItem('userSavedItems')) === null){
        userSavedItems =[];
        localStorage.setItem('userSavedItems',JSON.stringify(userSavedItemsbookArray));  
    }
//If saved items are present - create needed DOM elements and apply classes
    else{
        userSavedItems = JSON.parse(localStorage.getItem('userSavedItems'));
        userSavedItems.forEach(element => {
            displayContainer = document.getElementById("displayContainer");
            displayDiv = document.createElement("div");
            displayDiv.setAttribute("id","savedItemDisplayDiv");
            displayContainer.appendChild(displayDiv);``
            displayItemName = document.createElement("p");
            displayItemName.setAttribute("class","userItemNameDisplay");
            displayDiv.appendChild(displayItemName);
            displayItemName.innerHTML=element.itemName;
            displayItem = document.createElement("a");
            displayItem.setAttribute("class","userItemDisplay");
            displayDiv.appendChild(displayItem);
            displayItem.setAttribute("href",element.item)
            displayItem.innerHTML=element.item;
        })
    }      
}

//Bibliography and refernces avaikable on main.js








    