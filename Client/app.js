// (function($){
//     function putForm( e ){
//         var info = {
//             Name : this["name"].value,
//             Text : this["text"].value,
//         };

//         $.ajax({
//             url: 'https://localhost:44388/api/messages',
//             type: 'put',
//             contentType: 'application/json',
//             data: JSON.stringify(info),
//             success: function( data, textStatus, jQxhr){
//                 console.log("Success");        
//             },
//             error: function( jqXhr, textStatus, errorThrown ){
//                 console.log( errorThrown);
//             }
//         });
//         e.preventDefault();
//     }
//     $('#message-form').submit( putForm );
// })(jQuery);
document.getElementById("all-messages").innerHTML = "";
//Dolly Grabs all messages that are from the past 10 minutes
function getAllMessages(){
    console.log();
    $.ajax({
        url: 'https://localhost:44388/api/messages',
        dataType: 'json',
        type: 'get',
        async: true,
        data: JSON,
        success: function (data){
            var row = `<tr><th>Name</th><th>Text</th></tr>`;
            $.each(data,function (index, obj){
                row +=
                "<tr><td>"
                + obj.Name + "</td><td>"
                + obj.Text + "</td></tr>";
            });
            $("#all-messages").append(row);
        }
    });
}
$(document).ready(getAllMessages);