const vardi = ['Andrew Newik', 'John Tree', 'Egil Latvian', 'Sasha Krasnow', 'John Quick'];
const balvas = ['Kartons', 'Kaste', 'Miljons', 'viens euro', 'rolltons'];
const naudaKopa = 100000;
let uzvaretajuSkaits = 5;
let rand = Math.floor(Math.random() * 5);
let rand1 = Math.floor(Math.random() * 5);
console.log(vardi[rand] + " uzvareja " + balvas[rand1]);