

describe('helpers.js tests', function () {

    it('Should add a single td element to the passed tr on appendTd()', function () {
        const tr = document.createElement('tr');
        const value = 'placeholder';
        appendTd(tr, value);

        expect(tr.children.length).toEqual(1);
        expect(tr.children[0].tagName).toEqual('TD');
    });

    it('Should return an integer on calculateTipPercent()', function () {
        for (let i = 0; i < 100; i++) {
            let tipAmt = Math.round(Math.random() * 1001);
            let billAmt = Math.round(Math.random() * 1000 + .6);
            let tipPer = String(calculateTipPercent(billAmt, tipAmt));
            expect(tipPer.includes('.')).not.toEqual(true);
            expect(tipPer.includes('NaN')).not.toEqual(true);
            expect(tipPer.includes('Infinity')).not.toEqual(true);
        }
    })

    it('should sum each type on sumPaymentTotal()', function () {
        bills = [];
        tips = [];
        percents = []
        allPayments = {};

        for (let i = 0; i < 100; i++) {
            allPayments[i] = {
                billAmt: String(Math.round(Math.random() * 1000 + 1)),
                tipAmt: String(Math.round(Math.random() * 1001 + 1)),
                tipPercent: String(calculateTipPercent(billAmt, tipAmt))
            }
            bills.push(+(allPayments[i].billAmt));
            tips.push(+(allPayments[i].tipAmt));
            percents.push(+(allPayments[i].tipPercent));
        }

        let billTotal = sumPaymentTotal('billAmt');
        let tipTotal = sumPaymentTotal('tipAmt');
        let tipPerTotal = sumPaymentTotal('tipPercent');
        expect(billTotal).toEqual(bills.reduce((a,b)=>a+b), 0);
        expect(tipTotal).toEqual(tips.reduce((a,b)=>a+b), 0);
        expect(tipPerTotal).toEqual(percents.reduce((a,b)=>a+b), 0);


        allPayments = {};
    });

    it('Should increase the number of tds in tr by 1 on appendDeleteBtn()', function(){
        const tr = document.createElement('tr'); 
        appendDeleteBtn(tr); 

        expect(tr.children.length).toEqual(1); 
        expect(tr.children[0].tagName).toEqual('TD');
    });

})