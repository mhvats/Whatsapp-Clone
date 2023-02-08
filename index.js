var body = document.querySelector("body");
var createChatBot = document.querySelector("#create-chatbot");
var addChatBot = document.querySelector(".add-chatbot");
var addNewChatBot = document.querySelector("#add-chatbot-text");
var chatBotInformation = document.querySelector(".enter-chatbot-information");
var chatList = document.querySelector(".chat-list");
var cancelBtn = document.querySelector("#cancel-btn");
var createBtn = document.querySelector("#create-btn");
var chatBotNumberInput = document.querySelector("#chatbot-number-input");
var chatBotNameInput = document.querySelector("#chatbot-name-input");
var chatbotMessageDetail = document.querySelector(".chatbot-message-detail");
var messages = document.querySelector(".messages");
var chatBotNameMessage = document.querySelector(".chatbot-name-message");
// Toggling of create new chatbot
createChatBot.addEventListener("click", function () {
    if (addChatBot.style.visibility === "visible") {
        addChatBot.style.visibility = "hidden";
    }
    else {
        addChatBot.style.visibility = "visible";
    }
})
// creation of chatbot with new dialog box
addNewChatBot.addEventListener("click", function () {
    chatBotInformation.style.visibility = "visible";
    addChatBot.style.visibility = "hidden";
    chatList.style.filter = "blur(0.2rem)";

})
createBtn.addEventListener("click", function () {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    div1.classList.add("chatbot-message-detail");
    div2.classList.add("chatbot-profile-pic");
    div3.classList.add("chatbot-name-message");
    div4.classList.add("chatbot-name");
    div5.classList.add("chatbot-message");
    if (chatBotNameInput.value === "") {
        chatBotNameInput.value = "";
        chatBotNumberInput.value = "+91";
        chatList.style.filter = "blur(0rem)";
        chatBotInformation.style.visibility = "hidden";
    }
    else {
        messages.append(div1);
        div1.append(div2);
        div1.append(div3);
        div3.append(div4);
        div3.append(div5);
        div4.innerHTML = chatBotNameInput.value;
        chatBotNameInput.value = "";
        chatBotNumberInput.value = "+91";
        chatList.style.filter = "blur(0rem)";
        chatBotInformation.style.visibility = "hidden";
    }

})
cancelBtn.addEventListener("click", function () {
    chatBotInformation.style.visibility = "hidden";
    chatBotNameInput.value = "";
    chatBotNumberInput.value = "+91";
    chatList.style.filter = "blur(0rem)";
    
})

