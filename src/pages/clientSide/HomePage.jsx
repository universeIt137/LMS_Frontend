import HomeImg from "../../assets/image/home-1.png"; // Ensure this path 
import circleImg from "../../assets/image/circle2.png"; // Ensure this 
import HomeCards from "../../components/clideSide/HomeCards";
import AskQuestion from "../../components/clideSide/AskQuestion";
import ExpertInstructor from "../../components/clideSide/ExpertInstructor";
import TopTenCourse from "../../components/clideSide/TopTenCourse";
import TopCategories from './../../components/clideSide/TopCategories';
import ThinkMoreClearly from "../../components/clideSide/ThinkMoreClearly";
import LatestBlogs from "../../components/clideSide/LatestBlogs";
import JoinNow from "../../components/clideSide/JoinNow";
import SectionTittle from "../../components/clideSide/SectionTittle";
import { Helmet } from "react-helmet-async";
import HeroSectionCard from "../../components/clideSide/HeroSectionCard";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title> Academy LMS | HomePage</title>
      </Helmet>

      <div className="h-[80vh] w-full bg-center z-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${HomeImg})`, backgroundSize: '85%' }}>
        <div className="flex flex-col h-full justify-between p-4">
          <div className="flex justify-between">
            <div className=" w-1/3 p-4">
              <h1 className="text-3xl font-bold mb-4">Start learning from best platform</h1>
              <p>Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>

            </div>
            <div className=" w-1/3 p-4">
              <img className="w-16 animate-spin-slow" src={circleImg} alt="" />
            </div>
          </div>
        </div>
      </div>

    <HeroSectionCard></HeroSectionCard>

      <div className="flex items-center text-center justify-between mt-8  p-4">
        <h1 className="text-2xl font-bold">Explore our upcoming courses </h1>
        <p className="ml-4 max-w-lg">Discover a world of learning opportunities through our upcoming courses, where industry experts and thought leaders will guide you in acquiring new expertise, expanding your horizons, and reaching your full potential.</p>
      </div>

      <div className="">
        <HomeCards></HomeCards>
      </div>

      <div className="mt-24">
        <SectionTittle title={`Top categories`} subtitle={`These are the most popular courses among listen courses learners worldwide`}></SectionTittle>
      </div>

      <div className="p-8">
        <TopCategories></TopCategories>
      </div>

      <div className="my-24">
        <TopTenCourse></TopTenCourse>
      </div>

      <div className="my-24">
        <ExpertInstructor></ExpertInstructor>
      </div>

      <div className="my-24">
        <AskQuestion></AskQuestion>
      </div>

      <div className="my-24">
        <ThinkMoreClearly></ThinkMoreClearly>
      </div>

      <div className="my-24">
        <LatestBlogs></LatestBlogs>
      </div>

      <div className="my-24">
        <JoinNow></JoinNow>
      </div>

    </div>
  );
};

export default HomePage;
