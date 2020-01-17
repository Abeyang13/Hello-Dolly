//Dolly Grabs all messages that are from the past 10 minutes
function getAllMessages(){
    $.ajax({
        url: 'https://localhost:44388/api/messages',
        type: 'get',
        async: true,
        data: JSON,
        success: function (data){
            console.log(data);
            $("#all-messages tr").remove();
            $("#no-messages").empty();
            if (data.length == 0){
                document.getElementById("no-messages").innerHTML = "No Messages";
            }
            else{
                var row = `<tr><th>Name</th><th>Message</th></tr>`
                for (let el in data) {
                    $("#all-messages").append(
                    `<tr>
                    <td>${data[el].Name}</td>
                    <td>${data[el].Text}</td>
                    </tr>`)
                }
                $("#header").append(row);
            }
        },
        error: function (errorThrown){
            console.log(errorThrown);
        }
    });
}
$(document).ready(function(){
    setInterval(getAllMessages,1000);
   });

