var body = document.querySelector("body");
var mainContainer = document.querySelector(".main-container");
var createChatBot = document.querySelector("#create-chatbot");
var addChatBot = document.querySelector(".add-chatbot");
var addNewChatBot = document.querySelector("#add-chatbot-text");
var chatBotInformation = document.querySelector(".enter-chatbot-information");
var chatList = document.querySelector(".chat-list");
var cancelBtn = document.querySelector("#cancel-btn");
var createBtn = document.querySelector("#create-btn");
var chatBotNumberInput = document.querySelector("#chatbot-number-input");
var chatBotNameInput = document.querySelector("#chatbot-name-input");
var messages = document.querySelector(".messages");
var chatBotNameMessage = document.querySelectorAll(".chatbot-name-message");
var chatMenuDiv = document.querySelector(".chat-menu-div");
var moreOptions = document.querySelector(".more-options");
var logout = document.querySelector("#logout");
var exit = document.querySelector("#exit");

chatMenuDiv.addEventListener("click", function () {
    if (moreOptions.style.visibility === "visible") {
        moreOptions.style.visibility = "hidden";
    }
    else {
        moreOptions.style.visibility = "visible";
    }
})
logout.addEventListener("click", function () {
    window.location.assign("index.html");
})
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
cancelBtn.addEventListener("click", function () {
    chatBotInformation.style.visibility = "hidden";
    chatBotNameInput.value = "";
    chatBotNumberInput.value = "+91";
    chatList.style.filter = "blur(0rem)";

})
createBtn.addEventListener("click", function () {
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var profilePic = document.createElement("img");

    div1.classList.add("chatbot-message-detail");
    div2.classList.add("chatbot-profile-pic");
    div3.classList.add("chatbot-name-message");
    div4.classList.add("chatbot-name");
    div5.classList.add("chatbot-message");
    profilePic.classList.add("img-profile")
    if (chatBotNameInput.value === "") {

        chatBotNameInput.value = "";
        chatBotNumberInput.value = "+91";
        chatList.style.filter = "blur(0rem)";
        chatBotInformation.style.visibility = "hidden";

    }
    else {

        messages.append(div1);
        div1.append(div2);
        div2.append(profilePic);
        profilePic.src = "/7b795d0d-cf2f-467a-9ed7-5f8b8ba231e0.png";
        div1.append(div3);
        div3.append(div4);
        div3.append(div5);
        div4.innerHTML = chatBotNameInput.value;
        chatBotNameInput.value = "";
        // chatBotNumberInput.value = "+91";
        chatList.style.filter = "blur(0rem)";
        chatBotInformation.style.visibility = "hidden";
    }
    div1.addEventListener("click", function () {
        var inboxAreaDiv = document.createElement("div");
        var chatbotInfoDiv = document.createElement("div");
        var typeMessageDiv = document.createElement("div");
        var textMessageInput = document.createElement("input");
        var sendMessageDiv = document.createElement("div");
        var userprofilepicDiv = document.createElement("div");
        var userprofilepicImg = document.createElement("img");
        var userNameProfileInfo = document.createElement("div");
        var usernameDiv = document.createElement("div");
        var profileInfo = document.createElement("div");

        inboxAreaDiv.classList.add("inbox-area");
        chatbotInfoDiv.classList.add("chatbot-info");
        userprofilepicDiv.classList.add("userprofile-pic");
        userprofilepicImg.classList.add("userprofile-pic-img");
        userNameProfileInfo.classList.add("username-profileInfo");
        usernameDiv.classList.add("username");
        profileInfo.classList.add("profile-info");
        typeMessageDiv.classList.add("type-message");

        textMessageInput.classList.add("text-message");
        textMessageInput.type = "text";
        textMessageInput.placeholder = "Type a message";
        sendMessageDiv.classList.add("send-message");

        sendMessageDiv.innerHTML = "Send";
        mainContainer.append(inboxAreaDiv);
        inboxAreaDiv.style.visibility = "visible";
        inboxAreaDiv.append(chatbotInfoDiv);
        chatbotInfoDiv.append(userprofilepicDiv);
        userprofilepicDiv.append(userprofilepicImg);
        userprofilepicImg.src = profilePic.src;
        chatbotInfoDiv.append(userNameProfileInfo);
        userNameProfileInfo.append(usernameDiv);
        userNameProfileInfo.append(profileInfo);
        profileInfo.innerHTML = "Profile info";
        usernameDiv.innerHTML = div4.innerHTML;
        inboxAreaDiv.append(typeMessageDiv);
        typeMessageDiv.append(textMessageInput);
        typeMessageDiv.append(sendMessageDiv);

        profileInfo.addEventListener("click", function () {
            var profileInfoBoxDiv = document.createElement("div");
            profileInfoBoxDiv.classList.add("profile-info-box");
            var profileInfoBoxPicDiv = document.createElement("div");
            profileInfoBoxPicDiv.classList.add("profile-info-box-pic", "profile-info-box-priority");
            var profileInfoBoxPicImg = document.createElement("img");
            profileInfoBoxPicImg.classList.add("profile-info-box-pic-img");
            var profileInfoBoxNameDiv = document.createElement("div");
            profileInfoBoxNameDiv.classList.add("profile-info-box-name", "profile-info-box-priority");
            var profileInfoBoxAboutDiv = document.createElement("div");
            profileInfoBoxAboutDiv.classList.add("profile-info-box-about", "profile-info-box-priority");
            var profileInfoBoxNumber = document.createElement("div");
            profileInfoBoxNumber.classList.add("profile-info-box-number", "profile-info-box-priority");

            mainContainer.append(profileInfoBoxDiv);
            profileInfoBoxDiv.style.visibility = "visible";
            profileInfoBoxDiv.append(profileInfoBoxPicDiv);
            profileInfoBoxPicDiv.append(profileInfoBoxPicImg);
            profileInfoBoxPicImg.src = profilePic.src;
            profileInfoBoxDiv.append(profileInfoBoxNameDiv);
            profileInfoBoxNameDiv.innerHTML = div4.innerHTML;
            profileInfoBoxDiv.append(profileInfoBoxAboutDiv);
            profileInfoBoxAboutDiv.innerHTML = "sleepy";
            profileInfoBoxDiv.append(profileInfoBoxNumber);
            profileInfoBoxNumber.innerHTML = chatBotNumberInput.value;

            profileInfo.addEventListener("dblclick", function () {
                profileInfoBoxDiv.style.visibility = "hidden";
            })
        })

    })

})
