import StudentTable from "../../../components/adminside/StudentTable";
import UserNav from "../../../components/adminside/UserNav";

const Students = () => {
 return (
 <div className="w-full bg-[#C1BBEB] ">
<UserNav user={'New Student'} link={"create-student"}></UserNav>
<StudentTable></StudentTable>

 </div>
 );
};

export default Students;