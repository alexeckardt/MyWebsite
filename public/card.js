var limits = 15.0;

const card_ind = 0;
const char_ind = 1;
const glow_ind = 1;

const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

const clamp = (val, minval, maxval) => {
  return Math.min(Math.max(val, minval), maxval);
}

$(".card_wrapper").mousemove(function (e) {

  let children = $(this).children();
  let cardChild = children[card_ind];
  let glowChild = cardChild.childNodes[glow_ind]; //the first child
  let charChild = children[char_ind];

  //Reset Duration -- Instant
  cardChild.style.transitionDuration  = "20ms";
  charChild.style.transitionDuration  = "20ms";
  glowChild.style.transitionDuration  = "20ms";

  // console.log(children, cardChild, charChild);

  var rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left; //x position within the element.
  var y = e.clientY - rect.top; //y position within the element.
  var offsetX = x / rect.width;
  var offsetY = y / rect.height;

  var rotateY = (offsetX) * (limits * 2) - limits;
  var rotateX = (offsetY) * (limits * 2) - limits;

  var shadowOffsetX = (offsetX) * 32 - 16;
  var shadowOffsetY = (offsetY) * 32 - 16;

  // Char
  cardChild.style.transform = "perspective(1000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg)";
  charChild.style.transform = "perspective(10000px) rotateX(" + -rotateX + "deg) rotateY(" + rotateY + "deg) translateZ(5px)";

  let sw = rect.width / 2;
  let sh = rect.height / 2;

  let distance = Math.sqrt((x - sw)*(x - sw) + (y - sh)*(y-sh))
  let scaleScale = (distance / 15);

  const startLogScale = 10;
  if (scaleScale > startLogScale) {
    scaleScale = startLogScale + Math.log(scaleScale-startLogScale + 1);
    // console.log("SC", scaleScale);
  }

  let glowScale = 136 - scaleScale * 7;


  // Decide a colour
  var angleDeg = Math.atan2(rotateY, rotateX) * 180 / Math.PI + 180;
  var hue = angleDeg / 360 * 360;

  var colRGB = HSLToRGB(hue, 80, 50);
  // console.log(colRGB);

  let mix = Math.log(distance + 2) / 60;
  // console.log(mix);
  const light = 170;
  let med = 120;
  const dark = 100;

  let lR = (1-mix) * light + mix*colRGB[0];
  let lG = (1-mix) * light + mix*colRGB[1];
  let lB = (1-mix) * light + mix*colRGB[2];

  // console.log(colRGB);
  
  const strength = clamp((distance / 150) - 0.7, 0, 1);
  const strength2 = strength*strength;
  const glowScrollSpeed = 500;
  // console.log('glowstr', offsetX);
  glowChild.style.setProperty('--pointer-from-center', `${strength2}`);
  glowChild.style.setProperty('--background-x', `-${offsetX*glowScrollSpeed}px`);
  glowChild.style.setProperty('--background-y', `-${offsetY*glowScrollSpeed}px`);
  
  // glowChild.style.backgroundImage = `
  //   radial-gradient(
  //     circle at
  //     ${sw*2 - x}px
  //     ${sh*2 - y}px,
  //     rgba(${lR},${lG},${lB},1) 0%, 
  //     rgba(${med},${med},${med},1) ${glowScale}%, 
  //     rgba(${dark},${dark},${dark},1) 100%
  //   )`;

  // glowChild.style.mixBlendMode = "hard-light";
  // glowChild.style.opacity = 1;

  // var glarePos = rotateX + rotateY + 90;
  // $(this)
  //   .children()
  //   .children()
  //   .css("left", glarePos + "%");
});

$(".card_wrapper").mouseleave(function (e) {

  
  let children = $(this).children();
  let cardChild = children[card_ind];
  let glowChild = cardChild.childNodes[1];
  let charChild = children[char_ind];

  let transitionDur = "1000ms";

  cardChild.style.transform = "rotateX(0)";
  charChild.style.transform = "rotateX(0)";

  cardChild.style.transitionDuration  = transitionDur;
  charChild.style.transitionDuration  = transitionDur;
  glowChild.style.transitionDuration  = transitionDur;

  
  glowChild.style.setProperty('--pointer-from-center', `${0}`);
  glowChild.style.setProperty('--background-y', `${0}`);
  glowChild.style.setProperty('--background-x', `${0}`);

  // glowChild.style.opacity = 0;

  $(".card_wrapper").css({"transform": "rotateX(0)"});
});