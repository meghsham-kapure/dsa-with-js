function rightAngleTriangleColumnNumbered(n){
    
    for (let i = 0; i < n; i++){
        let line = ""
        for (let j =0; j<=i; j++){
            line+=" "+(j+1);
        }
        console.log(line);
    }
}

function rightAngleTriangleRowNumbered(n){
    
    for (let i = 0; i < n; i++){
        let line = ""
        for (let j =0; j<=i; j++){
            line+=" "+(i+1);
        }
        console.log(line);
    }
}

function invertedLeftAlignedNumberTriangle(n){
    for (let i = 0; i< n; i++){
    let line = "";
    for (let j =0; j<n-i; j++){
      line+=" "+(j+1);
    }
    console.log(line);
  }
}

invertedLeftAlignedNumberTriangle(5)