import { CiStar } from "react-icons/ci";

const CourseCategoryCard = () => {
    return (
        <div className={"mt-10"}>
            <div className="card  w-[268px]  border-2 border-s-amber-100 shadow-2xl hover:outline-none ">
                <figure>
                    <img className={"p-4 w-full contrast-100 "}
                         src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1724234479/Rectangle_1080_jnuzwi.png"
                         alt="Shoes"/>

                </figure>
                <div className="card-body -ml-4  ">
                    <h2 className="card-title  ">
                        <h5 className={"text-[14px] text-[#334155] font-semibold "}>Beginner’s Guide to Design</h5>
                    </h2>
                    <p className={"text-[14px] text-[#334155] font-[400] "}>By Ronald Richards</p>
                    <div className="flex justify-center items-center text-[16px] -ml-14 ">
                        <i className={"text-amber-400 "} > <CiStar></CiStar> </i>
                        <i className={"text-amber-400 "} > <CiStar></CiStar> </i>
                        <i className={"text-amber-400 "} > <CiStar></CiStar> </i>
                        <i className={"text-amber-400 "} > <CiStar></CiStar> </i>
                        <i className={"text-amber-400 "} > <CiStar></CiStar> </i>
                        <span className={"text-[12px]"}>(1200 Ratings)</span>
                    </div>
                    <p className={"text-[12px] font-[400] "}>22 Total Hours. 155 Lectures. Beginner</p>
                    <h4 className={"text-[20px] font-semibold text-[#0F172A] "} >$149.9</h4>
                </div>
            </div>


        </div>
    );
};

export default CourseCategoryCard;