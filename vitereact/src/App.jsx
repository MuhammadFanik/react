
function App() {
  let x = 7
  let arr = ["u1", "u2", "u3", "u4", "u5"] // array
  // arr = [];
  let person = "Girl" // conditional

  function shoot(){
    alert("Button clicked ")
  }


  return (
    <>

      {x}

      <h1>Chai aur react with fanik and Hitesh bhai</h1>

      {person==="Boy"?<h3>Boy</h3>:<h3>Girl</h3>}
      
      <ul className="list-group">
        {arr.map((item, index) => (
          <li key={item} onClick={function(){
            console.log(item, index);   
          }}>{item}</li>
        ))}
      </ul>

      { arr.length === 0? "No item found":"Some items are present" }

      <button onClick={shoot}>Click me to shoot</button>
      
    </>
  )
}
export default App