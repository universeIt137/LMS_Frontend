import TeacherCards from "../../../components/adminside/TeacherCards";
import UserNav from "../../../components/adminside/UserNav";

const Teachers = () => {
 return (
 <div>
   <UserNav user={"New Teacher"} link={"create-teacher"}></UserNav>
   <TeacherCards></TeacherCards>
 </div>
 );
};

export default Teachers;