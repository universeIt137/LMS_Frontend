const CourseCard = () => {
  return (
    <div className="shadow-md p-2">
      <button className="p-2 text-sm bg-[#F1F5F9] rounded-sm border ">Free</button>
      <h2 className="text-[18px] font-bold border-b-2 ">Beginner’s Guide to Design</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>

              <td>
                <h2 className="text-[18px] font-medium">$50.00</h2>
                <p className="text-sm text-[#334155]">Price</p>
              </td>
              <td>
                <h2 className="text-[18px] font-medium">19</h2>
                <p className="text-sm text-[#334155]">Chapters</p>
              </td>
              <td>
                <h2 className="text-[18px] font-medium">254</h2>
                <p className="text-sm text-[#334155]">Orders</p>
              </td>
              
            </tr>
        
            <tr>

            <td>
                <h2 className="text-[18px] font-medium">25</h2>
                <p className="text-sm text-[#334155]">Certificates</p>
              </td>
            <td>
                <h2 className="text-[18px] font-medium">25</h2>
                <p className="text-sm text-[#334155]">Reviews</p>
              </td>
            <td>
                <h2 className="text-[18px] font-medium">500</h2>
                <p className="text-sm text-[#334155]">Added to Shelf</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseCard;