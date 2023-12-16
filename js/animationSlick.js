var titleMain = $("#animatedHeading");
var titleSubs = titleMain.find("slick-active");

if (titleMain.length) {
  titleMain.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: "10px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    adaptiveHeight: true,
  });

  // On init
  $(".slick-dupe").each(function (index, el) {
    $("#animatedHeading").slick("slickAdd", "<div>" + el.innerHTML + "</div>");
  });

  // Manually refresh positioning of slick
  titleMain.slick("slickPlay");
}
var titleMain2 = $("#animatedHeadingLast");
var titleSubs2 = titleMain.find("slick-active");

if (titleMain2.length) {
  titleMain2.slick({
    autoplay: false,
    arrows: false,
    dots: false,
    slidesToShow: 3,
    centerPadding: "0px",
    draggable: false,
    infinite: true,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    verticalSwiping: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: "cubic-bezier( 0.045, 0.645,0.355, 1.000)",
    adaptiveHeight: true,
  });

  // On init
  $(".slick-dupe").each(function (index, el) {
    $("#animatedHeadingLast").slick(
      "slickAdd",
      "<div>" + el.innerHTML + "</div>"
    );
  });

  // Manually refresh positioning of slick
  titleMain2.slick("slickPlay");
}
