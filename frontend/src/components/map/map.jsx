import React from "react";

const ContactPage = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="restaurant-location"
          className="gmap_iframe"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Gorakhpur&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="400"
        ></iframe>
        <a href="https://embed-googlemap.com"></a>
      </div>
      <style jsx>{`
        .mapouter {
          position: relative;
          text-align: right;
          width: 100%;
          max-width: 600px; /* Optional: Set a maximum width if needed */
        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          width: 100%;
          height: 400px;
        }
        .gmap_iframe {
          width: 100% !important;
          height: 400px !important;
        }

        /* Optional: Add media queries for smaller screens */
        @media (max-width: 768px) {
          .mapouter {
            height: 300px; /* Adjust height for smaller screens */
          }
          .gmap_iframe {
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
