window.onload = () => {
    setSize();
}
window.onresize = () => {
    setSize();
}
function setSize() {
    document.querySelector('p').innerText = `${window.innerWidth} x ${window.innerHeight}`;
}
