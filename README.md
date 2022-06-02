# laravel-vue-vite
Laravel Vue Vite SPA

## Init
```sh
# Update php
cd laravel-vue-vite
composer update

# Vue install
cd vue-project
npm install
npm run build

# Laravel run local server
cd ..
php artisan serve
```

## Secure env config
Add in .gitignore
```sh
.env
.env.backup
```

## Nginx virtualhost
```sh
sudo apt install nginx mysql-server php8.1 php8.1-fpm

# Local domain /etc/hosts
127.0.0.10 vue.xx www.vue.xx

# Laravel virtualhost
server {
	listen 80;
	listen [::]:80;
	server_name vue.xx www.vue.xx;
	root /www/vue.xx/public;
	index index.php;
	location / {
		# try_files $uri $uri/ =404;
		try_files $uri $uri/ /index.php$is_args$args;
	}
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/run/php/php8.0-fpm.sock;
		# fastcgi_pass 127.0.0.1:9000;
	}
	location ~* \.(js|css|png|jpg|jpeg|gif|webp|svg|ico)$ {
		expires -1;
		access_log off;
	}
	disable_symlinks off;
	client_max_body_size 100M;
	charset utf-8;
	source_charset utf-8;
}
```

## Laravel Vue Vite config
```sh
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: resolve(__dirname, '../public'),
    rollupOptions: {
      output: {
        dir: '../public',
        chunkFileNames: "js/[name].js",
        entryFileNames: 'js/[name].js',
        assetFileNames: 'js/[name].[ext]',
        manualChunks: undefined,
      }
    }
  }
})
```