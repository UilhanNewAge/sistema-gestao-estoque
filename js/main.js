// JavaScript for the dashboard page
// Add your dashboard-specific scripts here

// Script para a sidebar responsiva
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
});