var open = true;

$(document).ready(() => {
	$('.fa-bars').on('click', (event) => {
		if (open) {
			$('.left-menu').addClass('hide');
			$('.main-block').addClass('full');
		}
		else {
			$('.left-menu').removeClass('hide');
			$('.main-block').removeClass('full');
		}

		open = !open;

		//var name = $(this).data('name') //искать по id
		
	});

	$('.left-menu li').on('click', (event) => {
		const name = $(event.currentTarget).data('name');
		console.log(name);

		$('.description').hide();
		$('#' + name).show();
	});
	$('.header-in-userbar li').hover((event) => {
		console.log(event.currentTarget);
		
		$(event.currentTarget).children("em").animate({opacity: "show"}, "fast");
    }, (event) => {
        $(event.currentTarget).children("em").animate({opacity: "hide"}, "fast");
    });

    const pos = document.getElementById('time');
    function time() {
    	let today = new Date();
    	let hours_ = today.getHours();
    	let min_ = today.getMinutes();
    	let sec_ = today.getSeconds();
    	let zerom = zeros = '';
    	if(min_ < 10) zerom = '0';
    	if(sec_ < 10) zeros = '0';
    	pos.innerHTML = hours_+' '+zerom+min_+' '+zeros+sec_;
    }
    if(pos) {
    	setInterval(time, 1);
	}

});