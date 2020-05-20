/*document.getElementById('knapp').addEventListener('click', function () {
    document.getElementById('knapp').classList.toggle("change")
    document.getElementById('navigering').classList.toggle("active")
});
*/
document.getElementById('knapp').addEventListener('click', function () {
    document.getElementById('listan').style.display = "none"
    document.getElementById('knapp').classList.toggle("change")
    document.getElementById('navigering').classList.toggle("active")
    document.getElementById('listan').style.display = "value"
});
