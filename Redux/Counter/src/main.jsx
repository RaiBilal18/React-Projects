import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import counterstore from "./store/index.js"; // Correct default import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterstore}>
      <App />
    </Provider>
  </StrictMode>
);
