var circle = new ProgressBar.Circle('#projects', {
    color: '#f34739',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function (state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var circle1 = new ProgressBar.Circle('#clients', {
    color: '#009989',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function (state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

var circle2 = new ProgressBar.Circle('#months', {
    color: '#152b3c',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    },
    step: function (state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});

$(document).ready(function () {
	$(document).scroll(function() {
		var y = $(this).scrollTop() + 300;
		var x = $('#numbers').position();
		if (y > x.top) {
			circle.animate(0.5);
			circle2.animate(0.8);
			circle1.animate(0.35);	
		};
	});
	function loop() {
		$('#triangle-bottom').css('top', '70%');
		$('#triangle-bottom').animate({
			top: '80%',
		}, 1000, function (){
			loop();
		});
	}
	loop();
});

