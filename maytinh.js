function addNumber(number) {
    document.getElementById("display").value += number;
}
function calculate(a) {
    let number = document.getElementById("display").value;
    document.getElementById("display").value = number + a
}
function result() {
    let output = document.getElementById("display").value;
    let result = eval(output);
    document.getElementById("display").value = result;

}function clean(){
    document.getElementById("display").value=0

}