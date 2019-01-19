$(document).ready(function(){
    $("#chat .chat-label").click(function(){
        $("#chat").toggleClass("opened");
    });

    $("#chat .chat-input .submit").click(function(){
        let text = $("#chat .chat-input .text")[0];   

        addNewMessage(text.value, true);
        addRandomMessage(text.value);

        text.value = '';
    });

    function addNewMessage(messageText, isClient){  
        let messagesInterface = $("#chat .chat-messages")[0];
        let messages = messagesInterface.querySelector("ul");

        var span = document.createElement("span");
        span.appendChild(document.createTextNode(messageText));

        var div = document.createElement("div");
        div.appendChild(span);

        var li = document.createElement("li");
        li.setAttribute("client", isClient);
        li.appendChild(div);

        messageSetAttributes(li);

        messages.appendChild(li);
        messagesInterface.scrollTop = messagesInterface.scrollHeight;
    }

    function messageSetAttributes(newMessage){
        var lastMessage = $("#last-message")[0];

        if(lastMessage){
            lastMessage.removeAttribute("id");            

            newMessage.classList.add("last");
            if(lastMessage.getAttribute("client") !== newMessage.getAttribute("client")){
                newMessage.classList.add("first");
            }
            else {
                lastMessage.classList.remove("last");
            }
        }

        newMessage.setAttribute("id", "last-message");
    };

    function addRandomMessage(messageText){
        for(var i=0; i<3; i++){
            if(Math.random() > 0.6)
                addNewMessage(messageText, false);
        }
    }
});