import bundleThumbnail from "../../assets/image/course_thumbnail.jpg";

const CompleateBundleCard = () => {
    return (
        <div className="card shadow-[0_4px_6px_rgba(255,255,255,0.5)] bg-gray-100 h-96 p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between text-black mb-4">
                <h1 className="text-xl font-bold">Complete Solution</h1>
                <div className="flex md:flex-row flex-col md:items-center md:ml-4 mt-2 md:mt-0">
                    <h1 className="text-xl font-bold">Course 4</h1>
                    <p className="ml-0 md:ml-4 text-xl font-bold">$74</p>
                </div>
            </div>

            <div className="h-64 overflow-y-scroll">
                <div className="max-w-full p-4 bg-white rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.5)] mb-4">
                    <div className="flex px-4">
                        <img src={bundleThumbnail} className="mb-2 w-16" alt="Course Thumbnail" />
                        <div className="ml-4">
                            <h3 className="text-primary font-semibold">Adobe Illustrator CC - Essential Training Course</h3>
                        </div>
                    </div>
                </div>

                <div className="max-w-full p-4 bg-white rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.5)] mb-4">
                    <div className="flex px-4">
                        <img src={bundleThumbnail} className="mb-2 w-16" alt="Course Thumbnail" />
                        <div className="ml-4">
                            <h3 className="text-primary font-semibold">Adobe Illustrator CC - Essential Training Course</h3>
                        </div>
                    </div>
                </div>

                <div className="max-w-full p-4 bg-white rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.5)] mb-4">
                    <div className="flex px-4">
                        <img src={bundleThumbnail} className="mb-2 w-16" alt="Course Thumbnail" />
                        <div className="ml-4">
                            <h3 className="text-primary font-semibold">Adobe Illustrator CC - Essential Training Course</h3>
                        </div>
                    </div>
                </div>

                <div className="max-w-full p-4 bg-white rounded-lg shadow-[0_4px_6px_rgba(255,255,255,0.5)] mb-4">
                    <div className="flex px-4">
                        <img src={bundleThumbnail} className="mb-2 w-16" alt="Course Thumbnail" />
                        <div className="ml-4">
                            <h3 className="text-primary font-semibold">Adobe Illustrator CC - Essential Training Course</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button className="btn bg-[#754FFE] w-1/2 mr-2">Bundle Details</button>
                <button className="btn bg-[#754FFE] w-1/2 ml-2">$70 buy now</button>
            </div>
        </div>
    );
};

export default CompleateBundleCard;
