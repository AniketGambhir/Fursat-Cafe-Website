# BREW THEORY — Cafe Website Demo

A premium, responsive cafe website concept built with Flask, HTML, CSS and vanilla JavaScript. This is a reusable portfolio/demo template intended to be customised for prospective cafe clients.

## Preview locally

1. Install Python 3.10+.
2. Open the repository folder in VS Code.
3. In the terminal:

   ```bash
   python -m venv .venv
   .venv\Scripts\Activate.ps1
   pip install -r requirements.txt
   python app.py
   ```

4. Visit http://127.0.0.1:5000

## Deploy on Render

- Runtime: Python
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`
- Branch: `main`

## Demo features

- Premium dark, cream and champagne-gold visual direction
- Responsive mobile navigation
- Filterable and searchable sample menu
- Gallery lightbox
- Table enquiry form with WhatsApp handoff
- Flask health endpoint at `/health`

## Customise before presenting or launching for a client

1. **Brand:** Change BREW THEORY in `templates/index.html` and update the page title and metadata.
2. **WhatsApp:** Set `WHATSAPP_NUMBER` in `static/app.js` to the cafe's verified number in international format, digits only (example: `919876543210`). The current value is intentionally a placeholder.
3. **Menu:** Edit `menuItems` in `static/app.js`. All names, descriptions and prices are illustrative.
4. **Location and hours:** Replace the placeholder content in the Visit section with verified details. Add an approved Google Maps embed if the client wants one.
5. **Photography:** Replace illustrative Unsplash images with photos owned by or approved by the cafe.
6. **Legal/brand:** Confirm the client has rights to the name, logo, images and all published content.

## Important

This repository is a sample concept, not a live business listing. It contains no verified cafe address, opening hours, menu, prices or contact number. The booking form sends an enquiry only; it does not create a confirmed reservation or process payments.
