
describe("payments.js tests with build up and clean up", function(){
    beforeEach(function(){
        // build up code
        tipAmtInput.value = '30';
        billAmtInput.value = '300';
    });

    it("Should return undefined when bill is 0 or less but not when greater than zero on createCurPayment", function(){
        billAmtInput.value = '-5'; 
        expect(createCurPayment()).toEqual(undefined); 

        billAmtInput.value = '0'; 
        expect(createCurPayment()).toEqual(undefined); 
        
        billAmtInput.value = '1'; 
        expect(createCurPayment()).not.toEqual(undefined); 
        
    });   
    
    it('Should add a single TR to paymentTbody on appendPaymentTable', function(){
        const curPayment = createCurPayment(); 
        appendPaymentTable(curPayment); 
        expect(paymentTbody.children.length).toEqual(1); 
        expect(paymentTbody.children[0].tagName).toEqual("TR"); 
    }); 


    // NOTE updateSummary is invoked within submitPaymentInfo
    // updateSummary is the subject of this test, but only submitPaymentInfo 
    // is invoked directly because it provides the build up
    it('Should change values in summaryTds leaving none null on updateSummary', function(){
        
        // updateSummary within submitPaymentInfo()
        submitPaymentInfo();
        let td1 = summaryTds[0].innerText; 
        let td2 = summaryTds[1].innerText; 
        let td3 = summaryTds[2].innerText; 

        billAmtInput.value = 1000; 
        tipAmtInput.value = 50;

        // updateSummary within submitPaymentInfo
        submitPaymentInfo();
        let tdA = summaryTds[0].innerText; 
        let tdB = summaryTds[1].innerText; 
        let tdC = summaryTds[2].innerText;

        expect([!!td1, !!td2, !!td3, !!tdA, !!tdB, !!tdC]).not.toContain(false); 
        expect(td1).not.toEqual(tdA);
        expect(td2).not.toEqual(tdB);
        expect(td3).not.toEqual(tdC);

    });

    it('should reset inputs on submitPaymentInfo()', function(){
        submitPaymentInfo();
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    });
        
    

    afterEach(function(){
        // clean up code
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerHTML = '';
    });
});