function isAnagram(s, t){
    let len1 = s.length;
      let len2 = t.length;
      if(len1 !== len2){
         return (false);
      }
      let str1 = s.split('').sort().join('');
      let str2 = t.split('').sort().join('');
       console.log (str1);
       console.log (str2);
      if(str1 === str2){
         return (true);
      } else { 
         return(false);
      }
   }
   console.log(isAnagram("anagram", "nagaram"));