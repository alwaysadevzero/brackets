module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;

    let strArr = str.split('')

    let closedBracketIndex;
    let openBracketIndex;
    for (let brackets of bracketsConfig) {
      do {  // first find closedBracketIndex then search try to openBracketIndex from closedBracketIndex
        closedBracketIndex = (brackets[0] == brackets[1]) ? strArr.lastIndexOf(brackets[1]) : strArr.indexOf(brackets[1]);
        openBracketIndex = strArr.lastIndexOf(brackets[0], closedBracketIndex-1)

        //Break if cannot find brackets elements in array  
        if ((closedBracketIndex < 0) && (openBracketIndex < 0)) break;

        //False if find only one bracket of 2
        if ((closedBracketIndex > -1) && !(openBracketIndex > -1)) return false

        //False if closedBracketIndex less than openBracketIndex. Example : )(
        if (closedBracketIndex - openBracketIndex < 0) return false;

        //cut piece array between openBracketIndex and closedBracketIndex
        arrBetweenBrackets = strArr.slice(openBracketIndex+1,closedBracketIndex).length;

        if (arrBetweenBrackets % 2 !== 0) return false;

        strArr = strArr.filter((_, index) => index !== closedBracketIndex && index !== openBracketIndex)
      } while (closedBracketIndex + openBracketIndex > 0);
      }
    return true 
}
