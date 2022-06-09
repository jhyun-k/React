const arr = ['사과','바나나','귤','배']

/* for in 객체와 배열 사용 가능, 객체와 배열을 순환하면서 인자를 뽑는다 
i의 초기값은 0으로 자바스크립트 엔진에서 초기화 된 상태*/

for(let i in arr){
    console.log(i);
    console.log(arr[i]);
}

const obj = {
    name : '사과',
    price : '1500',
    weight : '20g'

}
for(let k in obj){
    const value = obj[k];
    console.log(k);
    console.log(value);
}