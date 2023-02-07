const body = document.querySelector("body");
const createChatBot = document.querySelector("#create-chatbot");
const addChatBot = document.querySelector(".add-chatbot");
const addNewChatBot = document.querySelector("#add-chatbot-text");
// Toggling of create new chatbot
createChatBot.addEventListener("click", function(){
    if(addChatBot.style.visibility === "visible"){
        addChatBot.style.visibility = "hidden";
    }
    else{
        addChatBot.style.visibility = "visible";   
    }
})
// creation of chatbot with new dialog box
addNewChatBot.addEventListener("click", function(){
    addChatBot.style.visibility = "hidden";
    // body.style.filter = "blur(5px)";
})
