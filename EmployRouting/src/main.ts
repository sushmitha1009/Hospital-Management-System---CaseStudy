import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  ...appConfig, // ✅ Spread your app-level config
  providers: [
    ...appConfig.providers,     // 🧠 Spread existing providers from appConfig
    provideHttpClient()         // ✅ Add additional providers like HTTP
  ]
});