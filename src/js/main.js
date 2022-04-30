document.addEventListener("DOMContentLoaded", function (){
	const asideMenu = document.querySelector('.aside-menu');
	const navIcon = document.querySelector('.nav-icon');
	const bodyEl = document.body;
	const overlay = document.querySelector('#overlay');
	if(asideMenu){
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
	}
	/*===========input RANGE========= */
	

	var sheet = document.createElement('style'),
    $rangeInput = $('.range input'),
    prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

    $rangeInput.val('1');

    document.body.appendChild(sheet);

    var getTrackStyle = function (el) {
        var curVal = el.value,
            val = (curVal - 1) * 20,
            style = '';

        // Set active label
        $('.range-labels li').removeClass('active selected');

        var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

        curLabel.addClass('active selected');
        curLabel.prevAll().addClass('selected');

        // Change background gradient
        for (var i = 0; i < prefs.length; i++) {
            style += '.range {background: linear-gradient(to right, #00B886 0%, #00B886 ' + val + '%, #fff ' + val + '%, #fff 100%)}';
            style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #00B886 0%, #00B886 ' + val + '%, #DAE7EB ' + val + '%, #DAE7EB 100%)}';
        }

        return style;
    }

    $rangeInput.on('input', function () {
        sheet.textContent = getTrackStyle(this);
    });

    $('.range-labels li').on('click', function () {
        var index = $(this).index();

        $rangeInput.val(index + 1).trigger('input');
        $(".range-results-wrap").html($(this).html());
    });
	/************************************* */


})