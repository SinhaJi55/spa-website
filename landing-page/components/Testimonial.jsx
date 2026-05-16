import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    review:
      "Amazing experience, premium ambience, and very professional staff.",
    name: "Arjun Sharma",
    role: "REGULAR CLIENT",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    review:
      "Very relaxing atmosphere with luxury treatment and skilled staff.",
    name: "Rohan Verma",
    
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=800&auto=format&fit=crop",
    review:
      "Beautiful environment, premium services, and excellent hospitality.",
    name: "Kabir Singh",
    
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    review:
      "Professional staff and peaceful ambience. Highly recommended.",
    name: "Aman Yadav",
   
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h1>What Our Clients Say</h1>
        <p>
          Hear from our happy clients who experienced luxury and relaxation at
          our spa.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="testimonial-content">
              <p>"{item.review}"</p>

              <h2>{item.name}</h2>

             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;