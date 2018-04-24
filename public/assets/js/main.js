$(document).ready(function () {

    $(".search").click(e => {
        e.preventDefault();
        ebayParser();
    });

    // ajax get notes data
    const ebayParser = () => {
        $('.form-group').removeClass('has-success').removeClass('has-danger');
        $('#url').removeClass('form-control-danger').removeClass('form-control-success');
        $.ajax({
            type: "POST",
            dataType: "json",
            url: '/ebay',
            data: {
                url: $('#url').val()
            }
        }).done(data => {
            $('.form-group').addClass('has-success');
            $('#url').addClass('form-control-success');
            $('#h1').text(data.H1);
            $('#price').text(data.Price);
            data.Images.forEach(element => {
                $('#images').append(`<img src="${element}" id="images" class="img-thumbnail">`)
            });
        }).fail(() => {
            $('.form-group').addClass('has-danger');
            $('#url').addClass('form-control-danger');
            console.log("Sorry. Server unavailable.");
        });
    };
});
