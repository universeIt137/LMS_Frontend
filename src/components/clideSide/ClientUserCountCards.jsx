import ClientUserCountCard from "./ClientUserCountCard";

const ClientUserCountCards = () => {
 return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3">
 <ClientUserCountCard user={'250+'} text={'Courses by our best mentors'}></ClientUserCountCard>
 <ClientUserCountCard user={'1000+'} text={'Courses by our best mentors'}></ClientUserCountCard>
 <ClientUserCountCard user={'15+'} text={'Courses by our best mentors'}></ClientUserCountCard>
 <ClientUserCountCard user={'2400+'} text={'Courses by our best mentors'}></ClientUserCountCard>
 </div>
 );
};

export default ClientUserCountCards;