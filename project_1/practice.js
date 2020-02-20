
describe('Project 1 practice', () => {
    function selectItem(itemName){
        element.all(by.tagName('app-card')).each(function(item){
            item.element(by.css('h4 a')).getText().then(function(text){
                if (text === itemName){
                    item.element(by.css('button[class*="btn-info"]')).click()
                }
            })
        })
    }

    function totalSum(){

        element.all(by.css('td:nth-of-type(4)>strong')).each(function(item){
            
            item.getText().then(function(text){
                let x = Number((text.split(" "))[1].trim())
                return x;

                
                
            })
            
        })
        
        
    }


    it('Open the page and test it', () => {
        browser.get("https://qaclickacademy.github.io/protocommerce/")
        element(by.name('name')).sendKeys("Mystudents");
        element(by.id('exampleInputPassword1')).sendKeys("123456");
        element(by.css('input[id="exampleCheck1"]')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option', 'Female')).click();
        element.all(by.name("inlineRadioOptions")).get(1).click();
        element(by.css('input[name ="email"]')).sendKeys("test@test.com").then(function(){browser.sleep(500)});
        element(by.buttonText('Submit')).click().then(function(){
            element(by.css('div[class*="success"]')).getText().then(function(text){
                console.log(text);
            });
        });
        element(by.name('name')).clear()
        element(by.name('name')).sendKeys("M");
        element(by.css('[class="alert alert-danger"]')).getText().then(function(text){
            console.log(text);
        })
        element(by.name('name')).clear().sendKeys(protractor.Key.TAB).then(function(){browser.sleep(500)});
        element(by.css('div[class="jumbotron"]')).click().then(function(){browser.sleep(500)});
        element(by.name('email')).click().then(function(){browser.sleep(500)}).then(function(){
            element(by.css('[class="alert alert-danger"]')).getText().then(function(text){
                console.log(text);
            })
        });

        element(by.linkText('Shop')).click().then(function(){browser.sleep(3000)});

        selectItem("iphone X");
        selectItem("Samsung Note 8");
        element(by.partialLinkText('Checkout')).getText().then(function(text){
            var res = parseInt((text.split('('))[1].trim().charAt(0));
            expect(res).toBe(2);
        });

        element(by.partialLinkText('Checkout')).click().then(function(){browser.sleep(3000)});

        const r = element.all(by.css('td:nth-of-type(4)>strong')).each(function(item){
            
            item.getText().then(function(text){
                let x = Number((text.split(" "))[1].trim())
                
            })
            
        })

        const txt = totalSum();
        expect(txt).toBe(10000);
    });

});