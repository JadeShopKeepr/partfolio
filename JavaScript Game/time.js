const locations = document.querySelectorAll('.t-2');

const ticking = function () {
  locations.forEach((location) => {
    const output = location.querySelector('clock');
    const timezone = location.getAttribute('data-timezone');

    const now = luxon.DateTime.now().setZone(timezone);

    output.innerHTML = now.toFormat('HH:mm:ss');
  });
};

ticking();
setInterval(function () {
  ticking();
}, 1000);
