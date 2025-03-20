import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import hostelsData from "./hostelsData";
import { MapPin, Bed, Utensils, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function HostelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hostel = hostelsData.find((h) => h.id === parseInt(id));

  const [applied, setApplied] = useState(false);

  if (!hostel) {
    return <h2 className="text-center text-red-500 text-2xl font-semibold mt-10">Hostel Not Found</h2>;
  }

  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-800 p-4">
      {/* Back Button (Reduced spacing using mb-2) */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 border-2 border-blue-900 bg-blue-600 text-white px-5 py-2 rounded-md 
                  font-semibold transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg 
                  hover:-translate-x-1 active:scale-95 mb-2"
      >
        <ArrowLeft className="text-white" /> Back
      </button>

      {/* Hostel Details Card */}
      <div className="bg-white shadow-2xl rounded-lg p-8 border border-gray-300 max-w-lg w-full 
                      transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-bold text-gray-800 text-center">{hostel.name}</h1>
        
        <div className="mt-4 space-y-3">
          <p className="text-gray-700 flex items-center"><MapPin className="mr-2 text-blue-600"/> {hostel.address}</p>
          <p className="text-gray-700 flex items-center"><Bed className="mr-2 text-blue-600"/> Total Seats: {hostel.totalSeats}</p>
          <p className="text-gray-700 flex items-center"><Bed className="mr-2 text-blue-600"/> Empty Rooms: {hostel.emptyRooms}</p>
          <p className="text-gray-700 flex items-center"><Utensils className="mr-2 text-blue-600"/> Food Menu: {hostel.foodMenu}</p>
          <p className="text-gray-700 flex items-center"><Phone className="mr-2 text-blue-600"/> {hostel.phone}</p>
          <p className="text-gray-700 flex items-center"><Mail className="mr-2 text-blue-600"/> {hostel.email}</p>
        </div>

        <div className="text-center mt-6">
          {applied ? (
            <div className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
              <CheckCircle className="mr-2" /> Application Submitted Successfully
            </div>
          ) : (
            <button
              onClick={() => setApplied(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold 
                        hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
