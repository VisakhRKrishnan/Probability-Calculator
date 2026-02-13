# Probability Calculator

A Next.js application for calculating probabilities using "CombinedWith" and "Either" functions.

## Features

- **Probability Calculation**: computes $P(A) \times P(B)$ and $P(A) + P(B) - P(A) \times P(B)$.
- **Logging**: records all calculations to a server-side log file (`calculation_log.txt`).
- **Server Actions**: utilizes Next.js Server Actions for backend logic.
- **Validation**: ensures inputs are valid probabilities (0-1).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

3. **Run tests**:
    ```bash
    npm test
    ```

## Project Structure

- `src/app/actions.ts`: Server Actions for calculation and logging.
- `src/components/Calculator.tsx`: Client component for the UI.
- `src/utils`: Helper functions (if any).
- `calculation_log.txt`: Log file generated at runtime.
