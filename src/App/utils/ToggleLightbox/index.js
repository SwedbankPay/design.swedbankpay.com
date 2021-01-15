const ToggleLightbox = e => {
    e.currentTarget.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
};

export default ToggleLightbox;
