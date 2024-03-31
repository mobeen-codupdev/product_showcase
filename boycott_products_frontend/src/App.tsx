// Core Imports
import { useEffect } from "react";
import "./App.css";

// Pages Imports
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SubmitBrand from "./pages/SubmitBrand";

// Router Imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <PageMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/submit-brand" element={<SubmitBrand />} />
      </Routes>
    </Router>
  );
}

function PageMetadata() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const updatePageMetadata = (title: string, metaDescription: string) => {
      if (title) {
        document.title = title;
      }

      if (metaDescription) {
        const metaDescriptionTag = document.querySelector('head > meta[name="description"]') as HTMLMetaElement | null;
        if (metaDescriptionTag) {
          metaDescriptionTag.content = metaDescription;
        }
      }
    };

    switch (pathname) {
      case "/":
        updatePageMetadata("Boycott Israel - Home Page", "");
        break;
      case "/search-results":
        updatePageMetadata("Search Results", "");
        break;
      case "/submit-brand":
        updatePageMetadata("Submit Brand", "");
        break;
      default:
        break;
    }
  }, [pathname]);

  return null;
}


export default App;
