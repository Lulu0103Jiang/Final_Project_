const galleryScreen = document.querySelector('#gallery-screen')
const channelUp = document.querySelector ('#channel-up')
const channelDown = document.querySelector ('#channel-down')


function changeChannelUp () {
  const currentSrc = galleryScreen.getAttribute ('src') 
  if (currentSrc === 'img/Le-Vol-4-2017-140x220cm-Pigment-Inkjet-Print.jpeg') {
    galleryScreen.src = 'img/sue-lovegrove-518.jpeg'
  } else if (currentSrc === 'img/sue-lovegrove-518.jpeg') {
    galleryScreen.src = 'img/Waldemar-Kolbusz-forte-oil-on-linen-101x183-LR.jpeg'
  } else if (currentSrc==='img/Waldemar-Kolbusz-forte-oil-on-linen-101x183-LR.jpeg') {
    galleryScreen.src = 'img/Christopher-Pease-Kartwarra-2019-oil-and-Balga-resin-on-canvas.jpeg' 
  } else if (currentSrc=== 'img/Christopher-Pease-Kartwarra-2019-oil-and-Balga-resin-on-canvas.jpeg'){
    galleryScreen.src = 'img/Le-Vol-4-2017-140x220cm-Pigment-Inkjet-Print.jpeg'
  }
}

function changeChannelDown () {
  const currentSrc = galleryScreen.getAttribute('src') 
  if (currentSrc === 'img/Le-Vol-4-2017-140x220cm-Pigment-Inkjet-Print.jpeg' || currentSrc === 'img/Christopher-Pease-Kartwarra-2019-oil-and-Balga-resin-on-canvas.jpeg') {
    galleryScreen.src = 'img/Christopher-Pease-Kartwarra-2019-oil-and-Balga-resin-on-canvas.jpeg'
  } else if (currentSrc === 'img/Christopher-Pease-Kartwarra-2019-oil-and-Balga-resin-on-canvas.jpeg') {
    galleryScreen.src = 'img/Waldemar-Kolbusz-forte-oil-on-linen-101x183-LR.jpeg'
  } else if (currentSrc === 'img/Waldemar-Kolbusz-forte-oil-on-linen-101x183-LR.jpeg') {
    galleryScreen.src = 'img/sue-lovegrove-518.jpeg'
  } else {
    galleryScreen.src = 'img/sue-lovegrove-518.jpeg'
  }
}

channelUp.addEventListener('click', changeChannelUp)
channelDown.addEventListener('click', changeChannelDown)



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}