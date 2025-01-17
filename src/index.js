import React from "react";
import { createRoot } from "react-dom/client";
import { HealthDashboard } from "./components/healthDashboard/HealthDashboard.jsx";

const App = () => {
  return (
    <div>
      <h1>Health Dashboard</h1>
      <HealthDashboard />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container); // New React 18+ rendering method
root.render(<App />);
