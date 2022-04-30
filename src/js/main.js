document.addEventListener("DOMContentLoaded", function (){
	const asidePanel = document.querySelectorAll('.aside-panel');
	const asideMenu = document.querySelector('.aside-menu');
	const navIcon = document.querySelector('.nav-icon');
    const quizBtn = document.querySelectorAll('[data-quiz]');
    const quizBlock = document.querySelector('#quiz');
	const bodyEl = document.body;
	const overlay = document.querySelector('#overlay');
	if(asideMenu){
		navIcon.addEventListener('click', function () {
            asideMenu.classList.add('active');
            overlay.classList.add('overlay--active');
            bodyEl.classList.add('noscroll');
            
			
		});
	}

    /***********quiz******** */
    if(quizBtn.length > 0){
       
        for(let item of quizBtn){
            item.addEventListener('click', function(){
                quizBlock.classList.add('active');
               
            });
        }
        
    }
    if(asidePanel.length > 0){
        for(let item of asidePanel){
            const quizClose =  item.querySelector('.btn-close');
            if(quizClose){
                quizClose.addEventListener('click', function(){
                    item.classList.remove('active');
                     overlay.classList.remove('overlay--active');
                     bodyEl.classList.remove('noscroll');
                });
            }
        }
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


	/***********quiz************* */
    if(quizBlock){
        const quizPlate = quizBlock.querySelectorAll('.quiz-plate');
        for(let i = 0; i < quizPlate.length; i++){
            const nextBtn = quizPlate[i].querySelector('.btn-round-light');
            nextBtn.addEventListener('click', function(){
                for(let plate of quizPlate){
                    plate.classList.remove('active');
                }
                quizPlate[i+1].classList.add('active');
            })
        }
    }

    /********RATING STARS****** */
    const ratingBlock = document.querySelectorAll('.rating-block');
    if(ratingBlock.length > 0){
        for(let item of ratingBlock){
            const ratingData =item.getAttribute('data-rating');
            const starItem = item.querySelectorAll('span');
            console.log(ratingData);
            for(let i =0; i<ratingData; i++){
                starItem[i].classList.add('active');
            }
        }
    }

})