// QAsystem Admin Theme - API Integration Example
// ===============================================
// This file demonstrates how to connect the admin theme with a backend API

/**
 * API Service Class - Handles all API communications
 */
class ApiService {
    constructor(baseUrl = 'http://localhost:3000/api') {
        this.baseUrl = baseUrl;
        this.timeout = 5000;
        this.authToken = localStorage.getItem('authToken');
    }

    /**
     * Generic HTTP request method
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const defaultHeaders = {
            'Content-Type': 'application/json',
        };

        if (this.authToken) {
            defaultHeaders['Authorization'] = `Bearer ${this.authToken}`;
        }

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    /**
     * GET request
     */
    get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    }

    /**
     * POST request
     */
    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    /**
     * PUT request
     */
    put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    /**
     * DELETE request
     */
    delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    }
}

/**
 * Dashboard API Methods
 */
class DashboardAPI {
    constructor(api) {
        this.api = api;
    }

    /**
     * Get dashboard summary (stats cards)
     * Expected response:
     * {
     *   servers: { total: 25, online: 24, offline: 1 },
     *   users: { total: 247, active: 18 },
     *   disk: { used: 756, total: 1000 },
     *   alerts: { total: 5, critical: 2 }
     * }
     */
    async getSummary() {
        return this.api.get('/dashboard/summary');
    }

    /**
     * Get CPU metrics
     * Expected response:
     * {
     *   labels: ['00:00', '04:00', ...],
     *   datasets: [
     *     { label: 'Server 01', data: [35, 42, ...] },
     *     ...
     *   ]
     * }
     */
    async getCPUMetrics(timeRange = '24h') {
        return this.api.get(`/dashboard/metrics/cpu?range=${timeRange}`);
    }

    /**
     * Get RAM metrics
     */
    async getRAMMetrics(timeRange = '24h') {
        return this.api.get(`/dashboard/metrics/ram?range=${timeRange}`);
    }

    /**
     * Get system status
     */
    async getSystemStatus() {
        return this.api.get('/dashboard/system-status');
    }
}

/**
 * Server API Methods
 */
class ServerAPI {
    constructor(api) {
        this.api = api;
    }

    /**
     * Get all servers
     */
    async getServers(filters = {}) {
        const params = new URLSearchParams(filters).toString();
        return this.api.get(`/servers?${params}`);
    }

    /**
     * Get server by ID
     */
    async getServer(serverId) {
        return this.api.get(`/servers/${serverId}`);
    }

    /**
     * Create new server
     */
    async createServer(serverData) {
        return this.api.post('/servers', serverData);
    }

    /**
     * Update server
     */
    async updateServer(serverId, serverData) {
        return this.api.put(`/servers/${serverId}`, serverData);
    }

    /**
     * Delete server
     */
    async deleteServer(serverId) {
        return this.api.delete(`/servers/${serverId}`);
    }

    /**
     * Server actions
     */
    async restart(serverId) {
        return this.api.post(`/servers/${serverId}/restart`, {});
    }

    async shutdown(serverId) {
        return this.api.post(`/servers/${serverId}/shutdown`, {});
    }

    async boot(serverId) {
        return this.api.post(`/servers/${serverId}/boot`, {});
    }

    /**
     * Get server metrics
     */
    async getMetrics(serverId) {
        return this.api.get(`/servers/${serverId}/metrics`);
    }
}

/**
 * User API Methods
 */
class UserAPI {
    constructor(api) {
        this.api = api;
    }

    /**
     * Get all users
     */
    async getUsers(filters = {}) {
        const params = new URLSearchParams(filters).toString();
        return this.api.get(`/users?${params}`);
    }

    /**
     * Get user by ID
     */
    async getUser(userId) {
        return this.api.get(`/users/${userId}`);
    }

    /**
     * Create new user
     */
    async createUser(userData) {
        return this.api.post('/users', userData);
    }

    /**
     * Update user
     */
    async updateUser(userId, userData) {
        return this.api.put(`/users/${userId}`, userData);
    }

    /**
     * Delete user
     */
    async deleteUser(userId) {
        return this.api.delete(`/users/${userId}`);
    }

    /**
     * Lock/Unlock user
     */
    async lockUser(userId) {
        return this.api.post(`/users/${userId}/lock`, {});
    }

    async unlockUser(userId) {
        return this.api.post(`/users/${userId}/unlock`, {});
    }
}

/**
 * Logs API Methods
 */
class LogsAPI {
    constructor(api) {
        this.api = api;
    }

    /**
     * Get logs
     */
    async getLogs(filters = {}) {
        const params = new URLSearchParams(filters).toString();
        return this.api.get(`/logs?${params}`);
    }

    /**
     * Export logs
     */
    async exportLogs(format = 'csv', filters = {}) {
        const params = new URLSearchParams(filters).toString();
        return this.api.get(`/logs/export?format=${format}&${params}`);
    }
}

/**
 * Backup API Methods
 */
class BackupAPI {
    constructor(api) {
        this.api = api;
    }

    /**
     * Get backups
     */
    async getBackups() {
        return this.api.get('/backups');
    }

    /**
     * Create backup
     */
    async createBackup() {
        return this.api.post('/backups', {});
    }

    /**
     * Restore backup
     */
    async restoreBackup(backupId) {
        return this.api.post(`/backups/${backupId}/restore`, {});
    }

    /**
     * Delete backup
     */
    async deleteBackup(backupId) {
        return this.api.delete(`/backups/${backupId}`);
    }
}

/**
 * Integration Example - Usage in script.js
 */

// Initialize API Service
const api = new ApiService('http://localhost:3000/api');
const dashboardAPI = new DashboardAPI(api);
const serverAPI = new ServerAPI(api);
const userAPI = new UserAPI(api);
const logsAPI = new LogsAPI(api);
const backupAPI = new BackupAPI(api);

/**
 * Load Dashboard Data - Example
 */
async function loadDashboardDataFromAPI() {
    try {
        // Load summary
        const summary = await dashboardAPI.getSummary();
        updateStatCards(summary);

        // Load chart data
        const cpuData = await dashboardAPI.getCPUMetrics('24h');
        const ramData = await dashboardAPI.getRAMMetrics('24h');
        updateCharts(cpuData, ramData);

        // Load system status
        const systemStatus = await dashboardAPI.getSystemStatus();
        updateSystemStatusTable(systemStatus);

        showNotification('Dashboard data loaded successfully', 'success');
    } catch (error) {
        console.error('Error loading dashboard:', error);
        showNotification('Failed to load dashboard data', 'error');
    }
}

/**
 * Load Servers - Example
 */
async function loadServersFromAPI() {
    try {
        const servers = await serverAPI.getServers();
        renderServerCards(servers);
        showNotification('Servers loaded successfully', 'success');
    } catch (error) {
        console.error('Error loading servers:', error);
        showNotification('Failed to load servers', 'error');
    }
}

/**
 * Load Users - Example
 */
async function loadUsersFromAPI() {
    try {
        const users = await userAPI.getUsers();
        renderUserTable(users);
        showNotification('Users loaded successfully', 'success');
    } catch (error) {
        console.error('Error loading users:', error);
        showNotification('Failed to load users', 'error');
    }
}

/**
 * Example: Restart Server
 */
async function restartServerAPI(serverId) {
    if (!confirm('Bạn chắc chắn muốn khởi động lại server?')) return;

    try {
        showNotification('Restarting server...', 'info');
        await serverAPI.restart(serverId);
        await loadServersFromAPI(); // Refresh list
        showNotification('Server restarted successfully', 'success');
    } catch (error) {
        console.error('Error restarting server:', error);
        showNotification('Failed to restart server', 'error');
    }
}

/**
 * Example: Create User
 */
async function createUserAPI(userData) {
    try {
        showNotification('Creating user...', 'info');
        const result = await userAPI.createUser(userData);
        await loadUsersFromAPI(); // Refresh list
        showNotification('User created successfully', 'success');
        return result;
    } catch (error) {
        console.error('Error creating user:', error);
        showNotification('Failed to create user', 'error');
        throw error;
    }
}

/**
 * Example: Export Logs
 */
async function exportLogsAPI(format = 'csv') {
    try {
        showNotification('Exporting logs...', 'info');
        const data = await logsAPI.exportLogs(format);
        // Handle download
        downloadFile(data, `logs.${format}`);
        showNotification('Logs exported successfully', 'success');
    } catch (error) {
        console.error('Error exporting logs:', error);
        showNotification('Failed to export logs', 'error');
    }
}

/**
 * Example: Create Backup
 */
async function createBackupAPI() {
    try {
        showNotification('Creating backup...', 'info');
        const result = await backupAPI.createBackup();
        // Refresh backup list
        const backups = await backupAPI.getBackups();
        renderBackupTable(backups);
        showNotification('Backup created successfully', 'success');
        return result;
    } catch (error) {
        console.error('Error creating backup:', error);
        showNotification('Failed to create backup', 'error');
    }
}

/**
 * Authentication Example
 */
class AuthAPI {
    constructor(api) {
        this.api = api;
    }

    async login(username, password) {
        const response = await this.api.post('/auth/login', {
            username,
            password,
        });

        if (response.token) {
            localStorage.setItem('authToken', response.token);
            this.api.authToken = response.token;
        }

        return response;
    }

    async logout() {
        localStorage.removeItem('authToken');
        this.api.authToken = null;
        window.location.href = '/login';
    }

    async refreshToken() {
        const response = await this.api.post('/auth/refresh', {});
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            this.api.authToken = response.token;
        }
        return response;
    }
}

const authAPI = new AuthAPI(api);

/**
 * Helper Functions
 */
function downloadFile(data, filename) {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
}

/**
 * Integration with existing functions
 */

// Replace the old loadDashboardData with API version
// Uncomment to use:
// function loadDashboardData() {
//     loadDashboardDataFromAPI();
// }

// Replace the old server setup with API version
// Uncomment to use:
// function setupServerActions() {
//     const serverActionBtns = document.querySelectorAll('.server-actions .btn-sm');
//     serverActionBtns.forEach(btn => {
//         btn.addEventListener('click', async function() {
//             const action = this.textContent.trim();
//             const serverId = this.closest('.server-card').getAttribute('data-server-id');
//
//             if (action === 'Khởi Động Lại') {
//                 await restartServerAPI(serverId);
//             }
//             // ... handle other actions
//         });
//     });
// }

console.log('API Integration module loaded');
