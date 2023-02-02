const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (part, query) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?${query}&${part}%2Cid&regionCode=US&maxResults=50&order=date`,
      options
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
