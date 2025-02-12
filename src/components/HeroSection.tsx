import Image from "../assets/Modern-computer-on-transparent-background-PNG-removebg-preview.png";
const HeroSection = () => {
    return (
      <div className="container mx-auto w-full md:h-[90vh] flex justify-between flex-col md:flex-row-reverse items-center p-3">
        <div className="flex-1 flex justify-center items-center">
            <img className="w-1/1.5" src={Image} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start gap-1 md:gap-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#097588]">Modern Computer</h1>
            <p className="text-[#097588] text-[1.1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
            <h1 className="text-3xl md:text-4xl font-bold text-[#15a9d6]"> BIZ VERTEX <span className="text-[#097588] text-[1rem]">solution</span></h1>
            <button className="bg-[#097588] text-white px-4 py-2 rounded mt-5">Learn More</button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  