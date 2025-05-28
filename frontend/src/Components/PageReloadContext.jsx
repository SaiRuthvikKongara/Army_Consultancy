import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
const PageReloadContext = createContext();

// Provider to wrap the app and manage reload logic
export const PageReloadProvider = ({ children }) => {
  const [visitedPages, setVisitedPages] = useState({});

  useEffect(() => {
    const storedPages = sessionStorage.getItem("visitedPages");
    if (storedPages) {
      setVisitedPages(JSON.parse(storedPages));
    }
  }, []);

  const markPageAsVisited = (path) => {
    setVisitedPages((prev) => {
      const updated = { ...prev, [path]: true };
      sessionStorage.setItem("visitedPages", JSON.stringify(updated));
      return updated;
    });
  };

  const value = {
    visitedPages,
    markPageAsVisited,
  };

  return <PageReloadContext.Provider value={value}>{children}</PageReloadContext.Provider>;
};

// Custom hook to use the page reload context
export const usePageReload = () => {
  return useContext(PageReloadContext);
};
