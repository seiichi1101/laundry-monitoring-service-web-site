import axios from 'axios'
import config from "./auth_config.json"


export const listImgUrl: any = async (token: string, prefix: string) => {
  const res = await axios.get(`${config.audience}/prod/photos`, {
    params: { prefix },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return res.data.keys
}