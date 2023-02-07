const body = document.querySelector("body");
const createChatBot = document.querySelector("#create-chatbot");
const addChatBot = document.querySelector(".add-chatbot");
const addNewChatBot = document.querySelector("#add-chatbot-text");
const chatBotInformation = document.querySelector(".enter-chatbot-information");
const chatList = document.querySelector(".chat-list");
const cancelBtn = document.querySelector("#cancel-btn");
const chatBotNumberInput = document.querySelector("#chatbot-number-input");
const chatBotNameInput = document.querySelector("#chatbot-name-input");
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
    chatBotInformation.style.visibility = "visible";
    addChatBot.style.visibility = "hidden";
    chatList.style.filter = "blur(0.2rem)";
    
})
cancelBtn.addEventListener("click", function(){
    chatList.style.filter = "blur(0rem)";
    chatBotNameInput.value = " ";
    chatBotNumberInput.value = "+91";
    chatBotInformation.style.visibility = "hidden";
})

