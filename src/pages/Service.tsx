import { DataArray, MobileFriendly, Web } from "@mui/icons-material"
import logo from "../assets/Logo - Dark Theme.png"
const Service = () => {
  return (
    <div className="container mx-auto flex flex-col gap-9">
        <h1 className="text-[#097588] text-3xl font-bold text-center">Our Service</h1>
        <div className="w-full min-h-[90vh] flex flex-col">
          <div className="w-full mx-auto flex justify-center rounded-2xl flex-1 bg-[100%] bg-no-repeat max-w-[1000px]" style={{backgroundImage:"linear-gradient(to bottom right, rgba(9, 117, 136, 0.8), rgba(2, 17, 17, 0.4)),url('https://png.pngtree.com/thumb_back/fh260/background/20211217/pngtree-green-technology-background-vector-material-image_922624.jpg')"}}>
            <img className="w-50 h-40 my-10" src={logo} alt="" />
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-6 items-center">
            <div className="relative flex max-w-[250px] lg:mt-[-100px] flex-col gap-5 items-center shadow-2xl bg-white rounded-2xl shadow-gray-400 p-5">
              <div className="absolute top-[-27px] bg-[#15A9D6] text-gray-50 rounded-md px-3 py-2">
                <Web fontSize="large"/>
              </div>
              <h3 className="text-[1.1rem] font-bold mt-7">Web Development</h3>
              <p className="text-gray-600 text-[.9rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas possimus molestias expedita dignissimos mollitia enim, sequi culpa quos dolorem ducimus!
              </p>
              <h3 className="text-[1.1rem] font-bold">More</h3>
            </div>
            <div className="relative flex max-w-[250px] lg:mt-[-100px] flex-col gap-5 items-center shadow-2xl bg-white rounded-2xl shadow-gray-400 p-5">
              <div className="absolute top-[-27px] bg-[#15A9D6] text-gray-50 rounded-md px-3 py-2">
                <MobileFriendly fontSize="large"/>
              </div>
              <h3 className="text-[1.1rem] font-bold mt-7">App Development</h3>
              <p className="text-gray-600 text-[.9rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas possimus molestias expedita dignissimos mollitia enim, sequi culpa quos dolorem ducimus!
              </p>
              <h3 className="text-[1.1rem] font-bold">More</h3>
            </div>
            <div className="relative flex max-w-[250px] lg:mt-[-100px] flex-col gap-5 items-center shadow-2xl bg-white rounded-2xl shadow-gray-400 p-5">
              <div className="absolute top-[-27px] bg-[#15A9D6] text-gray-50 rounded-md px-3 py-2">
                <DataArray fontSize="large"/>
              </div>
              <h3 className="text-[1.1rem] font-bold mt-7">Data Science</h3>
              <p className="text-gray-600 text-[.9rem]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas possimus molestias expedita dignissimos mollitia enim, sequi culpa quos dolorem ducimus!
              </p>
              <h3 className="text-[1.1rem] font-bold">More</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Service