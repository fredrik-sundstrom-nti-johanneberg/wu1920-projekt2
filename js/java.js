document.getElementById('knapp').addEventListener('click', function () {
    document.getElementById('knapp').classList.toggle("change")
    document.getElementById('navigering').classList.toggle("active")
});

document.getElementById('immaterialratt').addEventListener('click', function () {
    document.getElementById('immaterialratt').classList.toggle("change")
    document.getElementById('immaterialratttext').classList.toggle("active")
});