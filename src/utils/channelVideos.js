const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchChannelVideos = async (part, query) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/search?${query}&${part}%2Cid&order=date&maxResults=50`,
      options
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
