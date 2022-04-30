document.addEventListener("DOMContentLoaded", function (){
	const asideMenu = document.querySelector('.aside-menu');
	const navIcon = document.querySelector('.nav-icon');
	const bodyEl = document.body;
	const overlay = document.querySelector('#overlay');
	navIcon.addEventListener('click', function () {
		if(this.classList.contains('nav-icon--active')){
			this.classList.remove('nav-icon--active');
			asideMenu.classList.remove('aside-menu--active');
			overlay.classList.remove('overlay--active');
			bodyEl.classList.remove('noscroll');
		}else{
			this.classList.add('nav-icon--active');
			asideMenu.classList.add('aside-menu--active');
			bodyEl.classList.add('noscroll');
			overlay.classList.add('overlay--active');
		}
		

		
	});

	



})