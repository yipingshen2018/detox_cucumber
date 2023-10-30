import { Given,Then, setDefaultTimeout } from '@cucumber/cucumber'; 
//import { elementsThatOverlapOffsets } from 'react-native/Libraries/Lists/VirtualizeUtils';
//const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(120 * 1000);
Then ('I tap the Add Member Icon', async()=> {

await element(by.id('ç')).atIndex(0).tap();
await element(by.id('addMemberIcon')).atIndex(0).tap();

});


Given('I tap on the Cities navigation tab', async () => {

    await element(by.id('citiesNavigationSection')).atIndex(0).tap();
    await element(by.id('citiesNavigationImage')).atIndex(0).tap();
        

});
