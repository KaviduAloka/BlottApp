import axios from 'axios';

export default function (
  url: string,
  method: 'GET',
  body?: object,
  params?: object,
) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.request({
        url,
        method,
        data: body,
        params,
      });

      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}
