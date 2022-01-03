import "./styles.css";

function Start(){

  const Arr = ["sunflower" , "rose" , "yellow", "green"];


function getch(index){
  if(index % 2 ===0){
    return {backgroundColor: ""};
  } return {backgroundColor: "gray"}
}

function clickHandler(arr){
console.log("clicked", arr);
}


  return(
    <>
    <h2> Hey </h2>
    
{
      Arr.map((arr, index) => {
        return( <ul key={index}> 
          <li 
          onClick={()=>clickHandler(arr)}
          style={getch(index)} > {arr} </li> 
          </ul>)
      })
    }
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Start />
    </div>
  );
}
