function FullColorRGB(){
    var rangeRedColorValue = document.querySelector('#rRedColor').value;
    document.querySelector('#vRedColor').value = rangeRedColorValue;
    var rangeGreenColorValue = document.querySelector('#rGreenColor').value;
    document.querySelector('#vGreenColor').value = rangeGreenColorValue;
    var rangeBlueColorValue = document.querySelector('#rBlueColor').value;
    document.querySelector('#vBlueColor').value = rangeBlueColorValue;

    document.querySelector('#targetRGB').style.backgroundColor = 'rgb('+rangeRedColorValue+','+rangeGreenColorValue+','+rangeBlueColorValue+')';
}

window.onload = FullColorRGB();