import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Profile from '../image/Profile.jpg';
import SmartStocks from '../image/SmartStocks.png';
import SmartStocks1 from '../image/smartstocks1.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef(null);

  // Carousel items with descriptions
  const carouselItems = [
    {
      id: 1,
      image: Profile,
      title: 'Profile',
      description: 'Professional portfolio showcase'
    },
    {
      id: 2,
      image: SmartStocks,
      title: 'SmartStocks',
      description: 'Stock market tracking application'
    },
    {
      id: 3,
      image: SmartStocks1,
      title: 'SmartStocks Dashboard',
      description: 'Advanced analytics and insights'
    }
  ];

  // Slide variants for animation
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => (prev + newDirection + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayRef.current = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlay, currentSlide, carouselItems.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Carousel Container */}
          <div className="relative h-96 sm:h-[450px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-3xl shadow-2xl bg-black group">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              drag="x"
              dragElastic={1}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0"
            >
              <img
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].title}
                className="object-cover w-full h-full"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 sm:left-6 top-1/2 z-20 -translate-y-1/2 p-2 sm:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 sm:opacity-100 shadow-lg"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(1)}
            className="absolute right-4 sm:right-6 top-1/2 z-20 -translate-y-1/2 p-2 sm:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/30 opacity-0 group-hover:opacity-100 sm:opacity-100 shadow-lg"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Slide Info */}
          <motion.div
            key={`info-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white z-10"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              {carouselItems[currentSlide].title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              {carouselItems[currentSlide].description}
            </p>
          </motion.div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
          {carouselItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-10 h-3 sm:h-3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50'
                  : 'w-3 h-3 sm:w-3 sm:h-3 bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-10 sm:mt-12 md:mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              isAutoPlay
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isAutoPlay ? '⏸ Pause' : '▶ Play'}
          </motion.button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
          <span className="font-semibold text-white">{currentSlide + 1}</span> / {carouselItems.length}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
