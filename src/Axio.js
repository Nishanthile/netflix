import Axios from "axios";


const instace =Axios.create({
    baseURL:"https://api.themoviedb.org/3"
});



export default instace;