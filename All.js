describe('Chain locators demo', function () {

    //Allways define reusable functions outside of it blocks!!
    function Add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();

    }

    it('Open Angular js website', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators, and css for identical tags


        Add(2,3);
        Add(21,3);
        Add(2,13);
        Add(12,3);
        Add(2,33);

        //ovde moramo da resavamo promise jer count vraca rezultat iz browsera!!
        element.all(by.repeater('result in memory')).count().then((text) => {
            console.log(text);
        })

        element.all(by.repeater('result in memory')).each((item) => {
            item.element(by.css('td:nth-child(3)')).getText().then((text) => {
                console.log(text)
            })
        })






    });
});
