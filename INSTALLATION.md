# QAsystem Admin Theme - Hướng Dẫn Cài Đặt & Triển Khai

## 📋 Mục Lục
1. [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
2. [Cài Đặt Phát Triển](#cài-đặt-phát-triển)
3. [Triển Khai Production](#triển-khai-production)
4. [Cấu Hình Server](#cấu-hình-server)
5. [Xử Lý Sự Cố](#xử-lý-sự-cố)

## ✅ Yêu Cầu Hệ Thống

### Hardware Tối Thiểu
- **RAM:** 512 MB
- **Disk Space:** 50 MB
- **CPU:** Không yêu cầu cụ thể

### Software Yêu Cầu
- **Browser:** Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **Internet Connection:** Để tải CDN resources
- **Server:** Bất kỳ web server nào (Apache, Nginx, IIS, v.v)

### Phụ Thuộc (Loaded via CDN)
```html
<!-- Chart.js 3.9.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>

<!-- Font Awesome 6.4.0 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 🛠️ Cài Đặt Phát Triển

### Phương Pháp 1: Sử Dụng Python (Đơn Giản Nhất)

#### Windows:
```powershell
# Mở Command Prompt/PowerShell
cd D:\webapp\QAsystem

# Python 3.x
python -m http.server 8000

# Sau đó mở: http://localhost:8000/admin/
```

#### Linux/Mac:
```bash
cd /path/to/QAsystem
python3 -m http.server 8000
# hoặc
python -m SimpleHTTPServer 8000
```

### Phương Pháp 2: Sử Dụng Node.js

```bash
# Cài đặt http-server (chỉ lần đầu)
npm install -g http-server

# Chạy server
cd D:\webapp\QAsystem
http-server

# Mở: http://localhost:8080/admin/
```

### Phương Pháp 3: Sử Dụng Visual Studio Code

1. Cài đặt extension: "Live Server"
2. Chuột phải vào `admin/index.html`
3. Chọn "Open with Live Server"

### Phương Pháp 4: Mở Trực Tiếp (Nhanh Nhất)

Không cần server, chỉ cần:
```
Right-click admin/index.html → Open with Browser
```

**Lưu Ý:** Một số tính năng có thể không hoạt động do CORS restrictions. Khuyến cáo sử dụng web server.

## 🚀 Triển Khai Production

### 1. Chuẩn Bị

```bash
# Kiểm tra cấu trúc thư mục
QAsystem/
├── admin/
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   └── README.md
└── README.md
```

### 2. Cấu Hình Server

#### Apache (.htaccess)
```apache
# Tạo file .htaccess trong thư mục admin/
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /admin/
    
    # Redirect tất cả request về index.html
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [QSA,L]
    
    # HTTPS redirect
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name yourdomain.com;
    
    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    
    # Document root
    root /var/www/QAsystem;
    
    # Admin location
    location /admin/ {
        try_files $uri $uri/ /admin/index.html;
    }
    
    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
    gzip_min_length 1000;
}

# HTTP redirect
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}
```

#### IIS (Windows)
1. Mở IIS Manager
2. Tạo Application -> Trỏ đến thư mục `admin/`
3. Thêm web.config:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="SPA" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="index.html" />
                </rule>
            </rules>
        </rewrite>
        
        <httpProtocol>
            <customHeaders>
                <add name="X-Content-Type-Options" value="nosniff" />
                <add name="X-Frame-Options" value="SAMEORIGIN" />
                <add name="X-XSS-Protection" value="1; mode=block" />
            </customHeaders>
        </httpProtocol>
        
        <staticContent>
            <mimeType fileExtension=".woff2" mimeType="font/woff2" />
        </staticContent>
    </system.webServer>
</configuration>
```

### 3. Bảo Mật HTTPS

#### Sử dụng Let's Encrypt (Miễn Phí)

**Linux/Mac:**
```bash
# Cài đặt Certbot
sudo apt-get install certbot python3-certbot-nginx

# Tạo certificate
sudo certbot certonly --standalone -d yourdomain.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

**Windows:**
```powershell
# Sử dụng win-acme
# Download: https://github.com/win-acme/win-acme/releases

# Chạy win-acme
./wacs.exe

# Chọn options để tạo certificate cho domain
```

### 4. Kiểm Tra Triển Khai

```bash
# Kiểm tra status
curl -I https://yourdomain.com/admin/

# Kiểm tra headers
curl -i https://yourdomain.com/admin/ | grep -i "x-"

# Kiểm tra performance
curl -o /dev/null -s -w "%{time_total}\n" https://yourdomain.com/admin/
```

## 🖥️ Cấu Hình Server

### Tối Ưu Hóa Performance

#### Bật Gzip Compression

**Nginx:**
```nginx
gzip on;
gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript 
           application/json application/javascript application/xml+rss 
           application/rss+xml font/truetype font/opentype 
           application/vnd.ms-fontobject image/svg+xml;
```

**Apache:**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

#### Caching Headers

```
# CSS và JS - Cache 30 ngày
Cache-Control: public, max-age=2592000

# HTML - Cache 1 ngày
Cache-Control: public, max-age=86400

# Images - Cache 1 năm
Cache-Control: public, max-age=31536000, immutable
```

#### CDN Configuration
```
Cloudflare CDN có thể caching:
- Static assets (CSS, JS, images)
- HTML files
- API responses (optional)
```

### Monitoring & Logging

#### Nginx Error Log
```
error_log /var/log/nginx/admin_error.log warn;
access_log /var/log/nginx/admin_access.log combined;

# Log format
log_format detailed '$remote_addr - $remote_user [$time_local] '
                   '"$request" $status $body_bytes_sent '
                   '"$http_referer" "$http_user_agent"';
```

#### Apache Error Log
```
ErrorLog ${APACHE_LOG_DIR}/admin_error.log
CustomLog ${APACHE_LOG_DIR}/admin_access.log combined
LogLevel warn
```

## 🐛 Xử Lý Sự Cố

### 1. Chart.js CDN Error

**Triệu Chứng:** Biểu đồ không hiển thị  
**Giải Pháp:**
```bash
# Kiểm tra CDN
curl https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js

# Hoặc download local
# Tạo admin/lib/chart.js
# Thay đổi trong index.html:
<script src="lib/chart.js"></script>
```

### 2. CORS Error

**Triệu Chứng:** "Access-Control-Allow-Origin missing"  
**Giải Pháp (Nginx):**
```nginx
add_header Access-Control-Allow-Origin "*" always;
add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
add_header Access-Control-Allow-Headers "Content-Type, Authorization" always;
```

### 3. 404 Routes

**Triệu Chứng:** F5 refresh lỗi 404  
**Giải Pháp:** Kiểm tra rewrite rules (xem mục "Cấu Hình Server")

### 4. Performance Issues

```bash
# Kiểm tra tốc độ tải
curl -w "Total time: %{time_total}s\n" https://yourdomain.com/admin/

# Phân tích waterfall
# Sử dụng DevTools: F12 → Network tab

# Optimize:
# 1. Enable gzip compression
# 2. Minify CSS/JS
# 3. Optimize images
# 4. Use CDN
# 5. Enable caching
```

## 📊 Monitoring Dashboard

### Metrics Cần Monitor

1. **Uptime:** Target 99.9%
2. **Response Time:** Target < 2s
3. **Error Rate:** Target < 0.1%
4. **CPU Usage:** Monitor < 70%
5. **Memory Usage:** Monitor < 80%
6. **Disk Space:** Alert when < 10%

### Tools Khuyến Nghị

- **Monitoring:** Prometheus, Grafana, DataDog
- **Logging:** ELK Stack, Splunk, CloudWatch
- **APM:** New Relic, Datadog, Dynatrace
- **Status Page:** Statuspage.io, Atlassian Statuspage

## 🔄 Backup & Recovery

### Backup Strategy

```bash
# Tạo backup hàng ngày
0 2 * * * tar -czf /backups/qasystem-$(date +\%Y\%m\%d).tar.gz /var/www/QAsystem/

# Giữ 30 ngày
find /backups -name "qasystem-*.tar.gz" -mtime +30 -delete
```

### Recovery Procedure

```bash
# Restore từ backup
tar -xzf /backups/qasystem-20260813.tar.gz -C /var/www/

# Verify
ls -la /var/www/QAsystem/admin/
```

---

**Trạng Thái:** Hoàn Thành  
**Cập Nhật:** 13/08/2026
