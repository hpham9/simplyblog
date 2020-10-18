function Login() {
    if (document.getElementById("txtUsername").value == "simplyblog" && document.getElementById("txtPassword").value == "password") {
        return true;
    } else {
        alert("Incorrect credentials.");
        return false;
    }
}

function Post() {
    var txtName = document.getElementById("txtName");
    var txtTitle = document.getElementById("txtTitle");
    var txtContent = document.getElementById("txtContent");

    postName.innerHTML = txtName.value;
    postTitle.innerHTML = txtTitle.value;
    postContent.innerHTML = txtContent.value;
}