function addNumber(number) {
    document.getElementById("hien_thi").value += number;
    
}
function calculate(a) {
    let number = document.getElementById("hien_thi").value;
    document.getElementById("hien_thi").value = number + a
}
function result() {
    let output = document.getElementById("hien_thi").value;
    let result = eval(output);
    document.getElementById("hien_thi").value = result;

}