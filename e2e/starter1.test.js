describe('Example 2', () => {


  beforeEach(async () => {
    //await device.reloadReactNative();
  });



  beforeAll(async () => {

    //await init();
    await device.launchApp({newInstance: true});
   
   });
   
 

   it('I start Detox', async () => {

    await console.log('Test started - I launch the app');

});

/* eslint-env detox/detox */


  it('should show "HomeScreen at the begging', async () => {
    await element(by.text('Counters')).tap();
    await element(by.label('waterCounterLabel')).tap();
    await  element(by.text('ELECTRICITY COUNTER')).tap();
    await  element(by.text('BROADBAND COUNTER')).tap();
    await element(by.text('GAS COUNTER')).tap();

    await element(by.label('waterCounterLabel')).tap();
    await  element(by.text('ELECTRICITY COUNTER')).tap();
    await  element(by.text('BROADBAND COUNTER')).tap();
    await element(by.text('GAS COUNTER')).tap();
    
    await element(by.label('waterCounterLabel')).tap();
    await  element(by.text('ELECTRICITY COUNTER')).tap();
    await  element(by.text('BROADBAND COUNTER')).tap();
    await element(by.text('GAS COUNTER')).tap();
    
    await element(by.label('waterCounterLabel')).tap();
    await  element(by.text('ELECTRICITY COUNTER')).tap();
    await  element(by.text('BROADBAND COUNTER')).tap();
    await element(by.text('GAS COUNTER')).tap();
    
    await element(by.label('waterCounterLabel')).tap();
    await  element(by.text('ELECTRICITY COUNTER')).tap();
    await  element(by.text('BROADBAND COUNTER')).tap();
    await element(by.text('GAS COUNTER')).tap();

  });




//match by label
it('I tap on the Water Counter by label', async () => {
await expect(element(by.text('WATER COUNTER'))).toBeVisible();
await element(by.label('waterCounterLabel')).tap();

});


//match by text
it('I tap on the Water Counter by text', async () => {
  await expect(element(by.text('WATER COUNTER'))).toBeVisible();
  await element(by.text('WATER COUNTER')).tap();

});

it('I tap on the Electricity Counter by text', async () => {

  await expect(element(by.text('ELECTRICITY COUNTER'))).toBeVisible();
  await  element(by.text('ELECTRICITY COUNTER')).tap();


});


it('I tap on the Gas Counter by text', async () => {
  await expect(element(by.text('GAS COUNTER'))).toBeVisible();
 await element(by.text('GAS COUNTER')).tap();


});

it('I tap on the Broadband Counter by text', async () => {
  await expect(element(by.text('BROADBAND COUNTER'))).toBeVisible();
  await  element(by.text('BROADBAND COUNTER')).tap();


});

});
