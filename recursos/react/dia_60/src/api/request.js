import axios from "axios";

export async function getCountriesData() {
  try {
    const res = await axios.get('https://restcountries.com/v2/all');
    return res.data;
  }
  catch(err){
    return err.response;
  }
}

export async function getCountryData(code) {
  try {
    const res = await axios.get(`https://restcountries.com/v2/alpha/${code}`);
    return res.data;
  }
  catch(err){
    return err.response;
  }
}

