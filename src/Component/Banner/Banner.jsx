

const Banner = () => {
  return (
    <div>
      <div className="carousel max-h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/view-car-running-high-speed_23-2150635443.jpg?t=st=1697628644~exp=1697632244~hmac=5aaaad1704cd1b0a45f7d9b327658a6995442f7fbb99c57edabf9c619b3bc069&w=900"
            className="w-full h-[70%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[35%]">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/943/325/116/car-bmw-m3-bmw-race-cars-wallpaper-preview.jpg"
            className="w-full h-[70%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[35%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/943/325/116/car-bmw-m3-bmw-race-cars-wallpaper-preview.jpg"
            className="w-full h-[70%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[35%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/943/325/116/car-bmw-m3-bmw-race-cars-wallpaper-preview.jpg"
            className="w-full h-[70%]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[35%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
