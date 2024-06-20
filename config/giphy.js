import { configDotenv } from "dotenv";

configDotenv({ path: "./.env" });

const fetchGiphy = async (searchTerm) => {
    const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
    const randomOffset = Math.floor(Math.random() * 100);
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=1&offset=${randomOffset}`;

    try {
        const response = await axios.get(giphyUrl);
        const gifUrl = response.data.data[0]?.images?.original?.url;
        return gifUrl || null;
    } catch (error) {
        console.error('Error fetching GIF from Giphy:', error);
        return null;
    }
};

export default fetchGiphy;