const obj = {
    'a':1,
    'b-a':2,
    '1c':3,
    'd1':4
}

console.log(obj.a);
console.log(obj.b-a);//obj['b-a'] 로 하면 나온다
// console.log(obj.1c); // key 값은 숫자로 시작할 수 없다
console.log(obj.d1);

const obj2 = {
    a:1,
    b:2
}

const a = 'b'

console.log(obj2[a]); // 2  [] 는 변수로 접근한 것
console.log(obj2.a);// 1   . 은 속성이름으로 접근