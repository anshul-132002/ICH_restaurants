import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react"; // Import Auth0Provider
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <div>
      <Auth0Provider
        domain="dev-2jzafjnfmex631cp.us.auth0.com"
        clientId="SKDye2TgumMueSenBppbAKptVIuwmDIc"
        redirectUri={window.location.origin}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </div>
  );
}

export default App;
