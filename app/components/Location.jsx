import React, { Suspense } from "react";

const Location = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.796615846307!2d77.05079787528801!3d28.605877675679338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b00461d50cd%3A0x5bb596b3d9648003!2sNifty%20Nitesh%20stock%20market%20classes!5e0!3m2!1sen!2sin!4v1709996683401!5m2!1sen!2sin"
        width="100%"
        height={480}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />
      /
    </Suspense>
  );
};

export default Location;
