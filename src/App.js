import About from "./About";


export const Landingpagewords = ()=>{
  return(
  <div className="landingpagewords">
  <h2 className="marketlinemain">Welcome to <br></br>Maka Community</h2>
  <p className="marketline">Guiding our kids to discovering<br></br> their success</p>
 </div>
)}

export const Image = () =>{
  return(
    <div className="landing-pageimage">
      <img src="images/maka.webp" alt="studies" className="landingimage"/>
    </div>
  )
}



const App =()=>{
  return(
 <div>
  <About/>
  <Landingpagewords/>
  <Image/>
 </div>
  )
}
export default App;