//table.js
const table = { //이 기능을 다른 자스에서 가능 
    initDate: [], //객체안에 데이터 넣어서 표만들기 
    // {name:"홍길동", age:20}, {name:"김민수", age:22}
    makeTable: function(){
       this.table = document.createElement('table'); 
       this.table.setAttribute('border',1);
       this.makeHead();
        //this붙이면 필드. 객체안에서 다 쓸수있다. 안붙이면 변수. 거기서만 
        this.makeBody();
        return this.table; 
    },
    makeHead: function(){
        this.thead = document.createElement('thead'); //알아서 필드 추가됨 
         let tr = document.createElement('tr');
         let fields = this.initDate[0]; //대표 필드만들려고 첫데이터 가져온것뿐임
         for (let prop in fields){
            let th = document.createElement('th');
            th.innerText = prop.toUpperCase();
            tr.append(th);
        }
        this.thead.append(tr);
        this.table.append(this.thead);
    },
    makeBody: function(){
        let tbody = document.createElement('tbody');
        this.initDate.forEach(function(item){ //function 안 this는 window객체
            //item:{name:"홍길동", age:20}
            let tr = document.createElement('tr');
            for(let prop in item){
                let td = document.createElement('td');
                td.innerText = item[prop];
                tr.append(td);
            }
            tbody.append(tr);
        });
        // this.tbody=tbody;
        this.table.append(tbody);
},
    makeTr: function(){

    }
}

//export default table;