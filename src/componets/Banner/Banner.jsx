import React from "react";
import BannerImage from "../../assets/BannerImage.jpg";

function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} className="h-full w-full" />

      <div className="absolute top-20 left-0 right-0  mx-auto w-[20 rem] text-center">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-5xl text-white">
            Crypto Tracker
          </div>
          <div className="font-semibold text-sm text-white text-center">
            Get all info regarding crpytocurrencies
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
// C:\Users\dell\Desktop\CoinGeckoCryptoTracker\src\assets\BannerImage.jpg
