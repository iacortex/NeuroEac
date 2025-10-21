import "./index.css";
import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import { Layout } from "./layouts/Layout";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import Preloader from "./layouts/PreLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); 
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <BrowserRouter>
      <StrictMode>
        <ChakraProvider value={defaultSystem}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout title="Inicio - Web">
                  <Home />
                </Layout>
              }
            />
          </Routes>
        </ChakraProvider>
      </StrictMode>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")!).render(<App />);