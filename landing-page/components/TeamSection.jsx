import React from "react";

const teamMembers = [
  {
    name: "Sejal Vonakowa",
    role: "Wellness Therapist",
    desc: "Specializing in relaxation therapies and stress relief with premium wellness treatments.",
    image:
      "/modal1.jpg",
    color: "#d89b84",
  },
  {
    name: "Vomika",
    role: "Skin Care Specialist",
    desc: "Expert in advanced skincare, rejuvenation, and personalized beauty solutions.",
    image:
      "./modal2.jpg",
    color: "#b7b58a",
  },
  {
    name: "Leni Kewa",
    role: "Beauty Consultant",
    desc: "Helping clients enhance their natural beauty and confidence every day.",
    image:
      "/modal3.jpg",
    color: "#d7aa57",
  },
];

const TeamLargeCards = () => {
  return (
    <section className="teamSection11">
      <div className="bgShape11 shapeOne11"></div>
      <div className="bgShape11 shapeTwo11"></div>

      <div className="teamHeading11">
        <span>Our Experts</span>

        <h1>Meet Our Professionals</h1>

        <p>
          Experience luxury wellness and personalized care from our dedicated
          experts.
        </p>
      </div>

      <div className="teamContainer11">
        {teamMembers.map((member, index) => (
          <div className="teamCard11" key={index}>
            <div className="teamImage11">
              <img src={member.image} alt={member.name} />
            </div>

            <div className="teamContent11">
              <h2>{member.name}</h2>

              <h4 style={{ color: member.color }}>{member.role}</h4>

              <div
                className="teamLine11"
                style={{ background: member.color }}
              ></div>

              <p>{member.desc}</p>

              
            </div>
          </div>
        ))}
      </div>

      <style>{`

        .teamSection11,
        .teamSection11 *{
          box-sizing:border-box;
        }

        .teamSection11{
          width:100%;
          min-height:100vh;
          padding:100px 8%;
          background:linear-gradient(135deg,#fffaf5,#f7ede2,#f9f3eb);
          position:relative;
          overflow:hidden;
          font-family:'Poppins',sans-serif;
        }

        .bgShape11{
          position:absolute;
          border-radius:50%;
          z-index:0;
          filter:blur(40px);
          opacity:0.4;
        }

        .shapeOne11{
          width:350px;
          height:350px;
          background:#f4d6c8;
          top:-120px;
          left:-120px;
        }

        .shapeTwo11{
          width:300px;
          height:300px;
          background:#eadbc8;
          bottom:-100px;
          right:-100px;
        }

        .teamHeading11{
          text-align:center;
          margin-bottom:80px;
          position:relative;
          z-index:2;
        }

        .teamHeading11 span{
          font-size:2rem;
          color:#c28b74;
          font-family:cursive;
        }

        .teamHeading11 h1{
          font-size:4rem;
          color:#3e2f2a;
          margin-top:10px;
          font-weight:700;
          line-height:1.2;
        }

        .teamHeading11 p{
          max-width:700px;
          margin:20px auto 0;
          color:#6b625d;
          line-height:1.8;
          font-size:1.1rem;
        }

        .teamContainer11{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(360px,1fr));
          gap:45px;
          position:relative;
          z-index:2;
        }

        .teamCard11{
          background:rgba(255,255,255,0.7);
          backdrop-filter:blur(10px);
          border:1px solid rgba(255,255,255,0.5);
          border-radius:35px;
          overflow:hidden;
          box-shadow:0 15px 45px rgba(0,0,0,0.08);
          transition:0.4s ease;
        }

        .teamCard11:hover{
          transform:translateY(-12px);
        }

        .teamImage11{
          width:100%;
          height:520px;
          overflow:hidden;
          position:relative;
        }

        .teamImage11::after{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            to top,
            rgba(0,0,0,0.25),
            transparent
          );
        }

        .teamImage11 img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s ease;
          display:block;
        }

        .teamCard11:hover img{
          transform:scale(1.08);
        }

        .teamContent11{
          padding:35px;
          text-align:center;
        }

        .teamContent11 h2{
          font-size:2.3rem;
          color:#2f241f;
          margin-bottom:10px;
          font-weight:700;
        }

        .teamContent11 h4{
          font-size:1rem;
          text-transform:uppercase;
          letter-spacing:2px;
          margin-bottom:18px;
          font-weight:600;
        }

        .teamLine11{
          width:90px;
          height:4px;
          border-radius:20px;
          margin:0 auto 22px;
        }

        .teamContent11 p{
          color:#6d645f;
          line-height:1.9;
          font-size:1rem;
          margin-bottom:28px;
        }

        .teamBtn11{
          border:none;
          padding:14px 34px;
          border-radius:40px;
          color:white;
          font-size:1rem;
          font-weight:600;
          cursor:pointer;
          transition:0.3s ease;
        }

        .teamBtn11:hover{
          transform:scale(1.05);
        }

        @media(max-width:992px){

          .teamHeading11 h1{
            font-size:3rem;
          }

          .teamImage11{
            height:450px;
          }
        }

        @media(max-width:768px){

          .teamSection11{
            padding:70px 5%;
          }

          .teamHeading11 h1{
            font-size:2.5rem;
          }

          .teamHeading11 span{
            font-size:1.7rem;
          }

          .teamContainer11{
            grid-template-columns:1fr;
          }

          .teamImage11{
            height:400px;
          }
        }

        @media(max-width:480px){

          .teamHeading11 h1{
            font-size:2rem;
          }

          .teamHeading11 span{
            font-size:1.4rem;
          }

          .teamCard11{
            border-radius:25px;
          }

          .teamImage11{
            height:340px;
          }

          .teamContent11{
            padding:25px;
          }

          .teamContent11 h2{
            font-size:1.8rem;
          }

          .teamContent11 p{
            font-size:0.95rem;
          }
        }

      `}</style>
    </section>
  );
};

export default TeamLargeCards;