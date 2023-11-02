function findDup( arr ){

  // arr.forEach( (e, i) => { 
  //   if ( arr.indexOf(e) !== arr.lastIndexOf(e) ) { return e }
  // })

  // forEach always returns undefined. that's why the code above won't work

  for (let i = 0; i < arr.length; i++) {
    
    if ( arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) ) { return arr[i] }
    
  }

}

console.log(findDup( [1, 3, 2, 1, 4, 5] ))


// parameters: arr
// return: num     // the only value in arr that has a duplicate
// e.g. findDup( [1, 3, 2, 1, 4, 5] )
// results in 1


// loop through arr
  // if the first index of arr[i] is not equal to the last index of arr[i], return arr[i]
// end loop
