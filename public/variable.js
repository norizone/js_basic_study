var varValue1 = 'グローバルスコープ/windowオブジェクトに入る varValue1';
let letValue1 = 'グローバルスコープ/windowオブジェクトに入る letValue1'

{
  var varValue2 = 'ブロックスコープ varValue2';
}

var eventSample = () =>{
  var varValue3 = '関数スコープ value3'
  console.log('eventSample')
}

eventSample();