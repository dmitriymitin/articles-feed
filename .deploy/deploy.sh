#!/bin/bash

# Остановить deploy сразу при первой ошибке
set -euxo pipefail

PROJECT_DIR="/root/articles-feed"
WEB_DIR="/var/www/articles-feed/html"

echo "=== Starting deploy ==="

cd "$PROJECT_DIR"

echo "=== Building production ==="
npm run build:prod

echo "=== Checking build directory ==="
ls -lah "$PROJECT_DIR/build"

echo "=== Removing old website ==="
rm -rf "$WEB_DIR"

echo "=== Moving new build ==="
mv "$PROJECT_DIR/build" "$WEB_DIR"

echo "=== Checking deployed files ==="
ls -lah "$WEB_DIR"

echo "=== Deploy completed successfully ==="