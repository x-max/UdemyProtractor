describe('Chain locators demo', function() {

    it('Open Angular js website', function() {

///Ne radi sajt, vratiti se na ovo ukoliko poprave 
//lesson 49

        browser.get('http://www.globalsqa.com/demo-site/auto-complete/');
        browser.actions().mouseMove(element(by.model('$mdAutocompleteCtrl.scope.searchText')).sendKeys('California')).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){

            browser.sleep(3000);
        });
    
  
    });
});