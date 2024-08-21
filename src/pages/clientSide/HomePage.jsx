
import AskQuestion from "../../components/clideSide/AskQuestion";
import ExpertInstructor from "../../components/clideSide/ExpertInstructor";
import TopTenCourse from "../../components/clideSide/TopTenCourse";
import TopCategories from './../../components/clideSide/TopCategories';
import ThinkMoreClearly from "../../components/clideSide/ThinkMoreClearly";
import LatestBlogs from "../../components/clideSide/LatestBlogs";
import JoinNow from "../../components/clideSide/JoinNow";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/clideSide/HomeBanner";
import ClientUserCount from "../../components/clideSide/ClientUserCount";
import SectionHead from "../../components/clideSide/SectionHead";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title> Academy LMS | HomePage</title>
      </Helmet>

      <HomeBanner></HomeBanner>
      <ClientUserCount ></ClientUserCount>

      <div>
        <SectionHead title={`Top Categories`}></SectionHead>
        <TopCategories></TopCategories>
      </div>

      <div className="my-15">
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