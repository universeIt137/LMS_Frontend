import { useState } from 'react';

const BootcampCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Selected Category:', selectedCategory);
    console.log('Search Value:', search);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <form 
        action="https://demo.creativeitem.com/academy/addons/bootcamp/bootcamp_list" 
        method="get" 
        id="bootcamp_filter_form" 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <h3 className="text-xl font-semibold mb-4">Bootcamps</h3>

          <div className="space-y-2">
            {[
              { value: 'all', label: 'All bootcamps', count: 5 },
              { value: 'software-engineering', label: 'Software Engineering', count: 1 },
              { value: 'web-development', label: 'Web Development', count: 1 },
              { value: 'data-science-and-analytics', label: 'Data Science and Analytics', count: 1 },
              { value: 'information-security', label: 'Information Security', count: 1 },
              { value: 'ux/ui-design-bootcamp', label: 'UX/UI Design Bootcamp', count: 1 },
            ].map((category) => (
              <div className="flex items-center space-x-2" key={category.value}>
                <input
                  className="form-radio text-primary border-gray-300"
                  type="radio"
                  name="category"
                  value={category.value}
                  id={`bootcamp-${category.value}`}
                  checked={selectedCategory === category.value}
                  onChange={handleCategoryChange}
                />
                <label className="flex-1 text-sm" htmlFor={`bootcamp-${category.value}`}>
                  <span>{category.label}</span>
                  <span className="ml-2 text-gray-600">({category.count})</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <input type="hidden" name="search" value={search} />

        
      </form>
    </div>
  );
};

export default BootcampCategory;