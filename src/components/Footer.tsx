import { Facebook, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-gray-800 py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#08676F]">Biz-Vertex</h2>
            <p className="mt-2 text-sm">
              Empowering businesses with cutting-edge solutions.
            </p>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-lg font-semibold">Info</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Formats</li>
              <li>Compression</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>Status</li>
              <li>Policy</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>API</li>
              <li>Form Validation</li>
              <li>Accessibility</li>
              <li>Marketplace</li>
              <li>Visibility</li>
              <li>Community</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm mt-2">
              Subscribe for weekly updates, helpful tips, and exclusive offers.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border rounded-l w-full"
              />
              <button className="bg-[#08676F] text-white px-4 py-2 rounded-r hover:bg-[#06555A] transition">
                Subscribe
              </button>
            </div>
            {/* Social Icons using MUI */}
            <div className="flex space-x-4 mt-4 text-[#08676F]">
              <Facebook className="text-2xl cursor-pointer hover:text-[#06555A]" />
              <GitHub className="text-2xl cursor-pointer hover:text-[#06555A]" />
              <LinkedIn className="text-2xl cursor-pointer hover:text-[#06555A]" />
              <Twitter className="text-2xl cursor-pointer hover:text-[#06555A]" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Biz-Vertex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
