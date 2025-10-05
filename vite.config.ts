import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Dla project pages zmień base na '/twoje-repo/'
export default defineConfig({
plugins: [react()],
base: '/',
})
