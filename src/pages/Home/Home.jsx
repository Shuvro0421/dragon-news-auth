import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {

    const  news = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins font-bold">this is home</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="col-span-2">
                    {
                        news.map(aNews =><NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;