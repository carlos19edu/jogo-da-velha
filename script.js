var vez = 1;
var mensagem = "";
var play1= 0;
var play2= 0;
var fimRodada = false;
$(function(){

    $(".linha div").click(function(){
        var img = $(this).find("img");
        if(img.length == 0 )
        {          
            var fig =  vez.toString() + ".jpg";
            $(this).append("<img src='"+fig+"' />");
            vez = (vez == 1? 2:1); 
            verificar();
        }
    });

    $("#play").click(function()
    {
         $(".linha div").find("img").remove();
         $(".div-bk").hide();
        });

});


function verificar(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
       fimdeJogo();
    }
    validateVelha();
}

function casasIguais(a, b, c){
  
    var imgA = $("#op"+a).find('img').attr('src');
    var imgB = $("#op"+b).find('img').attr('src');
    var imgC = $("#op"+c).find('img').attr('src');

    if( (imgA == imgB) && (imgB == imgC) && (imgA != undefined && imgA != "")){
        if(imgA.indexOf("1.jpg") >= 0)
        {
            mensagem = "O jogador 1 venceu!!";
           play1  ++;
        }
        else
        {
            mensagem = "O jogador 2 venceu!!";
            play2  ++;
        }
        return true;
    }
    else{
        return false;
    }
}



function validateVelha()
{
    var imagens = $(".linha div").find("img");
   if(imagens.length  == 9 && fimRodada == false ){
    mensagem  = "Empate !!";

    fimdeJogo();
   }

}

function fimdeJogo()
{
    $("#resultado").text(mensagem);

    fimRodada = true; 
    $(".div-bk").show();
    setPlacar();
}

function setPlacar(){
    $("#placar").text("Jogador1 "+ play1 +" x " + play2 +" Jogador2");
}

function menu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}