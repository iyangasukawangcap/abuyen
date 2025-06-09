function startConnection() {
  const logDiv = document.getElementById('log');
  logDiv.innerText = 'Connecting to WebSocket...\n';

  // Contoh WebSocket publik (echo server)
  const ws = new WebSocket('wss://ws.postman-echo.com/raw');

  ws.onopen = () => {
    logDiv.innerText += '✅ Connected to WebSocket\n';
    ws.send('Hello from GitHub Pages!');
  };

  ws.onmessage = (event) => {
    logDiv.innerText += `📨 Received: ${event.data}\n`;
  };

  ws.onerror = (err) => {
    logDiv.innerText += `❌ Error: ${err.message || err}\n`;
  };

  ws.onclose = () => {
    logDiv.innerText += '🔌 Connection closed\n';
  };
}
