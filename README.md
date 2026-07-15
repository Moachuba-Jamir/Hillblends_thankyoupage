# Hillblends & Co — Thank You Page

A single-page, mobile-first "digital business card" to pair with your QR code.
Pure HTML/CSS/vanilla JS — no build step, no dependencies to install.

## Files
- `index.html` — the page structure and copy
- `style.css` — the greenish/cream theme, layout, and animations
- `script.js` — entrance animation, button press feedback, auto-updating year
- `logo.svg` — placeholder logo badge

## Swap in your real logo
Replace `logo.svg` with your own image, keeping the filename `logo.svg`.
If you use a different filename or format (e.g. `logo.png`), update this one line in `index.html`:

```html
<img class="brand__logo" src="logo.svg" alt="Hillblends & Co" width="88" height="88">
```

A square image (at least 200×200px) works best — it's cropped into a circle.

## Edit contact details
In `index.html`, each button is one `<a>` tag:

```html
<a class="contact-btn" href="tel:+918443823978" ...>
<a class="contact-btn" href="tel:+919862909501" ...>
<a class="contact-btn" href="mailto:hillblends@gmail.com" ...>
```

Update the `href` and the visible number/email text (`contact-btn__value`) together.
- `tel:` links open the phone dialer on Android/iOS with the number ready to call.
- `mailto:` links open whatever the phone has set as its default mail app (Gmail, if that's the user's default — this can't be forced from a webpage, but it's what almost every Android phone uses already).

## Deploy on Netlify
1. Drag the whole `hillblends-thankyou` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) — no account needed for a quick test, or log in to keep the link permanently.
2. Netlify gives you a live URL (e.g. `hillblends-thankyou.netlify.app`). You can rename it in Site settings.

## Generate the QR code
Once your Netlify URL is live, paste it into any QR generator (e.g. the QR option built into Google's search bar, or a free site like qr-code-generator.com) and download the image to print on the card.
