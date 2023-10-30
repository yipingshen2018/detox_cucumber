const arguments=[
    '--require-module ts-node/register',//typescript support 
   // '--require-module @babel/register',
   '--require e2e/features/step_defintions/*.ts',
    'e2e/features/*/*.feature'
    ].join(' ');
    
    module.exports = {
        default: arguments    
    }
