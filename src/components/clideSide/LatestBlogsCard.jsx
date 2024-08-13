const LatestBlogsCard = ({img}) => {
  return (
      <div className="card card-compact bg-base-100 shadow-lg rounded-lg overflow-hidden">
          <figure>
              <img
                  src={img}
                  alt="Blog" 
                  className="w-full h-100 px-2 md:p-0 rounded-2xl object-cover"
              />
          </figure>
          <div className="card-body p-4">
              <div className="card-actions mb-4">
                  <button className="btn bg-[#FDE6EC] text-[#FF6F6F] hover:bg-[#FFEBEB] rounded-lg text-xs font-semibold">
                      Education
                  </button>
              </div>
              <h2 className="card-title  font-bold mb-2">AI-Based learning is the future of Corporate Training</h2>
              <p className="text-sm text-gray-600 mb-4 border-b-2 border-gray-200 pb-2">
                  The corporate world is slowly stepping into the dimension of Artificial Intelligence. This technology...
              </p>
          </div>
          <div className="flex items-center justify-between px-4 pb-1 bg-gray-50">
              <div className="flex items-center ">
                  <img
                      className="w-8 h-8 rounded-full"
                      src="https://demo.creativeitem.com/academy/uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg"
                      alt="Author"
                  />
                  <span className="text-sm font-medium">Jhon Doe</span>
              </div>
              <span className="text-sm text-gray-500">Wed, 22 Dec 2021</span>
          </div>
      </div>
  );
};

export default LatestBlogsCard;
