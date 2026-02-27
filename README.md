# React Exercise App

A React-based exercise tracker built for DIG4639C (Web Design).

Users can select an exercise from a menu and track it using either a rep counter or a running timer. Each exercise screen includes a back button to return to the main menu.

## Features

- **Exercise Menu** — Select from a list of exercises, each labeled as a repetition or duration type
- **Repetition Exercise** — Tracks a rep counter with increment and reset buttons
- **Duration Exercise** — Runs a live timer (MM:SS format) with start and reset buttons
- **Back to Menu** — Return to the exercise list from any exercise screen

## Tech Stack

- React (Vite)
- JavaScript (JSX)
- CSS

## Project Structure

```
src/
├── App.jsx                              # Main screen switcher and exercise menu
├── App.css
└── components/
    ├── RepetitionExercise/RepititionExercise.jsx                   # Counter component
    └── DurationExercise/DurationExercise.jsx                    # Timer component
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ItzJohn2o1/React-Exercise-App.git
   ```

2. Navigate into the project folder:
   ```bash
   cd React-Exercise-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`

## Course Info

Built for **DIG4639C Web Design**
