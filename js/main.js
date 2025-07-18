// JavaScript for the dashboard page
// Add your dashboard-specific scripts here

// Script para a sidebar responsiva
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    // Script para expandir/recolher grupos da sidebar
    const groupTitles = document.querySelectorAll('.sidebar-group-title');

    groupTitles.forEach(title => {
        title.addEventListener('click', function() {
            const groupContent = this.nextElementSibling; // Seleciona o elemento irmão seguinte (o conteúdo do grupo)
            const expandIcon = this.querySelector('.expand-icon'); // Seleciona o ícone de expandir/recolher

            if (groupContent.style.maxHeight) {
                groupContent.style.maxHeight = null; // Recolhe o conteúdo
                expandIcon.style.transform = 'rotate(0deg)'; // Gira o ícone de volta
            } else {
                // Opcional: fechar outros grupos antes de abrir este
                // groupTitles.forEach(otherTitle => {
                //     if (otherTitle !== this) {
                //         otherTitle.nextElementSibling.style.maxHeight = null;
                //         otherTitle.querySelector('.expand-icon').style.transform = 'rotate(0deg)';
                //     }
                // });
                groupContent.style.maxHeight = groupContent.scrollHeight + 'px'; // Expande o conteúdo
                expandIcon.style.transform = 'rotate(90deg)'; // Gira o ícone para indicar expansão
            }
        });
    });
});