import {
  FaArrowAltCircleUp,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-200">
        <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 px-3  border-t border-solid py-16">
          
          <div>
            <h5 className="font-semibold text-2xl pb-8">About</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                About us
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Features
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                News
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Plans
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Company</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Why GuwahatiCab
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Partner with us
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                FAQ
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Support</h5>
            <ul>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Account
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Support center
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Feedback
              </li>
              <li className="hover:text-primary text-lg leading-10 cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-2xl pb-8">Newsletter</h5>
            <p className="text-gray py-4 text-lg pb-4 text-justify">Call for booking: 8405010784|e-mail Us:<br/>ind9546@gmail.com|
               and get exciting offers

            </p>
            <span className="flex items-center gap-4">
              <FaFacebook
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
              <FaYoutube
                size={24}
                className="text-primary hover:text-primary cursor-pointer"
              />
            </span>
            <div className="h-14 flex items-center relative">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-white outline-none w-full h-full shadow px-4"
              />
              <button className="bg-primary text-white rounded-full absolute right-2 w-10 h-10">
                <FaArrowAltCircleUp className="w-full h-full" />
              </button>
            </div>
          </div>
        </div>
        <div>
            
          </div>
      </div>
    </footer>
  );
}
