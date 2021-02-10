function dropdownMenu() {
    const button = document.querySelector('.mebutton');
    const content = document.querySelector('.dropdown .dropchild');
    button.addEventListener('click', () => {
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    })
}

function switchHometown() {
    const fatherButton = document.querySelector('#father-button');
    const motherButton = document.querySelector('#mother-button');
    const fatherContent = document.querySelector('#father-content');
    const motherContent = document.querySelector('#mother-content');

    motherContent.style.display = "none";
    fatherContent.style.display = "none";

    function switchHome(button, show, hide) {
        button.addEventListener('click', () => {
            if (show.style.display === "none") {
                show.style.display = "unset";
                hide.style.display = "none";
            } else if (show.style.display === "unset") {
                show.style.display = "none";            
                hide.style.display = "none";
            } else {
                show.style.display = "unset";
                hide.style.display = "none";
            }
        })
    }

    switchHome(fatherButton, fatherContent, motherContent);
    switchHome(motherButton, motherContent, fatherContent);
}

dropdownMenu();
switchHometown();