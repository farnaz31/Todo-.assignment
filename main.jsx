 "use strict"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

// import App from './App.jsx'
import { App } from "./App.jsx";
// import { UserProvider } from "./context/UserContext.jsx";
const root = document.getElementById("root");

createRoot(root).render(
  <App />
);

// createRoot(root).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// const camelCase = '';
// const PascalCase = '';
// const kebab-case = '';
// const snake_case = '';


// tommorrow class topics 
//  Performance Optimization
// React.memo

// useCallback

// useMemo

// Lazy loading (React.lazy, Suspense)

// Code splitting