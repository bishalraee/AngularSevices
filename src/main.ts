import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, { ... appConfig,
  providers: [
    ... (appConfig.providers ?? []),
    provideHttpClient()
  ]
})
  .catch((err) => console.error(err));

//... is a spread syntax or operator. used to spread the array, object, or iterable 
//into another array or object.

/***
names = ['ram','shyam','sita','gita'];
AddNames = ['rrr','sss',...names,'lkll'];
console.log(AddNames);
 */