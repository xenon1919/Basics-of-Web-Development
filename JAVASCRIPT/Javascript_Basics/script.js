let btn= document.querySelector('button');
btn.addEventListener('click',inputMsg);
function inputMsg() {
    let name =prompt('Enter name of the student: ')
    btn.textContent='Name: ' + name;
}