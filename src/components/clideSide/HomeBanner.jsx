import { Autoplay } from 'swiper/modules';
import banner1 from '../../assets/bannerImg/banner1.png'
import banner2 from '../../assets/bannerImg/banner2.png'
import banner3 from '../../assets/bannerImg/banner3.png'
import banner4 from '../../assets/bannerImg/banner4.png'
import { Swiper, SwiperSlide } from "swiper/react";
const HomeBanner = () => {
  const data = [
    {
      title: 'Unlock Your Potential with Byway',
      description: `Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.`,
      image: banner1,
    },
    {
      title: 'Your Pathway to Success Starts Here',
      description: `At Byway, we provide the support and resources you need to succeed in your educational journey. Our platform is built to empower you every step of the way, whether you're starting a new career or advancing in your current one.`,
      image: banner4,
    },
    {
      title: 'Join the Byway Revolution',
      description: `Experience a revolutionary way of learning with Byway. Our innovative platform offers a dynamic learning environment that caters to your unique needs and aspirations. Transform the way you learn, grow, and succeed with us.`,
      image: banner2,
    },
    {
      title: 'Master New Skills with Byway',
      description: `Byway is your go-to platform for mastering new skills. From professional development to personal enrichment, our courses are designed to give you the tools you need to succeed in any field.`,
      image: banner3,
    },

  ];
  return (

    <Swiper
      loop={true}
      modules={[Autoplay]}

      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
    >
      {
        data?.map((item, idx) => <SwiperSlide
          key={idx}
        >
          <div className='grid lg:grid-cols-2 pt-5'>
            <div className='min-h-[60vh] relative'>
              {/* <img src={item.image} className='absolute w-full h-full object-cover block lg:hidden' alt="" /> */}
              <div className='p-5 space-y-5 flex flex-col justify-center relative bg-white/85 h-full'>
                <h1 className='text-[40px] font-bold max-w-[500px]'>{item.title}</h1>
                <p className='max-w-[600px] text-gray-600'>{item.description}</p>
                <button className='btn bg-primary text-white  rounded-lg max-w-max'>Start your instructor journey</button>
              </div>


            </div>
            <img className='hidden lg:block' src={item.image} alt="" />
          </div>
        </SwiperSlide>)
      }


    </Swiper>
  );
};

export default HomeBanner;
