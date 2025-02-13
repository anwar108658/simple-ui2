import bg from "../assets/4.jpg";
import logo from "../assets/Logo - Dark Theme.png";

const About = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center py-10 bg-no-repeat bg-cover bg-fixed bg-center p-3"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2)),url(${bg})`,
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl text-[#15A9D6] md:text-4xl font-bold">
          About Us
        </h1>
        <p className="text-white mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis, erat in blandit lacinia, odio turpis scelerisque ligula,
          nec tempus justo turpis id justo. Nulla convallis, erat in blandit
          lacinia, odio turpis scelerisque ligula, nec tempus justo turpis id
          justo. ec tempus justo turpis id justo. Nulla convallis, erat in
          blandit lacinia, odio turpis scelerisque ligula, nec tempus justo
          turpis id justo. ec tempus justo turpis id justo. Nulla convallis,
          erat in blandit lacinia, odio turpis scelerisque ligula, nec tempus
          justo turpis id justo.
        </p>
        <div className="max-w-[600px] flex flex-row justify-center items-center mx-auto bg-transparent backdrop-blur-sm border-2 border-[#15A9D6] rounded-tl-[5rem] rounded-br-[5rem] p-10 md:flex-row mt-10">
          <div className="display grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <img
                className=" w-30  rounded-lg mt-[-15px]"
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg"
                alt="about"
              />
            </div>
            <div>
              <img
                className=" w-30 rounded-lg"
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                alt="about"
              />
            </div>
            <div>
              <img
                className=" w-30 rounded-lg mt-[-15px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCWDDPbRQF67Tl-zbh2Pq77k64L-AEs1NFw&s"
                alt="about"
              />
            </div>
            <div>
              <img
                className=" w-30 rounded-lg"
                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg"
                alt="about"
              />
            </div>
          </div>
          <div className="flex-1">
              <img src={logo} alt="logo" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
