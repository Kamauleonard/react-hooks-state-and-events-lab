import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <h1>My App</h1>
      <button onClick={handleModeToggle}>Toggle Mode</button>
      <ShoppingList items={itemData} />
      {/* Other components and content */}
    </div>
  );
}

export default App;
