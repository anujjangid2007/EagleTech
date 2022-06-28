import { api_name_covid } from "./Constants";

export const getCovidData = async() => {
      let res= await getDataFromServer(api_name_covid);
      return res;
}

export const getMovieData = async() => {
    let res= await getDataFromServer(api_name_covid);
    return res;
}

const getDataFromServer=async(apiName,params)=>{
    try {
        
        let result  = await fetch(apiName);
        result = await result.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}