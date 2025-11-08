# Swapxnext Website

This is the official website for Swapxnext, a modern web application built with React. It features a responsive design, dynamic content loading, and client-side routing for a smooth user experience.

## Features

*   **Home Page:** Main landing page for Swapxnext.
*   **Privacy Policy:** Dedicated page outlining the privacy policy.
*   **Terms of Service:** Dedicated page detailing the terms of service.
*   **Responsive Navigation:** A `Navbar` component for easy site navigation.
*   **Persistent Footer:** A `Footer` component across all pages.
*   **Scroll to Top:** A `ScrollToTop` component for enhanced user experience.
*   **Dynamic Content:** Utilizes `lottie-react` for animations and other dynamic elements.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **React Router DOM:** For declarative routing in React applications.
*   **Vite:** A fast build tool that provides an instant development server.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Lottie React:** For rendering After Effects animations exported as JSON.
*   **ESLint:** For identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/swapxnext-website.git
    cd swapxnext-website
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install or pnpm install
    ```

## Usage

### Development Server

To start the development server:

```bash
npm run dev
```

This will typically open the application in your browser at `http://localhost:5173`.

### Build for Production

To build the application for production:

```bash
npm run build
```

This will compile the application into the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel and Netlify, addressing common Single Page Application (SPA) routing issues.

### Vercel

A `vercel.json` file is included in the project root to handle client-side routing. It ensures that all requests are rewritten to `index.html`, allowing React Router to manage the application's routes.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Netlify

A `netlify.toml` file is included in the project root for Netlify deployments. This configuration also ensures that all routes are directed to `index.html`, preventing 404 errors on page refresh for client-side routes.

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```