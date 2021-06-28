// OPEN/CLOSE TOGGLE MENU

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarLabel = document.querySelectorAll("label");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.height = "361px";

        let arrayLength = getSidebarLabel.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLabel[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.height = "0";

        let arrayLength = getSidebarLabel.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLabel[i].style.opacity = "0";
        }
        
        getSidebarUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }

}

// CHANGE BACKGROUNDCOLOUR

function changeColor(value)
{
    let newBackground = document.body.style.backgroundColor;
    switch(value)
    {
        case 'a':
            newBackground = "#9e9e9e";
            toggleNav();
        break;
        case 'b':
            newBackground = "#fa5b5b";
            toggleNav();
        break;
        case 'c':
            newBackground = "#e6f77b";
            toggleNav();
        break;
        case 'd':
            newBackground = "#a456dc";
            toggleNav();
        break;
        case 'e':
            newBackground = "#8cf970";
            toggleNav();
        break;
    }
    document.body.style.backgroundColor = newBackground;

}


//CLOSE MENU ON CLICK

let labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.addEventListener('click', function() {
        labels.forEach(label.classList.remove('active'));
        this.classList.add('active');
    });
});

Array.from(labels).forEach(function(color){
    par2.textContent += ' (color)';
});

