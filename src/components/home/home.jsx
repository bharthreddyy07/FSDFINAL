import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom'
const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoIds = ['ODJjHInHdh0', 'CunVJEh6Shs', 'HguQ4yu0GZ4'];
    const images = [
        './images/HULK.jpg',
        './images/p1.jpeg',
        './images/p2.jpeg',
        './images/p3.jpeg',
        './images/p4.jpeg',
        './images/p5.jpeg',
        './images/p6.jpeg',
        './images/p7.jpeg',
        './images/p8.jpeg'
    ];

    const showSlide = (index) => {
        const totalSlides = images.length;
        if (index >= totalSlides) setCurrentSlide(0);
        else if (index < 0) setCurrentSlide(totalSlides - 1);
        else setCurrentSlide(index);
    };

    const moveSlide = (direction) => {
        showSlide(currentSlide + direction);
    };

    const changeVideo = (index) => {
        setCurrentVideo(index % videoIds.length);
    };

    const moveVideo = (direction) => {
        changeVideo((currentVideo + direction + videoIds.length) % videoIds.length);
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav>
                <div className="nav-title">Online E-Learning</div>
                <div className="nav-links">
                <Link to="/course" className="nav-link">Courses</Link>
                <Link to="/profile" className="nav-link">Profile</Link>
                <Link to="/" className="nav-link">Logout</Link>
                    {/* <a href="index.html">Logout</a> */}
                </div>
            </nav>

            {/* Main Content */}
            <div className="container">
                <h1>Welcome to the Online Learning Platform</h1>

                {/* Image Slider */}
                <div className="image-slider">
                    <div className="slides" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                        {images.map((src, idx) => (
                            <div className="slide" key={idx}>
                                <img src={src} alt={`image ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                    <button className="arrow left" onClick={() => moveSlide(-1)}>&#10094;</button>
                    <button className="arrow right" onClick={() => moveSlide(1)}>&#10095;</button>
                </div>

                {/* Media Player Container */}
                <div className="media-player-container">
                    <button className="video-arrow left" onClick={() => moveVideo(-1)}>&#10094;</button>
                    <iframe
                        id="mediaPlayer"
                        src={`https://www.youtube.com/embed/${videoIds[currentVideo]}?autoplay=1`}
                        frameBorder="0"
                        allowFullScreen
                        title="Media Player"
                    />
                    <button className="video-arrow right" onClick={() => moveVideo(1)}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
