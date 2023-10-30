import { When, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'detox';
import { device } from 'detox';
import { element, by } from 'detox';
//const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(120 * 1000);

When('I tap on the {string} section', async(section) => {
    await element(by.id(`homeSectionText-${section.toLowerCase()}`)).tap();
});


When('I tap on the {string} title and image', async(continent) => {
    await element(by.id(`continentLabel-${continent.toLowerCase()}`)).tap();
    await element(by.id(`imageTitle-${continent.toLowerCase()}-0`)).tap();
    await element(by.id(`image-${continent.toLowerCase()}-0`)).tap();
});