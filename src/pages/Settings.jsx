import React, { useState, useEffect } from "react";

const Settings = () => {
  // Initial state (you can replace with real user data from API or AuthContext)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100",
  });

  // Load profile from localStorage if available
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  // Update localStorage when profile changes
  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile updated!");
  };

  return (
    <div className="p-6 min-h-screen bg-white text-gray-900">
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>

      {/* Profile Picture */}
      <div className="flex items-center space-x-4 mb-4">
        <img src={profile.avatar} alt="Profile" className="w-16 h-16 rounded-full border" />
        <input
          type="text"
          value={profile.avatar}
          onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
          className="border p-2 rounded w-full"
          placeholder="Enter image URL"
        />
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
};

export default Settings;
