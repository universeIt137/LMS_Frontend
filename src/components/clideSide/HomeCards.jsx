import HomeCard from "./HomeCard";


const HomeCards = () => {
    return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            
        </div>
    );
};

export default HomeCards;