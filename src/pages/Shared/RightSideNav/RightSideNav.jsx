
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/images/qZone1.png'
import qZone2 from '../../../assets/images/qZone2.png'
import qZone3 from '../../../assets/images/qZone3.png'
const RightSideNav = () => {
    return (
        <div className="">
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                    Google <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-outline w-full">
                    Github <FaGithub></FaGithub>
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a className="p-4 flex text-lg items-center border-2 rounded-t-lg" href="">
                    <FaFacebookF className="mr-3"></FaFacebookF>
                    <span>facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center  border-x-2" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border-2 rounded-b-lg" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;