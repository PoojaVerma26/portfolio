import Image1 from "../../assets/Photos/1.png";
import Image2 from "../../assets/Photos/2.png";
import Image3 from "../../assets/Photos/3.png";
import Image4 from "../../assets/Photos/4.png";
import Image5 from "../../assets/Photos/5.png";
import Image6 from "../../assets/Photos/6.png";
import Image7 from "../../assets/Photos/7.png";
import Image8 from "../../assets/Photos/8.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Gallery = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex gap-5">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] sm:w-full md:w-full lg:w-full"
            >
              <div className="h-[180px] sm:h-[220px] md:h-[250px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
