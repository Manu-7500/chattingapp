
// const manuselectorbtn = document.querySelector( '#manu-selector' )
// const vishuselectorbtn = document.querySelector( '#vishu-selector' )
// const chatHeader = document.querySelector( '.chat-header' )
// const chatMessages = document.querySelector( '.chat-messages' )
// const chatInputForm = document.querySelector( '.chat-input-form' )
// const clearChatbtn = document.querySelector( '.clear-chat-button' )

// const createchatMessageElement = ( message ) => ` 
// <div class="message ${message.sender === 'manu' ? 'blue-bg' : 'gray-bg'}">
// <div class="message-sender">${message.sender}</div>
// <div class="message-text">${message.text}</div>
// <div class="message-timestamp">${message.timestamp}</div>
// </div>
// `
// let messageSender = 'Manu'
// const updateMessageSender = ( name ) => {
//     messageSender = name
//     chatHeader.innerText = `${messageSender} chatting...`
//     chatInput.placeholder = `Type here, ${messageSender}...`

//     if ( name === 'Manu' ) {
//         johnselectorbtn.classList.add( 'active-person' )
//         janeselectorbtn.classList.remove( 'active-person' )
//     }
//     if ( name === 'Vishu' ) {
//         janeselectorbtn.classList.add( 'active-person' )
//         johnselectorbtn.classList.remove( 'active-person' )
//     }
//     chatInput.focus()

// }

// johnselectorbtn.onclick = () => updateMessageSender( 'Manu' )
// janeselectorbtn.onclick = () => updateMessageSender( 'Vishu' )



// const sendMessage = ( e ) => {
//     e.preventdefault()
//     const timestamp = new Date().toLocaleString( 'en-US', { hour: 'numeric', minute: 'numeric', hour12: true } )
//     const message = {
//         sender: messageSender,
//         text: chatInput.Value, timestamp,
//     }
//     localStorage.setItem( 'messages', JSON.stringley )
//     chatMessages.innerHTML += createchatMessageElement( message )
//     chatInputForm.reset()
//     chatMessages.scrollTop = chatMessages.scrollHeight
// }
// chatInputForm.addEventListener( 'submit', sendMessage )
