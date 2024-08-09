import htmlimg from "../../assets/image/html.jpg"
const TopCategori = () => {
    return (
        <div>
         
        <div className="max-w-xs p-8 bg-white rounded-lg shadow-md overflow-hidden">
         <div className="flex px-4 ">
         <img  src={htmlimg} className="mb-2 w-12" />
         <div className="ml-4">
         <h3 className="text-primary font-semibold">HTML & CSS</h3>
         <span className="text-muted-foreground">3 Courses</span>
         </div>
         </div>
        </div>
    

        </div>
    );
};

export default TopCategori;