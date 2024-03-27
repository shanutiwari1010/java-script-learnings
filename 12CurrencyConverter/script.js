const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json"

const dropdown = document.querySelector(".dropdown select");

for(let select of dropdown){
    for(currcode in countryList){
        console.log(code, countryList[code]){
            let newOption = document.createElement("option")
            newOption.innerText = currcode;
    
        }
    }
}
// for(let select of dropdown)