function error(){
    var x=document.getElementById(`input`).value;
    if(x==""){
        $('.error_text').html()="";
        $('.error_text').append('please try again');
        $('.red').css('visibility','visible')
    }
}