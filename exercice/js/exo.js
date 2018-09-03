<script>
// appel JQ
$(function () {

    //Récupération des valeurs de l'internaute :
    const pseudo = $('#pseudo');
    const email = $('#email');
    const pwd = $('#pwd');
    const select = $('#select');
    
    $('#contactForm .alert-danger').remove();

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        // Validation des champs "input"
        if (pseudo.val() === '' || email.val() === '' || pwd.val() === '' || select === 'Pays'){
            $(this).prepend(`
            <div class="alert alert-danger">Erreur</div>
            `)
        }else{
            $(this).replaceWith(`
            <div class="alert alert-success"> Bienvenue </div>
            `)
        }

    }); //fin  $('#contactForm').on('submit',function(e)
    
</script>







}); //fin $(function()