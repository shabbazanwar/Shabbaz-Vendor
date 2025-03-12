import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const Order = ({ darkMode }) => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      user: "Puma",
      items: 2,
      status: "Delivered",
      date: "13 Jan 2025",
    },
    {
      id: 2,
      user: "Reebok",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 3,
      user: "Burberry",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 4,
      user: "Dior",
      items: 2,
      status: "Delivered",
      date: "19 Dec 2024",
    },
    {
      id: 5,
      user: "Lakers",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 6,
      user: "Balenciaga",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 7,
      user: "Nike",
      items: 2,
      status: "Delivered",
      date: "19 Dec 2024",
    },
    {
      id: 8,
      user: "Addidas",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 9,
      user: "Loius Vuitton",
      items: 2,
      status: "Delivered",
      date: "19 Dec 2024",
    },
    {
      id: 10,
      user: "Apple",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 11,
      user: "Samsung",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
    {
      id: 12,
      user: "Calvin Klein",
      items: 2,
      status: "Pending",
      date: "19 Dec 2024",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrder = orders.filter((order) =>
    order.user.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div
      className={`${
        darkMode
          ? "dark:bg-gray-800 dark:text-gray-200"
          : "bg-gray-100 text-gray-800"
      } p-6 min-h-screen mt-16`}
    >
      <div className="ml-60">
        <header className="items-end mb-6">
          <h1 className="text-2xl font-bold">Orders List</h1>
        </header>
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } max-w-6xl mx-auto rounded-lg shadow-lg p-4 mt-16 border mr-2`}
      >
        <div className="mb-4">
          <div></div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-sm px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-red-500 text-white"
              } text-left`}
            >
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Items</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrder.length > 0 ? (
              filteredOrder.map((order) => (
                <tr
                  key={order.id}
                  className={`border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } ${darkMode ? "even:bg-gray-800" : "even:bg-gray-50"}`}
                >
                  <td className="px-4 py-2 font-medium">{order.name}</td>
                  <td className="px-4 py-2">{order.items}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded ${
                        order.status === "Pending"
                          ? darkMode
                            ? "bg-blue-900 text-blue-300"
                            : "bg-blue-100 text-blue-800"
                          : darkMode
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-2">{order.date}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => previewOrder(order)}
                      className={`${
                        darkMode
                          ? "text-slate-300 hover:text-slate-400"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No order found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
