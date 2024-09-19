import React, { useRef } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const images = [
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
    'https://placehold.co/150x150',
  ];

  return (
   <>
    <div className='space-y-10'>
    <div className="container mx-auto px-12 pt-10 pb-40"> {/* Padding for the container */}
      <div className="flex h-64 gap-4"> {/* Added gap between the two divs */}
        {/* First Div (Swiper.js) */}
        <div className="w-3/4 h-[400px] rounded-lg overflow-hidden"> {/* Rounded corners added */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="swiper h-full"
          >
            <SwiperSlide><img src="https://placehold.co/1100x400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://placehold.co/1100x400" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://placehold.co/1100x400" alt="" /></SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>

        {/* Second Div */}
        <div className="w-1/4 h-[400px] bg-green-100 border-[3px] border-primaryColor rounded-3xl p-4 flex flex-col justify-between">
          {/* Top Section for Suggested Restaurants */}
          <p className="text-2xl font-bold text-center mb-2 font-primaryFont">Recommended Restaurants !</p>

          {/* White div holding 9 images in a 3x3 grid */}
          <div className="bg-white h-4/5 p-3 rounded-2xl">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <img src="https://placehold.co/100x90" alt="Restaurant 1" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 2" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 3" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 4" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 5" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 6" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 7" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 8" className="w-full h-full object-cover rounded-md" />
              <img src="https://placehold.co/100x90" alt="Restaurant 9" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* The second sestion */}
    <div className="container mx-auto px-12 py-10">
      <div className="overflow-x-scroll">
        <div className="flex space-x-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>

    <div className="special-offers-section bg-gray-200 p-6">
 {/* special offers */}
  <div className="flex justify-between mb-4">
    <p className="font-primaryFont text-2xl">Special Offers</p>
    <Link href="/products" className="text-blue-500">See All</Link>
  </div>

  {/* Scrollable cards section */}
  <div className="overflow-x-scroll flex gap-4 ">
    <div className="flex">
      
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className=" w-60 bg-white shadow rounded-lg overflow-hidden flex-shrink-0 flex flex-col items-center m-4">
          
          <img
            src="https://placehold.co/200x180/png"
            alt={`Food ${index + 1}`}
            className="w-full h-48 object-cover"
          />
          
          <div className=" flex flex-col items-center m-4 ">
            <h3 className="font-semibold">Food Name {index + 1}</h3>
            <p className="text-gray-500 mt-2">$Price</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* highlights for you */}
<div className="highlights-section bg-[url(https://res.cloudinary.com/dzmhkzava/image/upload/v1726517725/yellowbg2_nuazdv.avif)] p-6">
  {/* Heading and Subheading */}
  <div className="mb-4">
    <h2 className="text-xl font-bold flex items-center">
      Highlights for you
      <span className="ml-2 text-yellow-500">⭐</span>
    </h2>
    <p className="text-gray-600">See our most popular stores and items</p>
  </div>

  
  <div className="w-full flex space-x-4">
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      
      {Array.from({ length: 4 }).map((_, index) => (
        <SwiperSlide>
          <div className="card bg-white shadow rounded-xl overflow-hidden flex flex-col items-center p-4 ">
            {/* Placeholder Image 250x200 */}
            <img
              src="https://via.placeholder.com/250x200"
              alt={`Item ${index + 1}`}
              className=" h-48 object-cover mb-4"
            />
            {/* Details (Title and Description) */}
            <div className="details flex flex-col items-center">
              <h3 className="font-semibold">Title {index + 1}</h3>
              <p className="text-gray-500 mt-2">This is a description for item {index + 1}.</p>
            </div>
          </div>
          </SwiperSlide>
      ))}
   </Swiper>
  </div>
</div>

    </div>
   </>
  );
}
