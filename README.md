# React Learning Project

This project is an interactive learning tool designed to help visualize React concepts in action. It's built with React and Tailwind CSS, but uses a CDN-based approach, which means there is no build step or package installation required.

## How to Run

Since this project does not have a build process, you don't need to install any dependencies with `npm` or `yarn`.

1.  **Clone or download the repository.**
2.  **Run a simple local server.** The easiest way to do this is to navigate to the project's root directory in your terminal and run one of the following commands:

    *   **If you have Python 3:** `python -m http.server`
    *   **If you have Python 2:** `python -m SimpleHTTPServer`
    *   **Using VS Code:** You can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

3.  **Open the project in your browser.** Navigate to the URL provided by your local server (e.g., `http://localhost:8000`).

*Note: While you can open the `index.html` file directly in your browser, using a local server is recommended to avoid potential issues with browser security policies.*

## Project Structure

The project is organized into the following directories:

-   `index.html`: The main entry point of the application. It loads all necessary libraries from CDNs and all the JavaScript component files.
-   `src/`: Contains all the JavaScript source code for the React application.
    -   `src/App.js`: The main root component that sets up the layout and routing.
    -   `src/concepts.js`: A data file that holds the list of all learning concepts. This is where you register new concepts.
    -   `src/components/`: Contains reusable React components used throughout the application (e.g., `Sidebar`, `Header`, `CodeSnippet`).
    -   `src/pages/`: Contains components that represent full pages (e.g., `HomePage`, `ConceptPage`).
    -   `src/concepts/`: Contains the specific components for each learning concept (e.g., `JsxBasics.js`).

## How to Add a New Concept

Adding a new concept is designed to be very simple:

**Step 1: Create the Concept Component**

Create a new `.js` file in the `src/concepts/` directory. The name of the file should be descriptive (e.g., `useStateHook.js`). Inside this file, create a new React component that contains the explanation, interactive demo, and code snippets for the concept you want to teach.

**Step 2: Register the New Concept**

Open the `src/concepts.js` file. Add a new object to the `concepts` array. Follow the existing format:

```javascript
const concepts = [
  {
    path: "jsx-basics",
    title: "JSX Basics",
    component: JsxBasics,
  },
  // Add your new concept here
  {
    path: "use-state-hook", // A unique URL-friendly path
    title: "useState Hook",  // The title that will appear in the navigation
    component: UseStateHook, // The component you would have just created
  },
];
```
*Note: You would also need to import the new component at the top of the file if it's not globally available.*

**Step 3: Add the Script Tag**

Finally, open `index.html` and add a new `<script>` tag to load your new component file. Make sure to add it *before* the `App.js` script tag.

```html
<!-- ... other scripts ... -->
<script src="src/concepts/useStateHook.js" type="text/babel"></script>
<script src="src/App.js" type="text/babel"></script>
<!-- ... -->
```

That's it! The routing and navigation will automatically pick up your new concept.
