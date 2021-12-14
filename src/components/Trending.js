import React from 'react'
import Slider from "react-slick";

const Trending = () => {
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='conatiner-fluid shadow-lg mt-4 mb-3 py-5'>
                <Slider {...settings}>
                    <div>
                        <img src="/images/gallery1.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery2.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery3.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery4.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery5.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery6.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery7.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="/images/gallery8.jpg" className="img-fluid custom-slide" alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Trending
