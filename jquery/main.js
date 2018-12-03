$(document).ready(function(){

    var squer = $('.squer');

    for(var i=0;i<9;i++){
        $("#noumbersOfscouers").append("<div class=squer id=s" + i + " postion= id=s" + i + "></div>");
        

    }

    


  $(".squer").on("click",you);
  winner();
});


function you(){
        var isclass = $(this).attr("class");  //from 
        if(isclass.indexOf("assinged")< 0 ){

             $(this).addClass("eaxX assinged");
                  placRndom();
      
        }else{alert("alaredy selected");}

}


function placRndom(){
    

    var select = $(".squer:not(.assinged)")
    var rndmPostion = Math.floor(Math.random() * select.length );
    console.log(rndmPostion);//tested
    var randomelemnts = select[rndmPostion]
    console.log(randomelemnts);
    $(randomelemnts).addClass("os assinged");
    


}



var counterPlayer =0; //this from help me abdraboua 
function winner (){


    var winLtrack=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,4,7],[3,5,8],[2,4,6],[0,4,8]]; 
     //$(eaxX).length >= 0 || $("o").length>=0;
      for(var i=0;i<=winLtrack.length;i++){

        
        var a = winLtrack[i][0];
        var b = winLtrack[i][1];
        var c = winLtrack[i][2];

        console.log( 'a' , a , "b" , b ,'c' , c);

        console.log($('.squer')[a]);
        if ( $([a]) !== '' && $('.squer'[a]) == $('.squer'[b])&& $('.squer'[b]) == $('.squer'[c]) ) {
            alert('player '+ $('.squer'[a]).html() +'is winner');
        }
    }
     if ( counterPlayer == 8){ // if any one not winer
        alert('No one is winner');
    } 
};

// var grid = document.querySelector("#gird");
// function creatDiv(){
// for(var i=0;i<9;i++){
//     gird.append("<div class=squer id=s" + i + "data-postion=" + i + "></div>");
// }
/// }//------------------------
  

    // var toAdd = document.createDocumentFragment();
    // for(var i=0; i < 11; i++){
    //    var newDiv = document.createElement('div');
    //    newDiv.id = 's'+i ;
    //    newDiv.className = 'squer';
    //    toAdd.appendChild(newDiv);
    // }
    
    // document.appendChild(toAdd);


    


    //---------------------