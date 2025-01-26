const Middle=()=>{
const arr=["Agra","Mumbai","Haryana","Amritsar","Jaipur","Indore","Delhi","Pune","Banaras","Jodhpur","Gwalior","Bhopal","Pachmarhi","Kolkata","patna","Jabalpur","Mathura","Ujjain","Srinagar","Jammu&Kashmir","Punjab"]

    return (
        <>

        <div className="tag">places|</div>
        <div className="box"> 
        
       
        {arr.map((word,index)=>(
           <span key={index}  className="places">{word}</span>
        ))
        }
        
        </div>
        </>
    )
}
export default Middle;