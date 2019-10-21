describe('Protractor Sync steps', function () {

    it('Open NonAngular js website Sync', function () {

        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');

        element(by.css('a[href*="loadAjax"]')).click();

        //prvo definisemo ExpectedConditions
        var EC = protractor.ExpectedConditions;
        
        //nakon toga prosledjujemo dva argumenta metodi ispod
        //element koji cekamo i maksimalno vreme cekanja 
        browser.wait(EC.invisibilityOf(element(by.id('loader'))),8000);

        element(by.id('results')).getText().then(function(text){
            console.log(text);
        })
 
    })
})  