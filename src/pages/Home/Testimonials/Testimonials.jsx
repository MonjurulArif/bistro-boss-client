import SectionTitle from "../../../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <section className="my-20">
            <SectionTitle subHeading="What Our Client Say" heading={"Testimonials"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-14 mx-24">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                            {/* <FontAwesomeIcon icon="fa-solid fa-quote-left" /> */}
                            <FontAwesomeIcon icon={faQuoteLeft} size="5x" />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
