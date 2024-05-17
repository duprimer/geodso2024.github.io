function sendMessage(){
    var message = document.getElementById('message-input')
    if(!message.value)
    {
        message.style.border = '1px solid red'
        return;
    }
    message.style.border = 'none'

    var status = document.getElementById('status')
    var btnSubmit = document.getElementById('btn-submit')

    status.style.display = 'block'
    status.innerHTML = 'Carregando...'
    btnSubmit.disabled = false
    btnSubmit.style.cursor = 'not-allowed'
    message.disabled = false
}

function showHistory(message,response){
    var historyBox = document.getElementById('history')

    // My message
    var boxMyMessage = document.createElement('div')
    boxMyMessage.className = 'box-my-message'

    var myMessage = document.createElement('p')
    myMessage.className = 'my-message'
    myMessage.innerHTML = message

    boxMyMessage.appendChild(myMessage)

    historyBox.appendChild(boxMyMessage)

    // Response message
    var boxResponseMessage = document.createElement('div')
    boxResponseMessage.className = 'box-response-message'

    var chatResponse = document.createElement('p')
    chatResponse.className = 'response-message'
    chatResponse.innerHTML = response

    boxResponseMessage.appendChild(chatResponse)

    historyBox.appendChild(boxResponseMessage)

    // Levar scroll para o final
    historyBox.scrollTop = historyBox.scrollHeight
}