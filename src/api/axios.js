import  axios from 'axios'
import https from 'https'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export async function getUsers() {
  try {
    const response = await axios.get(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}', {
      httpsAgent: new https.Agent({
          rejectUnauthorized: false
      })
  });
    return response.data
  } catch (error) {
    console.error(error);
  }
}