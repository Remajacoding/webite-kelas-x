
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// Update clock every minute
updateClock(); // Initial call to set the clock immediately
setInterval(updateClock, 60000); // Update every minute

const data = new Date().getHours();
var sapaan = document.getElementById('sapaanhari');
var sapaanCUY = 'selamat datang di website kelas x oplb kami dan '
var dataSapaan = ['selamat pagi', 'selamat siang', 'selamat sore', 'selamat malam'];
if (data < 4) {
    sapaan.innerHTML = `${sapaanCUY} ${dataSapaan[3]}`;
}
else if (data < 11) {
    sapaan.innerHTML = `${sapaanCUY}  ${dataSapaan[0]}`; // 0
} else if (data < 15) {
    sapaan.innerHTML = `${sapaanCUY} ${dataSapaan[1]}`;//1
}
else if (data < 18) {
    sapaan.innerHTML = `${sapaanCUY} ${dataSapaan[2]}`;//2
}
else if (data == 18 || data > 18 ) {
    sapaan.innerHTML = `${sapaanCUY} ${dataSapaan[3]}`;//3
}
else {
    console.error('sistem data day eror')
}

