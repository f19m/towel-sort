
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];

  if (matrix===undefined || matrix===null){
    return [];
  }

  let i = 0
  matrix.forEach(element => {
    //console.log('i=' + i)
    if (i == 0){
      for ( i ; i < element.length; i++) {
        const item = element[i];
        res.push(item);
      }
    }else{
      for ( i = element.length; i > 0 ; i--) {
        const item = element[i-1];
        res.push(item);
      }
    }
    
  });
 
  return res;
}
