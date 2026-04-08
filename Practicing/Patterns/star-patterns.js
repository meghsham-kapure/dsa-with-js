function starSquare(n) {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      line = line + ' *';
    }
    console.log(line);
  }
  console.log('\n');
}


function rightAngleTriangle(n) {
  
  for (let i = 0 ; i < n; i++){
    let line = "";
    for(let j= 0; j <= i; j++){
      line+= " *"
    }
    console.log(line);
  }
}

function invertedLeftAlignedStarTriangle(n){
  for (let i = 0; i< n; i++){
    let line = "";
    for (let j =0; j<n-i; j++){
      line+=" *";
    }
    console.log(line);
  }
}



function centeredDecreasingStarPyramid(n){
  for (let i = 0; i< n; i++){
    let line ="";
    for(let j =0; j<i; j++ ){
      line+=" ";
    }

    for(let j=0; j<n-i;j++){
      line+=" *";
    }

    console.log(line);
    
  }

}

function centeredIncreasingStarPyramid(n){
    for (let i = 0; i< n; i++){
      let line="";

      for (let j =0; j<n-i; j++){
        line+=" "
      }

      for(let j=0; j<=i; j++){
        line+="* "
      }

      console.log(line)
    }
}


function diamondStarPattern(n){
  centeredIncreasingStarPyramid(n);
  centeredDecreasingStarPyramid(n);
}

diamondStarPattern(5);