describe('Protractor Element demo', function () {

    //Allways define reusable functions outside of it blocks!!
    function Calc(a,b,c) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        //element.all zapravo puni listu sa SVIM elementima koji imaju tagName option
        element.all(by.tagName('option')).each((item) => {
            item.getAttribute('value').then((values) => {
                if(values==c){
                    item.click();
                }
            })
        })
        element(by.id('gobutton')).click();
    }

    it('Open Angular js website', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, and css for identical tags

        Calc(3,5,'MULTIPLICATION');
        Calc(15,5,'DIVISION');
        Calc(10,5,'ADDITION');
        

        //Ispisuje rezultate operacija - kod iz prethodnih primera
        element.all(by.repeater('result in memory')).each((item) => {
            item.element(by.css('td:nth-child(3)')).getText().then((text) => {
                console.log(text)
            })
        })

        // //ovde moramo da resavamo promise jer count vraca rezultat iz browsera!! 
        // element.all(by.tagName('option')).count().then((text) => {
        //     console.log(text);
        // })


    });
});
