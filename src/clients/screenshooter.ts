import axios from 'axios'

export default {
  shoot: async ({
    filename,
    url,
    waitTime,
  }: {
    filename: string
    url: string
    waitTime: number
  }): Promise<string> =>
    (
      await axios.get(
        `https://screenshooter.tokarnia.tech/.netlify/functions/shoot?url=${encodeURIComponent(
          url
        )}&waitTime=${waitTime}&filename=${filename}`
      )
    ).data,
}
