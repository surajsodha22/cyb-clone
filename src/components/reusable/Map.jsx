// components/Map.jsx
import React from "react";

const Map = () => {
  return (
    <div className="border shadow-sm w-full my-10 rounded-3xl">
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5648.133909764058!2d75.73947064523846!3d26.9002642980737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757670182515!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96 rounded-3xl"
      />
    </div>
  );
};

export default Map;
