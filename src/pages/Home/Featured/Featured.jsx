import SectionTitle from "../../../components/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase">Where can I get some</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus officia modi provident quas non placeat numquam veniam quae distinctio minima, debitis excepturi
                        sapiente voluptate deleniti repudiandae nihil qui tenetur esse eum nam maxime unde. Voluptatibus neque, ad mollitia, accusantium fugiat dolor quos sit consequuntur
                        error explicabo, nam dolores debitis nulla!
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
