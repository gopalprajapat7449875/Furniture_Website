import axios from "axios";

 let apibaseurl = process.env.NEXT_PUBLIC_APIBASEURL
 let Sliderdata = () => {
    return axios.get(`${apibaseurl}home/slider`)
      .then((res) => res.data)
      .then((finalres) =>finalres)
  }


  
  export {Sliderdata}