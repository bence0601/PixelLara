import React from 'react';
import Iframe from 'react-iframe';

const MapComponent = () => {
  return (
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36339.93842813898!2d20.174808413478074!3d47.18720482182102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408892aa7861fd%3A0x2b94e4b1a142682!2sMalom%20u.%2C%20Szolnok%2C%20Hungary!5e0!3m2!1sen!2suk!4v1643932731759!5m2!1sen!2suk"
      width="600"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapComponent;
