/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
   map: {
       '*': {
           bootstrap:      'Magento_Theme/js/bootstrap.min.js',
           custom:      'Magento_Theme/js/custom.js'
           
       }
   },
   shim: {
       bootstrap: {
           deps: ['jquery']
       },
        custom: {
           deps: ['jquery']
       }
   }
};
