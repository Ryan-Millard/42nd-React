import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // Import path to resolve aliases

// https://vite.dev/config/
export default defineConfig({
	base: '/42nd-React/',
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/Components'),
			'@pages': path.resolve(__dirname, 'src/Pages'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@states': path.resolve(__dirname, 'src/States'),
		}
	}
});
