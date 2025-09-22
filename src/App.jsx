import React, { useEffect, useState } from 'react'





export default function PageTitleChanger() {
  const [pageName, setPageName] = useState("Home");
  
  useEffect(() => {
    document.title = `My App - ${pageName}`;
  }, [pageName]);

  return (
    <div className="page-content">
      <h1>Page Title Changer</h1>
      <div className="current-page">
        {pageName}
      </div>
      
      <div className="button-group">
        <button 
          className={pageName === "Home" ? "active" : ""}
          onClick={() => setPageName("Home")}
        >
           Home
        </button>
        <button 
          className={pageName === "About" ? "active" : ""}
          onClick={() => setPageName("About")}
        >
           About
        </button>
        <button 
          className={pageName === "Contact" ? "active" : ""}
          onClick={() => setPageName("Contact")}
        >
           Contact
        </button>
      </div>
      
      <p className="tab-indicator">Check your browser tab title! 👆</p>
    </div>
  );
}