$(document).ready(function (){
    $('form').on('submit', function(event) {
        event.preventDefault();
        
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');

        $(`${novaTarefa}`).appendTo(novoItem);
        
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');
        $('li').click(function() {
            $(this).addClass('riscado');
        }); 
        
        $(novoItem).appendTo('ul');

        $('#nome-tarefa').val('');
    })
})

function limpar() {
    let limpo = document.querySelector('ul');

    limpo.innerHTML = '';
}