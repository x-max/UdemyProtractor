describe('Protractor Alert steps', function () {

    it('Open NonAngular js website Alerts', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://qaclickacademy.com/practice.php');
        element(by.id('confirmbtn')).click();
        browser.switchTo().alert().accept().then(function () {
            browser.sleep(3000);
        });



    });


});
