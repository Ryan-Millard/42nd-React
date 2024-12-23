import React, { useState, useCallback, memo, useMemo, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from "react-icons/fa";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";
import styles from './Carousel.module.css';

const CarouselImage = memo(({ src, alt, onClick, loading }) => (
	<div className={styles.imageContainer} onClick={onClick}>
		<img src={src} alt={alt} className={styles.image} loading={loading} />
	</div>
));

const Carousel = ({
	images,
	autoplay = true,
	autoplayInterval = 3000,
	initialSlideCountBigScreen = 3,
	initialSlideCountMediumScreen = 2,
	initialSlideCountSmallScreen = 1
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [slidesToShow, setSlidesToShow] = useState(initialSlideCountBigScreen);
	const [isPaused, setIsPaused] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [dragOffset, setDragOffset] = useState(0);
	const containerRef = useRef(null);
	const touchStartX = useRef(null);
	const touchStartTime = useRef(null);
	const lastTouchX = useRef(null);
	const velocity = useRef(0);
	const animationFrameId = useRef(null);
	const slideWidth = useRef(0);
	const [countdown, setCountdown] = useState(autoplayInterval / 1000); // Countdown in seconds

	// Handle responsive slides
	useEffect(() => {
		const updateSlideWidth = () => {
			if (containerRef.current) {
				const containerWidth = containerRef.current.offsetWidth;
				slideWidth.current = containerWidth / slidesToShow;
			}
		};

		const debounce = (func, delay) => {
			let timeout;
			return (...args) => {
				clearTimeout(timeout);
				timeout = setTimeout(() => func(...args), delay);
			};
		};

		const handleResize = debounce(() => {
			const width = window.innerWidth;
			if (width < 640) {
				setSlidesToShow(initialSlideCountSmallScreen);
			} else if (width < 1024) {
				setSlidesToShow(initialSlideCountMediumScreen);
			} else {
				setSlidesToShow(initialSlideCountBigScreen);
			}
			updateSlideWidth();
		}, 200);

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [slidesToShow]);

	const handleNext = useCallback(() => {
		setCurrentIndex(prev => {
			const newIndex = prev === images.length - slidesToShow ? 0 : prev + 1;
			return Math.max(0, Math.min(newIndex, images.length - slidesToShow));
		});
	}, [images.length, slidesToShow]);

	const handlePrevious = useCallback(() => {
		setCurrentIndex(prev => {
			const newIndex = prev === 0 ? images.length - slidesToShow : prev - 1;
			return Math.max(0, Math.min(newIndex, images.length - slidesToShow));
		});
	}, [images.length, slidesToShow]);

	const animateDrag = useCallback((targetOffset, duration = 300) => {
		const startOffset = dragOffset;
		const startTime = performance.now();
		const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

		const animate = (currentTime) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const easedProgress = easeOutCubic(progress);
			
			setDragOffset(startOffset + (targetOffset - startOffset) * easedProgress);

			if (progress < 1) {
				animationFrameId.current = requestAnimationFrame(animate);
			} else {
				setIsDragging(false);
				setDragOffset(0);
			}
		};

		cancelAnimationFrame(animationFrameId.current);
		animationFrameId.current = requestAnimationFrame(animate);
	}, [dragOffset]);

	const handleTouchStart = (e) => {
		setIsPaused(true);
		setIsDragging(true);
		touchStartX.current = e.touches[0].clientX;
		lastTouchX.current = e.touches[0].clientX;
		touchStartTime.current = performance.now();
		velocity.current = 0;

		cancelAnimationFrame(animationFrameId.current);
	};

	const handleTouchMove = (e) => {
		if (!touchStartX.current || !isDragging) return;

		const currentX = e.touches[0].clientX;
		const deltaX = currentX - lastTouchX.current;
		const currentTime = performance.now();
		const deltaTime = currentTime - touchStartTime.current;

		// Update velocity
		if (deltaTime > 0) {
			velocity.current = deltaX / deltaTime;
		}

		// Update last positions
		lastTouchX.current = currentX;
		touchStartTime.current = currentTime;

		const newOffset = currentX - touchStartX.current;
		setDragOffset(newOffset);
	};

	const handleTouchEnd = () => {
		if (!touchStartX.current || !isDragging) return;

		const finalOffset = dragOffset;
		const threshold = slideWidth.current * 0.2; // 20% of slide width
		const velocityThreshold = 0.5; // pixels per millisecond

		let targetOffset = 0;
		if (Math.abs(velocity.current) > velocityThreshold) {
			// Use velocity to determine direction
			if (velocity.current > 0) {
				handlePrevious();
			} else {
				handleNext();
			}
		} else if (Math.abs(finalOffset) > threshold) {
			// Use position to determine direction
			if (finalOffset > 0) {
				handlePrevious();
			} else {
				handleNext();
			}
		}

		// Animate back to center
		animateDrag(targetOffset);

		// Reset touch tracking
		touchStartX.current = null;
		lastTouchX.current = null;
		velocity.current = 0;
	};

	useEffect(() => {
		if (!autoplay || isPaused) return;
		
		const interval = setInterval(handleNext, autoplayInterval);
		return () => clearInterval(interval);
	}, [autoplay, isPaused, autoplayInterval, handleNext]);

	const toggleFullscreen = useCallback(() => {
		if (!isFullscreen) {
			const element = containerRef.current;
			if (element.requestFullscreen) {
				element.requestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
		}
		setIsFullscreen(!isFullscreen);
	}, [isFullscreen]);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener('fullscreenchange', handleFullscreenChange);
		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
			cancelAnimationFrame(animationFrameId.current);
		};
	}, []);

	const visibleImages = useMemo(() => {
		return images.slice(currentIndex, currentIndex + slidesToShow);
	}, [currentIndex, slidesToShow, images]);

	const handleImageClick = useCallback(() => {
		if (!isDragging) {
			toggleFullscreen();
		}
	}, [toggleFullscreen, isDragging]);

	const dots = useMemo(() => {
		return images.slice(0, images.length - slidesToShow + 1).map((_, index) => (
			<button
				key={index}
				className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
				onClick={() => { setCurrentIndex(index); setIsPaused(true); }}
			/>
		));
	}, [images, currentIndex, slidesToShow]);

	const trackStyle = {
		'--slides-to-show': slidesToShow,
		transform: `translateX(${dragOffset}px)`,
		transition: isDragging ? 'none' : 'transform 0.3s ease-out'
	};

	return (
		<div className={styles.wrapper}>
			<div 
				ref={containerRef}
				className={`${styles.galleryContainer} ${isFullscreen ? styles.fullscreen : ''}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				<div className={styles.controls}>
					<button 
						onClick={toggleFullscreen}
						className={styles.controlButton}
						aria-label="Toggle fullscreen"
					>
						{isFullscreen ? <AiOutlineFullscreenExit size={20} /> : <AiOutlineFullscreen size={20} />}
					</button>
					<button 
						onClick={() => setIsPaused(!isPaused)}
						className={styles.controlButton}
						aria-label="Toggle autoplay"
					>
						{isPaused ? <FaPlay loading="lazy" /> : <FaPause  loading="lazy"/>}
					</button>
				</div>

				<div className={styles.carouselTrack} style={trackStyle}>
					{visibleImages.map((image, index) => (
						<CarouselImage 
							key={currentIndex + index}
							src={image.src} 
							alt={image.alt}
							onClick={handleImageClick}
							loading="eager"
						/>
					))}
				</div>

				<button 
					onClick={e => {
						handlePrevious(e);
						if(!isPaused)
							setIsPaused(true);
					}}
					className={`${styles.navButton} ${styles.prevButton}`}
					aria-label="Previous slide"
				>
					<FaAngleLeft loading="lazy" />
				</button>

				<button 
					onClick={e => {
						handleNext(e);
						if(!isPaused)
							setIsPaused(true);
					}}
					className={`${styles.navButton} ${styles.nextButton}`}
					aria-label="Next slide"
				>
					<FaAngleRight loading="lazy" />
				</button>

				<div className={styles.dotsContainer}>
					{dots}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
