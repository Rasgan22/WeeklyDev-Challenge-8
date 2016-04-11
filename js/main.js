var circle = new ProgressBar.Circle('#projects', {
    color: '#f34739',
    strokeWidth: 2,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: 'Big projects'
    },
    step: function (state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});
circle.animate(0.5);
var circle = new ProgressBar.Circle('#clients', {
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
circle.animate(0.35);
var circle = new ProgressBar.Circle('#months', {
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
circle.animate(0.8);