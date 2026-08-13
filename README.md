# QAsystem - Hệ Thống Quản Trị IT

## 🎯 Mô Tả Dự Án
QAsystem là một hệ thống quản trị chuyên nghiệp được thiết kế dành riêng cho các nhân viên IT của công ty sản xuất. Hệ thống cung cấp giao diện trực quan, dễ sử dụng với các tính năng quản lý hệ thống toàn diện.

## 🌈 Chủ Đề Màu Sắc
- **Màu chính:** Xanh Lá (#27AE60)
- **Phong cách:** Modern, Professional, Clean

## 📁 Cấu Trúc Dự Án

```
QAsystem/
├── README.md                 # File README chính (file này)
├── .git/                     # Git repository
└── admin/                    # Thư mục Admin Theme
    ├── index.html           # Trang chủ quản trị
    ├── README.md            # Hướng dẫn chi tiết
    ├── css/
    │   └── style.css        # Stylesheet (Responsive, Xanh Lá)
    ├── js/
    │   └── script.js        # JavaScript & Interactivity
    └── assets/              # (Dành cho tương lai)
```

## ✨ Tính Năng Chính

### 1. **Dashboard - Tổng Quan Hệ Thống**
   - Thống kê KPI chính (Server, User, Disk, Alerts)
   - Biểu đồ CPU & RAM real-time
   - Bảng trạng thái máy chủ
   - Lọc dữ liệu theo ngày

### 2. **Quản Lý Server**
   - Danh sách máy chủ chi tiết
   - Theo dõi hiệu suất (CPU, RAM, Disk)
   - Thao tác trực tiếp (Khởi động, Tắt, Khởi động lại)
   - Thêm máy chủ mới

### 3. **Quản Lý Người Dùng**
   - Danh sách người dùng với chi tiết
   - Quản lý quyền truy cập
   - Lọc theo phòng ban
   - Thêm, sửa, khóa người dùng

### 4. **Hệ Thống**
   - Quản lý Database
   - Kiểm tra Network
   - Cài đặt Firewall
   - Antivirus Status

### 5. **Nhật Ký Hoạt Động**
   - Ghi lại tất cả events
   - Lọc theo loại
   - Xuất báo cáo
   - Tìm kiếm nâng cao

### 6. **Sao Lưu & Phục Hồi**
   - Tạo sao lưu thủ công
   - Danh sách sao lưu gần đây
   - Phục hồi từ backup cũ
   - Tải xuống file sao lưu

### 7. **Bảo Mật**
   - Quản lý chính sách mật khẩu
   - Xác thực 2 yếu tố (2FA)
   - Quản lý SSL/TLS
   - Phát hiện mối đe dọa

### 8. **Báo Cáo**
   - Báo cáo hoạt động hệ thống
   - Báo cáo bảo mật
   - Báo cáo người dùng
   - Xuất PDF/Excel

## 🚀 Cách Sử Dụng

### Khởi Động Nhanh
1. Mở file `admin/index.html` trực tiếp trong trình duyệt
   ```
   file:///path/to/QAsystem/admin/index.html
   ```

2. Hoặc sử dụng web server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Sau đó mở: http://localhost:8000/admin/
   ```

### Tổng Quan Giao Diện
- **Sidebar (Trái):** Điều hướng các mục chính
- **Header (Trên):** Tìm kiếm, thông báo, cài đặt
- **Content Area (Giữa):** Nội dung chính
- **Responsive:** Hoạt động trên Mobile, Tablet, Desktop

## 🎨 Tùy Chỉnh

### Thay Đổi Màu Sắc
Chỉnh sửa file `admin/css/style.css` - phần `:root`:
```css
--primary-color: #27AE60;  /* Thay đổi màu chính */
```

### Thêm Tính Năng Mới
1. Thêm link vào sidebar (`admin/index.html`)
2. Tạo section content mới
3. Thêm CSS styling (`admin/css/style.css`)
4. Thêm event listeners (`admin/js/script.js`)

### Tích Hợp API Backend
Xem file `admin/README.md` phần "Tích Hợp Với Backend"

## 📱 Responsive Design
- **Desktop (1920px+):** Full sidebar + content
- **Tablet (768px-1024px):** Collapsible sidebar
- **Mobile (<768px):** Slide-out sidebar, optimized layout

## 🔒 Bảo Mật
- Luôn sử dụng HTTPS trên production
- Thêm authentication layer
- Protect CSRF tokens
- Validate user input
- Manage sessions properly

## 💻 Yêu Cầu Hệ Thống
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Chart.js (loaded via CDN)
- Font Awesome 6 (loaded via CDN)
- No backend required for demo

## 📚 Tài Liệu Chi Tiết
Xem file `admin/README.md` để có hướng dẫn chi tiết:
- Cài đặt đầy đủ
- Hướng dẫn từng tính năng
- Khắc phục sự cố
- Tùy chỉnh nâng cao

## 🆘 Khắc Phục Sự Cố

| Vấn Đề | Giải Pháp |
|--------|----------|
| Chart không hiển thị | Kiểm tra CDN Chart.js |
| Sidebar không hoạt động mobile | Xem browser console |
| Dữ liệu không cập nhật | Kiểm tra kết nối API |
| Style không áp dụng | Clear cache, reload |

## 📞 Liên Hệ & Hỗ Trợ
- **IT Team:** [Thêm thông tin liên hệ]
- **Email:** it@company.com
- **Phone:** [Thêm số điện thoại]

## 📝 Phiên Bản & Lịch Sử

| Phiên Bản | Ngày | Mô Tả |
|-----------|------|-------|
| 1.0.0 | 13/08/2026 | Release đầu tiên - Đầy đủ các tính năng cơ bản |

## 📄 License & Copyright
Bản quyền © 2026 QAsystem  
Phát triển bởi IT Team  
Sử dụng nội bộ công ty

---

**Trạng Thái:** ✅ Sản Xuất (Production)  
**Phiên Bản Hiện Tại:** 1.0.0  
**Cập Nhật Lần Cuối:** 13/08/2026
