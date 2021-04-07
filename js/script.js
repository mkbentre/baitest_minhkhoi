$("#amount").focusin(function() {
    $('label.amount-placeholder').css("display", "none");
});

$("#amount").focusout(function() {
    $('label.amount-placeholder').css("display", "inline-block");
});

$("#evaluate-image").change(function () {
    var data = $("#evaluate-image").val();
    value = data.split(/.*:\\[a-zA-Z]+\\/);
    $(".evaluate-image").html(value);
});