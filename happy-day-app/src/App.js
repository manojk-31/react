import React from "react";

const HappyDayApp = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600">Happy Day! 🎉</h1>
        <p className="text-lg text-gray-700 mt-2">Wishing you a wonderful day!</p>
        <p className="text-md text-gray-500 mt-1">Today's Date: {today}</p>
      </div>
    </div>
  );
};

export default HappyDayApp;