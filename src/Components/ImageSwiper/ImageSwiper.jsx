import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/lazy'; // Import lazy loading styles
import { Navigation, Pagination, Lazy } from 'swiper/modules'; // Import the Lazy module

const ImageSwiper = ({ images }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Lazy]} // Add Lazy module
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			lazy={{ loadOnTransitionStart: false, loadPrevNext: true }} // Lazy loading config
		>
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<img className="swiper-lazy" data-src={image.src} alt={image.alt} />
					<div className="swiper-lazy-preloader"></div> {/* Preloader for lazy images */}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ImageSwiper;

