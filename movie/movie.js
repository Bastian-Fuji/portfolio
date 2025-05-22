// Handle theme switching
const config = {
    theme: 'system',
}

// Set theme based on config
const updateTheme = () => {
    document.documentElement.dataset.theme = config.theme;
}

// Initialize theme
updateTheme();

// Theme toggle functionality (if needed)
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            config.theme = config.theme === 'light' ? 'dark' : 'light';
            updateTheme();
        });
    }
});

// Grid expansion functionality
document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('ul');
    const items = list.querySelectorAll('li');
    let currentIndex = 0; // Initially, the first element is active
    let isHovering = false;

    // Update grid columns based on active index
    const updateGrid = (index) => {
        const cols = [...items].map((_, i) => {
            const isActive = (i === index);
            items[i].dataset.active = isActive.toString();
            return isActive ? '10fr' : '1fr';
        }).join(' ');

        list.style.setProperty('grid-template-columns', cols);
    }

    // Handle mouse over on an item
    const handleMouseOver = (event) => {
        const closest = event.target.closest('li');
        if (closest) {
            isHovering = true;
            const index = [...items].indexOf(closest);
            if (index !== -1) {
                currentIndex = index;
                updateGrid(currentIndex);
            }
        }
    }

    // Handle mouse leaving the list
    const handleMouseLeave = () => {
        isHovering = false;
        // Keep the current expanded item
    }

    // Handle click on an item
    const handleClick = (event) => {
        const closest = event.target.closest('li');
        if (closest) {
            const index = [...items].indexOf(closest);
            if (index !== -1) {
                currentIndex = index;
                updateGrid(currentIndex);
            }
        }
    }

    // Recalculate article width on resize
    const resync = () => {
        const w = Math.max(
            ...[...items].map(item => item.offsetWidth)
        );
        list.style.setProperty('--article-width', w);
    }

    // Add event listeners
    list.addEventListener('mouseover', handleMouseOver);
    list.addEventListener('mouseleave', handleMouseLeave);
    list.addEventListener('click', handleClick);
    window.addEventListener('resize', resync);

    // Initialize grid and sizes
    updateGrid(currentIndex);
    resync();

});

// =====================================================================

