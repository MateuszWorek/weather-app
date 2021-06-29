import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = (props) => {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  // Start carousel from start after end
  useEffect(() => {
    const lastIndex = length - 1;
    if(currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if(currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex])

  // Run new card in carousel every interval
  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < (length - show)) {
          setCurrentIndex(prevState => prevState + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
    return () => clearInterval(slider);
  }, [currentIndex]);

  // Next button functionality
  const next = () => {
    if (currentIndex < (length - show)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  // Prev button functionality
  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }

  // Handle touch start
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if(touchDown === null) { return }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if(diff > 5) {
      next();
    }
    if(diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  let mediaShow;
  function showByMedia(x) {
    if (x.matches) {
      console.log(true);
      mediaShow = 4;
    } else {
      console.log(false);
      mediaShow = 2;
    }
  }

  let x = window.matchMedia("(min-width: 576px)")
  showByMedia(x) // Call listener function at run time

  return (
    <div className="carousel__container">
      <div className="carousel__wrapper">
        { currentIndex > 0 && <button onClick={ prev } className="carousel__left-arrow"><FaChevronLeft /></button> }
        <div className="carousel__content-wrapper" onTouchStart={ handleTouchStart } onTouchMove={ handleTouchMove }>
          <div
            className={ `carousel__content carousel__content--show-${ show }`}
            style={{ transform: `translateX(-${currentIndex * (100 / mediaShow )}%)` }}
            query='(min-width: 768px)'
          >
            { children }
          </div>
        </div>
        { currentIndex < (length - show) && <button onClick={ next } className="carousel__right-arrow"><FaChevronRight /></button> }
      </div>
    </div>
  )
}

export default Carousel
