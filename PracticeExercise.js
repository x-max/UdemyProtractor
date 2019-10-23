describe('Protractor Sync steps', function () {

    function selectItems(product) {
        //take4 cards into list
        //go through each index in the list - and get the title = if title = desired title in that index i will select add button
        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('.card-title')).getText().then(function (text) {
                if (text == product) {
                    //Click on Add Button
                    item.element(by.css('.btn.btn-info')).click()
                }
            })
        })
    }

    it('Open NonAngular js website Sync', function () {
        browser.driver.manage().window().maximize();
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name('name')).sendKeys('Mystudents');
        element(by.css('input[name="email"]')).sendKeys('mystudent@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('password');
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        //element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male"));
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText('Submit')).click().then(function (text) {
            element(by.css('div[class*="success"]')).getText().then(function (text) {

                console.log(text);

            })
            element(by.name('name')).clear();
            element(by.name('name')).sendKeys('M').then(function () {
                element(by.css('.alert.alert-danger')).getText().then(function (text) {
                    console.log(text);
                })
            });

            //
            //Shop Page
            //
            element(by.linkText('Shop')).click();

            selectItems("Samsung Note 8");
            selectItems('iphone X');
            selectItems('Blackberry');



            element(by.partialLinkText('Checkout')).getText().then(function (text) {
                var res = text.split(" ")[2];
                expect(Number(res)).toEqual(3);
            })




        });

        element(by.partialLinkText('Checkout')).click();

        var count = 0;
        element.all(by.css('tr td.col-sm-1.col-md-1.text-center:nth-child(4)')).each(function (item) {
            item.element(by.tagName('strong')).getText().then(function (text) {
                count += Number(text.split(' ')[1]);
            })
        }).then(function(){
            console.log(count);
        })
        

    })
})  
