// Array untuk menyimpan data lamaran
let applications = [];

// Ambil data dari localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadApplicationsFromStorage();
    renderApplications();
    setTodayDate();
});

// Set tanggal hari ini sebagai default
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('applicationDate').value = today;
}

// Simpan data ke localStorage
function saveToStorage() {
    localStorage.setItem('jobApplications', JSON.stringify(applications));
}

// Ambil data dari localStorage
function loadApplicationsFromStorage() {
    const stored = localStorage.getItem('jobApplications');
    if (stored) {
        applications = JSON.parse(stored);
    }
}

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const formData = {
        id: Date.now(), // Unique ID berdasarkan timestamp
        companyName: document.getElementById('companyName').value,
        position: document.getElementById('position').value,
        applicationDate: document.getElementById('applicationDate').value,
        status: document.getElementById('status').value,
        notes: document.getElementById('notes').value,
        cvFile: document.getElementById('cvFile').value
    };

    // Tambahkan ke array
    applications.push(formData);

    // Simpan ke localStorage
    saveToStorage();

    // Reset form
    this.reset();
    setTodayDate();

    // Render ulang daftar
    renderApplications();

    // Tampilkan notifikasi
    showNotification('✅ Lamaran berhasil disimpan!', 'success');
});

// Render semua lamaran
function renderApplications() {
    const container = document.getElementById('applicationsContainer');

    if (applications.length === 0) {
        container.innerHTML = '<p class="empty-state">Belum ada lamaran. Tambahkan lamaran pertama Anda!</p>';
        return;
    }

    // Urutkan dari terbaru ke terlama
    const sorted = [...applications].sort((a, b) => b.id - a.id);

    container.innerHTML = sorted.map(app => `
        <div class="application-card">
            <div class="card-header">
                <div class="card-title">
                    <h3>${app.companyName}</h3>
                    <p>${app.position}</p>
                </div>
                <span class="status-badge status-${app.status}">
                    ${getStatusLabel(app.status)}
                </span>
            </div>

            <div class="card-details">
                <div class="detail-item">
                    <span class="detail-label">📅 Tanggal Lamaran</span>
                    <span class="detail-value">${formatDate(app.applicationDate)}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">🗂️ File CV</span>
                    <span class="detail-value">${app.cvFile ? '✅ Ada' : '❌ Belum ada'}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">⏱️ Lama Menunggu</span>
                    <span class="detail-value">${getDaysWaiting(app.applicationDate)} hari</span>
                </div>
            </div>

            ${app.notes ? `<div class="card-notes"><strong>📝 Catatan:</strong> ${app.notes}</div>` : ''}

            <div class="card-actions">
                <button class="btn-edit" onclick="editApplication(${app.id})">✏️ Edit</button>
                <button class="btn-delete" onclick="deleteApplication(${app.id})">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
}

// Hapus lamaran
function deleteApplication(id) {
    if (confirm('Apakah Anda yakin ingin menghapus lamaran ini?')) {
        applications = applications.filter(app => app.id !== id);
        saveToStorage();
        renderApplications();
        showNotification('✅ Lamaran berhasil dihapus!', 'success');
    }
}

// Edit lamaran (placeholder - bisa dikembangkan lebih lanjut)
function editApplication(id) {
    const app = applications.find(a => a.id === id);
    if (app) {
        document.getElementById('companyName').value = app.companyName;
        document.getElementById('position').value = app.position;
        document.getElementById('applicationDate').value = app.applicationDate;
        document.getElementById('status').value = app.status;
        document.getElementById('notes').value = app.notes;

        // Hapus lamaran lama
        applications = applications.filter(a => a.id !== id);
        saveToStorage();
        renderApplications();

        // Scroll ke form
        document.getElementById('applicationForm').scrollIntoView({ behavior: 'smooth' });
        showNotification('✏️ Edit data lamaran, kemudian simpan lagi.', 'info');
    }
}

// Helper function: Format tanggal
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', locale: 'id-ID' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Helper function: Hitung hari menunggu
function getDaysWaiting(dateString) {
    const applicationDate = new Date(dateString);
    const today = new Date();
    const diff = Math.floor((today - applicationDate) / (1000 * 60 * 60 * 24));
    return diff >= 0 ? diff : 0;
}

// Helper function: Label status
function getStatusLabel(status) {
    const labels = {
        'submitted': 'Sudah Dikirim',
        'reviewing': 'Sedang Diproses',
        'interview': 'Interview',
        'accepted': 'Diterima',
        'rejected': 'Ditolak'
    };
    return labels[status] || status;
}

// Notification system
function showNotification(message, type) {
    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4caf50' : '#2196f3'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Tambahkan CSS animasi
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
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
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
