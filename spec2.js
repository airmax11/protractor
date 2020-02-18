describe('Chain locator',function() {
    function calc(a, b, c){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(values){
                if (values === c){
                    item.click();
                }; 
            });
        });
        element(by.id("gobutton")).click();
    };

    it('Open Angular js website', function() {
        browser.get("http://juliemr.github.io/protractor-demo/");
        console.log("Spec_2");

        calc(2, 3, "ADDITION");
        calc(5, 6, "DIVISION");
        calc(4, 7, "MODULO");
        calc(3, 5, "MULTIPLICATION");
        calc(4, 6, "SUBTRACTION");

        element.all(by.repeater("result in memory")).count().then(function(counts){
            console.log((counts).toString());
            console.log(typeof(counts));
        });

        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                console.log(text + " This is a result.");
            });
        });



    });
});