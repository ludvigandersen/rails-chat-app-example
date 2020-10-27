import consumer from "./consumer"

const ChatChannel = consumer.subscriptions.create({channel: "ChatChannel", room: 'main_room'}, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const messagesContainer = document.querySelector('#messages');
    const message = document.createElement('div');

    message.innerHTML = `
    <p>${data.content.message}</p>
    `;

    messagesContainer.prepend(message);
  }
});

export default ChatChannel;
