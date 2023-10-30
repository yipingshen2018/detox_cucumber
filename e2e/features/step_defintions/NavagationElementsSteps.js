import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber'; 
//import { elementsThatOverlapOffsets } from 'react-native/Libraries/Lists/VirtualizeUtils';
//const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(120 * 1000);


Given('I tap on the {string} navigation tab', async (section) => {

    await element(by.id(`${section.toLowerCase()}NavigationImage`)).atIndex(0).tap();
    await element(by.id(`${section.toLowerCase()}NavigationSection`)).atIndex(0).tap();
        

});
