
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': 'd0b07ecc09msh98d14234dd8919fp1d0b03jsn2e1ad49cd0d2',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}



export const youtubeOptions = {
  crossDomain:true,
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd0b07ecc09msh98d14234dd8919fp1d0b03jsn2e1ad49cd0d2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;

}