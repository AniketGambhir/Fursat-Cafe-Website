# Fursat Cafe Website

A responsive Flask website concept for Fursat Cafe, Hadapsar, Pune.

## Run locally
1. Install Python 3.10+.
2. Open this folder in VS Code.
3. In the terminal run:
   ```bash
   python -m venv .venv
   # Windows PowerShell:
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

## Important — verify before public launch
- Menu names and prices are demonstration placeholders only. Replace them with the cafe's approved menu and current prices.
- WhatsApp number in `static/app.js` is prefilled as +91 87888 81280 based on the supplied listing. Confirm with the owner before launch.
- The gallery and hero use illustrative stock photography. Replace with cafe-owned or owner-approved photos.
- Confirm business hours, address spelling, contact details and permission to publish this site.
- Booking/order form sends an enquiry through WhatsApp. It does not create a confirmed booking or paid order.

## Business details supplied for this build
Fursat Cafe, JAYAWANTRAO SAWANT COLLEGE OF EDUCATION, Autadwadi Handewadi, Satar Nagar, Hadapsar, Pune, Maharashtra 411028. Listed phone: 087888 81280. Supplied listing rating: 4.9 from 28 reviews. Hours listing indicated closing at 11 PM; confirm current hours.
