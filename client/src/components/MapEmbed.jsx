import React from "react";

const MapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.2515714567344!2d98.94715426962921!3d3.5679526997754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30314f181e56bd2b%3A0x6f0da1339d2d485!2sPTPN%20IV%20KEBUN%20ADOLINA!5e1!3m2!1sid!2sid!4v1691210069357!5m2!1sid!2sid"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
        className="is-rounded" // Use Bulma class for rounded element
      ></iframe>
    </div>
  );
};

export default MapEmbed;
