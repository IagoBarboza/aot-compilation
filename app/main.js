// JiT Bootstrap
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app.module';
// platformBrowserDynamic().bootstrapModule(AppModule);
"use strict";
// AoT Bootstrap
var platform_browser_1 = require('@angular/platform-browser');
var app_module_ngfactory_1 = require('../aot/app/app.module.ngfactory');
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
