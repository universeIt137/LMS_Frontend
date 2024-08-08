import UserNav from "../../../components/adminside/UserNav";

const Students = () => {
 return (
 <div className="w-full bg-[#C1BBEB] h-full">
<UserNav user={'New Student'} link={"create-student"}></UserNav>
 </div>
 );
};

export default Students;