import React, { useEffect, useState } from "react";
import axios from "axios";

const VendorsPage = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/vendor");
        setVendors(response.data.data);
      } catch (err) {
        setError("Failed to fetch vendors");
      } finally {
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  if (loading) return <p className="text-center">Loading vendors...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700">All Shops</h1>
      <p className="text-gray-600 text-center mb-6">
        Browse through our vendors and explore their products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={vendor._id} // Use _id instead of index for stability
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${vendor.storeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-purple-700 bg-opacity-50 flex flex-col items-center justify-center p-6 text-white">
              <h2 className="text-xl font-semibold">{vendor.storeName}</h2>
              <p className="mt-2">Followers: 0</p>
              <p>Total Products: {vendor.products ? vendor.products.length : 0}</p> {/* Added safety check */}
              <div className="mt-4 space-x-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  View Store
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Follow
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsPage;
