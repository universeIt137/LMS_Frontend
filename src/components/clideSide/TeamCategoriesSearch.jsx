const TeamCategoriesSearch = () => {
  return (
    <div className="flex justify-between p-4 items-center gap-6">
      <div>
        <p>Showing 2 Of 2 Results</p>
      </div>
      <div>
        <form >
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-primary w-full max-w-xs" />

        </form>
      </div>
    </div>
  );
};

export default TeamCategoriesSearch;