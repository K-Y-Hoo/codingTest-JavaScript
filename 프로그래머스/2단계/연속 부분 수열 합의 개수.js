function solution(elements) {
    const set = new Set(); 
    const n = elements.length; 
    
    for(let i=0; i<n; i++){
      let sum = 0;
  
      for(let j=i; j<i+n; j++){
  
        sum += elements[j%n];
        set.add(sum)
      }
  
    }
    return set.size
  }