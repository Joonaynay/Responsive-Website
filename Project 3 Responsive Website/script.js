window.addEventListener('load', () => {
    const video = document.getElementById('hero-video');
    const gridContainer = document.querySelector('.grid-container');

    video.src = 'videos/hero.mov';

    const easeIntoPause = () => {
        let slowDownInterval = setInterval(() => {
            if (video.playbackRate > 0.1) {
                video.playbackRate -= 0.05;
            } else {
                video.pause();
                clearInterval(slowDownInterval);
                video.playbackRate = 1;
            }
        }, 100);
    };

    video.addEventListener('timeupdate', () => {
        if (video.duration - video.currentTime < 1) {
            easeIntoPause();
        }
    });

    video.onplay = () => {
        gridContainer.style.opacity = '1';
        document.body.style.overflow = 'auto';
    };
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');
    const video = document.getElementById('hero-video');
    const gridContainer = document.querySelector('.grid-container');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent !== 'Home') {
                document.querySelector('nav').style.backgroundColor = 'rgba(10, 10, 10, 0.25)';
            } else {
                window.location.href = 'index.html'
                return;
            }
            const target = this.getAttribute('data-target');
            
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            document.querySelector(`.${target}`).style.display = 'block';
        });
    });
});
