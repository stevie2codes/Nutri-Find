$(document).ready(function () {

    const userName = $("#user-name");
    const userList = $("tbody");
    const userContainer = $(".user-container");

    $(document).on("click", ".user-btn", handleUserFromSubmit);
    $(document).on("click", ".delete-user", handleDelete);

    getUsers();

    function handleUserFromSubmit(event) {
        event.preventDefault();
        if (!userName.val().trim()) {
            return;
        }
        insertUser({
            username: userName.val().trim()
        });
    }

    function insertUser(userData) {
        console.log(userData);
        
                    $.ajax({
                        method: 'POST',
                        url: "/api/users",
                        contentType: "application/json",
                        dataType: "json",
                        //data: userData
                    }).then(
                        (data) => {
                            getUsers();
                            console.log("YOO");
                        }
                          
                    );
    }

    function createUserRow(userData) {
        console.log(userData);
        let newTr = $("<tr>");
        newTr.data("user", userData);
        newTr.append("<td>" + userData.user_name + '</td>');
        if (userData.User) {
            newTr.append("<td> " + userData.User.length + '</td>')
        } else {
            newTr.append("<td>0</td>");
        }

        newTr.append("<td><a href=' /recipe?user_id=" + userData.id + "'>Go to Recipes</a></td>");
        newTr.append("<td><a href='/create?user_id=" + userData.id + "'>Create a Recipe</a></td>");
        newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
        return newTr;
    }

    
    function getUsers() {
        $.ajax({
            method: 'GET',
            url:"/api/users",
            dataType: 'json',
            contentType: 'application/json'
                }).then(data =>{
            let rowAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowAdd.push(createUserRow(data[i]));
            }
            console.log(data);
            renderUserList(rowAdd);
            userName.val("");
                      });
                };
                

    function renderUserList(rows) {
        userList.children().not(":last").remove();
        userContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            userList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }

    function renderEmpty() {
        let alertDiv = $("<div>");
        alertDiv.addClass("alert");
        alertDiv.text("You must create a user name before you create a new Recipe");
        userContainer.append(alertDiv);
    }

    function handleDelete() {
        let listItem = $(this).parent("td").parent("tr").data("user");
        let id = listItem.id;
        $.ajax({
            method: "DELETE",
            url: "/api/users/" + id
        }).then(getUsers);
    }
});
