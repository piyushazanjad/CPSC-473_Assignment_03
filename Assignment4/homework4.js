"use strict";
/*jshint browser:true*/
/*globals $*/
/*jshint unused:false*/

function display() {
    $.ajax({
        url: "http://localhost:3000/actors",
        type: "GET",
        contentType: "JSON",
        success: function (data) {
            $.each(data, function (i, item) {
                console.log(item.id + item.name + item.starred);
                var content = "";
                content += "<div class=\"demo-list-action mdl-list\">" +
                " <div class='mdl-list__item'>" +
                " <span class='mdl-list__item-primary-content'>" +
                " <i class='material-icons mdl-list__item-avatar'>person</i>" +
                "<span>" + item.name + "</span>" + " </span>" +
                "  <a class='mdl-list__item-secondary-action'>" + "<i id=\"" + item.id +"\" data-id='" + item.id + "' data-name='" + item.name + "' data-starred='" + item.starred + "' class='material-icons' onclick='toggle(this)'>";

                if (item.starred) {

                    content += "star";
                }
                else {
                    content += "star_border";
                }

                content += "</i></a></div></div>";

                $(".actors").append(content);


            });
        },
        error:function(xhr,status){
            window.alert(xhr.status  + status);    
        }
    });

}


function toggle(val) {
    var id = $(val).data("id");
    var name = $(val).data("name");
    var starred = $(val).data("starred");

    var new_value;

    if (starred === true) {
        new_value = false;
    }
    else {
        new_value = true;
    }


    $.ajax({

        url: "http://localhost:3000/actors/" + id,
        data: JSON.stringify( { "name": name, "starred": new_value }),
        type: "PUT",
        contentType: "application/json",
        dataType: "json",
        
        success: function (data) {
            var a;

            if (data.starred === true) {
                a = "star";
                $(val).data("starred", true);
            }
            else {
                a = "star_border";
                $(val).data("starred", false);
            }
            $("#"+id)[0].innerHTML=a;


        },
        error:function(xhr,status){
            window.alert(xhr.status  + status);    
        }
    });
}
function add() {

    var input_string = $("#sample3").val();

    $.ajax({
        url: "http://localhost:3000/actors",
        type: "POST",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ name: input_string, starred: false }),
        success: function (data) {


            var content = "";
            content += "<div class='demo-list-action mdl-list'>" +
            " <div class='mdl-list__item'>" +
            " <span class='mdl-list__item-primary-content'>" +
            " <i class='material-icons mdl-list__item-avatar'>person</i>" +
            "<span>" + data.name + "</span>" + " </span>" +
            "  <a class='mdl-list__item-secondary-action'>" + "<i id=\"" + data.id +"\" data-id='" + data.id + "' data-name='" + data.name + "' data-starred='" + data.starred + "'   class='material-icons' onclick='toggle(this)'>" + "star_border</i></a></div></div>";
            $(".actors").append(content);


        }
    });

}


       
     
     
     
           
           
    
    
    
    

    
    
 
