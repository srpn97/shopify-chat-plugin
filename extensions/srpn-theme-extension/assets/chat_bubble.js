document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.getElementById('chat-bubble');
    const chatBox = document.getElementById('chat-box');
    const chatMessage = document.getElementById('chat-message');
  
    // Parse shop info from the script tag
    const shopInfo = JSON.parse(document.getElementById('shopInfo').textContent);
  
    chatBubble.addEventListener('click', () => {
      chatBox.classList.toggle('hidden');
      
      if (!chatBox.classList.contains('hidden')) {
        chatMessage.textContent = 'Loading...';
        
        // Make API call
        fetch('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 100 + 1))
          .then(response => response.json())
          .then(data => {
            const messageContent = `
              Welcome to ${shopInfo.shopName}!
              ${shopInfo.customerName ? `Hello, ${shopInfo.customerName}!` : 'Hello, Guest!'}
              Random post title: ${data.title}
              Shop Domain: ${shopInfo.shopDomain}
            `;
            chatMessage.textContent = messageContent;
          })
          .catch(error => {
            console.error('Error:', error);
            chatMessage.textContent = 'Failed to load message. Please try again.';
          });
      }
    });
  });