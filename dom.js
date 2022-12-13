//dom.js

var fruits = [];
fruits.push({
    name: '사과',
    price: 1000,
    farm: '김해농장',
    farmer: '홍길동'
});
fruits.push({
    name: '오렌지',
    price: 1500,
    farm: '성주농장',
    farmer: '김민기'


});
fruits.push({
    name: '배',
    price: 2000,
    farm: '김해농장',
    farmer: '박성윤'

});
fruits.push({
    name: '복숭아',
    price: 2500,
    farm: '성주농장',
    farmer: '최민식'

});

//for(const fruit of fruits){
//    console.log(fruit)
//}
let apple = fruits[0];
console.log(apple);
for (let prop in apple) {
    console.log(prop, apple[prop]);
} //요소 많으면 이렇게 

function anonym() {
    console.log(this); //제일 상위 존재하는 요소. 윈도우객체 . function=윈도우/event=대상  
}
anonym();

document.addEventListener('DOMContentLoaded', init); //익명함수 ); //이벤트유형,이벤트핸들러
document.addEventListener('click', function (e) {
    e.stopPropagation(); //전파막음
    alert('click');
}, false); //bubbling : 하위->상위 <->true capturing 상위->하위   
//반복문이해 중요 

function init() {
    //input태그의 click 이벤트등록 
    console.log(document.querySelectorAll('form>input[name]')) //name 있는애만 
    document.querySelectorAll('form>input[name]').forEach(function (item) { //대상 item=input
        console.log(item);
        item.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })

    //submit버튼에 클릭 
    document.querySelector('form>input[type=submit]').addEventListener('click', addItem);

    createTable(); //테이블목록 보여주기 
}

function addItem(e) { //이벤트가 매개값으로 넘어감 
    e.preventDefault(); //기본기능차단 
    e.stopPropagation();
    console.log('addItem call');
    let nameVal = document.getElementById('fruit').value;
    let priceVal = document.getElementById('price').value;
    let farmVal = document.getElementById('farm').value;
    let farmerVal = document.getElementById('farmer').value;
    console.log(nameVal, priceVal, farmVal, farmerVal);
    let obj = {}; // new object();
    obj.name = nameVal
    obj.price = priceVal;
    obj.farm = farmVal;
    obj.farmer = farmerVal;
    document.querySelector('tbody').appendChild(createTr(obj)); //obj, 쿼라셀렉터는 1개만 
    //초기화
    document.getElementById('fruit').value = '';
    document.getElementById('price').value = '';
    document.getElementById('farm').value = '';
    document.getElementById('farmer').value = '';
}


// document.querySelector('tbody>tr').addEventListener('click', viewItem);


// function viewItem(e) {
//     e.stopPropagation();

//     let nameVal = 
//     let priceVal = document.querySelector('tbody>tr').children[1].innerText
//     let farmVal = document.querySelector('tbody>tr').children[2].innerText
//     let farmerVal = document.querySelector('tbody>tr').children[3].innerText

//     let obj={};
//     obj.name = nameVal
//     obj.price = priceVal;
//     obj.farm = farmVal;
//     obj.farmer = farmerVal;
//     document.querySelector('form').appendChild(obj);

//     document.getElementById('fruit').value = nameVal
//     document.getElementById('price').value = priceVal
//     document.getElementById('farm').value = farmVal
//     document.getElementById('farmer').value = farmerVal
// };


function createTr(val = {
    name: "바나나",
    price: 1000,
    farm: "수입",
    farmer: "수입"
}) { //객체 val의 초기값을 객체타입으로 선언하겠다 
    var tr = document.createElement('tr');
    tr.addEventListener('click', showDetail);
    tr.addEventListener('mouseover', function() {
        tr.setAttribute('style', 'background-color:yellow');
    })

    tr.addEventListener('mouseout', function() {
        tr.removeAttribute('style', 'background-color');
    })

    //td 반복생성하기
    for (let prop in val) { //객체일경우. 배열이면 for of 
        var td1 = document.createElement('td');
        var txtNode = document.createTextNode(val[prop]); // fruits[idx].name
        td1.appendChild(txtNode);
        tr.appendChild(td1);
    }
    //button 추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트전파 차단 . button만. 다큐에는 이벤트 ㄴ 
        console.log(this); //이때는 이벤트를 받는 녀석 가리킴 
        this.parentElement.parentElement.remove();
    }, false);
    btn.innerText = '삭제'; //<button>삭제</button>
    td.appendChild(btn);
    tr.appendChild(td);

    //체크박스 추가
    let td2 = document.createElement('td');
    td2.setAttribute('style','text-align:center');
    let btn2 = document.createElement('input');
    btn2.setAttribute('type','checkbox');
    btn2.setAttribute('checked','checked');
    btn2.addEventListener('click', function (e) {
        e.stopPropagation(); //이벤트전파 차단 . button만. 다큐에는 이벤트 ㄴ 
    }, true);
    td2.appendChild(btn2);
    tr.appendChild(td2);
    return tr;


}

function showDetail(e) {
    e.stopPropagation();
    document.getElementById('fruit').value = this.children[0].innerText;
    document.getElementById('price').value = this.children[1].innerText;
    document.getElementById('farm').value = this.children[2].innerText;
    document.getElementById('farmer').value = this.children[3].innerText;
}

// let delSelected = 'hhhhhh'; 이거 중복이라고 안되는 이유 

function delSelected(e){ //함수 선언식.
    e.stopPropagation();
    console.log('hhh');
    // document.querySelectorAll('tbody>tr').forEach(function(item){
    //     console.log(item);
    //     console.log(item.querySelector('input[type=checkbox]').getAttribute('checked'))
    //     console.log(item.querySelector('input[type=checkbox]').checked); //js 속성으로 가져옴 
    //     if(item.querySelector('input[type=checkbox]').checked){ //값있으면 트루 
    //         item.remove();
    //     }

    // }); //retrun false 기본기능차단
    document.querySelectorAll('tbody>tr>td>input[type=checkbox]:checked').forEach(
        function (item){
            console.log(item);
            item.parentElement.parentElement.remove();
        }

    ); //: 추가속성이란뜻
}
// let anonymFnc = function(){ // 함수 표현식. 실제로는 이렇게 
//     console.log('aaaaa')
// }
// anonymFnc();








//캡처링. 하위부터 찾아감, 버블링. 상위부터  
function createTable() {
    //이렇게 안됨 . 순서중요

    //table의 하위에 생성.
    var table = document.createElement('table'); //let 해도됨 ele = tag라 보면 됨 
    table.setAttribute('border', '1');

    //createHeader() 반환값을 tableTag의 하위에 추가 
    table.appendChild(createHeader());
    //createBody() 반환값을 tableTag의 하위에 추가 
    table.appendChild(createBody());
    document.body.appendChild(table); //append 해도됨 

}

function createHeader() {
    //thead > tr > th*5 => return thead;
    //thead>tr>th*5 //css 선택자 
    let titles = ['과일', '가격', '농장', '생산자', '삭제']
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    titles.forEach(function (item) {
        let th = document.createElement('th');
        th.innerText = item;
        tr.appendChild(th);
    })

    thead.appendChild(tr);


  //  return thead; //함수를 호출한 영역으로 thead반환

        //체크박스 추가
        let td2 = document.createElement('td');
        td2.setAttribute('style', 'text-align:center');
        let btn2 = document.createElement('input');
        btn2.setAttribute('type', 'checkbox');
        btn2.setAttribute('checked', 'checked');
        btn2.addEventListener('click', function (e) {
            e.stopPropagation(); //이벤트전파 차단 . button만. 다큐에는 이벤트 ㄴ 
            let chks = document.querySelectorAll('tbody input[type=checkbox]'); // 공백 : 하위녀석
            chks.forEach((item, idx, ary) => { //람다 화살표함수. 매개값=> 실행
                console.log(item);
                item.checked = btn2.checked;
            });
        }, false);
        td2.appendChild(btn2);
        tr.appendChild(td2);
        thead.appendChild(tr);
        return thead;


}

function createBody() {
    var tbody = document.createElement('tbody');

    //fruits배열요소의 갯수만큼 생성 
    fruits.forEach(function (item, idx, ary) {

        tbody.appendChild(createTr(item));
    });

    return tbody;
}

// function createTr(val = {
//     name: "바나나",
//     price: 1000,
//     farm: "수입",
//     farmer: "수입"
// }) { //객체 val의 초기값을 객체타입으로 선언하겠다 
//     var tr = document.createElement('tr');
//     //td 반복생성하기
//     for (let prop in val) { //객체일경우. 배열이면 for of 
//         var td1 = document.createElement('td');
//         var txtNode = document.createTextNode(val[prop]); // fruits[idx].name
//         td1.appendChild(txtNode);
//         tr.appendChild(td1);
//     }
//     //button 추가
//     let td = document.createElement('td');
//     let btn = document.createElement('button');
//     btn.addEventListener('click', function (e) {
//         e.stopPropagation(); //이벤트전파 차단 . button만. 다큐에는 이벤트 ㄴ 
//         console.log(this); //이때는 이벤트를 받는 녀석 가리킴 
//         this.parentElement.parentElement.remove();
//     }, false);
//     btn.innerText = '삭제'; //<button>삭제</button>
//     td.appendChild(btn);
//     tr.appendChild(td);
//     return tr;
// }





function createUL() {
    //ul의 하위에 생성. 
    var ul = document.createElement('ul');
    fruits.forEach(function (item, idx, ary) { //매개값으로 함수받음. forEach중요! 배열에 들어있는 값/인덱스/배열자체리턴 
        // if(idx %2 == 0) //특정부분만 하고 싶으면 
        console.log(item);
        var li = document.createElement('li');
        var txtNode = document.createTextNode(item.name + ', ' + item.price);
        li.appendChild(txtNode); //자식
        ul.appendChild(li);
    })

    console.log(ul);

    document.body.appendChild(ul);
}

//hw : 전체선택/해제
// js기반 아작스할거임

// 서버프로그램만듦
// 데이터받을꺼임 페이지를 그려줄꼬

// js 좀 기억해야함
// dom 


// 참조값을 가지는게 obj. 배열도!

// ul의 하위 자식 엘리


// js는 데이터만 가져와서


// 단일여러개만들고 조합해

// jsp js 

// 내일은 서버 할꺼임 db survlet 