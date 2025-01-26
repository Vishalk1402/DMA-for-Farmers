import React, { useEffect, useState } from 'react';
import './slider.css';

const images = [
    { id: 1, src: './images/S1.jpg', alt: 'Image 1' },
    { id: 2, src: './images/S2.jpg', alt: 'Image 2' },
    { id: 3, src: './images/S3.jpg', alt: 'Image 3' },
    { id: 4, src: './images/S4.jpg', alt: 'Image 4' },
    { id: 5, src: './images/S5.jpg', alt: 'Image 5' },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <div className='Headline'>
                <h1>Welcome to Agro Farm</h1>
            </div>
            <div className="slider">
                {images.map((image, index) => (
                    <div key={image.id} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <div className="arrows">
                <span className="prev" onClick={goToPrevSlide}>&#10094;</span>
                <span className="next" onClick={goToNextSlide}>&#10095;</span>
            </div>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
