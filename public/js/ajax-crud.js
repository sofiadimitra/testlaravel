
function ajaxSubmit() {
$('#loading').show();
$('#submit').attr('disabled', 'disabled');
var name = $('#name').val();
var subject = $('#subject').val();
var email = $('#email').val();
var message = $('#message').val();
var _token = $('[name="_token"]').val();


var data = 'name=' +name+ '&subject=' +subject+ '&email=' +email+ '&message=' +message;

$.ajax({
    url: '/',
    type: 'get',
    dataType: 'json',
    data: data,
    cache: false,
    success: function(response) {
            $('#loading, #contact, .message').fadeOut('slow');
            $('#response').html('<h3>'+Lang.get('index.email_sent')+'</h3>').fadeIn('slow');
    },
    error: function(jqXHR, textStatus, errorThrown) {
            $('#loading').fadeOut('slow');
            $('#submit').removeAttr('disabled');
            $('#response').text('Error Thrown: ' +errorThrown+ '<br>jqXHR: ' +jqXHR+ '<br>textStatus: ' +textStatus ).show();
    }
});
return false;
}