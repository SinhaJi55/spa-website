import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="simpleContact19" id="contact-section">

      <div className="contactHeading19">
        <span>Unique B2B Spa</span>

        <h1>Contact Us</h1>

        <p>
          Experience luxury wellness and relaxation at
          Unique B2B Spa in Paharganj.
          We are always ready to serve you with premium spa therapies.
        </p>
      </div>

      <div className="contactCards19">

        <div className="contactCard19">
          <FaPhoneAlt className="contactIcon19" />

          <h3>Phone Number</h3>

          <p>+91 92052 66849</p>
        </div>

        {/* LOCATION CARD */}
        <a
          href="https://share.google/FEy4d0JFF7gqofKVG"
          target="_blank"
          rel="noopener noreferrer"
          className="contactCard19 locationCard19"
        >
          <FaMapMarkerAlt className="contactIcon19" />

          <h3>Location</h3>

          <p>Paharganj, New Delhi</p>
        </a>

        <div className="contactCard19">
          <FaClock className="contactIcon19" />

          <h3>Opening Hours</h3>

          <p>24 Hours</p>
        </div>

      </div>

      <style>{`

        .simpleContact19,
        .simpleContact19 *{
          box-sizing:border-box;
        }

        .simpleContact19{
          width:100%;
          min-height:100vh;
          padding:100px 8%;
          background:#ffffff;
          font-family:'Poppins',sans-serif;
        }

        .contactHeading19{
          text-align:center;
          margin-bottom:80px;
        }

        .contactHeading19 span{
          font-size:1.8rem;
          color:#444444;
          font-family:cursive;
          font-weight:700;
        }

        .contactHeading19 h1{
          font-size:4.2rem;
          color:#000000;
          margin-top:12px;
          line-height:1.2;
          font-weight:800;
        }

        .contactHeading19 p{
          max-width:720px;
          margin:22px auto 0;
          color:#333333;
          line-height:1.9;
          font-size:1.08rem;
          font-weight:500;
        }

        .contactCards19{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:30px;
        }

        .contactCard19{
          background:#ffffff;
          padding:50px 30px;
          border-radius:30px;
          text-align:center;
          transition:0.3s ease;
          border:2px solid #111111;
          text-decoration:none;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
        }

        .contactCard19:hover{
          transform:translateY(-10px);
          background:#111111;
        }

        .contactCard19:hover h3,
        .contactCard19:hover p,
        .contactCard19:hover .contactIcon19{
          color:#ffffff;
        }

        .locationCard19{
          cursor:pointer;
        }

        .contactIcon19{
          font-size:2.4rem;
          color:#000000;
          margin-bottom:22px;
          transition:0.3s ease;
        }

        .contactCard19 h3{
          font-size:1.6rem;
          color:#000000;
          margin-bottom:14px;
          font-weight:800;
          transition:0.3s ease;
        }

        .contactCard19 p{
          color:#333333;
          line-height:1.8;
          font-size:1.02rem;
          font-weight:600;
          transition:0.3s ease;
        }

        @media(max-width:768px){

          .simpleContact19{
            padding:80px 5%;
          }

          .contactHeading19 h1{
            font-size:2.8rem;
          }
        }

        @media(max-width:480px){

          .contactHeading19 h1{
            font-size:2.1rem;
          }

          .contactHeading19 span{
            font-size:1.4rem;
          }

          .contactCard19{
            padding:38px 20px;
            border-radius:24px;
          }

          .contactCard19 h3{
            font-size:1.3rem;
          }
        }

      `}</style>
    </section>
  );
};

export default ContactPage;