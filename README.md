<h1 align="center">IP Grabber</h1>

<p align="center">
  <strong>A simple script to grab the user's IP address and send it to a Discord webhook.</strong>
</p>


## Description

This script fetches the user's IP address using `https://api.ipify.org` and sends it to a specified Discord webhook.

## How it Works

The script leverages JavaScript's versatile `fetch` API to seamlessly dispatch a GET request to `https://api.ipify.org`, retrieving the user's precise IP address. Subsequently, it orchestrates a POST request to a designated Discord webhook URL, furnishing the acquired IP address as the payload. Expect to receive real-time notifications in your Discord server whenever a visitor graces your website, each notification succinctly encapsulating the visitor's Public IP address.

## Usage

Simply include the script in your HTML file. Just make sure to replace **'YOUR_DISCORD_WEBHOOK'** with your actual Discord webhook URL.

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
