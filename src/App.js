
import Header from './Header';
import Routers from './Routers';

function App() { 
  //  const arr=[{id:"8",name:"בני ברק"}];
  return (
    <div>

     {/* <select>
     {arr.map(x=><option key={x.id} value={x.id}>{x.name}</option>)}
     </select> */}
     <Header/>
     <Routers/>
    
   </div>
  );
}

export default App;
