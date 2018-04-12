var elem = document.querySelector('.fixed-action-btn');
var instance = M.FloatingActionButton.init(elem, {
    direction: 'top'
});

// Or with jQuery

$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
    $('.updateButton').on('click', function () {
        var text = $('#first_name').val();
        console.log(text)
        $('.inputText').text(text)
        $('.inputText').attr('href', 'tel:' + text.replace(/-/g, ''))
    });
});