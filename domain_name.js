/* DIRECTIONS

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
FUNDAMENTALSPARSINGALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES

*/

function domainName(url){
    let split = url.split('/');
    let domain = '';

    for(let elem of split){
      let arr = elem.split('.')
        if(arr.length >=2){
          if(arr[0] == "www"){
            domain = arr[1]
          } else {
            domain = arr[0]
          }
        }
      }
  return domain
}
