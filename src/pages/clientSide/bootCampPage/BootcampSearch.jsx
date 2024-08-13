const BootcampSearch = () => {
    return (
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          className="border border-border rounded-lg p-2 "
        />
        <button className="btn btn-primary ml-4">
          Search
        </button>
      </div>
    );
  };
  
  export default BootcampSearch;