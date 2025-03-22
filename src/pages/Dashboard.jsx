import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Analytics from "./Analytics";
import Settings from "./Settings";

function Dashboard() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar - Stays Fixed */}
        <Sidebar />

        {/* Main Content - Scrollable */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
