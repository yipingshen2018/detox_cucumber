import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'detox';
import { device } from 'detox';
import { element, by } from 'detox';

//const { enableScreens } =require ('react-native-screens');
//const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');
//import { enableScreens } from 'react-native-screens';

setDefaultTimeout(120 * 1000);
//match by multiple attributes

// Locate by matcher + parent/child
When('I tap on the Water Counter by parent id and child text', async () => {
   await element(by.id('waterCounter').withDescendant(by.text('WATER COUNTER'))).tap();
});
Then('I multi tap on the Electricity Counter by parent id and child id', async () => {
   await element(by.id('electricityCounter').withDescendant(by.id('counterButton'))).tap();
});
Then('I multi tap on the Gas Counter by child text and parent id', async () => {
   await element(by.text('GAS COUNTER').withAncestor(by.id('gasCounter'))).tap();
});
Then('I tap on the Broadband Counter by child id and parent id', async () => {
   await element(by.id('counterButton').withAncestor(by.id('broadbandCounter'))).tap();
});


When ('I tap on the Water Counter Title by type and text', async () => {

   const typeLocator = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView'
    await element(by.type(typeLocator).and (by.text  ('WATER COUNTER'))).tap();
});
 

//match by ID
Then('I tap on the Water Counter by id', async () => {
    //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
    await element(by.id('waterCounter')).tap();
 
 });
 

 Then('I tap on the Electricity Counter by id', async () => {
    //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
    await element(by.id('electricityCounter')).tap();
 
 });
 
 Then('I tap on the Gas Counter by id', async () => {
    //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
    await element(by.id('gasCounter')).tap();
 
 });
 
 Then('I tap on the Broadband Counter by id', async () => {
    //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
    await element(by.id('broadbandCounter')).tap();
  
 });
 


//match by label
When ('I tap the Home navigation section by label', async () => {

    await element(by.label('Home')).atIndex(0).tap();
});


Given('I tap on the Counters section by text', async () => {

        await element(by.text('Counters')).tap();
    

});


//match by label
Then('I tap on the Water Counter by label', async () => {
    //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
    await element(by.label('waterCounterLabel')).tap();
 
 });
 

//match by text
When('I tap on the Water Counter by text', async () => {
   //await waitFor(element(by.text('WATER COUNTER'))).toBeVisible().withTimeout(5000);
   await element(by.text('WATER COUNTER')).tap();

});

Then('I tap on the Electricity Counter by text', async () => {

    //await waitFor(element(by.text('ELECTRICITY COUNTER'))).toBeVisible().withTimeout(5000);
    await  element(by.text('ELECTRICITY COUNTER')).tap();


});


Then('I tap on the Gas Counter by text', async () => {
    //await waitFor(element(by.text('GAS COUNTER'))).toBeVisible().withTimeout(5000);
     await element(by.text('GAS COUNTER')).tap();


});

Then('I tap on the Broadband Counter by text', async () => {
   // await waitFor(element(by.text('BROADBAND COUNTER'))).toBeVisible().withTimeout(5000);
  await  element(by.text('BROADBAND COUNTER')).tap();


});


