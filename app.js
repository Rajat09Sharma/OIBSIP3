
function converter(){
    var data=document.getElementById("data").value;
    if(document.getElementById("celsius").checked===true){
        var result=(data*1.8)+32;
        document.getElementById("result").innerText=data+" c"+" = "+result+" f";
    }
    else if(document.getElementById("fahrenheit").checked===true){
        var result=((data-32)*5)/9;
        result=parseFloat(result.toFixed(2));
        document.getElementById("result").innerText=data+" f"+" = "+result+" c";
    }
}
