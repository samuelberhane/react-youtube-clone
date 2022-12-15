const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchChannelData = async (id) => {
  try {
    const response = await fetch(
      `https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`,
      options
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};
