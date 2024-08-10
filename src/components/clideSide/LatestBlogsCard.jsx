const LatestBlogsCard = () => {
 return (
 <div>
<div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-actions justify-start m-2">
      <button className="btn bg-[#FDE6EC]">Education</button>
    </div>
  <div className="card-body ">
    <h2 className="card-title">Education</h2>
    <p className=" border-b-2">The corporate world is slowly stepping into the dimension of Artificial Intelligence. This technolog...</p>
    
  </div >
  <div className="flex justify-between p-2 "> 
    <div className="flex gap-2 ">
      <div><img className="w-6 h-6 rounded-full"  src="https://demo.creativeitem.com/academy/uploads/user_image/optimized/95f8ffe52fcc64ac943a9bfa83c00d39.jpg" alt="" /></div>
      <div>Jhon Doe</div>
    </div>
    <div>
      <p>Wed, 22 Dec 2021</p>
    </div>
  </div>
</div>
 </div>
 );
};

export default LatestBlogsCard;