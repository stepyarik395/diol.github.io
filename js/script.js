$(".count-value-input").click(function(){
    this.value = "";


});

$(document).ready(function() {
    $('.button-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1 + "штк.";
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.button-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1 + "штк.");
        $input.change();
        return false;
    });
});






