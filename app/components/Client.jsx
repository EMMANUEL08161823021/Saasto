"use client"
import React, { useState } from "react";

const Client = () => {
  const testimonials = [
    {
      text:
        "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made is incredibly rewarding",
      name: "Mila McSabbu",
      role: "Designer",
    },
    {
      text:
        "We saw a measurable increase in productivity and team alignment after switching. The UI is simple and the onboarding was seamless.",
      name: "Ayo Ade",
      role: "Product Manager",
    },
    {
      text:
        "The tracking features saved us countless hours. The analytics made planning and forecasting so much easier.",
      name: "Sara Bello",
      role: "Founder",
    },
  ];

  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }
  function goTo(i) {
    setIndex(i);
  }

  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden">
      <br/>
      <br/>
      {/* decorative images left unchanged */}
      <img className="absolute hidden md:block h-1/5 left-[5%] top-[5%]" src={"/assets/like.svg"} alt="alt" />
      <img className="absolute hidden md:block h-1/5 left-[14%] bottom-[10%]" src={"/assets/chat.svg"} alt="alt" />

      <div className="w-full sm:max-w-xl md:max-w-4xl mx-auto px-4 text-left sm:text-center">
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex flex-col text-left sm:text-center gap-2">
            <h1 className='leading-tight text-3xl font-extrabold text-gray-900 mb-2'>What our 
              <span className="relative inline-block">
                <img
                src={"/assets/shape.svg"}
                alt=""
                aria-hidden="true"
                className="absolute left-1/4 top-[85%] -translate-x-1/2 -translate-y-1/2 w-18 h-18  md:w-28 md:h-18 pointer-events-none"
                />
                <span className="relative px-1.5"> client  </span>  
              </span>              
              says</h1>
            <p className="text-sm text-gray-600">Growth your business with using us</p>
          </div>

          {/* BIGGER, CENTERED card-paginate */}
          <div
            className="card-pagainate card-paginate mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-8 text-left justify-center
                       max-w-3xl w-full"
          >
            {/* left: larger image box — kept the <img> tag inside exactly as you had it */}
            <div className="w-full md:max-w-sm flex-shrink-0 z-20 flex items-center justify-center rounded-4xl overflow-hidden shadow-lg bg-[#FFF8F2]">
              <img height={100} src={"/assets/person.jpg"} alt="image" />
            </div>

            {/* right: enlarged testimonial content */}
            <div className="flex-1 max-w-xl">
              <p className="text-sm text-gray-600 leading-relaxed" aria-live="polite">
                {testimonials[index].text}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-gray-900">{testimonials[index].name}</h3>
                <h4 className="text-sm text-gray-500">{testimonials[index].role}</h4>
              </div>

              {/* centered pagination controls */}
              <div className="mt-6 flex items-center gap-4 justify-start">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="px-4 py-2 rounded-md border border-black text-sm text-gray-600 bg-white hover:bg-gray-50 transition"
                >
                  Prev
                </button>

                <div className="flex gap-3 items-center">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Show testimonial ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-transform ${i === index ? "scale-110 bg-[#FF553E]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="px-4 py-2 rounded-md border border-black bg-white text-gray-600 hover:bg-gray-50 transition text-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          {/* end card-paginate */}
        </div>
      </div>

      {/* decorative right-bottom image left unchanged */}
      <img className="absolute hidden md:block h-1/5 right-[10%] bottom-[7%]" src={"/assets/emoji.svg"} alt="alt" />

      <br/>
      <br/>
    </section>
  );
};

export default Client;
