import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;