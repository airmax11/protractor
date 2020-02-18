describe('Actions demo',function() {
    it('Open Posse website', function() {
        browser.get("https://posse.com");
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.sleep(3000);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
            browser.sleep(3000);
        });

    });

    it('The non Angular page', () => {
        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(3000);
        })
    });
});