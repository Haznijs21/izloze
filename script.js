const vardi = ['Andrew Newik', 'John Tree', 'Egil Latvian', 'Sasha Krasnow', 'John Quick'];
const balvas = ['Kartons', 'Kaste', 'Miljons', 'viens euro', 'rolltons'];
const naudaKopa = 100000;
let uzvaretajuSkaits = vardi.length;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
for(let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.floor(Math.random() * uzvaretajuSkaits);
    let uzvaretajs = vardi[rand];

    let rand1 = Math.floor(Math.random() * uzvaretajuSkaits);
    let balva = balvas[rand1];
    while(balva === 'Miljons') {
        let rand1 = Math.floor(Math.random() * uzvaretajuSkaits);
        let balva = balvas[rand1];
    }
    rindas.innerHTML+= `
    <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        <td>${balva}</td>
    </tr>`
}
