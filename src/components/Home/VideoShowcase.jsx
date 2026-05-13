import React, { useRef } from 'react';
import './VideoShowcase.css';

// Import videos from assets
import video1 from '../../assets/nuevos/IMG_6727.MOV';
import video2 from '../../assets/nuevos/IMG_6759.MOV';
import video3 from '../../assets/nuevos/IMG_6879.MOV';
import video4 from '../../assets/nuevos/IMG_6880.MOV';
import video5 from '../../assets/nuevos/IMG_7466.MOV';
import video6 from '../../assets/nuevos/IMG_2682.MOV';

const VideoItem = ({ src }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="video-item" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={src} 
        muted 
        loop 
        playsInline
        preload="metadata"
      />
      <div className="video-overlay">
        <div className="play-hint">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const VideoShowcase = () => {
  const videos = [video1, video2, video3, video4, video5, video6];

  return (
    <section className="video-showcase">
      <div className="container">
        <h2 className="video-showcase-title">Nuestras Aplicaciones</h2>
        <p className="video-showcase-subtitle">
          Descubrí la textura y el acabado único de nuestros revestimientos en movimiento. 
          Deslizá el cursor sobre los videos para ver más.
        </p>
        <div className="video-grid">
          {videos.map((video, index) => (
            <VideoItem key={index} src={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
