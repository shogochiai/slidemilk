var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    fs = require("fs");
    Promise = webdriver.promise.Promise,
    argv = require('argv');

var MilkCocoa = require('./milkcocoa-node'),
    milkcocoa = new MilkCocoa("https://io-ai02l9tke.mlkcca.com"),
    rightBtnServer = milkcocoa.dataStore("rbtn"),
    leftBtnServer = milkcocoa.dataStore("lbtn");

var targets = argv.run().targets;

var chromeDriver = new webdriver.Builder()
                        .usingServer('http://localhost:4444/wd/hub')
                        .withCapabilities( webdriver.Capabilities.chrome() )
                        .build();

chromeDriver.get(targets[0]);

rightBtnServer.on("send", function(e){
    ( new webdriver.ActionSequence(chromeDriver) ).sendKeys(webdriver.Key.RIGHT).perform();
});

leftBtnServer.on("send", function(e){
    ( new webdriver.ActionSequence(chromeDriver) ).sendKeys(webdriver.Key.LEFT).perform();
});
