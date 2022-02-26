
import { useEffect, useState } from 'react';
import EndPage from './EndPage';
import axios from 'axios'
import Header from './Header';
import Routers from './Routers';
function App() {
  const [user, setUser] = useState(null);
  const [products, setProduct] = useState([]);
  const [productsShow, setProductsShow] = useState([]);
  const [ordersShow, setOrdersShow] = useState([]);






  const addToOrder = (productId, count) => {
    var list = JSON.parse(localStorage.getItem("order")) //קבלת המוצרים בצורת מחרוזת וממיר לאובייקט
    var qentity = 1;
    const product = {
      qentity: qentity,
      ptoId: productId
    }
    const obj = list?.find(x => x.ptoId === productId)
    if (obj) {
      obj.qentity += count
      qentity = obj.qentity;
    }
    else {
      if (!list) list = []

      //אם קיים המוצר צריך להוסיף / להוריד לחפש את האידי של המוצר ולעזכן את הכמות
      list.push(product)// בדיקה האם  להוסיף או להכפיל כמות
    }

    const productf = [...products];
    const productsShowF = [...productsShow];
    productf.find(element => element.Id === productId).qentity = qentity;
    productsShowF.find(element => element.Id === productId).qentity = qentity;
    //setProductsShow(productsShowF)
    setProduct(productf)
    localStorage.setItem("order", JSON.stringify(list))

  }
  const getOrdersSowe = () => {

    var list = JSON.parse(localStorage.getItem("order") || '[]')
    var arr = []
    list.forEach(element => {
      // if( x.data.find(x=>x.Id==element.ptoId))
      var d = products.find(x => x.Id == element.ptoId);
      if (d) {
        d.qentity = element.qentity;
        if (d.qentity > 0)
          arr.push(d)
      }
    });
    setOrdersShow(arr)

  }
  useEffect(() => {
    axios.get(`http://localhost:62979/api/Products`).then(x => {
      setProduct(x.data)
    }).catch(x => { console.log(x) })

  }, [])
  useEffect(() => {
    getOrdersSowe()

  }, [products])

  return (
    <div>
      <Header user={user} products={products} ordersShow={ordersShow} addToOrder={addToOrder} />
      <Routers user={user} setUser={setUser} addToOrder={addToOrder} productsShow={productsShow} setProductsShow={setProductsShow} />
      <EndPage />
    </div>
  );
}
export default App;
