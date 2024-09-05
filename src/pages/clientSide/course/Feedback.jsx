import React from 'react'

const Feedback = () => {
  return (
    <div>
        <div className='max-w-[10%] text-center mx-auto ' >
            <p className=' bg-[#d1fadf] text-xl text-[#12b76a] py-1 font-bold px-2 rounded-2xl  ' >ফিডব্যাক</p>
        </div>
        <div>
            <h1 className='text-center md:text-2xl lg:text-3xl font-bold my-5 ' >আমাদের 
                <span className='text-[#ffb113] '  > লার্নারদের</span> কাছে শুনুন
            </h1>
        </div>
        <div className='grid md:grid-cols-2 gap-14 my-10 ' >
            {/* first Feedback */}
            {/* <div data-aos="fade-right" className='shadow p-8 rounded-2xl ' >
                <div>
                    <p>
                    ওস্তাদ-এর MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই MERN এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ
                    </p>
                </div>
                <div className='border border-1 border-gray-400 my-2 ' >

                </div>
                <div>
                    <p>
                        Faisal Azam Siddiqui 
                    </p>
                </div>
            </div> */}
            {/* 2 nd feedback */}
            <div className='shadow p-8 rounded-2xl ' >
                <div>
                    <p>
                    ওস্তাদ-এর MERN কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই MERN এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ
                    </p>
                </div>
                <div className='border border-1 border-gray-400 my-2 ' >

                </div>
                <div>
                    <p>
                        Faisal Azam Siddiqui 
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Feedback
