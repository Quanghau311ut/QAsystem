# 🚀 Quick Start Guide - QAsystem Admin Theme

## ⚡ Bắt Đầu Nhanh Nhất (2 Phút)

### Cách 1: Mở Trực Tiếp (1 Phút)
```
1. Mở File Explorer
2. Vào: D:\webapp\QAsystem\admin\
3. Double-click: index.html
4. ✅ Xong! Theme sẽ mở trong trình duyệt
```

### Cách 2: Sử Dụng Python (2 Phút)

#### Windows:
```powershell
# Bước 1: Mở Command Prompt
# Bước 2: Chạy lệnh này
cd D:\webapp\QAsystem
python -m http.server 8000

# Bước 3: Mở trình duyệt
# http://localhost:8000/admin/
```

#### Linux/Mac:
```bash
cd /path/to/QAsystem
python3 -m http.server 8000
# Mở: http://localhost:8000/admin/
```

### Cách 3: Sử Dụng Live Server (VS Code)
```
1. Mở VS Code
2. Cài đặt extension: "Live Server"
3. Right-click: admin/index.html
4. Chọn: "Open with Live Server"
```

## 📁 Cấu Trúc File

```
admin/
├── index.html          ← Mở file này
├── css/
│   └── style.css       ← Styling (Xanh Lá)
├── js/
│   ├── script.js       ← JavaScript interactivity
│   └── config.js       ← Configuration constants
└── README.md           ← Tài liệu chi tiết
```

## 🎯 Các Tính Năng Chính

| Chức Năng | Giải Thích | Location |
|-----------|-----------|----------|
| **Dashboard** | Tổng quan toàn hệ thống | Sidebar → Dashboard |
| **Servers** | Quản lý máy chủ | Sidebar → Quản Lý Server |
| **Users** | Quản lý người dùng | Sidebar → Quản Lý Người Dùng |
| **Systems** | Database, Network, Firewall | Sidebar → Hệ Thống |
| **Logs** | Nhật ký hoạt động | Sidebar → Nhật Ký Hoạt Động |
| **Backup** | Sao lưu dữ liệu | Sidebar → Sao Lưu & Phục Hồi |
| **Security** | Bảo mật, 2FA, SSL/TLS | Sidebar → Bảo Mật |
| **Reports** | Xuất báo cáo | Sidebar → Báo Cáo |

## 🎨 Tùy Chỉnh Cơ Bản

### Thay Đổi Tiêu Đề
1. Mở: `admin/index.html`
2. Tìm: `<title>QAsystem - Trang Quản Trị IT</title>`
3. Thay đổi: `<title>Công Ty Của Tôi - Trang Quản Trị</title>`

### Thay Đổi Màu Chính (Xanh → Xanh Dương)
1. Mở: `admin/css/style.css`
2. Tìm: `:root {`
3. Thay đổi:
```css
--primary-color: #3498DB;      /* Từ #27AE60 → #3498DB */
--primary-dark: #2980b9;        /* Từ #1E8449 → #2980b9 */
--primary-light: #5dade2;       /* Từ #52BE80 → #5dade2 */
```

### Thay Đổi Tên Admin
1. Mở: `admin/index.html`
2. Tìm: `<p class="username">Quản Trị Viên</p>`
3. Thay đổi: `<p class="username">Tên Của Bạn</p>`

## 🔧 Thêm Tính Năng Mới

### Ví dụ: Thêm Menu Item
1. Mở: `admin/index.html`
2. Tìm: `<ul>` (trong sidebar)
3. Thêm:
```html
<li><a href="#mycustom" class="nav-link" data-section="mycustom">
    <i class="fas fa-star"></i>
    <span>Tính Năng Mới</span>
</a></li>
```

4. Thêm section content:
```html
<section id="mycustom" class="section">
    <div class="section-header">
        <h2>Tính Năng Mới</h2>
    </div>
    <div style="background: white; padding: 30px; border-radius: 10px;">
        <p>Nội dung của tôi ở đây...</p>
    </div>
</section>
```

## ✅ Kiểm Tra Hoạt Động

### Chức Năng Cần Test
- [ ] Sidebar navigation hoạt động
- [ ] Biểu đồ hiển thị đúng
- [ ] Mobile responsive (F12 → mobile view)
- [ ] Buttons click được
- [ ] Search box hoạt động

### Debug Tips
```
1. Bấm F12 để mở Console
2. Kiểm tra lỗi (màu đỏ)
3. Xem tab Network để kiểm tra CDN
4. Xem tab Elements để debug CSS
```

## 📚 Tài Liệu Chi Tiết

- **Hướng dẫn Toàn Diện:** Xem `admin/README.md`
- **Cài Đặt Production:** Xem `INSTALLATION.md`
- **API Integration:** Xem section "Backend" trong `admin/README.md`

## 🎨 Gợi Ý Tùy Chỉnh Phổ Biến

### 1. Thay Đổi Logo
```html
<!-- Trong sidebar header, thay đổi: -->
<div class="logo">
    <img src="path/to/logo.png" alt="Logo" style="height: 30px;">
    <span>Công Ty XYZ</span>
</div>
```

### 2. Thêm Dark Mode
Thêm vào `script.js`:
```javascript
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}
```

### 3. Thêm User Avatar Thật
```html
<!-- Thay đổi trong sidebar footer: -->
<img src="https://gravatar.com/avatar/email@domain.com" alt="Admin">
```

## 🚨 Vấn Đề Thường Gặp

### Chart không hiển thị
**Nguyên nhân:** CDN không tải  
**Giải pháp:** Kiểm tra internet connection, hoặc download Chart.js local

### Sidebar không collapse trên mobile
**Nguyên nhân:** CSS không load  
**Giải pháp:** Clear cache browser (Ctrl+Shift+Delete)

### Icon không hiển thị
**Nguyên nhân:** Font Awesome CDN lỗi  
**Giải pháp:** Đợi CDN phục hồi, hoặc download local

## 📞 Liên Hệ & Hỗ Trợ

- **IT Team:** it@company.com
- **Documentation:** Xem tệp README.md trong các thư mục
- **Issues:** Kiểm tra console (F12) để debug

## 🎓 Bài Tiếp Theo

1. **Tùy chỉnh giao diện** → Xem `admin/css/style.css`
2. **Thêm chức năng** → Xem `admin/js/script.js`
3. **Kết nối API** → Xem `admin/README.md`
4. **Deploy production** → Xem `INSTALLATION.md`

---

**Happy Admin! 🎉**

*Bắt đầu đơn giản, tùy chỉnh thêm sau!*
