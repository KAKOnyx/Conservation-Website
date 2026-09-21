const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.getElementById('dropdownbutton');
const dropdownContent = document.getElementById('dropdowncontent');

function openDropdown() {
    dropdownContent.style.display = 'block';
    dropdownButton.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
    dropdownContent.style.display = 'none';
    dropdownButton.setAttribute('aria-expanded', 'false');
}

function isOpen() {
    return dropdownContent.style.display === 'block';
}

// Toggle when the button (or anything inside it, like the icon) is clicked
dropdownButton.addEventListener('click', () => {
    isOpen() ? closeDropdown() : openDropdown();
});

// Close when clicking anywhere outside the whole dropdown
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        closeDropdown();
    }
});

// Close with the Escape key, and return focus to the button
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
        closeDropdown();
        dropdownButton.focus();
    }
});


