import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-warp 
    justify-center center-0 inset-x-0 px-2 py-20 ">
      <div className="flex flex-wrap justify-center
       gap-3 shadow-lg bg-white px-3 rounded-3xl">
        <button
        onClick={() => setColor("red")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "red"}}
        >Red</button>

        <button
        onClick={() => setColor("blue")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "blue"}}
        >blue</button>
        
        <button
        onClick={() => setColor("green")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "green"}}
        >Green</button>
        
        <button
        onClick={() => setColor("pink")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "pink"}}
        >pink</button>
        
        <button
        onClick={() => setColor("DarkKhaki")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "DarkKhaki"}}
        >DarkKhaki</button>
        
        <button
        onClick={() => setColor("Indigo")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "Indigo"}}
        >Indigo</button>
        
        <button
        onClick={() => setColor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "orange"}}
        >orange</button>
        
        <button
        onClick={() => setColor("brown")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "brown"}}
        >brown</button>
        
        <button
        onClick={() => setColor("MediumVioletRed")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "MediumVioletRed"}}
        >purpul</button>
        
        <button
        onClick={() => setColor("Teal")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: "Teal"}}
        >sTeal</button>
        
        
       </div>
       
    </div>
   </div>
  );
}

export default App;