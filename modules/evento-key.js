// Esta función captura los botones numéricos al hacer click


export function getNumber() {
    let keys = document.querySelectorAll('.key');
    
    keys.forEach(function(key) {
        key.addEventListener('click', function(e) {
            e.preventDefault();
            alert(this.innerHTML);
        });
    });
}