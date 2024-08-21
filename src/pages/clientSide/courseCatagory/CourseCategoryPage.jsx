import CourseCategoryCard from "./CourseCategoryCard.jsx";

const CourseCategoryPage = () => {
    return (
        <div className={ "pt-[55px] pb-[80px] px-2 font-bold text-[#0F172A] text-[40px]  " } >
           <div className={ "" } >
               <h1>Design Courses</h1>
               <h3 className={"text-[24px] text-[#0F172A] mt-[10px] " +
                   "leading-[35px] font-semibold " } >
                   All Development Courses
               </h3>
           </div>
            <div className={"flex items-center mt-2 justify-between "} >
                <button
                    className={"border border-[black] pt-[10px] px-[24px] text-[14px] text-[#0F172A] mt-[24px] " +
                        "outline-none bg-[white] " +
                        "py-[10px] rounded h-[48px] w-[112px] flex justify-between items-center" +
                        ""} >
                    <img className={""}
                         src={"https://res.cloudinary.com/dj2edy2rg/image/upload/v1724231986/Icon_bkufij.png"} />
                    Filter
                </button>
                <div className={"flex items-center justify-center "} >
                    <span className={"text-[16px] text-[#0F172A] mt-5 font-[400] mr-3 "} >Sort By</span>
                    <button
                        className={"border border-[black] pt-[10px] px-[24px] text-[14px] text-[#0F172A] mt-[24px] " +
                            "outline-none bg-[white] " +
                            "py-[10px] rounded h-[48px] w-[112px] flex justify-between items-center" +
                            ""}>
                        Relevance
                    </button>
                </div>
            </div>
            <div className={`flex items-center justify-between  `} >
                <div className={" w-[30%] "} >

                </div>
                <div className={`w-[70%]`} >
                    <div className={"grid lg:grid-cols-3 md:grid-cols-1 "}>
                        <CourseCategoryCard></CourseCategoryCard>
                        <CourseCategoryCard></CourseCategoryCard>
                        <CourseCategoryCard></CourseCategoryCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCategoryPage;