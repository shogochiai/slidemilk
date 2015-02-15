var webdriver = require('selenium-webdriver'),
    argv = require('argv'),
    MilkCocoa = require('./milkcocoa-node'),
    By = webdriver.By,
    milkcocoa = new MilkCocoa("https://io-ai02l9tke.mlkcca.com"),
    chromeDriver = new webdriver.Builder().usingServer('http://localhost:4444/wd/hub')
                        .withCapabilities( webdriver.Capabilities.chrome() )
                        .build();

chromeDriver.get(argv.run().targets[0]);

milkcocoa.dataStore("rightButtonServer").on("send", function(e){
    ( new webdriver.ActionSequence(chromeDriver) ).sendKeys(webdriver.Key.RIGHT).perform();
});

milkcocoa.dataStore("leftButtonServer").on("send", function(e){
    ( new webdriver.ActionSequence(chromeDriver) ).sendKeys(webdriver.Key.LEFT).perform();
});
