function handleSubmit(){
    let data = document.querySelector("#panNumber").value;
    let result = document.getElementById("result");
    let charPattern = /\D/
    let digitPattern = /\d/
    const isUpperCase = str => /[A-Z]/.test(str);;
    if(data.length  === 10 && isUpperCase(data)){
        if(charPattern.test(data.substring(0,5)) && digitPattern.test(data.substring(5,9)) && charPattern.test(data.substring(9,10))){
            result.innerText = "Submitted Successfully!";
            result.className = "text-green-600 font-semibold";
        }else{
            result.innerText = "Invalid PAN Number"
            result.className = "text-red-600 font-semibold";
        }
    }else{
        result.innerText = "Invalid PAN Number"
        result.className = "text-red-600 font-semibold";
    }
}