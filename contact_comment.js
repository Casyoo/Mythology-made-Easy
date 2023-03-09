//SCRIPT FOR CONTACT AND COMMENT PAGE 
//Constructor function to be used for saving comments
function SavedComment(userNameComment,userTextComment){
    this.userNameComment = userNameComment;
    this.userTextComment= userTextComment;}    

//Dropdown menu on navbar    
$('.regionLinks').on('mouseenter',function(){
    $('.regionDropdown').removeClass('hiddenClass')
});
$('.regionDropdown').on('mouseleave',function(){
    $('.regionDropdown').addClass('hiddenClass')
});

//Logo animation
$(".logo").addClass("rotate");

//Calling functions to initialise comment array and display stored comments
initialiseArraySavedComments();    
displayStoredComments()
   
//Function to initialise array for comments
function initialiseArraySavedComments(){
    if (userSavedComments = JSON.parse(localStorage.getItem('userSavedComments')) === null){
        userSavedComments = [];
        localStorage.setItem('userSavedComments',JSON.stringify(userSavedComments));}
        else{ 
            userSavedComments = JSON.parse(localStorage.getItem('userSavedComments'));
        }
};

//Function to display comments
function displayStoredComments(){
    if (userSavedComments= JSON.parse(localStorage.getItem('userSavedComments')) === null){
        userSavedComments =[];
        localStorage.setItem('userSavedComments',JSON.stringify(userSavedComments));  
    }
    else{
        userSavedComments = JSON.parse(localStorage.getItem('userSavedComments'));
        userSavedComments.forEach(element => {
            displayContainerComments = document.getElementById("displayContainerComments");
            displayDiv = document.createElement("div");
            displayDiv.setAttribute("class","commentCard");
            displayContainerComments.appendChild(displayDiv);
            displayCommentName = document.createElement("p");
            displayDiv.appendChild(displayCommentName);
            displayCommentName.innerHTML=element.userNameComment;
            displayComment = document.createElement("p");
            displayDiv.appendChild(displayComment);
            displayComment.innerHTML=element.userTextComment;
        })
    }      
}

//Function to run on activation of submit comment button
$("#submitCommentBtn").on("click",function(e){
    e.preventDefault();
    //variables to be used in comment constructor function
    var userNameComment = (document.getElementById("userName").value);
    var userTextComment = (document.getElementById("userComment").value);
    //create new object from comments - commenter's name and comment
    newSavedComment = new SavedComment(userNameComment,userTextComment);
    JSON.parse(localStorage.getItem('userSavedComments'));
    userSavedComments.push(newSavedComment);
    localStorage.setItem('userSavedComments',JSON.stringify(userSavedComments));
    //Variables getting input from commment form
    var userName = document.getElementById("userName").value;
    var userComment = document.getElementById("userComment").value;
    var displayContainerComments = document.getElementById("displayContainerComments");
    var newCommentCard = document.createElement("div");
    var commentCardName = document.createElement("p");
    var commentCardText = document.createElement("p");
    //Creating neccessary DOM elements to display comments and apply classes
    displayContainerComments.append(newCommentCard);
    newCommentCard.setAttribute("class","commentCard");
    newCommentCard.append(commentCardName);
    commentCardName.setAttribute("class","commentCardName");
    commentCardName.innerHTML=userName;
    newCommentCard.append(commentCardText);
    commentCardText.setAttribute("class","commentCardText");;
    commentCardText.innerHTML=userComment;
});

//Bibliography and refernces avaikable on main.js