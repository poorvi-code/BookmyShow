import React, { useState } from "react";
import { Button } from "react-bootstrap";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
    document.body.style.color = darkMode ? "#000" : "#fff";
    setDarkMode(!darkMode);
  };

  return (
    <Button variant="secondary" onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default DarkModeToggle;
