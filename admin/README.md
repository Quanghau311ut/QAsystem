# QAsystem Admin Theme - Hướng Dẫn Sử Dụng

## 📋 Mục Lục
1. [Giới Thiệu](#giới-thiệu)
2. [Tính Năng](#tính-năng)
3. [Cấu Trúc Thư Mục](#cấu-trúc-thư-mục)
4. [Cài Đặt](#cài-đặt)
5. [Sử Dụng](#sử-dụng)
6. [Tùy Chỉnh](#tùy-chỉnh)
7. [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)

## 🎯 Giới Thiệu

QAsystem Admin Theme là một theme quản trị chuyên nghiệp được thiết kế dành riêng cho các nhân viên IT của công ty sản xuất. Theme cung cấp giao diện trực quan, dễ sử dụng với các tính năng quản lý hệ thống toàn diện.

**Phiên Bản:** 1.0.0  
**Trạng Thái:** Sản Xuất  
**Ngôn Ngữ:** Tiếng Việt (Vietnamese)

## ✨ Tính Năng

### 1. Dashboard - Tổng Quan Hệ Thống
- **Thống kê toàn bộ hệ thống** (Server hoạt động, người dùng, dung lượng ổ cứng, cảnh báo)
- **Biểu đồ theo dõi CPU và RAM** với dữ liệu real-time
- **Bảng trạng thái hệ thống** hiển thị chi tiết các máy chủ
- **Lọc dữ liệu theo ngày**

### 2. Quản Lý Server
- **Danh sách tất cả máy chủ** với thông tin chi tiết
- **Theo dõi hiệu suất** (CPU, RAM, Ổ cứng)
- **Thao tác trực tiếp**: khởi động, khởi động lại, tắt máy
- **Tìm kiếm và lọc** máy chủ theo trạng thái
- **Thêm máy chủ mới** vào hệ thống

### 3. Quản Lý Người Dùng
- **Danh sách tất cả người dùng** trong hệ thống
- **Thông tin chi tiết** (Email, Phòng ban, Chức vụ, Trạng thái)
- **Quản lý quyền truy cập** (Sửa, Khóa, Kích hoạt)
- **Lọc theo phòng ban**
- **Thêm người dùng mới**

### 4. Quản Lý Hệ Thống
- **Database**: Kích thước, trạng thái, tối ưu hóa
- **Network**: Kết nối, số lượng thiết bị, kiểm tra
- **Firewall**: Rules, cấu hình
- **Antivirus**: Trạng thái, phiên bản, quét

### 5. Nhật Ký Hoạt Động
- **Ghi lại tất cả hoạt động** của hệ thống
- **Lọc theo loại**: Đăng nhập, Thay đổi cấu hình, Lỗi, Bảo mật
- **Tìm kiếm nâng cao**
- **Xuất báo cáo** nhật ký

### 6. Sao Lưu & Phục Hồi
- **Tạo sao lưu thủ công**
- **Danh sách sao lưu gần đây** với thời gian và kích thước
- **Phục hồi từ sao lưu cũ**
- **Tải xuống bản sao lưu**

### 7. Bảo Mật
- **Quản lý chính sách mật khẩu**
- **Xác thực 2 yếu tố (2FA)**
- **Quản lý chứng chỉ SSL/TLS**
- **Phát hiện và chặn mối đe dọa**

### 8. Báo Cáo
- **Báo cáo hoạt động hệ thống**
- **Báo cáo bảo mật**
- **Báo cáo người dùng**
- **Xuất dưới định dạng PDF/Excel**

## 📁 Cấu Trúc Thư Mục

```
QAsystem/
├── README.md
└── admin/
    ├── index.html           # File HTML chính
    ├── css/
    │   └── style.css        # Stylesheet chính (Xanh lá)
    ├── js/
    │   └── script.js        # JavaScript cho interactivity
    └── README.md            # Tài liệu (file này)
```

## 🚀 Cài Đặt

### Yêu Cầu
- Web browser hiện đại (Chrome, Firefox, Safari, Edge)
- Connection HTTPS (để bảo mật)
- Chart.js library (CDN - tự động tải)

### Hướng Dẫn Cài Đặt

1. **Clone hoặc download project:**
```bash
git clone <repository-url>
cd QAsystem
```

2. **Mở file admin:**
   - Mở file `admin/index.html` trong trình duyệt
   - Hoặc sử dụng web server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (với http-server)
npx http-server
```

3. **Truy cập:**
   - http://localhost:8000/admin/

## 💻 Sử Dụng

### Đăng Nhập Dashboard
1. Mở `admin/index.html`
2. Hệ thống sẽ tự động hiển thị Dashboard
3. Xem tổng quan các số liệu chính

### Điều Hướng
- **Sidebar** (trái): Chứa danh sách các mục chính
- **Header** (trên): Tìm kiếm, thông báo, cài đặt
- **Content Area** (giữa): Nội dung chính của mỗi mục

### Các Tính Năng Chính

#### 1. Dashboard
- Xem các KPI chính
- Theo dõi biểu đồ CPU/RAM
- Kiểm tra trạng thái máy chủ
- Lọc dữ liệu theo ngày

#### 2. Quản Lý Server
```
Bước 1: Mở sidebar → Chọn "Quản Lý Server"
Bước 2: Xem danh sách máy chủ
Bước 3: Tìm kiếm hoặc lọc máy chủ
Bước 4: Nhấp vào nút hành động (Chi tiết, Khởi động, v.v)
```

#### 3. Quản Lý Người Dùng
```
Bước 1: Mở sidebar → Chọn "Quản Lý Người Dùng"
Bước 2: Xem danh sách người dùng
Bước 3: Tìm kiếm hoặc lọc theo phòng ban
Bước 4: Sửa, khóa hoặc kích hoạt người dùng
```

#### 4. Xem Nhật Ký
```
Bước 1: Mở sidebar → Chọn "Nhật Ký Hoạt Động"
Bước 2: Lọc theo loại (đăng nhập, lỗi, v.v)
Bước 3: Chọn ngày để xem chi tiết
Bước 4: Xuất báo cáo nếu cần
```

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc

Mở file `admin/css/style.css` và tìm biến CSS:

```css
:root {
    --primary-color: #27AE60;      /* Xanh lá (mặc định) */
    --primary-dark: #1E8449;
    --primary-light: #52BE80;
    --secondary-color: #3498DB;
    --success-color: #27AE60;
    --warning-color: #F39C12;
    --danger-color: #E74C3C;
    /* ... */
}
```

**Ví dụ đổi thành xanh dương:**
```css
--primary-color: #3498DB;
--primary-dark: #2980b9;
--primary-light: #5dade2;
```

### Thay Đổi Tiêu Đề
Chỉnh sửa file `admin/index.html`:

```html
<title>QAsystem - Trang Quản Trị IT</title>
```

### Thêm Logo Công Ty
Chỉnh sửa phần logo trong sidebar:

```html
<div class="logo">
    <i class="fas fa-shield-alt"></i>
    <span>QAsystem Admin</span>
</div>
```

Thay thế bằng:
```html
<div class="logo">
    <img src="path/to/logo.png" alt="Logo" style="height: 30px;">
    <span>Tên Công Ty</span>
</div>
```

### Thêm Menu Mới

1. Thêm link vào sidebar:
```html
<li><a href="#newpage" class="nav-link" data-section="newpage">
    <i class="fas fa-star"></i>
    <span>Trang Mới</span>
</a></li>
```

2. Thêm section content:
```html
<section id="newpage" class="section">
    <div class="section-header">
        <h2>Trang Mới</h2>
    </div>
    <!-- Nội dung ở đây -->
</section>
```

3. Thêm event listener vào `script.js` nếu cần

## 📊 Tích Hợp Với Backend

Để kết nối với API backend, thêm các function trong `admin/js/script.js`:

```javascript
// Ví dụ: Lấy danh sách server từ API
async function fetchServers() {
    try {
        const response = await fetch('/api/servers');
        const data = await response.json();
        updateServerList(data);
    } catch (error) {
        console.error('Error:', error);
        showNotification('Lỗi tải dữ liệu', 'error');
    }
}

// Cập nhật dashboard
async function loadDashboardData() {
    await fetchServers();
    await fetchUsers();
    await fetchSystemStatus();
    setupCharts();
}
```

## 📱 Responsive Design

Theme hoàn toàn responsive cho:
- **Desktop** (1920px+): Hiển thị full sidebar + content
- **Tablet** (768px - 1024px): Sidebar có thể ẩn/hiện
- **Mobile** (< 768px): Sidebar slide-out, header đơn giản

## 🔒 Bảo Mật

### Khuyến Nghị
1. **HTTPS Only**: Luôn sử dụng HTTPS trên production
2. **Authentication**: Thêm xác thực trước khi truy cập
3. **CSRF Token**: Bảo vệ các form actions
4. **Input Validation**: Validate tất cả user input
5. **Session Management**: Quản lý session hợp lý

### Ví dụ Bảo Mật Cơ Bản
```javascript
// Kiểm tra token trước khi load trang
window.addEventListener('load', function() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = '/login';
    }
});
```

## 🖼️ Screenshots

### Dashboard
- Tổng quan KPI
- Biểu đồ real-time
- Bảng trạng thái máy chủ

### Server Management
- Danh sách máy chủ với progress bars
- Thông tin chi tiết mỗi máy
- Nút hành động nhanh

### User Management
- Bảng người dùng chi tiết
- Lọc theo phòng ban
- Quản lý quyền truy cập

## 🆘 Khắc Phục Sự Cố

### Chart không hiển thị
**Giải pháp**: Đảm bảo Chart.js được tải từ CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
```

### Sidebar không hoạt động trên mobile
**Giải pháp**: Kiểm tra JavaScript console để lỗi, bắt lỗi:
```javascript
console.error('Error:', error);
```

### Dữ liệu không cập nhật
**Giải pháp**: Kiểm tra kết nối API, xem console

## 📚 Tài Liệu Thêm

- [Font Awesome Icons](https://fontawesome.com/icons)
- [Chart.js Documentation](https://www.chartjs.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 👥 Support & Maintenance

Liên hệ IT Team để:
- Báo cáo lỗi
- Yêu cầu tính năng mới
- Hỗ trợ tùy chỉnh

## 📝 Changelog

### v1.0.0 (2026-08-13)
- Release đầu tiên
- Dashboard hoàn chỉnh
- Quản lý server, user, logs
- Responsive design
- Dark green theme (xanh lá)

## 📄 License

Bản quyền © 2026 QAsystem. Phát triển bởi IT Team công ty sản xuất.

---

**Cập Nhật Lần Cuối:** 13/08/2026  
**Trạng Thái:** Sản Xuất  
**Phiên Bản Hiện Tại:** 1.0.0
