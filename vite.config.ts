// import { defineConfig } from 'vite';
// import analog from '@analogjs/vite-plugin-angular';
// export default defineConfig({
//     root: './src', 
//   plugins: [analog()],
//   build: {
//     outDir: 'dist',
//   },
//   server: {
//     port: 4200, // or any port you prefer
//   }
// });
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

// https://vitejs.dev/config/
export default defineConfig({
    root: './src', 
  resolve: {
    mainFields: ['module'],
  },
  plugins: [angular()],
    build: {
    outDir: 'dist',
  }
});
