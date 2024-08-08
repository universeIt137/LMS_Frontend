import HomeImg from "../../assets/image/home-1.png"; // Ensure this path is correct

const HomePage = () => {
    return (
        <div className="h-[80vh] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${HomeImg})`, backgroundSize: '50%' }}>
            <div className="flex flex-col h-full justify-between bg-black bg-opacity-50 p-4">
                <div className="flex justify-between">
                    <div className="text-white w-1/3 p-4">
                        <h1 className="text-3xl font-bold mb-4">Start learning from best platform</h1>
                        <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
                       
                    </div>
                    <div className="text-white w-1/3 p-4">
                        <h1 className="text-3xl font-bold mb-4">Right Side Heading</h1>
                        <p className="text-lg">Some text on the right side of the image.</p>
                    </div>
                </div>
                <div className="text-center text-white p-4">
                    <p className="text-lg">Some text in the footer of the image.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
