// get the button and dropdown content elements
const dropdownbutton = document.getElementById('dropdownbutton');
const dropdowncontent = document.getElementById('dropdowncontent');

// listen for clicks on the dropdown button
dropdownbutton.addEventListener('click',() => {
// toggle the visibility of the dropdown content
    dropdowncontent.style.display = dropdowncontent.style.display === 'block' ? 'none' : 'block';
});

// close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown button')) {
        //close dropdown if the click is outside
        dropdowncontent.style.display = 'none';
    };
});
