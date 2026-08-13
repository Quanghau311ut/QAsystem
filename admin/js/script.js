/* ===================================
   QAsystem Admin Theme - JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupSidebarToggle();
    setupCharts();
    setupEventListeners();
    loadDashboardData();
}

// ===== NAVIGATION =====
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            this.classList.add('active');
            const sectionId = this.getAttribute('data-section');
            const sectionElement = document.getElementById(sectionId);

            if (sectionElement) {
                sectionElement.classList.add('active');

                // Update page title
                const title = this.textContent.trim();
                document.querySelector('.page-title').textContent = title;

                // Close sidebar on mobile
                if (window.innerWidth <= 768) {
                    document.querySelector('.sidebar').classList.remove('active');
                }

                // Reinitialize charts if on dashboard
                if (sectionId === 'dashboard') {
                    setTimeout(() => {
                        setupCharts();
                    }, 100);
                }
            }
        });
    });

    // Set dashboard as default active
    const dashboardLink = document.querySelector('[data-section="dashboard"]');
    if (dashboardLink) {
        dashboardLink.click();
    }
}

// ===== SIDEBAR TOGGLE =====
function setupSidebarToggle() {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// ===== CHARTS SETUP =====
function setupCharts() {
    // CPU Chart
    const cpuChartCanvas = document.getElementById('cpuChart');
    if (cpuChartCanvas && window.Chart) {
        const ctx = cpuChartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
                datasets: [
                    {
                        label: 'Server 01',
                        data: [35, 42, 48, 62, 55, 45, 38],
                        borderColor: '#27AE60',
                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Server 02',
                        data: [28, 35, 40, 45, 38, 32, 30],
                        borderColor: '#3498DB',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Server 03',
                        data: [52, 58, 65, 72, 68, 60, 55],
                        borderColor: '#F39C12',
                        backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 13,
                                family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto"
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // RAM Chart
    const ramChartCanvas = document.getElementById('ramChart');
    if (ramChartCanvas && window.Chart) {
        const ctx = ramChartCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
                datasets: [
                    {
                        label: 'Server 01',
                        data: [55, 60, 68, 75, 70, 65, 62],
                        borderColor: '#27AE60',
                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Server 02',
                        data: [40, 45, 50, 55, 50, 48, 51],
                        borderColor: '#3498DB',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    },
                    {
                        label: 'Server 03',
                        data: [78, 82, 85, 90, 88, 85, 82],
                        borderColor: '#E74C3C',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 13,
                                family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto"
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Logout button
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
                console.log('User logged out');
                // Add logout logic here
            }
        });
    }

    // Search box
    const searchBox = document.querySelector('.search-box input');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            handleSearch(this.value);
        });
    }

    // Notification button
    const notificationBtn = document.querySelector('.header-icon[title="Thông báo"]');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showNotifications();
        });
    }

    // Settings button
    const settingsBtn = document.querySelector('.header-icon[title="Cài đặt"]');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            showSettings();
        });
    }

    // Add Server button
    const addServerBtn = document.querySelector('[data-section="servers"] + .section-header .btn-primary');
    if (addServerBtn) {
        addServerBtn.addEventListener('click', function() {
            showAddServerModal();
        });
    }

    // Add User button
    const addUserBtn = document.querySelectorAll('.section-header .btn-primary')[1];
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            showAddUserModal();
        });
    }

    // Backup button
    const backupBtn = document.querySelectorAll('.section-header .btn-primary')[2];
    if (backupBtn) {
        backupBtn.addEventListener('click', function() {
            createBackup();
        });
    }

    // Reports Download button
    const downloadReportsBtn = document.querySelector('[data-section="reports"] + .section-header .btn-primary');
    if (downloadReportsBtn) {
        downloadReportsBtn.addEventListener('click', function() {
            downloadReports();
        });
    }

    // Export logs button
    const exportLogsBtn = document.querySelector('[data-section="logs"] + .section-header .btn-secondary');
    if (exportLogsBtn) {
        exportLogsBtn.addEventListener('click', function() {
            exportLogs();
        });
    }

    // Date range filters
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    
    if (startDate && endDate) {
        const today = new Date().toISOString().split('T')[0];
        startDate.value = today;
        endDate.value = today;

        startDate.addEventListener('change', function() {
            filterDashboardData(this.value, endDate.value);
        });

        endDate.addEventListener('change', function() {
            filterDashboardData(startDate.value, this.value);
        });
    }

    // Server action buttons
    setupServerActions();
    setupUserActions();
}

// ===== SERVER ACTIONS =====
function setupServerActions() {
    const serverActionBtns = document.querySelectorAll('.server-actions .btn-sm');
    
    serverActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            const serverName = this.closest('.server-card').querySelector('h4').textContent;

            if (action === 'Chi Tiết') {
                showServerDetails(serverName);
            } else if (action === 'Khởi Động Lại') {
                restartServer(serverName);
            } else if (action === 'Khởi Động') {
                bootServer(serverName);
            } else if (action === 'Tắt') {
                shutdownServer(serverName);
            } else if (action === 'Xóa') {
                deleteServer(serverName);
            }
        });
    });
}

// ===== USER ACTIONS =====
function setupUserActions() {
    const userActionBtns = document.querySelectorAll('[data-section="users"] .action-btn');
    
    userActionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            const userName = this.closest('tr').querySelector('strong').textContent;

            if (action === 'Sửa') {
                editUser(userName);
            } else if (action === 'Khóa') {
                lockUser(userName);
            } else if (action === 'Kích Hoạt') {
                activateUser(userName);
            }
        });
    });
}

// ===== DASHBOARD DATA =====
function loadDashboardData() {
    // Simulate loading dashboard data
    console.log('Loading dashboard data...');
    
    // Update stats with animation
    animateStatCards();
}

function filterDashboardData(startDate, endDate) {
    console.log(`Filtering data from ${startDate} to ${endDate}`);
    // Add filtering logic here
}

function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ===== ACTION HANDLERS =====
function showServerDetails(serverName) {
    showModal(`Chi Tiết ${serverName}`, `
        <div style="padding: 20px;">
            <p><strong>Tên Server:</strong> ${serverName}</p>
            <p><strong>IP Address:</strong> 192.168.1.10</p>
            <p><strong>OS:</strong> Ubuntu 22.04 LTS</p>
            <p><strong>Uptime:</strong> 45 ngày 12 giờ</p>
            <p><strong>CPU Cores:</strong> 8</p>
            <p><strong>RAM:</strong> 16 GB</p>
            <p><strong>Ổ Cứng:</strong> 500 GB SSD</p>
        </div>
    `);
}

function restartServer(serverName) {
    if (confirm(`Bạn có chắc chắn muốn khởi động lại ${serverName}?`)) {
        showNotification(`${serverName} đang khởi động lại...`, 'info');
        setTimeout(() => {
            showNotification(`${serverName} khởi động lại thành công!`, 'success');
        }, 2000);
    }
}

function bootServer(serverName) {
    if (confirm(`Bạn có chắc chắn muốn khởi động ${serverName}?`)) {
        showNotification(`${serverName} đang khởi động...`, 'info');
        setTimeout(() => {
            showNotification(`${serverName} đã khởi động thành công!`, 'success');
        }, 2000);
    }
}

function shutdownServer(serverName) {
    if (confirm(`Bạn có chắc chắn muốn tắt ${serverName}?`)) {
        showNotification(`${serverName} đang tắt...`, 'warning');
        setTimeout(() => {
            showNotification(`${serverName} đã tắt!`, 'info');
        }, 2000);
    }
}

function deleteServer(serverName) {
    if (confirm(`Bạn có chắc chắn muốn xóa ${serverName}? Hành động này không thể hoàn tác.`)) {
        showNotification(`${serverName} đang được xóa...`, 'error');
        setTimeout(() => {
            showNotification(`${serverName} đã được xóa!`, 'success');
        }, 2000);
    }
}

function editUser(userName) {
    showModal(`Sửa Thông Tin ${userName}`, `
        <div style="padding: 20px;">
            <form>
                <div style="margin-bottom: 15px;">
                    <label><strong>Tên Người Dùng:</strong></label>
                    <input type="text" value="${userName}" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Email:</strong></label>
                    <input type="email" value="email@company.com" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Phòng Ban:</strong></label>
                    <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                        <option>IT</option>
                        <option>Sản Xuất</option>
                        <option>Kỹ Thuật</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" onclick="this.closest('[role=dialog]').parentElement.remove()">Lưu Thay Đổi</button>
            </form>
        </div>
    `);
}

function lockUser(userName) {
    if (confirm(`Bạn có chắc chắn muốn khóa người dùng ${userName}?`)) {
        showNotification(`${userName} đã bị khóa!`, 'warning');
    }
}

function activateUser(userName) {
    if (confirm(`Bạn có chắc chắn muốn kích hoạt người dùng ${userName}?`)) {
        showNotification(`${userName} đã được kích hoạt!`, 'success');
    }
}

function showAddServerModal() {
    showModal('Thêm Server Mới', `
        <div style="padding: 20px;">
            <form>
                <div style="margin-bottom: 15px;">
                    <label><strong>Tên Server:</strong></label>
                    <input type="text" placeholder="Nhập tên server" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>IP Address:</strong></label>
                    <input type="text" placeholder="192.168.1.x" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Hệ Điều Hành:</strong></label>
                    <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                        <option>Ubuntu 22.04 LTS</option>
                        <option>Ubuntu 20.04 LTS</option>
                        <option>Windows Server 2019</option>
                        <option>Windows Server 2022</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary" onclick="this.closest('[role=dialog]').parentElement.remove()">Thêm Server</button>
            </form>
        </div>
    `);
}

function showAddUserModal() {
    showModal('Thêm Người Dùng Mới', `
        <div style="padding: 20px;">
            <form>
                <div style="margin-bottom: 15px;">
                    <label><strong>Tên Người Dùng:</strong></label>
                    <input type="text" placeholder="Nhập tên người dùng" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Email:</strong></label>
                    <input type="email" placeholder="email@company.com" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Phòng Ban:</strong></label>
                    <select style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                        <option>IT</option>
                        <option>Sản Xuất</option>
                        <option>Kỹ Thuật</option>
                    </select>
                </div>
                <div style="margin-bottom: 15px;">
                    <label><strong>Chức Vụ:</strong></label>
                    <input type="text" placeholder="Nhập chức vụ" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                </div>
                <button type="button" class="btn btn-primary" onclick="this.closest('[role=dialog]').parentElement.remove()">Thêm Người Dùng</button>
            </form>
        </div>
    `);
}

function createBackup() {
    showNotification('Bắt đầu tạo sao lưu...', 'info');
    setTimeout(() => {
        showNotification('Sao lưu hoàn tất thành công!', 'success');
    }, 3000);
}

function downloadReports() {
    showNotification('Bắt đầu tải báo cáo...', 'info');
    // Simulate download
    setTimeout(() => {
        showNotification('Báo cáo đã sẵn sàng tải về!', 'success');
    }, 2000);
}

function exportLogs() {
    showNotification('Bắt đầu xuất nhật ký...', 'info');
    setTimeout(() => {
        showNotification('Nhật ký đã được xuất!', 'success');
    }, 2000);
}

function handleSearch(query) {
    if (query.trim()) {
        console.log('Searching for:', query);
        // Add search logic here
    }
}

function showNotifications() {
    showModal('Thông Báo', `
        <div style="padding: 20px;">
            <div style="padding: 15px; border-bottom: 1px solid #ddd;">
                <p><strong>Cảnh Báo Bảo Mật</strong></p>
                <p style="color: #666; font-size: 13px;">Phát hiện 5 nỗ lực đăng nhập thất bại</p>
                <p style="color: #999; font-size: 12px;">2 giờ trước</p>
            </div>
            <div style="padding: 15px; border-bottom: 1px solid #ddd;">
                <p><strong>Sao Lưu Thành Công</strong></p>
                <p style="color: #666; font-size: 13px;">Sao lưu hệ thống hoàn tất - 2.5 GB</p>
                <p style="color: #999; font-size: 12px;">5 giờ trước</p>
            </div>
            <div style="padding: 15px;">
                <p><strong>Server Offline</strong></p>
                <p style="color: #666; font-size: 13px;">Server 04 ngừng phản hồi</p>
                <p style="color: #999; font-size: 12px;">8 giờ trước</p>
            </div>
        </div>
    `);
}

function showSettings() {
    showModal('Cài Đặt', `
        <div style="padding: 20px;">
            <h4 style="margin-bottom: 15px;">Cài Đặt Hệ Thống</h4>
            <div style="margin-bottom: 15px;">
                <label><input type="checkbox" checked> Nhận Thông Báo Email</label>
            </div>
            <div style="margin-bottom: 15px;">
                <label><input type="checkbox" checked> Chế Độ Tối</label>
            </div>
            <div style="margin-bottom: 15px;">
                <label><input type="checkbox" checked> Đăng Nhập 2FA</label>
            </div>
            <button type="button" class="btn btn-primary" onclick="this.closest('[role=dialog]').parentElement.remove()">Lưu Cài Đặt</button>
        </div>
    `);
}

// ===== MODAL & NOTIFICATION HELPERS =====
function showModal(title, content) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
    `;

    modalContent.innerHTML = `
        <div style="padding: 20px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">${title}</h3>
            <button style="background: none; border: none; font-size: 24px; color: #999; cursor: pointer;">&times;</button>
        </div>
        <div>${content}</div>
    `;

    const closeBtn = modalContent.querySelector('button');
    closeBtn.addEventListener('click', function() {
        modal.remove();
    });

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 6px;
        color: white;
        font-size: 14px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;

    const colors = {
        info: '#3498DB',
        success: '#27AE60',
        warning: '#F39C12',
        error: '#E74C3C'
    };

    notification.style.backgroundColor = colors[type] || colors.info;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Responsive handling
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
});

console.log('QAsystem Admin Theme - Loaded Successfully');
