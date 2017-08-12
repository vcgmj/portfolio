
const featuredImage = document.querySelector('.featured--image')
const featuredImage2 = document.querySelector('.featured--image2')
const featuredImage3 = document.querySelector('.featured--image3')

const fullscreen = document.querySelector('.fullscreen')
const fullscreen2 = document.querySelector('.fullscreen2')
const fullscreen3 = document.querySelector('.fullscreen3')


const modalOverlay = document.querySelector('.modal--overlay')
console.log(modalOverlay)



// To add modal overlay

featuredImage.addEventListener('click', function(){
	modalOverlay.classList.add('is-open')
	fullscreen.classList.add('is-open')
})

featuredImage2.addEventListener('click', function(){
	modalOverlay.classList.add('is-open')
	fullscreen2.classList.add('is-open')
})

featuredImage3.addEventListener('click', function(){
	modalOverlay.classList.add('is-open')
	fullscreen3.classList.add('is-open')
})

// To remove modal overlay
modalOverlay.addEventListener('click', function(){
	modalOverlay.classList.remove('is-open')
	fullscreen.classList.remove('is-open')
	fullscreen2.classList.remove('is-open')
	fullscreen3.classList.remove('is-open')
})

fullscreen.addEventListener('click', function(){
	fullscreen.classList.remove('is-open')
	modalOverlay.classList.remove('is-open')
})

fullscreen2.addEventListener('click', function(){
	fullscreen2.classList.remove('is-open')
	modalOverlay.classList.remove('is-open')
})

fullscreen3.addEventListener('click', function(){
	fullscreen3.classList.remove('is-open')
	modalOverlay.classList.remove('is-open')
})


// Dropdown menu DESKTOP
const navMobile = document.querySelector('.nav--mobile')
const navMobileMenu = document.querySelector('.nav--mobile--menu')

console.log(navMobile)
console.log(navMobileMenu)

navMobile.addEventListener('click', function(){
	navMobileMenu.classList.toggle('is-open')
})



