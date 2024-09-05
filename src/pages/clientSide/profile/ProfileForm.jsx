import { useState } from "react";

const ProfileForm = () => {
  const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/dscp0w1oh/image/upload/v1724777227/ogclbgsqh76c8iln2fyi.png");
  const [newImage, setNewImage] = useState("");


  const handleUploadImage = () => {
    if (newImage) {
      setImageUrl(newImage);
    }
  };


  const handleSaveImage = () => {

    alert("Image saved successfully!");
  };
  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[14px]  ">First Name</span>
          </label>
          <input type="text" placeholder="Enter Your First name" className="input w-full input-bordered hover:outline-none" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[14px]  ">Last Name</span>
          </label>
          <input type="text" placeholder="Enter Your Last name" className="input w-full input-bordered hover:outline-none" required />
        </div>

      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Headline</span>
        </label>
        <input type="text" placeholder="Enter Your Headline" className="input w-full input-bordered hover:outline-none" required />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Description</span>
        </label>
        <input type="text" placeholder="Enter Your Description" className="input h-32 w-full input-bordered hover:outline-none" required />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]">Language</span>
        </label>
        <select className="select select-bordered w-full hover:outline-none" required>
          <option value="" disabled selected>Select Your Language</option>
          <option value="bengali">Bengali</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-[18px] font-bold">Image Preview</span>
          </label>
          <div>
            <img src={imageUrl} alt="Preview" className="w-full h-auto max-w-xs object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-[14px]">Add/Change Image</span>
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter Add/Change Image URL"
                className="input w-full input-bordered hover:outline-none"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)} // Update the input state
                required
              />
              <button className="btn btn-outline w-[140px]" onClick={handleUploadImage}>
                Upload Image
              </button>
            </div>
            <div>
              <button className="btn btn-outline w-[140px] my-3 bg-[#0F172A] text-white" onClick={handleSaveImage}>
                Save Image
              </button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-[18px] font-bold">Link</h1>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Website</span>
        </label>
        <input type="text" placeholder="Enter Your Website" className="input w-full input-bordered hover:outline-none" required />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">X(Formerly twitter)</span>
        </label>
        <input type="text" placeholder="Enter Your X(Formerly twitter)" className="input w-full input-bordered hover:outline-none" required />
      </div>

      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Linkdin</span>
        </label>
        <input type="text" placeholder="Enter Your Linkdin" className="input w-full input-bordered hover:outline-none" required />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Youtube</span>
        </label>
        <input type="text" placeholder="Enter Your Youtube" className="input w-full input-bordered hover:outline-none" required />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-[14px]  ">Facebook</span>
        </label>
        <input type="text" placeholder="Enter Your Facebook" className="input w-full input-bordered hover:outline-none" required />
      </div>

    </div>
  );
};

export default ProfileForm;