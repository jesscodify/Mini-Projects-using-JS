function check(){
    let age = document.getElementById('age');
    if (age.value >= 18){
        document.getElementById('result').innerText = "You are eligible to vote";
    }
    else{
        document.getElementById('result').innerText =  "You are not eligible to vote yet"
    }
}