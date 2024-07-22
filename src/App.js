import ReactPlayer from "react-player";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

function App() {
  return (
    <>
      <div className="flex justify-between px-[33px] py-[42px] ">
        <h1 className="font-extrabold text-[24px] ">Aiken</h1>
        <a
          href="https://linktr.ee/aikenbook.id"
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-1 py-[12px] px-[20px] rounded-full bg-gradient-to-r from-[#565FD5] to-[#232757] shadow-md shadow-gray-400"
        >
          <i className="bx bx-chevron-right text-white text-[16px] "></i>
          <h1 className="font-medium text-[16px] text-white ">Get in touch</h1>
        </a>
      </div>
      <div className="flex 2xl:flex-row flex-col justify-between 2xl:mt-[127px] sm:mt-[50px] mt-[0px] 2xl:px-0 xl:px-[300px] lg:px-[100px] md:px-[50px] px-[25px] ">
        <img
          className="h-[282px] w-auto 2xl:block hidden "
          src="/image/elipse.png"
          alt=""
        />
        <div className="mt-[50px]">
          <h1 className="sm:text-[96px] text-[36px] font-extrabold sm:max-w-[962px] max-w-[1062px] sm:leading-[90px] leading-[45px] ">
            Aiken: Integrasi Buku Jurnal Ekspresif dan AI Apps
          </h1>
          <p className="text-[20px] font-medium max-w-[760px] mt-4">
            sebagai Media Terapi Interaktif untuk Meningkatkan Kesehatan Mental
            Remaja
          </p>
          <div className="flex sm:flex-row flex-col  gap-8 mt-6">
            <a
              target="_blank"
              href="https://shopee.co.id/shop/1252488041"
              rel="noreferrer"
              className="flex items-center gap-4 py-[23px] px-[20px] rounded-full bg-white shadow-md shadow-gray-400"
            >
              <i className="bx bx-store-alt text-black text-[24px]"></i>
              <div className="text-left">
                <h1 className="font-bold text-[18px] text-black">
                  Shopee Marketplace
                </h1>
                <p className="sm:block hidden font-medium text-gray-500 text-[16px]">
                  available in market
                </p>
              </div>
              <i className="bx bx-chevron-right text-black text-[24px]"></i>
            </a>
            <a
              target="_blank"
              href="https://www.tokopedia.com/aikenbook"
              rel="noreferrer"
              className="flex items-center gap-4 py-[23px] px-[20px] rounded-full bg-white shadow-md shadow-gray-400"
            >
              <i className="bx bx-store-alt text-black text-[24px]"></i>
              <div className="text-left">
                <h1 className="font-bold text-[18px] text-black">
                  Tokopedia Marketplace
                </h1>
                <p className="sm:block hidden font-medium text-gray-500 text-[16px]">
                  available in market
                </p>
              </div>
              <i className="bx bx-chevron-right text-black text-[24px]"></i>
            </a>
          </div>
        </div>
        <img
          className="h-[792px] w-auto 2xl:block hidden "
          src="/image/aiken.png"
          alt=""
        />
      </div>
      <div className="mt-[54px] sm:px-[0px] px-[25px] flex justify-center w-full">
        <div>
          <h1 className="text-center font-extrabold sm:text-[64px] text-[36px] max-w-[565px] sm:leading-[60px] leading-[45px] ">
            Like an Aiken, aiken apps feature
          </h1>
          <p className="sm:text-[20px] text-[18px] text-gray-500 text-center max-w-[553px] font-semibold mt-5">
            We shape our core capabilities around learning, creating a team
            capable of delivering value and promoting mental well-being to the
            world.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex xl:flex-row flex-col  gap-8 justify-center mt-3">
          <img
            className="w-[335px] h-auto"
            src="/image/counseling.png"
            alt=""
          />
          <img className="w-[335px] h-auto" src="/image/diary.png" alt="" />
          <img className="w-[335px] h-auto" src="/image/journal.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex xl:flex-row flex-col  gap-8 justify-center">
          <img className="w-[335px] h-auto" src="/image/mood.png" alt="" />
          <img className="w-[335px] h-auto" src="/image/reading.png" alt="" />
          <img className="w-[335px] h-auto" src="/image/scan.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex 2xl:flex-row flex-col sm:px-[0px] px-[25px] justify-center items-center sm:mt-[220px] mt-[60px] gap-10">
          <div>
            <h1 className="font-extrabold sm:text-[64px] text-[34px] 2xl:max-w-[565px] max-w-fit sm:leading-[60px] leading-[45px]">
              Video Youtube Aiken Project
            </h1>
            <a
              href="https://www.youtube.com/watch?v=mEwfEG-ShXY"
              rel="noreferrer"
              target="_blank"
              className="mt-[150px] 2xl:flex hidden items-center w-[200px] gap-1 py-[12px] px-[32px] rounded-full bg-gradient-to-r from-[#DD2E2B] to-[#671614] shadow-md shadow-gray-400"
            >
              <i className="bx bx-chevron-right text-white text-[24px]"></i>
              <h1 className="font-medium text-[18px] text-white">Youtube</h1>
            </a>
          </div>
          <div className="2xl:block hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mEwfEG-ShXY"
              controls
              width="1000px"
              height="400px"
            />
          </div>
          <a
            href="https://www.youtube.com/watch?v=mEwfEG-ShXY"
            rel="noreferrer"
            target="_blank"
            className="2xl:mt-[150px] mt-[40px] 2xl:hidden flex items-center w-[200px] gap-1 py-[12px] px-[32px] rounded-full bg-gradient-to-r from-[#DD2E2B] to-[#671614] shadow-md shadow-gray-400"
          >
            <i className="bx bx-chevron-right text-white text-[24px]"></i>
            <h1 className="font-medium text-[18px] text-white">Youtube</h1>
          </a>
        </div>
      </div>
      <div className="sm:mt-[220px] mt-[60px] ">
        <h1 className="font-extrabold sm:text-[64px] text-[34px] text-center sm:leading-[60px] leading-[45px]">
          Our Consument
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="swiper w-full max-w-2xl"
        >
          <SwiperSlide className="swiper-slide flex justify-center">
            <img src="/image/edho.png" className="w-full h-auto" alt="Edho" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center">
            <img src="/image/galih.png" className="w-full h-auto" alt="Galih" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex justify-center">
            <img src="/image/ica.png" className="w-full h-auto" alt="Ica" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sm:mt-[220px] mt-[60px] ">
        <h1 className="font-extrabold sm:text-[64px] text-[34px] text-center sm:leading-[60px] leading-[45px]">
          Find Us In
        </h1>
        <div className="flex justify-center my-9 gap-5 ">
          <a
            target="_blank"
            href="https://www.tokopedia.com/aikenbook"
            rel="noreferrer"
          >
            <img
              alt=""
              src="/image/tokopedia.png"
              className="w-[70px] h-auto "
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@aiken.book?_t=8neBG1Uxi80&_r=1"
            rel="noreferrer"
          >
            <img alt="" src="/image/tiktok.png" className="w-[70px] h-auto " />
          </a>
          <a
            target="_blank"
            href="https://shopee.co.id/shop/1252488041"
            rel="noreferrer"
          >
            <img alt="" src="/image/shopee.png" className="w-[70px] h-auto " />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
