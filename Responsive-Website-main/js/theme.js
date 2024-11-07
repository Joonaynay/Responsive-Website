document.addEventListener('DOMContentLoaded', function() {
    const themeInput = document.getElementById("nav-theme-input");

    if (themeInput.checked) {
        applyTheme()
    } else {
        removeTheme()
    }
   
    themeInput.addEventListener('change', function() {
        if (themeInput.checked) {
            applyTheme()
        } else {
            removeTheme()
        }

    });

    function applyTheme() {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../css/theme.css';
        link.id = 'theme-css';
        document.head.appendChild(link);
        document.querySelector('nav').style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        
    }

    function removeTheme() {
        const theme = document.getElementById('theme-css');
        if (theme) {
            theme.remove()
        }
        
        document.querySelector('nav').style.backgroundColor = 'rgba(10, 10, 10, 0.5)';
        

    }

    document.querySelector('nav').style.backgroundColor = 'rgba(0, 0, 0, 0)'
});

