
const UserFotter = () => {
  return (
    <div className=" flex justify-between py-5 px-3 ">
      <div>
        <p>Showing <span className="text-[#4D44B5]">1-5 </span>from <span className="text-[#4D44B5]">100</span> data</p>

      </div>
      <div className="join">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
      </div>

    </div>
  );
};

export default UserFotter;