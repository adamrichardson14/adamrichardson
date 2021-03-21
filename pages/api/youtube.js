import { fetchData } from "../../lib/utlis";

export default async (req, res) => {
  const { YOUTUBE_API_KEY, YOUTUBE_CHANNEL_ID } = process.env;
  const statisticsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const uploadsURL = `https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&maxResults=100&key=${YOUTUBE_API_KEY}`;

  async function getData() {
    const stats = fetchData(statisticsURL);
    const uploadData = fetchData(uploadsURL);

    return {
      stats: await stats,
      uploadData: await uploadData,
    };
  }

  const { stats, uploadData } = await getData();

  res.status(200).json({ stats: stats, uploads: uploadData });
};
