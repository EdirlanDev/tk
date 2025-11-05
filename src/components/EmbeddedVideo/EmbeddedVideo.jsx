import React from 'react';
import './EmbeddedVideo.css';

export default function EmbeddedVideo({
  src = '/videos/demo.mp4',
  caption = 'Demonstração do produto'
}) {
  return (
    <section className="pv" aria-label="Vídeo do produto">
      <div className="pv-box" onContextMenu={(e) => e.preventDefault()}>
        <video
          src={src}
          playsInline
          controls
          preload="metadata"
          className="pv-video"
        />
      </div>
      {caption && <div className="pv-cap">{caption}</div>}
    </section>
  );
}
