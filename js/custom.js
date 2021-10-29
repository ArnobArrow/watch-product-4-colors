$(function(){
    // slick slider
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows:true,
        autoplaySpeed: 2000,
        speed:1000,
        prevArrow:'.left',
        nextArrow:'.right', 
        centerMode:false,
        centerPadding:false,
       responsive: [
           {
             breakpoint: 576,
             settings: {
               slidesToShow: 1,
             }
           },
           {
             breakpoint: 768,
             settings: {
               slidesToShow: 1,
             }
           },
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 2,
             }
           },
           {
             breakpoint: 1200,
             settings: {
               slidesToShow: 2,
             }
           },
         ]
    });
    // video
    $('.venobox').venobox();

    // review 
    $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows:false,
      speed:1000,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });

    // color settings
    var colorSheets = [
      {
          color: "#0f0f0f",
          title: "Switch to Default",
          href: "./css/color-default.css"
      },
      {
          color: "#cac9c9",
          title: "Switch to white",
          href: "./css/color-white.css"
      },
      {
          color: "#69d3d8",
          title: "Switch to blue",
          href: "./css/color-blue.css"
      },
      {
          color: "violet",
          title: "Switch to violet",
          href: "./css/color-violet.css"
      },
  
  ];
  
    ColorSwitcher.init(colorSheets);

    // 3D
    VanillaTilt.init(document.querySelectorAll(".box, .buy-box , .box-list"), {
      max: 15,
      speed: 400
    });
    // 3D index-white
    VanillaTilt.init(document.querySelectorAll("#index-white .box ,#index-white .buy-box ,#index-white .box-list"), {
      max: 15,
      speed: 400
    });
    // 3D index-blue
    VanillaTilt.init(document.querySelectorAll("#index-blue .box, #index-blue .buy-box , #index-blue .box-list"), {
      max: 15,
      speed: 400
    });

});


