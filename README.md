# 🔐 LockR — Secure Password, PIN & Passphrase Generator

LockR is a modern, privacy-focused **client-side password generator** that helps users create **strong, secure, and crack-resistant passwords, PINs, and passphrases** — directly in the browser.

No backend. No tracking. No data storage.  
**Your security stays with you.**

---

## 🌐 Live Preview
https://lockr09.netlify.app/

---

## ✨ Key Features

### 🔑 Password Generator
- Generate strong passwords instantly
- Length control (slider + manual input)
- Options:
  - Uppercase
  - Lowercase
  - Numbers
  - Symbols

### 🔢 PIN Generator
- Numeric-only secure PINs
- Adjustable length
- Strength analysis included

### 🧠 Passphrase Generator
- Diceware-based real-world words
- Length = number of words
- Separator options:
  - `-` (hyphen)
  - `_` (underscore)
  - Space
- Capitalization toggle

### 📊 Smart Strength Analysis
- Real-time strength score: **Weak / Medium / Strong**
- Animated visual strength bar
- Crack-time estimation
- Logical checks:
  - Pattern detection
  - Repetition checks
  - Entropy-based scoring
- Helpful security suggestions

### 🌈 Interactive Glow Effects
- Border glow synced with strength level
- Auto glow on **Copy**
- Smooth neon animation (performance optimized)

### 🌙 Dark / Light Mode
- Fully responsive themes
- Smooth transitions
- Theme preference saved in `localStorage`

### 🌐 Multi-Language Support
- English 🇬🇧
- Hindi 🇮🇳
- Centralized language system using React Context API

### 📱 Fully Responsive
- Mobile-first design
- Optimized for desktop, tablet & mobile

---

## 🛡️ Privacy & Security

- ✅ 100% client-side execution
- ❌ No backend server
- ❌ No password storage
- ❌ No tracking or analytics
- 🔐 Passwords never leave your device

---

## 🧩 Pages & Sections

- **Home / Hero** — Live password generator demo
- **Why LockR** — Real-world password security problems
- **About** — Philosophy & solution
- **Developer** — Developer profile & other products

---

## 👨‍💻 Developer

**Prince Raj**  
Frontend Developer focused on building clean, secure, and user-first web experiences.

### 🔗 Connect with Me
- GitHub: https://github.com/theprince09
- LinkedIn: https://linkedin.com/in/itsmeprince09
- Portfolio: https://prince09.netlify.app
- Email: princeraj0509@gmail.com

---

## 🚀 Other Products

- **Portfolio Website** — HTML, CSS, JavaScript  
- **GameWorld** — Mini browser games platform  
- **Gym Website** — Gym management & online presence  
- **UrbanEase** — React-based urban management system  
- **DevProgress** — Developer activity & progress tracker  

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Styling:** CSS (Glassmorphism + Neon UI)
- **State Management:** React Hooks & Context API
- **Routing:** React Router
- **Data:** Diceware wordlist (JSON)
- **Storage:** localStorage
- **Build Tool:** Vite

---

## 📁 Project Structure

src/
├── assets/
├── Components/
│ ├── Generator/
│ ├── Hero/
│ ├── Navbar/
│ └── Cards/
├── Pages/
│ ├── About/
│ └── Developer/
├── context/
│ └── LanguageContext.jsx
├── data/
│ └── wordlist-en.json
├── languages/
│ ├── en.js
│ └── hi.js
├── App.jsx
├── main.jsx
└── index.css


---

## 🚀 Local Setup

```bash
git clone https://github.com/theprince09/lockR.git
cd lockR
npm install
npm run dev
📌 Future Enhancements
Password history (local-only)

Secure export options

More languages

Accessibility improvements

PWA support

⭐ Why LockR?
Weak and reused passwords are still the #1 cause of account breaches.
LockR makes strong security simple, fast, and transparent.

📜 License
This project is open-source and intended for educational & portfolio use.
