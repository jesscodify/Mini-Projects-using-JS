function convert(){
    let dollar = document.getElementById('dollar');
    let rupees = dollar.value * 82.18;
    document.getElementById('rupees').innerText = rupees + "INR";
}