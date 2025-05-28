import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const pageKey = `reload-${location.pathname}`; // Key to track page reload state

  useEffect(() => {
    // If the page has not been visited before (within this session)
    if (!sessionStorage.getItem(pageKey)) {
      // Mark the page as visited and trigger a reload
      sessionStorage.setItem(pageKey, "true");
      window.location.reload();
    }
  }, [location.pathname]); // Trigger the effect when route changes

  return null; // This component does not render anything
};

export default ScrollToTop;
