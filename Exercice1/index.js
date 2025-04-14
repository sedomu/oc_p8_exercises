//votre code ici
function pairNumbers(start, end){
    let result = [];

    for (let i = start; i <= end; i++){
        i % 2 === 0 ? result.push(i) : "";
    }

    if (result.length === 0){
        return "";
    }

    let resultString = "";

    for (let i = 0; i < result.length - 1; i++){
        resultString += result[i].toString();
        resultString += ",";
    }
    resultString += result[result.length - 1];

    return resultString;
}
export default pairNumbers