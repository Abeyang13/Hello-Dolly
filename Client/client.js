//PUT request so that client can message Dolly
(function($){
    function putForm( e ){
        var info = {
            Name : this["name"].value,
            Text : this["text"].value
        };
        if(info.Name == '' || info.Text == '')
        {
            $('#error-message').html("All Fields are required")
        }
        else
        {
            $('#error-message').html('');
            $.ajax({
                url: 'https://localhost:44388/api/messages',
                type: 'put',
                contentType: 'application/json',
                data: JSON.stringify(info),
                success: function(data){
                    $("form").trigger("reset");
                    $('#success-message').fadeIn().html(data);
                    setTimeout(function(){
                        $('#success-message').fadeOut('slow');
                    }, 2000);
                },
                error: function( errorThrown ){
                    console.log( errorThrown);
                }
            });
            e.preventDefault();
        }
    }
        $('#message-form').submit( putForm );        
})(jQuery);