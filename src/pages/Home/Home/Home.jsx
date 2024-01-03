import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Featured from "../Featured/Featured";
import Mobile from "../Mobile/Mobile";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <PopularMenu></PopularMenu>
            <Mobile></Mobile>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
