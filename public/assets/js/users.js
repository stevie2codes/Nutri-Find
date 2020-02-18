

$(document).ready(function () {

    $(".user-btn").on("click", event => {
        event.preventDefault();
        let newUser = {
            user_name: $("#user-name").val().trim()
        };
        $.ajax("/api/newUser", {
            type: "POST",
            data: newUser,
        }).then(data => {
            console.log(data);
            window.location.href = "/api/newUser";
        });
    });



    $("#destroy").on("click", function () {
        let id = $(this).data("id");
        console.log(id);
        $.ajax("/api/newUser/" + id, {
            type: "DELETE"
        }).then(function () {
            location.reload();
        });
    });
});
