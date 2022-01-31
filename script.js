const vardi = ['Andrew Newik', 'John Tree', 'Egil Latvian', 'Sasha Krasnow', 'John Quick'];
const balvas = ['Kartons', 'Kaste', 'viens euro', 'rolltons', 'Miljons'];
const naudaKopa = 100000;
let uzvaretajuSkaits = vardi.length;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
let miljons = 0;
for(let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.floor(Math.random() * uzvaretajuSkaits);
    let uzvaretajs = vardi[rand];

    let rand1 = Math.floor(Math.random() * uzvaretajuSkaits);
    let balva = balvas[rand1];
    if (balva == 'Miljons' && miljons < 1) {
        miljons++;
    } else if (miljons >= 1) {
        rand1 = Math.floor(Math.random() * 4);
        balva = balvas[rand1];
    }
    rindas.innerHTML+= `
    <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        <td>${balva}</td>
    </tr>`
}
