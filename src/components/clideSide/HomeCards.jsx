import HomeCard from "./HomeCard";


const HomeCards = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 my-4">
                <div className="border-r-4 border-green-500 pr-4 w-full text-center md:text-start">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Explore our upcoming courses</h1>
                </div>
                <div>
                    <p className="text-gray-600 md:text-lg">
                        Discover a world of learning opportunities through our upcoming courses, where industry experts and thought leaders will guide you in acquiring new expertise, expanding your horizons, and reaching your full potential.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>

            </div>
        </>
    );
};

export default HomeCards;