document.addEventListener('DOMContentLoaded', function() {
    var changeBackgroundBtn = document.getElementById('changeBackgroundBtn');

    function changeBackground() {
        var colors = ['#FF5733', '#33FF57', '#5733FF', '#33A4FF', '#FF33F7'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }

    changeBackgroundBtn.addEventListener('click', changeBackground);
});
