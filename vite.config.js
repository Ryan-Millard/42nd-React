import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Import path to resolve aliases

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/Components'), // Example alias for components
			'@pages': path.resolve(__dirname, 'src/Pages'),					 // Example alias for utilities
			'@assets': path.resolve(__dirname, 'src/assets'),				 // Example alias for assets
		}
	}
});
