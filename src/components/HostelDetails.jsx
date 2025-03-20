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
    return <h2 className="text-center text-red-500">Hostel Not Found</h2>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center text-blue-500 hover:underline mb-4">
        <ArrowLeft className="mr-2" /> Back
      </button>

      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <img src={hostel.image} alt={hostel.name} className="rounded-md w-full h-60 object-cover"/>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">{hostel.name}</h1>

        <p className="text-gray-600 flex items-center mt-2"><MapPin className="mr-2"/> {hostel.address}</p>
        <p className="text-gray-600 flex items-center mt-2"><Bed className="mr-2"/> Total Seats: {hostel.totalSeats}</p>
        <p className="text-gray-600 flex items-center mt-2"><Bed className="mr-2"/> Empty Rooms: {hostel.emptyRooms}</p>
        <p className="text-gray-600 flex items-center mt-2"><Utensils className="mr-2"/> Food Menu: {hostel.foodMenu}</p>
        <p className="text-gray-600 flex items-center mt-2"><Phone className="mr-2"/> {hostel.phone}</p>
        <p className="text-gray-600 flex items-center mt-2"><Mail className="mr-2"/> {hostel.email}</p>

        {/* Google Maps */}
        <iframe
          src={hostel.location}
          title="Hostel Location"
          width="100%"
          height="250"
          className="mt-4 rounded-md border"
          allowFullScreen
        ></iframe>

        {/* Apply Button */}
        <div className="text-center mt-6">
          {applied ? (
            <div className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
              <CheckCircle className="mr-2" /> Application Submitted Successfully
            </div>
          ) : (
            <button
              onClick={() => setApplied(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-md font-semibold hover:from-blue-600 hover:to-blue-800 transition-all"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
