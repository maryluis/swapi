export const MAIN_URL = "https://swapi.dev/api/";

export const getPageUrl = (page) => {
   return `${MAIN_URL}people/?page=${page}`;
}

export const getPersonUrl = (number) => {
    return `${MAIN_URL}people/${number}`
}


export async function getPersons(page) {
    const response = await fetch(getPageUrl(page));  
    const data = await response.json();
    return data;
}

export async function getOnePerson(number) {
    const response = await fetch(getPersonUrl(number));  
    const data = await response.json();
    return data;
}

export function getIdFromUrl(str="") {
    const splitted = str.split(`/`);
    const id = splitted.find((i) => i && Number.isInteger(++i));
    return id;
}


export const IMG = "https://knowhow.pp.ua/wp-content/uploads/2020/06/01_astronaut_Yes-Outer-Space-Has-a-Smell%E2%80%94Here%E2%80%99s-What-It-Smells-Like_241509286_Andrey-Armyagov-0620.jpg";
