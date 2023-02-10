let arr =[];
let arr1 =[];
let arrname=[];
let arremail=[];
$(document).ready(function () {
    $(".addMore").click(function () {
        $("#submit").show();
            if ($('body').find('.fieldGroup')){
            // var allfields = '<div class="form-group fieldGroup">' + $(".fieldGroupCopy").html() + '</div>';
            $('body').find('.newfields').append(` <div class="input-1">
            <input type="text" placeholder="Enter Name"class="name">
            <input type="text" placeholder="Enter e-mail" class="email">
            <i class="fa-solid fa-square-minus Remove"></i>
        </div>`);
            }
        }
    );
   $("body").on("click",".Remove",function(){
    $(this).parent().remove();
   })
    $("#move").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(".change").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $(".change").text("ON");
        } else {
            $("body").addClass("dark");
            $(".change").text("OFF");
        }
    })
    $("#submit").click(function(){
        $.each($('input[class=name]'),function(){
            if($(this).val()!="")
            arrname.push($(this).val());
           
        })
        $.each($('input[class=email]'),function(){
            if($(this).val()!="")
            arremail.push($(this).val());
        })
        for(i in arrname){
            arr.push({Name:arrname[i],Email:arremail[i]});
        }
        console.log(arr);
        showdata();
        arr.splice(0,arrname.length);
        $('.newfields').html("");
        console.log(arr);
        $("input").val("");
        
    })
function showdata(){
        var item = "<table>";
        for(i=0;i<arr.length;i++){
        item += `<tr id='removeitem$[i]'>`
        item += "<td>" + (i+1) +"</td>"
        item += "<td>" + arr[i].Name + "</td>"
        item += "<td>" + arr[i].Email + "</td>"
        item += "</tr>"
    }
    item += "</table>";
       $("#showfields").html(item);
       $("tr:odd").css({"background-color":"black","color":"white"})
        $("move").show();
    }
});