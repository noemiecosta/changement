document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.habit-checkbox input[type="checkbox"]');

    // Charger les habitudes sauvegardées dans le navigateur
    checkboxes.forEach((checkbox, index) => {
        const isChecked = localStorage.getItem(`glowup_habit_v2_${index}`) === 'true';
        checkbox.checked = isChecked;
    });

    // Sauvegarder automatiquement lors du clic
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(`glowup_habit_v2_${index}`, checkbox.checked);
        });
    });
});
