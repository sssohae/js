// console.log(1);
// document.getElementById('plus').addEventListener('click', plus);

// function plus(e){
//     let result=parseInt(document.getElementById('first')) + parseInt(document.getElementById('last'))

//     document.getElementById('result') = result;

//     console.log(document.getElementById('result'));
// }

document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById('plus').addEventListener('click', function(){
    //   let firstValue = first.value; 
    //   let lastValue = document.getElementById('last').value;  
    //   document.getElementById('result').value = parseInt(firstValue) + parseInt(lastValue);
    // });
    document.querySelectorAll('button').forEach(function (item) {
        item.addEventListener('click', function () {
            let result, first, last = 0;

            first=document.getElementById('first').value;
            last=document.getElementById('last').value;

    
            if (this.getAttribute('id') == 'plus') {
                result = parseInt(first) + parseInt(last);
            } else if (this.getAttribute('id') == 'minus') {
                result = parseInt(first) - parseInt(last);
            } else if (this.getAttribute('id') == 'multi') {
                result = parseInt(first) * parseInt(last);
            } else if (this.getAttribute('id') == 'divide') {
                result = parseInt(first) / parseInt(last);
            }
            document.getElementById('result').value =result;
        })


    })

})