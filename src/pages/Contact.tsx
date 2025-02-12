import {LocationOn, LockClock, Phone } from "@mui/icons-material";
import Particle from "../components/particel/Particale";

const Contact = () => {
  return (
    <div className="container  min-h-screen  mx-auto p-4 pt-20"> 
      <div className="flex relative max-w-[900px] mx-auto">
        <div className="absolute flex bg-white flex-col justify-center items-center gap-3  max-w-[230px] rounded-2xl shadow-2xl left-[-120px] top-[33px] z-11">
          <div className="flex flex-col items-center gap-2 p-4 w-full">
            <div className="flex items-center gap-2">
              <LocationOn sx={{color:"#15A9D6"}} fontSize="medium"/>
              <h3 className="text-[1.3rem] font-bold text-[#097588]">Location</h3>
            </div>
            <p className="text-gray-700 text-[.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugit?
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 w-full">
            <div className="flex items-center gap-2">
              <Phone sx={{color:"#15A9D6"}} fontSize="medium"/>
              <h3 className="text-[1.3rem] font-bold text-[#097588]">Phone</h3>
            </div>
            <p className="text-gray-700 text-[.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugit?
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 w-full">
            <div className="flex items-center gap-2">
              <LockClock sx={{color:"#15A9D6"}} fontSize="medium"/>
              <h3 className="text-[1.3rem] font-bold text-[#097588]">Hourse</h3>
            </div>
            <p className="text-gray-700 text-[.9rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, fugit?
            </p>
          </div>
        </div>
        <div className="relative  flex-1 z-10 max-w-[250px] bg-[100%] overflow-hidden rounded-tl-3xl bg-no-repeat rounded-bl-3xl shadow-lg p-4"
        style={{backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://i.pinimg.com/474x/5d/ac/e6/5dace6c69096336dc8f030a6cc35993e.jpg')"}}
        >
        <Particle />
        </div>
          <div className="border-1 border-teal-900 rounded-tr-3xl rounded-br-3xl flex-1 px-6 py-12 w-full ">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#097588] mb-4">
              Contact Us
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#097588]"
              />
              <input
                type="email"
                placeholder="XYZ@gmail.com"
                className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#097588]"
              />

              <textarea
                rows={5} 
                placeholder="Your Message"
                className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#097588]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#097588] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#08676f] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Contact;
