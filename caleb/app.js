// Question 1

const reverseString = (s) => {
   // convert the string into array
    s_array = s.split("")
    reversed_s = []
    for(let i = s_array.length - 1; i >= 0; i--){
      reversed_s.push(s_array[i]
      )
    }
    return reversed_s
  }


// question 3
// margin is the distance between the parent element border to the child element border 
// while padding is the distance between the elements border to the start of its elements border.
