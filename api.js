import React, { useEffect, useState } from "react";

const Api = () => {
  const cities = [
   "Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai", "Hyderabad", "Ahmedabad", "Pune",

  
  "Bhopal", "Jaipur", "Lucknow", "Patna", "Dehradun", "Chandigarh", "Bhubaneswar", "Gandhinagar", 
  "Thiruvananthapuram", "Ranchi", "Shillong", "Itanagar", "Gangtok", "Kohima", "Aizawl", 
  "Agartala", "Imphal", "Dispur", "Panaji",


  "Indore", "Surat", "Visakhapatnam", "Nagpur", "Kanpur", "Varanasi", "Ludhiana", "Vadodara", "Agra", "Coimbatore", 
  "Guwahati", "Madurai", "Nashik", "Meerut", "Rajkot", "Jodhpur", "Jabalpur", "Raipur", "Gwalior", "Noida",

  "Udaipur", "Shimla", "Darjeeling", "Haridwar", "Rishikesh", "Mysore", "Ooty", "Kochi", "Alappuzha", 
  "Mahabalipuram", "Ajmer", "Pushkar", "Mount Abu", "Gangtok", "Puducherry", "Tirupati",

 
  "Ayodhya", "Mathura", "Dwarka", "Amritsar", "Somnath", "Bodh Gaya", "Shirdi", "Tiruvannamalai", 
  "Kanyakumari", "Puri", "Rameswaram", "Ujjain", "Jammu", "Srinagar", "Vaishno Devi", "Hampi",

 
  "Faridabad", "Ghaziabad", "Aurangabad", "Durgapur", "Vijayawada", "Bhilai", "Bokaro", "Jamshedpur",
  "Mangalore", "Hubli", "Tiruchirapalli", "Kolhapur",  "Dhanbad",

 
   "Nainital", "Mussoorie", "Lonavala", "Pachmarhi", "Gulmarg",  "Cherrapunji", "Tawang"
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const results = await Promise.all(
      cities.map(async (city) => {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${city}`
        );
        const data = await response.json();
        return {
          name: data.title,
          image: data.originalimage?.source || "https://via.placeholder.com/150",
          detail:data.extract
        };
      })
    );
    setData(results);
  }

  return (
    <>
    <div className="mainbox">
      {data.map((item, index) => (
        <div key={index} className="card">
          <img className="cards" src={item.image} alt={item.name} />
          <span  className="details">{item.name}</span>
          {/* <h1 className="details">{item.name}  {item.detail}</h1> */}
        </div>
      ))}
    </div>
    <div>

    </div>
    </>
  );
};

export default Api;
