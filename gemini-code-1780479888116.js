document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');

    // Charger la progression sauvegardée
    checkboxes.forEach((checkbox, index) => {
        const isChecked = localStorage.getItem(`glowup_task_${index}`) === 'true';
        checkbox.checked = isChecked;
    });

    // Écouter les clics pour sauvegarder instantanément
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(`glowup_task_${index}`, checkbox.checked);
        });
    });
});