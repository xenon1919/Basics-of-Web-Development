// function sayHello() {
//     console.log(
//         document.getElementById("name")
//     )
//     console.log(
//         document.getElementById("name").value
//         );
// }
function sayHello() {
   var name =
    document.getElementById("name").value;
    var message = "<h2>Hello " + name + "! </h2>";
    document
    .getElementById("content")
    //.textContent=message;
    .innerHTML=message;
    if(name=="student") {
        var title =
            document
            .querySelector("#title")
            .textContent;
            title+=" is a noble gas";
            document
            .querySelector("#title")
            .textContent=title;

    }
}