let observer_options_offset = "0px";
let observer_options_threshold = 0;
let observer_options = {
    rootMargin: `0px 0px ${observer_options_offset} 0px`,
    threshold: observer_options_threshold
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('onscroll_visible_Box');
        } else {
            entry.target.classList.remove('onscroll_visible_Box');
        }
    });
}, observer_options);

const sections = document.getElementsByClassName('img');
for (let i = 0; i < sections.length; i++) {
    observer.observe(sections[i]);
}