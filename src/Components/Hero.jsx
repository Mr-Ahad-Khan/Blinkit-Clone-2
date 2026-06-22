import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: 'Fresh Style For Every Day',
    subtitle: 'Explore hand-picked products made for comfort, quality, and modern living.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'New Arrivals Are Here',
    subtitle: 'Upgrade your collection with trending picks and limited-time deals.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Shop Smart, Live Better',
    subtitle: 'Find everyday essentials with premium quality and easy checkout.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80',
  },
];

const cards = [
  {
    title: 'Fast Delivery',
    text: 'Quick and reliable delivery on every order.',
  },
  {
    title: 'Best Quality',
    text: 'Carefully selected products with trusted quality.',
  },
  {
    title: 'Easy Support',
    text: 'Friendly help whenever you need assistance.',
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };
  const Slider = SlickSlider?.default||SlickSlider

  return (
    <section className="w-full bg-gray-50">
      <div className="hero-slider overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.title}>
              <div
                className="flex min-h-[430px] items-center bg-cover bg-center px-6 py-16 md:min-h-[520px] md:px-16"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})` }}
              >
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold leading-tight md:text-6xl">{slide.title}</h1>
                  <p className="mt-4 text-base leading-7 text-gray-100 md:text-xl">{slide.subtitle}</p>
                  <button className="mt-7 rounded-md bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="rounded-md bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
            <p className="mt-3 text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
