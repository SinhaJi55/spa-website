import React from "react";

const testimonials = [
  {
    name: "Nisha Yadav",
    role: "Regular Client",
    image:
      "/t1.jpg",
    review:
      "So Relaxing best environment best spa in Paharjang",
  },
  {
    name: "Emma Johnson",
    role: "Beauty Blogger",
    image:
      "/t2.jpg",
    review:
      "Skillfull Staff, Beautiful Staff, Nature is Owesome, Want to visit agin best spa in Paharjang.",
  },
  {
    name: "Varun Singh",
    role: "Wellness Coach",
    image:
      "/t3.jpg",
    review:
      " Best for Men Professional staff, premium services, and a beautiful environment. Every session feels luxurious , Beautiful Staff.",
  },,
   {
    name: "Vicky Kumar",
    role: "Wellness Coach",
    image:
      "/t4.jpg",
    review:
      "Great Experience, Beautiful Environment, Best Spa in Paharjang for Men and Women",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonialSection14">
      <div className="testimonialHeading14">
        <span>Testimonials</span>

        <h1>What Our Clients Say</h1>

        <p>
          Hear from our happy clients who experienced luxury, relaxation, and
          complete wellness at our spa.
        </p>
      </div>

      <div className="testimonialContainer14">
        {testimonials.map((item, index) => (
          <div className="testimonialCard14" key={index}>
            <div className="testimonialImage14">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="testimonialContent14">
              <p className="testimonialReview14">
                “{item.review}”
              </p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`

        .testimonialSection14,
        .testimonialSection14 *{
          box-sizing:border-box;
        }

        .testimonialSection14{
          width:100%;
          min-height:100vh;
          padding:110px 8%;
          background:#0b0b0b;
          font-family:'Poppins',sans-serif;
        }

        .testimonialHeading14{
          text-align:center;
          margin-bottom:90px;
        }

        .testimonialHeading14 span{
          color:#d6d6d6;
          font-size:2rem;
          font-family:cursive;
        }

        .testimonialHeading14 h1{
          color:#ffffff;
          font-size:4.5rem;
          margin-top:10px;
          font-weight:700;
          line-height:1.2;
        }

        .testimonialHeading14 p{
          max-width:750px;
          margin:22px auto 0;
          color:#bcbcbc;
          line-height:1.9;
          font-size:1.1rem;
        }

        .testimonialContainer14{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(430px,1fr));
          gap:45px;
        }

        .testimonialCard14{
          background:#161616;
          border-radius:35px;
          overflow:hidden;
          border:1px solid rgba(255,255,255,0.08);
          transition:0.4s ease;
          position:relative;
        }

        .testimonialCard14:hover{
          transform:translateY(-12px);
          border-color:rgba(255,255,255,0.15);
        }

        .testimonialImage14{
          width:100%;
          height:420px;
          overflow:hidden;
          position:relative;
        }

        .testimonialImage14::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            to top,
            rgba(0,0,0,0.4),
            transparent
          );
        }

        .testimonialImage14 img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s ease;
          display:block;
        }

        .testimonialCard14:hover img{
          transform:scale(1.08);
        }

        .testimonialContent14{
          padding:40px;
          text-align:center;
        }

        .testimonialReview14{
          color:#e2e2e2;
          line-height:2;
          font-size:1.1rem;
          margin-bottom:35px;
        }

        .testimonialContent14 h3{
          color:white;
          font-size:2rem;
          margin-bottom:10px;
          font-weight:600;
        }

        .testimonialContent14 span{
          color:#9e9e9e;
          font-size:1rem;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        @media(max-width:992px){

          .testimonialHeading14 h1{
            font-size:3.2rem;
          }

          .testimonialContainer14{
            grid-template-columns:1fr;
          }

          .testimonialImage14{
            height:380px;
          }
        }

        @media(max-width:768px){

          .testimonialSection14{
            padding:80px 5%;
          }

          .testimonialHeading14 h1{
            font-size:2.5rem;
          }

          .testimonialCard14{
            border-radius:28px;
          }

          .testimonialImage14{
            height:340px;
          }

          .testimonialContent14{
            padding:30px;
          }
        }

        @media(max-width:480px){

          .testimonialHeading14 h1{
            font-size:2rem;
          }

          .testimonialHeading14 span{
            font-size:1.5rem;
          }

          .testimonialContainer14{
            grid-template-columns:1fr;
          }

          .testimonialImage14{
            height:300px;
          }

          .testimonialContent14{
            padding:25px 20px;
          }

          .testimonialReview14{
            font-size:1rem;
            line-height:1.8;
          }

          .testimonialContent14 h3{
            font-size:1.6rem;
          }
        }

      `}</style>
    </section>
  );
};

export default TestimonialSection;