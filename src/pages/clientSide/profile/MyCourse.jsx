import { useState } from "react";
import MyCourseCards from "./MyCourseCards";

const MyCourse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  // Function to handle the search button click
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    // Implement sorting functionality here
  };

  // Function to handle pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full  py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Courses <span className="text-sm font-normal">(12)</span></h1>
      </div>

      {/* Search, Sort, and Filter Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center">

        {/* Search Bar */}
        <div className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-2 mb-4 md:mb-0">
          <input
            type="text"
            className="input input-bordered w-full lg:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="btn bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Sort By and Filter */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 w-full">
          {/* Sort By */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-gray-700 text-sm font-medium w-14">Sort By:</label>
            <select
              className="select select-bordered w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Select</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="price">Price</option>
            </select>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <label className="text-gray-700 text-sm font-medium">Filter:</label>
            <select
              className="select select-bordered w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
        </div>
      </div>
    <MyCourseCards></MyCourseCards>

    </div>
  );
};

export default MyCourse;
