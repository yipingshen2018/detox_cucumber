import{ BeforeAll, Before, After, AfterAll } from '@cucumber/cucumber';
//const { BeforeAll,Before,After,AfterAll} = require('@cucumber/cucumber');
//const {init, cleanup} =require( 'detox/internals');
import { init, cleanup } from 'detox/internals';

BeforeAll({timeout:60*1000},async () => {

 await init();
 await device.launchApp({newInstance: true});

});

/* Start a new Senario*/
Before(async () => {
   await device.reloadReactNative();

});

After(async () => {
   // await cleanup();
});

AfterAll(async () => {
   //await device.terminateApp();
   await cleanup();
}
);



