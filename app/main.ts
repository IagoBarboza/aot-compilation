// JiT Bootstrap
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app.module';
// platformBrowserDynamic().bootstrapModule(AppModule);

// AoT Bootstrap
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
