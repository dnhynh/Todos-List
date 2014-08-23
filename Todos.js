$(document).ready(function(){
    
    $("#list").on('click','li',function(){
        $(this).remove();
    });
    
    $("button").click(function(){
        var entry = $("#entry").val();
        $("<li></li>", {
            text: entry
        }).appendTo("#list ul");   
        $("#entry").val("");
    });
    
});