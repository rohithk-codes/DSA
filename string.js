//Reverse string

let str ="rohith"

function reverse (str){
if(str=='')return ''

return reverse(str.slice(1))+str[0]

}

console.log(reverse(str))

//Longest word in a scentance

let str = 'hello world i amfffff vincentfrancizzz'

let word = ''
let result = ''
for(let i = 0 ; i<str.length; i++){
   if(str[i]!== ' '){
      word += str[i]
       
   }else{
       
       if(word.length>result.length){
           result=word
         
       }
         word=''
   }
   
 
}

if(word.length>result.length){
    
    result= word
}


 console.log(result)



