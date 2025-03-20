import { useState } from "react";

export default function FeePaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    roomNo: "",
    utrNo: "",
    amount: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === "")) {
      alert("Please fill all the fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">🏦 Fee Payment Form</h2>
      
      {submitted ? (
        <div className="text-center text-green-600 font-semibold text-lg">
          ✅ Payment Submitted Successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Year</label>
            <select 
              name="year" 
              value={formData.year} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Room No</label>
            <input 
              type="text" 
              name="roomNo" 
              value={formData.roomNo} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">UTR No</label>
            <input 
              type="text" 
              name="utrNo" 
              value={formData.utrNo} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Amount (₹)</label>
            <input 
              type="number" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Submit Payment
          </button>
        </form>
      )}
    </div>
  );
}
