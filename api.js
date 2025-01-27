import { useEffect } from "react";

const Api=(google)=>{
useEffect(() => {
   
    const apiKey = 'AIzaSyCFXJwAEfkUFgSgwAGbz_2v6kXxfiP0dXI'; 
   
    const url = `https://serpapi.com/search.json?engine=google&q=Maldives+Destinations`


;

    
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      
  }, []);

  return (
    <h1>hiiii</h1>
  )
}
export default Api;