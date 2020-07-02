$(()=>{
    let socket=io();
    $("#myform").on('submit',(e)=>{
        e.preventDefault();
        socket.emit('message',$('#message').val());
        $('#message').val('');
    })

    socket.on('message',(msg)=>{
        $('#chatarea').append(`<li>${msg}</li>`)
    })
})