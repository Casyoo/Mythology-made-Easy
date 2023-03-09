//SCRIPT FOR INDEX PAGE
//Constructor function to be used for saving items
function SavedItem(itemName,item){
    this.itemName = itemName;
    this.item= item;}    

//Dropdown menu on navbar    
$('.regionLinks').on('mouseenter',function(){
    $('.regionDropdown').removeClass('hiddenClass')
});
$('.regionDropdown').on('mouseleave',function(){
    $('.regionDropdown').addClass('hiddenClass')
});

//Logo animation
$(".logo").addClass("rotate");

//Like icon - activated and deactivated functions
$(".likeIcon").on('click',function(){
        if( $(this).hasClass("likeIconClicked")){
            $(this).removeClass("likeIconClicked");}
            else{
                $(this).addClass("likeIconClicked");
            }
    }
);

//Calling functions to initialise saved items array 
initialiseItemArray();    
   
function initialiseItemArray(){
    if (userSavedItems = JSON.parse(localStorage.getItem('userSavedItems')) === null){
        userSavedItems = [];
        localStorage.setItem('userSavedItems',JSON.stringify(userSavedItems));}
        else{ 
            userSavedItems = JSON.parse(localStorage.getItem('userSavedItems'));
        }
};

//Save icon - to store items to local memory
$(".saveIcon").on('click',function(){

    userSavedItems = JSON.parse(localStorage.getItem('userSavedItems'));
    //variables used in constructor function
    var itemToStore = (this.nextElementSibling);
    var itemToStoreName = (itemToStore.alt);
    var itemToStoreSRC = (itemToStore.src);
    //constructor function to create new objects
    newStoredItem = new SavedItem(itemToStoreName,itemToStoreSRC);
    JSON.parse(localStorage.getItem('userSavedItems'));
    userSavedItems.push(newStoredItem);
    localStorage.setItem('userSavedItems',JSON.stringify(userSavedItems));
    storedItems= userSavedItems.length;
    alert("You have stored " + storedItems + " items in your Saved for Later folder"); 
    }
);

/*References and bibliography
Images


1.  fernando-gomez-d-UGH9TNzwmJI-unsplash - Photo by Fernando Gómez D on Unsplash https://unsplash.com/photos/UGH9TNzwmJI
2.  francisco-gomes-RktLzQoDe9Y-unsplash - Photo by Francisco Gomes on Unsplash https://unsplash.com/photos/RktLzQoDe9Y
3.  bg - Photo by Gioia M. on Unsplash https://unsplash.com/photos/fQJDepGM6YM
4.  pexels-daniel-lienert-1089302 Photo by Daniel Lienert from Pexels: https://www.pexels.com/photo/green-leafed-trees-1089302/
5. thomas-griggs-2Qjk2PfaH3o-unsplash Photo by Thomas Griggs on Unsplash https://unsplash.com/photos/2Qjk2PfaH3o
6. yannis-papanastasopoulos-U6dnImauDAE-unsplash Photo by Yannis Papanastasopoulos on Unsplash https://unsplash.com/photos/U6dnImauDAE 
7.  Anon (2021) NA, Unsplash. Unsplash. Available at: https://unsplash.com/photos/3J6zNepjJRg 
8.  Panesar, A. (2023) NA, Unsplash. Unsplash. Available at: https://unsplash.com/photos/l5oKV1rQod4 

Bibliography and reference
1.  Chris Coyier onSep 19 and Coyier, C. (2022) A complete guide to The table element: Css-tricks, CSS. Available at: https://css-tricks.com/complete-guide-table-element/ (Accessed: December 10, 2022). 
2.  CSS Crash Course Tutorial #8 - CSS Layout &amp; Position. The Net Ninja. Available at: https://www.youtube.com/watch?v=XQaHAAXIVg8 (Accessed: December 10, 2022).
3.  C.S.S.-tricks and Kravets, U. (2020) Solved with CSS! dropdown menus: CSS-tricks, CSS-tricks. CSS-tricks. Available at: https://css-tricks.com/solved-with-css-dropdown-menus/ (Accessed: December 10, 2022). 
4.  CSS Tutorial 15 - Styling Divs (Part 2) (Margins and Padding) (2013) YouTube. TechnicalCafe. Available at: https://youtu.be/6LEfvOl_hHs (Accessed: December 10, 2022). 
5.  Glow effect - google fonts - codepen (no date) codepenio. Codepen.io. Available at: https://codepen.io/SitePoint/pen/Zbxayw (Accessed: December 10, 2022). 
6. How To Make Drop-down Profile Menu Using HTML CSS &amp; JavaScript | Toggle Menu For Website (2022) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=ybXulmeilFM (Accessed: December 10, 2022).   
7.  HTML Tutorial 15 - Creating HTML Forms (2012) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=GNuCNQDGBnk (Accessed: December 10, 2022). 
8.  HTML Tutorial 17 - Drop Down Menus and Text Areas (2012) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=IodvZvWNfX8 (Accessed: December 10, 2022). 
9. HTML Tutorial 16 - Radio Buttons and Checkboxes (Forms) (2012) YouTube. TechnicalCafe. Available at: https://www.youtube.com/watch?v=poEjvRJ6SAY (Accessed: December 10, 2022).
10. MDN web docs (no date) Card - CSS: Cascading style sheets: MDN, CSS: Cascading Style Sheets | MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card (Accessed: December 10, 2022). 
11. Online Tutorials (2017) How to Create a CSS3 Dropdown Menu - Pure CSS3 Hoverable Dropdown Menu - Tutorial, YouTube. YouTube. Available at: https://www.youtube.com/watch?v=9Qrs8p7WgCc (Accessed: December 10, 2022)
12. Pure CSS Neon Light Text Effects - Pure Css Tutorials - Css Text Effects (2017) YouTube. YouTube. Available at: https://www.youtube.com/watch?v=0ltdZ8CrqG8 (Accessed: December 10, 2022). 
13. Skillthrive (2019) Navbar CSS tutorial: 3 ways to create a navigation bar with Flexbox, YouTube. Available at: https://youtu.be/PwWHL3RyQgk (Accessed: December 10, 2022). 
14. w3Schools CSS forms. w3Schools. Available at: https://www.w3schools.com/css/css_form.asp (Accessed: December 10, 2022)
15. w3Schools CSS text spacing, CSS Text Indentation and Spacing. w3Schools. Available at: https://www.w3schools.com/css/css_text_spacing.asp (Accessed: December 10, 2022). 
16. w3Schools How to - dropdown navbar, How To Create a Dropdown Navigation Bar. Available at: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp#:~:text=Example%20Explained,dropdown%20menu%20correctly%20with%20CSS (Accessed: December 10, 2022). 
17. w3Schools HTML quotation and citation elements, HTML Quotation Elements. Available at: https://www.w3schools.com/html/html_quotation_elements.asp (Accessed: December 10, 2022)
18. w3schools  CSS opacity / transparency, CSS Image Opacity / Transparency. Available at: https://www.w3schools.com/css/css_image_transparency.asp (Accessed: December 10, 2022). 
19. w3schools CSS tables, CSS Styling Tables. Available at: https://www.w3schools.com/css/css_table.asp (Accessed: December 10, 2022).
20. w3schools How to - cards, How To Create a Card with CSS. Available at: https://www.w3schools.com/howto/howto_css_cards.asp (Accessed: December 10, 2022).
21. w3schools How to - navbar on image, How To Place a Navigation Menu on an Image. Available at: https://www.w3schools.com/howto/howto_css_navbar_image.asp (Accessed: December 10, 2022). 
22. w3schools  How to - navbar on image, How To Place a Navigation Menu on an Image. Available at: https://www.w3schools.com/howto/howto_css_navbar_image.asp (Accessed: December 10, 2022).
23.  w3schools  HTML tables. Available at: https://www.w3schools.com/html/html_tables.asp (Accessed: December 10, 2022). 
24. Libraries, G.H. (no date) “https://developers.google.com/speed/libraries.” 
25. mdnWebdocs (no date) Using CSS animations - CSS: Cascading style sheets: MDN, CSS: Cascading Style Sheets | MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations (Accessed: March 1, 2023). 
26. w3schools (no date) HTML dom element nextelementsibling, HTML DOM Element nextElementSibling Property. Available at: https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp (Accessed: March 1, 2023). 
27. w3Schools (no date) jQuery hasClass() Method, JQuery hasClass() method. Available at: http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jquery/html_hasclass.asp.html (Accessed: March 2, 2023). 
*/

