describe('Protractor baby group',function() {
    it('The non Angular page', () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("http://qaclickacademy.com/practice.php");

        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(3000);
        })
          
        browser.switchTo().frame("courses-iframe");
        element(by.css("a[href*='sign_in']")).getText().then(function(text){
            console.log(text);
        })
        
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");

        element(by.css("a[href*='loadAjax'")).click();
        var EC = protractor.ExpectedConditions;

        browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);
        element(by.id("results")).getText().then(function(text){
            console.log(text);
        })



    });
});