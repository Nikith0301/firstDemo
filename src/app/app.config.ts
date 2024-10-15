// // import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// // import { provideRouter } from '@angular/router';

// // import { routes } from './app.routes';

// // export const appConfig: ApplicationConfig = {
// //   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// // };
// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes), // Correct router setup
//   ],
// };
// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import your routes from the routes file

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optional: For performance optimization
    provideRouter(routes), // Correct setup for router
  ],
};
