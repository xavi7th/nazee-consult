import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig( {
  plugins: [
    enhancedImages(),
    sveltekit()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '$vendor/css/variables' as *;
        `,
      },
    },
  }
} );
