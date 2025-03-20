import React from "react";

function Home() {
  return (
    <div className="flex flex-col flex-grow items-center p-6 text-center bg-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 cursor-pointer">
        🏫 Welcome to Hostel Management System
      </h1>
      <p className="text-gray-600 mt-2 text-lg max-w-md cursor-pointer">
        Your one-stop solution for room allotment, food, and applications.
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {[
          { icon: "📚", value: "1200", label: "Total Students Enrolled" },
          { icon: "🏠", value: "200", label: "Available Rooms" },
          { icon: "🍛", value: "5000", label: "Meals Served Per Day" },
          { icon: "📢", value: "5", label: "Upcoming Events" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 cursor-pointer hover:shadow-xl transition duration-200"
          >
            <h2 className="text-2xl font-semibold">{stat.icon} {stat.value}</h2>
            <p className="text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Notice Board Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-10 w-full max-w-md border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 cursor-pointer">
          📜 Latest Announcements
        </h2>
        <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
          <li className="cursor-pointer hover:text-blue-600 transition">
            📢 Hostel applications for next semester open now!
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            ⚠️ Room cleaning schedule updated.
          </li>
          <li className="cursor-pointer hover:text-blue-600 transition">
            🍽️ New meal plans introduced.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
