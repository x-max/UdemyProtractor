describe('Chain locators demo', function() {

    it('Open Angular js website', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      //repeater, chain locators, and css for identical tags
    
            let add = element(by.model('operator')).element(by.css('option:nth-child(1)'));
            let devide = element(by.model('operator')).element(by.css('option:nth-child(2)'));
            let module = element(by.model('operator')).element(by.css('option:nth-child(3)'));
            let multiply = element(by.model('operator')).element(by.css('option:nth-child(4)'));
            let minus = element(by.model('operator')).element(by.css('option:nth-child(5)'));
            
            

            element(by.model('first')).sendKeys('5');
            minus.click();
            element(by.model('second')).sendKeys('10');
            element(by.id('gobutton')).click();



            expect(element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText()).toBe('-5');
            
  
    });
});