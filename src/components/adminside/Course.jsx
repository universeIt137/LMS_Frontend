import CourseCard from "./CourseCard";

const Course = () => {
 return (
 <div className="my-14">
 <h2 className="text-[20px] font-bold ">Courses</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3">
 <CourseCard></CourseCard>
 <CourseCard></CourseCard>
 <CourseCard></CourseCard>
 </div>
 </div>
 );
};

export default Course;