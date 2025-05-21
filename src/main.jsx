import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import Wrapper from "./components/Wrapper"

createRoot(document.getElementById("root")).render(
    <Wrapper>
        <App />
        <ToastContainer position="top-center" closeOnClick={true}  draggable theme="dark" />
    </Wrapper>
);