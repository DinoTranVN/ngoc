
var to = 'Cô!';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'https://scontent.fsgn17-1.fna.fbcdn.net/v/t1.15752-9/324699962_717767596371479_7534813493768085629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=EbamEEzvzzYAX9pOdGK&_nc_ht=scontent.fsgn17-1.fna&oh=03_AdTuYUZ-s8pzr0hxwvsAzvgIq_TRvuRc9fMT2xvKFUrc1w&oe=642BF964';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

