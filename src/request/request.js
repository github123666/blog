import axios from 'axios'
const requests = axios.create({
    baseURL:'/api',
    timeout:3000
})
export default requests