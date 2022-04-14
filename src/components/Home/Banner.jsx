import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
const Banner = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex >= sliderData.length) {
			setSlideIndex(1);
		} else {
			setSlideIndex(slideIndex + 1);
		}
	};
	const prevSlide = () => {
		if (slideIndex === 1) {
			setSlideIndex(sliderData.length);
		} else {
			setSlideIndex(slideIndex - 1);
		}
	};
	const moveIndex = (index) => setSlideIndex(index);
	useEffect(() => {
		setInterval(nextSlide, 15000);
	}, []);
	return (
		<>
			<article className="background-image-container ">
				{sliderData.map(({ id, gifURL }, index) => (
					<>
						<img
							src={gifURL}
							className={`banner ${
								slideIndex === index + 1 ? "slide-active" : "slide-inactive"
							}`}
							alt="banner"
						/>
					</>
				))}
			</article>
			<div className="flex-row justify-content-center align-center flex-gap-half banner-dots-container">
				{Array.from({ length: sliderData.length }).map((item, index) => (
					<i
						key={index}
						onClick={() => moveIndex(index + 1)}
						className={`fa-solid fa-circle banner-dot ${
							slideIndex === index + 1 ? "active-dot" : "dot"
						}`}
					></i>
				))}
			</div>
			<div className="flex-row justify-content-space-between align-center banner-nav-btn-container w-100 mx-10">
				<i className="fa-solid fa-circle-chevron-left" onClick={prevSlide}></i>
				<i className="fa-solid fa-circle-chevron-right" onClick={nextSlide}></i>
			</div>
		</>
	);
};

export { Banner };
