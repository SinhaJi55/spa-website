import React from "react";

const products = [
  {
    name: "Aroma Essential Oil",
    category: "Relax Therapy",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Organic Herbal Cream",
    category: "Skin Treatment",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Luxury Spa Candle",
    category: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Natural Face Serum",
    category: "Glow Therapy",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
  },
];

const TherapyProducts = () => {
  return (
    <section className="therapySection16">
      <div className="therapyHeading16">
        <span>Premium Care</span>

        <h1>Products We Use In Our Therapy</h1>

        <p>
          We use premium-quality wellness and skincare products designed to
          provide complete relaxation and rejuvenation.
        </p>
      </div>

      <div className="therapyContainer16">
        {products.map((product, index) => (
          <div className="therapyCard16" key={index}>
            <div className="therapyImage16">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="therapyContent16">
              <span>{product.category}</span>

              <h2>{product.name}</h2>

              <button className="therapyBtn16">
                Explore Product
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`

        .therapySection16,
        .therapySection16 *{
          box-sizing:border-box;
        }

        .therapySection16{
          width:100%;
          min-height:100vh;
          padding:110px 8%;
          background:#ffffff;
          font-family:'Poppins',sans-serif;
        }

        .therapyHeading16{
          text-align:center;
          margin-bottom:90px;
        }

        .therapyHeading16 span{
          color:#666666;
          font-size:2rem;
          font-family:cursive;
        }

        .therapyHeading16 h1{
          color:#111111;
          font-size:4.3rem;
          margin-top:10px;
          font-weight:700;
          line-height:1.2;
        }

        .therapyHeading16 p{
          max-width:760px;
          margin:22px auto 0;
          color:#555555;
          line-height:1.9;
          font-size:1.1rem;
        }

        .therapyContainer16{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:40px;
        }

        .therapyCard16{
          background:#ffffff;
          border-radius:35px;
          overflow:hidden;
          border:1px solid #e5e5e5;
          transition:0.4s ease;
          box-shadow:0 10px 35px rgba(0,0,0,0.06);
        }

        .therapyCard16:hover{
          transform:translateY(-12px);
          box-shadow:0 18px 45px rgba(0,0,0,0.12);
        }

        .therapyImage16{
          width:100%;
          height:420px;
          overflow:hidden;
          position:relative;
        }

        .therapyImage16 img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s ease;
          display:block;
        }

        .therapyCard16:hover img{
          transform:scale(1.08);
        }

        .therapyContent16{
          padding:35px;
          text-align:center;
        }

        .therapyContent16 span{
          color:#777777;
          font-size:0.95rem;
          letter-spacing:2px;
          text-transform:uppercase;
        }

        .therapyContent16 h2{
          color:#111111;
          font-size:2rem;
          margin:18px 0 28px;
          line-height:1.4;
        }

        .therapyBtn16{
          border:none;
          padding:14px 34px;
          border-radius:40px;
          background:#111111;
          color:white;
          font-size:1rem;
          font-weight:600;
          cursor:pointer;
          transition:0.3s ease;
        }

        .therapyBtn16:hover{
          transform:scale(1.05);
        }

        @media(max-width:992px){

          .therapyHeading16 h1{
            font-size:3.2rem;
          }

          .therapyContainer16{
            grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          }

          .therapyImage16{
            height:360px;
          }
        }

        @media(max-width:768px){

          .therapySection16{
            padding:80px 5%;
          }

          .therapyHeading16 h1{
            font-size:2.5rem;
          }

          .therapyContainer16{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:480px){

          .therapyHeading16 h1{
            font-size:2rem;
          }

          .therapyHeading16 span{
            font-size:1.5rem;
          }

          .therapyCard16{
            border-radius:25px;
          }

          .therapyImage16{
            height:300px;
          }

          .therapyContent16{
            padding:25px 20px;
          }

          .therapyContent16 h2{
            font-size:1.6rem;
          }
        }

      `}</style>
    </section>
  );
};

export default TherapyProducts;