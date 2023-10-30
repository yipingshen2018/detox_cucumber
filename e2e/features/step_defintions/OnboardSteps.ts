import { Given, setDefaultTimeout, When, Then } from '@cucumber/cucumber';
//const { Given, When, Then ,setDefaultTimeout} = require('@cucumber/cucumber');

setDefaultTimeout(60 * 1000);

Given('I start Detox', async () => {

      console.log('Test started - I launch the app');

});
