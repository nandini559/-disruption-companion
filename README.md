🚆 Disruption Companion

Making railway disruptions easier to understand — even without internet.

Disruption Companion is an offline-first passenger assistance app designed to help railway passengers understand short disruption updates such as delays, cancellations, route changes, and service disruptions.

The app converts simple railway staff updates into clear, actionable instructions for passengers in English, Hindi, Bengali, and Nepali.

---

🎯 Problem

During situations such as heavy rain, landslides, technical failures, or other disruptions, railway announcements can be difficult for passengers to understand.

Passengers often need quick answers to:

- What happened?
- Is my train affected?
- What should I do now?
- Should I wait, change trains, or seek assistance?

When internet connectivity is poor or unavailable, accessing online information can be even more difficult.

---

💡 Solution

Disruption Companion provides a simple offline interface where railway staff can enter a short status message.

The application interprets the message and presents passengers with:

What happened → What it means → What you should do next

The information can be displayed in:

🇬🇧 English
🇮🇳 Hindi
বাংলা Bengali
नेपाली Nepali

---

✨ Key Features

📝 Simple Status Input

Railway staff can enter a short disruption update such as:

«"Train 52541 cancelled due to heavy rainfall."»

🧠 AI-Powered Explanation

The application converts technical or short railway updates into simple passenger-friendly explanations.

🌐 Multilingual Support

Passengers can choose between:

- English
- Hindi
- Bengali
- Nepali

📱 Passenger-Friendly Interface

The interface focuses on quick understanding rather than complicated railway terminology.

📴 Offline-First

Core functionality is designed to work without an active internet connection.

⚡ Action-Oriented Information

Instead of only displaying the disruption, the app explains what the passenger should do next.

---

🔄 How It Works

Railway Staff
     ↓
Enter Short Status
     ↓
Disruption Companion
     ↓
Interpret / Classify Status
     ↓
Generate Simple Explanation
     ↓
Translate into Selected Language
     ↓
Passenger sees:
"What happened?"
"What does it mean?"
"What should I do?"

---

🧪 Example

Staff Input

"Train cancelled due to landslide near Ghum."

Passenger Output

What happened?

Your train has been cancelled because a landslide has affected the railway route near Ghum.

What should you do?

- Do not wait for this train.
- Check with railway staff for alternative arrangements.
- Follow the latest station instructions.

---

🛠️ Tech Stack

Frontend

- React.js
- TypeScript
- Tailwind CSS

AI / Language Processing

- Local / offline AI model
- Prompt-based explanation and translation

Development

- Vite
- Git & GitHub

---

📴 Offline Architecture

The application is designed with offline usage in mind.

             ┌──────────────────┐
             │ Railway Staff    │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │ Status Input     │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │ Local Processing │
             │ / AI Model       │
             └────────┬─────────┘
                      │
             ┌────────┴─────────┐
             ▼                  ▼
      Explanation          Translation
             │                  │
             └────────┬─────────┘
                      ▼
             ┌──────────────────┐
             │ Passenger UI     │
             └──────────────────┘

---

🚀 Getting Started

Prerequisites

Make sure you have installed:

- Node.js
- npm

Installation

Clone the repository:

git clone <YOUR_REPOSITORY_URL>

Navigate into the project:

cd disruption-companion

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL shown in your terminal.

---

📂 Project Structure

disruption-companion/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   ├── data/
│   └── App.tsx
│
├── public/
├── package.json
├── README.md
└── vite.config.ts

---

🏆 Hackathon Focus

This project was developed for the Code for Communities – Toy Train Edition hackathon.

Problem Statement

C3. Disruption Companion 🟢 STARTER

«Monsoon cancellations and delays are routine. An offline app that reads a short status entered by station staff and explains, in Nepali / Hindi / Bengali / English, what it means for a passenger and what to do next.»

The project focuses on making disruption information accessible, understandable, multilingual, and useful even when connectivity is limited.

---

🌱 Future Improvements

- Integration with real-time railway disruption data
- Voice-based announcements
- Text-to-speech for passengers
- QR-code based passenger access
- More regional languages
- Improved local AI models
- Accessibility features for elderly and visually impaired passengers
- Historical disruption information
- Station-specific guidance

---

👩‍💻 Built With

Built with ❤️ for improving the passenger experience during railway disruptions.

Disruption Companion — Understand the disruption. Know what to do next.