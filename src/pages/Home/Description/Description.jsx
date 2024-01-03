import chef from "../../../assets/home/chef-service.jpg";

const Description = () => {
    return (
        <div className="  bg-cover bg-no-repeat " style={{ height: 440, width: 1320, backgroundImage: `url(${chef})` }}>
            <div className="flex justify-center">
                {/* <div className="flex flex-col justify-center items-center mt-20 h-auto md:h-[270px] w-auto md:w-[1000px] bg-white">
                    <h1 className="font-cinzel text-4xl mb-4">Bistro Boss</h1>
                    <p className="  font-inter md:pr-32 md:pl-32">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam
                        dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div> */}
                <div className="flex flex-col justify-center items-center bg-white">
                    <h1 className="font-cinzel text-4xl">Bistro Boss</h1>
                    <p className="font-inter">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam
                        dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Description;

{
    /* <div className="featured-item bg-fixed text-white pt-8 my-20">
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
</div> */
}
