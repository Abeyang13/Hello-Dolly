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
$(document).ready(getAllMessages);
//Dolly Grabs all messages that are from the past 10 minutes
function getAllMessages(){

    $.ajax({
        url: 'https://localhost:44388/api/messages',
        type: 'get',
        async: true,
        data: JSON,
        success: function (data){
            if (data[0] == null){
                document.getElementById("no-messages").innerHTML = "You Have No Messages";
            }
            else{
                for (let el in data) {
                    $("#all-messages").append(
                    `<tr>
                    <td>${data[el].Name}</td>
                    <td>${data[el].Text}</td>
                    </tr>`)
                }
            }
        },
        error: function (errorThrown){
            console.log(errorThrown);
        }
    });
}
