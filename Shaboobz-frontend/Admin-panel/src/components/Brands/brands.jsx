import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Brand = ({ darkMode }) => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Puma",
      description: "Puma",
      status: "Active",
      date: "13 Jan 2025",
    },
    {
      id: 2,
      name: "Reebok",
      description: "Reebok",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 3,
      name: "Burberry",
      description: "Burberry",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 4,
      name: "Dior",
      description: "Dior",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 5,
      name: "Lakers",
      description: "Lakers",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 6,
      name: "Balenciaga",
      description: "Balenciaga",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 7,
      name: "Nike",
      description: "Nike",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 8,
      name: "Addidas",
      description: "Balenciaga",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 9,
      name: "Loius Vuitton",
      description: "LV",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 10,
      name: "Apple",
      description: "Apple",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 11,
      name: "Samsung",
      description: "Samsung",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 12,
      name: "Calvin Klein",
      description: "Calvin Klein",
      status: "Active",
      date: "19 Dec 2024",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBrand = brands.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setBrands(brands.filter((brand) => brand.id !== id));
  };

  const openModal = (data = null) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (data.id) {
      setBrands(
        brands.map((brand) => (brand.id === data.id ? data : brand))
      );
    } else {
      const newBrand = {
        ...data,
        id: Date.now(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
      setCategories([...brands, newBrand]);
    }
    setIsModalOpen(false);

    const Pagination = ({ totalPages }) => {
      const [currentPage, setCurrentPage] = useState(1);
    
      const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
      };
    
      const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
      };
    };
  };

  return (
    <div
      className={`${
        darkMode
          ? "dark:bg-gray-800 dark:text-gray-200"
          : "bg-gray-100 text-gray-800"
      } p-6 min-h-screen mt-16`}
    >
      <div className="ml-60">
        <header className="flex justify-between items-end mb-6">
          <h1 className="text-2xl font-bold">Brands</h1>
          <button
            onClick={() => openModal()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          >
            + Add Brand
          </button>
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
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBrand.length > 0 ? (
              filteredBrand.map((brand) => (
                <tr
                  key={brand.id}
                  className={`border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } ${darkMode ? "even:bg-gray-800" : "even:bg-gray-50"}`}
                >
                  <td className="px-4 py-2 font-medium">{brand.name}</td>
                  <td className="px-4 py-2">{brand.description}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded ${
                        brand.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300"
                            : "bg-green-100 text-green-800"
                          : darkMode
                          ? "bg-red-900 text-red-300"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {brand.status}
                    </span>
                  </td>
                  <td className="px-8 py-2">{brand.date}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => openModal(brand)}
                      className={`${
                        darkMode
                          ? "text-blue-300 hover:text-blue-400"
                          : "text-blue-500 hover:text-blue-700"
                      }`}
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDelete(brand.id)}
                      className={`${
                        darkMode
                          ? "text-red-300 hover:text-red-400"
                          : "text-red-500 hover:text-red-700"
                      }`}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No brands found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } rounded-lg p-6 w-96 shadow-lg`}
          >
            <h2 className="text-lg font-bold mb-4">
              {modalData ? "Edit Brand" : "Add Brand"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                handleSave({ ...data, id: modalData?.id || null });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={modalData?.name || ""}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={modalData?.description || ""}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  defaultValue={modalData?.status || "Active"}
                  required
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                    darkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className={`${
                    darkMode
                      ? "bg-gray-600 text-white"
                      : "bg-gray-300 text-gray-800"
                  } px-4 py-2 rounded-lg`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Brand;
