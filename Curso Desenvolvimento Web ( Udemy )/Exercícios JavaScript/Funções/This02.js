// This #02 Contador incremental que vai adicionar +1 a cada 1 segundo

function Pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // contador não está incrementando pois o this nesse caso não está apontando corretamente para pessoa.
}// para que ele aponte corretamente é necessario o .bind(this) no final do contador

new Pessoa 

