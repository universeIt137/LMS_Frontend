import TopCategoriesCard from "./TopCategoriesCard";

const TopCategoriesCards = () => {
  return (
    <div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 md:gap-2 w-full justify-between  ">
        <TopCategoriesCard img={'https://res.cloudinary.com/dscp0w1oh/image/upload/v1724135292/LMS/m3dog8o7opv1xyymsugk.png'} titleText={'Astrology'} subText={'11 Courses'}></TopCategoriesCard>
        <TopCategoriesCard img={'https://res.cloudinary.com/dscp0w1oh/image/upload/v1724137974/LMS/acyx5v4a3eeoxgr8flqz.png'} titleText={'Development'} subText={'12 Courses'}></TopCategoriesCard>
        <TopCategoriesCard img={'https://res.cloudinary.com/dscp0w1oh/image/upload/v1724138259/LMS/hykdyu5glwnych9vvrnm.png'} titleText={'Marketing'} subText={'12 Courses'}></TopCategoriesCard>
        <TopCategoriesCard img={'https://res.cloudinary.com/dscp0w1oh/image/upload/v1724138101/LMS/eo5jvuh1ob4ardykamel.png'} titleText={'Physics'} subText={'14 Courses'}></TopCategoriesCard>

      </div>
    </div>
  );
};

export default TopCategoriesCards;