export const settings = {
  infinite: false,
  speed: 500,
  lazyLoad: true,
  slidesToScroll: 1,
  dots: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1924,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
