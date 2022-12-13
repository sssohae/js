console.log(table);
table.makeTable();
class Estimate {
    //생성자.
    constructor(unit){
        this.unit = unit; //대체로 생성자가 초기값
    }
    //메소드.
    getEstimate(unitType, width, height){
        let priceInfo = this.unit.find(item => item.type == unitType); //find = foreach
        console.log(priceInfo)
        return priceInfo.price * width * height;
    }
    addUnit(unit){
        this.unit.push(unit); // 배열추가 push
    }
}
let unitInfo = [{type:"wood", price:100},{type:"iron", price:300},{type:"plastic", price:200}] //배열임 
const estimator = new Estimate(unitInfo); //참조값 . 틀을 가지고 쓰냐
estimator.addUnit({type:'ceramic', price: 400});
let result = estimator.getEstimate('ceramic', 20, 30);
console.log('결과값은 ' + result);

let esti = { //객체. 자바의 클래스. 이거 많이씀 . 꼭 기억 
    unit:[],
    getEstimate:function(unitType, width, height){
        let priceInfo = this.unit.find(item => item.type == unitType); //find = foreach
        console.log(priceInfo)
        return priceInfo.price * width * height;
    },
    addUnit: function(unit){
        this.unit.push(unit);
    }        
}; //인스턴스
esti.unit = unitInfo;
result = esti.getEstimate('wood', 20, 30);
console.log('결과값은 ' + result);
// let esti2 = {}; 