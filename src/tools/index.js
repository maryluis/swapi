export const mainUrl = "https://swapi.dev/api/";

export const peopleUrl = (page) => {
   return `${mainUrl}people/?page=${page}`;
}

export const onePersonUrl = (number) => {
    return `${mainUrl}people/${number}`
}


export async function getPersons(page) {
    const response = await fetch(peopleUrl(page));  
    const data = await response.json();
    return data;
}

export async function getOnePerson(number) {
    const response = await fetch(onePersonUrl(number));  
    const data = await response.json();
    return data;
}

export function numberFromUrl(str="") {
    let newStr = str.slice(str.indexOf(`people/`));
    newStr = newStr.slice(newStr.indexOf("/")+1);
    newStr = newStr.substr(0, newStr.length-1);
    return newStr
}

export function objToArr(obj) {
    let newArr = [];
    for(let i in obj) {
        newArr.push({[i] : obj[i]});
    }
    return newArr;
}

export const image = "https://knowhow.pp.ua/wp-content/uploads/2020/06/01_astronaut_Yes-Outer-Space-Has-a-Smell%E2%80%94Here%E2%80%99s-What-It-Smells-Like_241509286_Andrey-Armyagov-0620.jpg";
