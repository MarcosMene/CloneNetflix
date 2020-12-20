$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2

        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
})

// variaveis 

let botaofilme = 1;
let videojanela = null;
let videoelemento = null;
let imagemgif;
let fundopreto;


/** contorno imagens carrossel*/
function nocontorno(x) {
    x.style.border = "0px solid #fff";
   
}
function contorno(x) {
    x.style.border = "3px solid #fff";
  
}




/*muda primeira imagem fundo */

document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/breakingbad_l.jpg')";
document.getElementById("filme-principal").style.backgroundSize = "cover";
setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/breakingbad.gif')";
document.getElementById("filme-principal").style.backgroundSize = "cover";
}, 2000);




// FUNCOES MUDANCA FUNDO IMAGEM E VIDEO

// BREAKING BAD 

function breakingbad() {

    botaofilme = 1;
    
/*muda textos */

    document.getElementById('titulo').innerHTML = "Breaking Bad";

    document.getElementById('descricao').innerHTML = "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. ";



/*muda imagens fundo */

    document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/breakingbad_l.jpg')";
    document.getElementById("filme-principal").style.backgroundSize = "cover";
    setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/breakingbad.gif')";
    document.getElementById("filme-principal").style.backgroundSize = "cover";
    }, 2000);
    return;
    }


// QUEEN GAMBIT



    function queengambit() {
    botaofilme = 2;
   

        /*muda textos */
        
        document.getElementById('titulo').innerHTML = "The Queen's Gambit";
        
        document.getElementById('descricao').innerHTML = "In a Kentucky orphanage in the 1950s, a young girl discovers an astonishing talent for chess while struggling with addiction. ";
        
        
        /*muda imagens fundo */
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/queen_gambit_l.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/queen_gambit.gif')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        }, 2000);
        return;
        }



// WITCHER 

    function witcher() {
botaofilme = 3;


        /*muda textos */
        document.getElementById('titulo').innerHTML = "The Witcher";

        document.getElementById('descricao').innerHTML = "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts. ";
    


        /*muda imagens fundo */
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/the_witcher_l.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/witcher.gif')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        }, 2000);
        return;
        }

        // UNFORTUNATE 
 
        function unfortunate_events() {
            botaofilme = 4;
             
            /*muda textos */
                    document.getElementById('titulo').innerHTML = "A Series of Unfortunate Events";
            
                    document.getElementById('descricao').innerHTML = "The orphaned Baudelaire children face trials, tribulations and the evil Count Olaf, all in their quest to uncover the secret of their parents' death. ";
                
            
            
            /*muda imagens fundo */
                    document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/unfortunate_events_l.jpg')";
                    document.getElementById("filme-principal").style.backgroundSize = "cover";
                    setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/unfortunate_events.gif')";
                    document.getElementById("filme-principal").style.backgroundSize = "cover";
                    }, 2000);
                    return;
                    }


// ENOLA 

function enola() {
    botaofilme = 5;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Enola Holmes";
    
            document.getElementById('descricao').innerHTML = "While searching for her missing mother, intrepid teen Enola Holmes uses her sleuthing skills to outsmart big brother Sherlock and help a runaway lord.";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/enola_holmes_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/enola_holmes.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }

            
// LOST SPACE 

function lostSpace() {
    botaofilme = 6;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Lost in Space";
    
            document.getElementById('descricao').innerHTML = "After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers. ";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/lost_in_space_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/lost_space.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }

// UMBRELLA ACADEMY 

function umbrella() {
    botaofilme = 7;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "The Umbrella Academy";
    
            document.getElementById('descricao').innerHTML = "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/the_umbrella_academy_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/umbrella.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }

// STRANGE THINGS

function strange() {
    botaofilme = 8;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Stranger Things";
    
            document.getElementById('descricao').innerHTML = "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/stranger_things_l.jpg')";
          
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/strange_things.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }

// LOST WORLD

function lostWorld() {
    botaofilme = 9;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Jurassic World - Fallen Kingdom";
    
            document.getElementById('descricao').innerHTML = "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/jurassic_world_fallen_kingdom_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/jurassic_world_fallen_kingdom.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }


            // irishman



function venom() {
    botaofilme = 10;
     
/*muda textos */
        document.getElementById('titulo').innerHTML = "Venom";

        document.getElementById('descricao').innerHTML = "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. ";
    


/*muda imagens fundo */
        document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/venom_l.jpg')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/venom.gif')";
        document.getElementById("filme-principal").style.backgroundSize = "cover";
        }, 2000);
        return;
        }

function irishman() {
    botaofilme = 11;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Irishman";
    
            document.getElementById('descricao').innerHTML = "Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa. ";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/irishman_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/irishman.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            }
            

function maryPoppins() {
    botaofilme = 12;
     
    /*muda textos */
            document.getElementById('titulo').innerHTML = "Mary Poppins Returns";
    
            document.getElementById('descricao').innerHTML = "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.";
        
    
    
    /*muda imagens fundo */
            document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/mary_poppins_l.jpg')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            setTimeout(function(){ document.getElementById("filme-principal").style.background = "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)100%), url('img/mary_poppins.gif')";
            document.getElementById("filme-principal").style.backgroundSize = "cover";
            }, 2000);
            return;
            
            }
            

          

          
              function showvideo() {
                var z = document.getElementById("fullvideo");
                z.style.display = "block";
                videoelemento = document.createElement("VIDEO");
              
                checavideo()
              
                videoelemento.setAttribute("width", "100%");
                videoelemento.autoplay = true;
                videoelemento.setAttribute("controls", "controls");
                document.getElementById("myVideo").appendChild(videoelemento);
              }

              function closeWin() {
                document.getElementById("filme-principal").style.opacity = "1";
                var videojanela = document.getElementById("fullvideo");
                if (videojanela.style.display === "none") {
                    videojanela.style.display = "block";
                } else {
                    videojanela.style.display = "none";
                }
                videoelemento.remove();
            }


            // CHECA VIDEO COM O BOTAO 

            function checavideo() {
                document.getElementById("filme-principal").style.opacity = "0";
                if (botaofilme === 1) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/breaking_bad.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/breaking_bad.ogg");
                    }
                    return;
                }

                if (botaofilme === 2) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/the_queen_gambit.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/the_queen_gambit.ogg");
                    }
                    return;
                }

                if (botaofilme === 3) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/the_witcher.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/the_witcher.ogg");
                    }
                    return;
                }

                if (botaofilme === 4) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/unfortunate.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/unfortunate.ogg");
                    }
                    return;
                }

                if (botaofilme === 5) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/enola.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/enola.ogg");
                    }
                    return;
                }

                if (botaofilme === 6) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/lost_space.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/lost_space.ogg");
                    }
                    return;
                }

                if (botaofilme === 7) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/umbrella.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/umbrella.ogg");
                    }
                    return;
                }

                if (botaofilme === 8) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/stranger_things.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/stranger_things.ogg");
                    }
                    return;
                }

                if (botaofilme === 9) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/jurassic_kingdom.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/jurassic_kingdom.ogg");
                    }
                    return;
                }

                if (botaofilme === 10) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/venom.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/venom.ogg");
                    }
                    return;
                }

                if (botaofilme === 11) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/irishman.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/irishman.ogg");
                    }
                    return;
                }
                
                if (botaofilme === 12) {
                    if (videoelemento.canPlayType("video/mp4")) {
                        videoelemento.setAttribute("src","videos/mary_poppins.mp4");
                    } else {
                        videoelemento.setAttribute("src","videos/mary_poppins.ogg");
                    }
                    return;
                }




            }