import  axios from 'axios'

const instance = axios.create({
  httpsAgent: new https.Agent({  
      rejectUnauthorized: false
  })
});

export async function getUsers() {
  try {
    const response = await instance.get(' https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    return response.data
  } catch (error) {
    console.error(error);
  }
}