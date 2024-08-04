document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sort').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let nMax= parseInt(document.getElementById('numero-max').value);

        let = nAle = Math.random() * nMax;
        nAle = Math.floor(nAle + 1);

        document.getElementById('res-valor').innerText = nAle;
        document.querySelector('.resultado').style.display = 'block'
    })
})