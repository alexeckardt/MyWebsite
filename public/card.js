var limits = 15.0;

$(".card").mousemove(function (e) {
  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = (offsetX) * (limits * 2) - limits;
  var rotateX = (offsetY) * (limits * 2) - limits;

  var shadowOffsetX = (offsetX) * 32 - 16;
  var shadowOffsetY = (offsetY) * 32 - 16;

  $(this).css({
    transform: "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)"
  });


  let glowChild = $(this).children()[0];
  glowChild.style.backgroundImage = `
    radial-gradient(
      circle at
      ${x}px
      ${y}px,
      #ffffff62,
      #00000000
    )`;
    glowChild.style.mixBlendMode = 'luminosity';

  // var glarePos = rotateX + rotateY + 90;
  // $(this)
  //   .children()
  //   .children()
  //   .css("left", glarePos + "%");
});

$(".card").mouseleave(function (e) {
  $(".card").css({"transform": "rotateX(0)"});
});
