import React from "react";
import { Link } from "react-router-dom";
import hostelsData from "./hostelsData";

export default function Hostels() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">🏠 Available Hostels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hostelsData.map((hostel) => (
          <div key={hostel.id} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
            <img src={hostel.image} alt={hostel.name} className="rounded-md h-40 w-full object-cover"/>
            <h2 className="text-xl font-bold text-gray-800 mt-2">{hostel.name}</h2>
            <p className="text-gray-600">💰 Fee: {hostel.fee}</p>
            <p className="text-gray-600">📍 {hostel.address}</p>

            {/* View Details Button */}
            <Link to={`/hostels/${hostel.id}`} className="block mt-3 text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
