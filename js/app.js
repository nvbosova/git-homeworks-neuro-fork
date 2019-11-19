(async () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.latitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }

    // TODO: add custom logic here

})();