
describe('Project 1 practice', () => {
    it('Open the page and test it', () => {
        browser.get("https://qaclickacademy.github.io/protocommerce/")
        element(by.name('name')).sendKeys("Mystudents");
        element(by.id('exampleInputPassword1')).sendKeys("123456");
        element(by.css('input[id="exampleCheck1"]')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option', 'Female')).click();
        element.all(by.name("inlineRadioOptions")).get(1).click();
        element(by.css('input[name ="email"]')).sendKeys("test@test.com").then(function(){browser.sleep(3000)});
        element(by.buttonText('Submit')).click();

    });

});