$(document).ready(function () {
    $("button").addClass("myClass");
});

$(document).ready(function () {
    $('#exampleModal').on('show.bs.modal', function (event) {
        //bootstrap event that is emitted when modal is opened

        var button=$(event.relatedTarget);//Save instance of the clocked button that triggered the modal

        var color=button.data('colorname');//Extract info from data-* attributes

        var bgcolor="#fffff";

        var modal=$(this); //Instance of the context, in this case the modal



        console.log(event);

        modal.on('click', 'btn-danger', function () {
            $(document).find('body').css({'background-color':bgcolor});
        });

        modal.on('click', '.close', function () {
            $(document).find('body').css({'background-color':bgcolor});


        });
        modal.find('.modal-message').text('Do you want to change the background color to');//Find .modal-message class and replace the contents with new text

        modal.find('#color-name').html(color).css({'color':color}); //Finds the ID and replaces the HTML of the clocked color and css is changed o style the text with the clocked color
    });
});



