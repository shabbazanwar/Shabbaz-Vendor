import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const subCategory = ({ darkMode }) => {
  const [subCategories, setSubCategories] = useState([
    {
      id: 1,
      name: "Food",
      description: "food",
      status: "Active",
      date: "13 Jan 2025",
    },
    {
      id: 2,
      name: "Mobile",
      description: "Find the latest smartphones at unbeatable prices",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 3,
      name: "Glasses",
      description: "Discover a stunning collection of glasses at NextAll",
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 4,
      name: "Caps",
      description: `Upgrade your style with NextAll's collection of caps`,
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 5,
      name: "Shoes",
      description:`Step up your style with NextAll's exclusive shoe collection`,
      status: "Active",
      date: "19 Dec 2024",
    },
    {
      id: 6,
      name: "Shirts",
      description: "Explore a premium collection of shirts at NextAll",
      status: "Active",
      date: "19 Dec 2024",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCategories = subCategories.filter((subCategory) =>
    subCategory.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setSubCategories(subCategories.filter((subCategory) => subCategory.id !== id));
  };

  const openModal = (data = null) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    if (data.id) {
      setSubCategories(
        subCategories.map((subCategory) =>
          subCategory.id === data.id ? data : subCategory
        )
      );
    } else {
      const newSubCategory = {
        ...data,
        id: Date.now(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      };
      setSubCategories([...subCategories, newSubCategory]);
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
      className={`${darkMode ? 'dark:bg-gray-800 dark:text-gray-200' : 'bg-gray-100 text-gray-800'} p-6 min-h-screen mt-16`}
    >
        <div className="ml-60">
          <header className="flex justify-between items-end mb-6">
          <h1 className="text-2xl font-bold">Sub Categories List</h1>
          <button
            onClick={() => openModal()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          >
            + Add Sub Category
          </button>
        </header>
        </div>
        <div
        className={`${darkMode ? "bg-gray-800" : "bg-white"
        } max-w-6xl mx-auto rounded-lg shadow-lg border mt-16 mr-2 p-4`}
      >

        <div className="mb-4">
          <div>
            
          </div>
          <input          
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-sm px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`${darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-red-500 text-white"
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
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <tr
                  key={category.id}
                  className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"
                  } ${darkMode ? "even:bg-gray-800" : "even:bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2 font-medium">{category.name}</td>
                  <td className="px-4 py-2">{category.description}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded ${
                        subCategory.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300"
                            : "bg-green-100 text-green-800"
                          : darkMode
                          ? "bg-red-900 text-red-300"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {subCategory.status}
                    </span>
                  </td>
                  <td className="px-8 py-2">{subCategory.date}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => openModal(subCategory)}
                      className={`${darkMode
                          ? "text-blue-300 hover:text-blue-400"
                          : "text-blue-500 hover:text-blue-700"
                      }`}
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDelete(subCategory.id)}
                      className={`${darkMode
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
                  No categories found.
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
            className={`${darkMode
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            } rounded-lg p-6 w-96 shadow-lg`}
          >
            <h2 className="text-lg font-bold mb-4">
              {modalData ? "Edit Sub Category" : "Add Sub Category"}
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
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${darkMode
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
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${darkMode
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
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${darkMode
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
                  className={`${darkMode
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

export default subCategory;