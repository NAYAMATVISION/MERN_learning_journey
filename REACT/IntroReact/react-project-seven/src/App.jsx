import { useState } from "react"
import "./App.css"


function App() {
  const colors = ["red", "blue", "green", "purple", "orange", "pink" , "yellow" , "brown", "gray"]
  const [index, setIndex] = useState(0)

  const changeColor = () => {
    setIndex((index + 1) % colors.length)
  }

  return (
    <div className="container">
      <div
        className="box"
        style={{ backgroundColor: colors[index] }}
      ></div>

      <button onClick={changeColor}>
        Change Color
      </button>
    </div>
  )
}


  
  // function handleClick() {
  //   alert('Button clicked!');
  // }
  // function handleMouseOver() {
  //   alert('para ke uper mouse le aaye!');
  // }
  // function handleInputChange(event) {
  //   //console.log('Input mei value change hua:', event.target.value);
  //   console.log('Value till now:', event.target.value);
  // }

  // function handleFormSubmit(event) {
  //   event.preventDefault(); // Prevent the default form submission behavior
  //   console.log('Form submitted!');
  // }
  
   
    {/* <button onClick={() => alert('Button clicked!')}>Click me</button> */}

     {/* 
    <form onSubmit={handleFormSubmit}>
      <input type='text' onChange={handleInputChange}/>
      <button type='submit' >Submit</button>
    </form> */}



     {/* <p onMouseOver={handleMouseOver} style={{width: '400px', margin: 'auto', textAlign: 'justify'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore cumque quibusdam dolor. Excepturi, fugiat. Tempora amet nihil maxime libero accusamus aut. Corporis nobis accusamus quidem velit enim iure illum.
      
     </p>
     <button onClick={handleClick}>
       Click me
      </button> */}
   
  


export default App
