import  axios from 'axios'

export async function getUsers() {
  try {
    const response = await axios.get(' http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    return response.data
  } catch (error) {
    console.error(error);
  }
}