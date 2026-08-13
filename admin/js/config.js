// QAsystem Admin Theme - Configuration & Constants
// ================================================

// Theme Configuration
const THEME_CONFIG = {
    // Application Info
    appName: 'QAsystem Admin',
    appVersion: '1.0.0',
    appStatus: 'Production',
    appEnvironment: 'production', // development, staging, production
    
    // Colors - Leaf Green Theme
    colors: {
        primary: '#27AE60',      // Xanh Lá (Leaf Green)
        primaryDark: '#1E8449',
        primaryLight: '#52BE80',
        secondary: '#3498DB',    // Blue
        success: '#27AE60',
        warning: '#F39C12',      // Orange
        danger: '#E74C3C',       // Red
        info: '#3498DB',
        lightBg: '#F8F9FA',
        borderColor: '#E0E0E0',
        textDark: '#2C3E50',
        textLight: '#7F8C8D',
    },
    
    // API Configuration
    api: {
        baseUrl: '/api',         // Thay đổi thành URL API của bạn
        timeout: 5000,           // milliseconds
        retryAttempts: 3,
        retryDelay: 1000,        // milliseconds
    },
    
    // Dashboard Settings
    dashboard: {
        refreshInterval: 30000,  // Auto-refresh every 30s
        chartsUpdateInterval: 60000, // Update charts every 60s
        maxDataPoints: 100,
    },
    
    // Server Monitoring
    server: {
        healthCheckInterval: 60000,
        warningCpuThreshold: 70,
        criticalCpuThreshold: 90,
        warningRamThreshold: 80,
        criticalRamThreshold: 95,
        warningDiskThreshold: 75,
        criticalDiskThreshold: 90,
    },
    
    // Security
    security: {
        enableTwoFA: true,
        sessionTimeout: 3600000,  // 1 hour
        rememberMeDuration: 604800000, // 7 days
        logoutOnTabClose: true,
        passwordMinLength: 12,
        requireSpecialChars: true,
    },
    
    // Notifications
    notifications: {
        enabled: true,
        position: 'top-right', // top-left, top-center, top-right, bottom-left, etc
        duration: 3000,
        maxNotifications: 5,
    },
    
    // Pagination
    pagination: {
        itemsPerPage: 10,
        maxPages: 5,
    },
    
    // Date & Time Format
    dateFormat: {
        locale: 'vi-VN',
        dateStyle: 'DD/MM/YYYY',
        timeStyle: '24h',
        timezone: 'Asia/Ho_Chi_Minh',
    },
};

// Menu Items Configuration
const MENU_ITEMS = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'fas fa-chart-line',
        href: '#dashboard',
        badge: null,
    },
    {
        id: 'servers',
        label: 'Quản Lý Server',
        icon: 'fas fa-server',
        href: '#servers',
        badge: null,
    },
    {
        id: 'users',
        label: 'Quản Lý Người Dùng',
        icon: 'fas fa-users',
        href: '#users',
        badge: null,
    },
    {
        id: 'systems',
        label: 'Hệ Thống',
        icon: 'fas fa-cogs',
        href: '#systems',
        badge: null,
    },
    {
        id: 'logs',
        label: 'Nhật Ký Hoạt Động',
        icon: 'fas fa-file-alt',
        href: '#logs',
        badge: null,
    },
    {
        id: 'backup',
        label: 'Sao Lưu & Phục Hồi',
        icon: 'fas fa-database',
        href: '#backup',
        badge: null,
    },
    {
        id: 'security',
        label: 'Bảo Mật',
        icon: 'fas fa-lock',
        href: '#security',
        badge: null,
    },
    {
        id: 'reports',
        label: 'Báo Cáo',
        icon: 'fas fa-bar-chart',
        href: '#reports',
        badge: null,
    },
];

// Status Mapping
const STATUS_MAP = {
    ONLINE: { label: 'Online', badge: 'online', color: '#27AE60' },
    OFFLINE: { label: 'Offline', badge: 'offline', color: '#E74C3C' },
    MAINTENANCE: { label: 'Bảo Trì', badge: 'maintenance', color: '#F39C12' },
    WARNING: { label: 'Cảnh Báo', badge: 'warning', color: '#F39C12' },
    ERROR: { label: 'Lỗi', badge: 'error', color: '#E74C3C' },
    UNKNOWN: { label: 'Không Xác Định', badge: 'unknown', color: '#95A5A6' },
};

// Server Status Thresholds
const SERVER_THRESHOLDS = {
    cpu: {
        good: { min: 0, max: 50 },
        warning: { min: 50, max: 75 },
        critical: { min: 75, max: 100 },
    },
    ram: {
        good: { min: 0, max: 60 },
        warning: { min: 60, max: 80 },
        critical: { min: 80, max: 100 },
    },
    disk: {
        good: { min: 0, max: 70 },
        warning: { min: 70, max: 85 },
        critical: { min: 85, max: 100 },
    },
};

// Log Types
const LOG_TYPES = [
    { id: 'login', label: 'Đăng Nhập', icon: 'fas fa-sign-in-alt', color: '#3498DB' },
    { id: 'config', label: 'Thay Đổi Cấu Hình', icon: 'fas fa-cog', color: '#F39C12' },
    { id: 'system_error', label: 'Lỗi Hệ Thống', icon: 'fas fa-times-circle', color: '#E74C3C' },
    { id: 'security', label: 'Bảo Mật', icon: 'fas fa-shield-alt', color: '#9B59B6' },
    { id: 'backup', label: 'Sao Lưu', icon: 'fas fa-database', color: '#27AE60' },
    { id: 'user', label: 'Quản Lý Người Dùng', icon: 'fas fa-user', color: '#3498DB' },
];

// Departments
const DEPARTMENTS = [
    { id: 'it', label: 'IT', description: 'Information Technology' },
    { id: 'manufacturing', label: 'Sản Xuất', description: 'Manufacturing' },
    { id: 'engineering', label: 'Kỹ Thuật', description: 'Engineering' },
    { id: 'management', label: 'Quản Lý', description: 'Management' },
    { id: 'quality', label: 'Chất Lượng', description: 'Quality Assurance' },
    { id: 'hr', label: 'Nhân Sự', description: 'Human Resources' },
];

// User Roles
const USER_ROLES = [
    { id: 'admin', label: 'Admin', permissions: ['all'] },
    { id: 'it_manager', label: 'IT Manager', permissions: ['view_all', 'edit_systems', 'manage_servers'] },
    { id: 'system_admin', label: 'System Admin', permissions: ['view_all', 'edit_systems', 'manage_servers', 'manage_users'] },
    { id: 'operator', label: 'Operator', permissions: ['view_dashboard', 'view_servers'] },
    { id: 'user', label: 'User', permissions: ['view_dashboard'] },
];

// Report Types
const REPORT_TYPES = [
    { id: 'system_performance', label: 'Báo Cáo Hoạt Động Hệ Thống', template: 'system_performance' },
    { id: 'security', label: 'Báo Cáo Bảo Mật', template: 'security' },
    { id: 'users', label: 'Báo Cáo Người Dùng', template: 'users' },
    { id: 'backup', label: 'Báo Cáo Sao Lưu', template: 'backup' },
    { id: 'uptime', label: 'Báo Cáo Uptime', template: 'uptime' },
];

// Error Messages (i18n ready)
const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Lỗi kết nối mạng. Vui lòng kiểm tra lại.',
    API_ERROR: 'Lỗi từ server. Vui lòng thử lại sau.',
    UNAUTHORIZED: 'Bạn không có quyền truy cập.',
    FORBIDDEN: 'Hành động này bị cấm.',
    NOT_FOUND: 'Không tìm thấy yêu cầu.',
    VALIDATION_ERROR: 'Dữ liệu không hợp lệ.',
    SESSION_EXPIRED: 'Phiên làm việc của bạn đã hết hạn.',
    UNKNOWN_ERROR: 'Đã xảy ra lỗi không xác định.',
};

// Success Messages
const SUCCESS_MESSAGES = {
    SAVED: 'Dữ liệu đã được lưu thành công.',
    DELETED: 'Dữ liệu đã được xóa thành công.',
    UPDATED: 'Dữ liệu đã được cập nhật thành công.',
    CREATED: 'Dữ liệu mới đã được tạo thành công.',
    EXPORTED: 'Dữ liệu đã được xuất thành công.',
    IMPORTED: 'Dữ liệu đã được nhập thành công.',
};

// Default Values
const DEFAULTS = {
    pageTitle: 'QAsystem Admin',
    pageSize: 10,
    maxRetries: 3,
    cacheTimeout: 300000, // 5 minutes
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        THEME_CONFIG,
        MENU_ITEMS,
        STATUS_MAP,
        SERVER_THRESHOLDS,
        LOG_TYPES,
        DEPARTMENTS,
        USER_ROLES,
        REPORT_TYPES,
        ERROR_MESSAGES,
        SUCCESS_MESSAGES,
        DEFAULTS,
    };
}

console.log('QAsystem Configuration loaded successfully');
