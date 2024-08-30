document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const currentTheme = localStorage.getItem('theme');

    // Set the theme based on localStorage
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    // Initialize button text and icon based on the current theme
    updateButtonText();

    // Add event listener for the button
    toggleButton.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');

        // Toggle the theme
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }

        // Update the button text and icon after changing the theme
        updateButtonText();
    });

    // Function to update button text and icon based on the current theme
    function updateButtonText() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const button = document.getElementById('toggle-dark-mode');

        if (currentTheme === 'dark') {
            button.textContent = '🌙 Switch to Light Mode'; // or any icon/text you prefer
        } else {
            button.textContent = '🌑 Switch to Dark Mode'; // or any icon/text you prefer
        }
    }
});
