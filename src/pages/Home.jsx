import React, { useEffect, useRef } from 'react';


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
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564211/2021-08-20-611fbf96910eb_t2ausk.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564198/2021-08-20-611fbfa397c7c_vszc40.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564189/2021-08-20-611fbf1b426e1_t0rlcw.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564178/2021-08-20-611fbebbc8db2_c0hwnj.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564146/2021-08-20-611fbf779aef1_yrfefp.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564126/2021-08-20-611fbfb0af526_ahpejy.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564110/2021-08-20-611fbfbc0e2ed_hbl7ln.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564089/2021-08-20-611fbfc6ac515_bbb3zw.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564211/2021-08-20-611fbf96910eb_t2ausk.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564089/2021-08-20-611fbfc6ac515_bbb3zw.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564178/2021-08-20-611fbebbc8db2_c0hwnj.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564110/2021-08-20-611fbfbc0e2ed_hbl7ln.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564110/2021-08-20-611fbfbc0e2ed_hbl7ln.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564189/2021-08-20-611fbf1b426e1_t0rlcw.png',
    'https://res.cloudinary.com/dzmhkzava/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1726564211/2021-08-20-611fbf96910eb_t2ausk.png',
  ];

  const juwonRef = useRef()

  const handleWheel = (e) => {
      e.preventDefault();
      juwonRef.current.scrollLeft += e.deltaY;
    };
  
    useEffect(() => {
      const addWheelListener = () => {
        if (window.innerWidth < 768) {
          // Add wheel event listener only for small screens (below 768px)
          juwonRef.current.addEventListener("wheel", handleWheel);
        }
      };
  
      // Call the function to add event listener based on screen size
      addWheelListener();
  
      // Clean up the event listener when component unmounts or on re-render
      return () => {
        if (juwonRef.current) {
          juwonRef.current.removeEventListener("wheel", handleWheel);
        }
      };
    }, []);

  return (
   <>
    <div className=''>
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
            <SwiperSlide><img src="https://res.cloudinary.com/dzmhkzava/image/upload/v1726734808/2023-10-19-6530be4bb5e8b_amzd6l.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dzmhkzava/image/upload/v1726734800/2023-10-19-6530be732925f_dwxdh6.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://res.cloudinary.com/dzmhkzava/image/upload/v1726734789/2023-10-19-6530be944f9b1_arydvk.jpg" alt="" /></SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>

        {/* Second Div */}
        <div className="w-1/4 h-[422px] bg-green-100 border-[3px] border-primaryColor rounded-3xl p-4 flex flex-col justify-between">
          {/* Top Section for Suggested Restaurants */}
          <p className="text-2xl font-bold text-center mb-2 font-primaryFont">Recommended Restaurants !</p>

          {/* White div holding 9 images in a 3x3 grid */}
          <div className="bg-white h-4/5 p-3 rounded-2xl">
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726564071/2021-08-20-611fc4cd9c598_fccqlb.png" alt="Restaurant 1" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726564056/2021-08-20-611fc6cd6b011_ku3a7q.png" alt="Restaurant 2" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726564030/2021-08-20-611fc7b17088c_fagsck.png" alt="Restaurant 3" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726580823/2021-08-21-612008a117429_voqmth.png" alt="Restaurant 4" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726563997/2021-08-20-611fcae713d25_sf9sph.png" alt="Restaurant 5" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726580910/2021-08-20-611fcae713d25_1_xpjn0g.png" alt="Restaurant 6" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726579850/2021-08-21-61200a8ff04a6_1_sus1ay.png" alt="Restaurant 7" className="w-full h-full object-cover rounded-md border-2 border-green-300" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726563863/2021-08-21-61200e081c2b7_dmfo8b.png" alt="Restaurant 8" className="w-full h-full object-cover rounded-md" />
              <img src="https://res.cloudinary.com/dzmhkzava/image/upload/c_thumb,w_200,g_face/v1726563905/2021-08-21-61200b96cd8f4_wwvjnn.png" alt="Restaurant 9" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* The second sestion */}
    <div className="container mx-auto px-12 py-20">
      <div ref={juwonRef} className="overflow-x-scroll juwon">
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
  <div ref={juwonRef} className="overflow-x-scroll juwon flex gap-4 pb-8">
    <div className="flex">
      
      {Array.from({ length: 30 }).map((_, index) => (
        <div key={index} className=" w-60 bg-white shadow rounded-lg overflow-hidden flex-shrink-0 flex flex-col items-center m-4">
          
          <img
            src="https://res.cloudinary.com/dzmhkzava/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1726735549/2021-08-21-6120c504a9cab_i4leo0.jpg"
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
