import React, { useEffect, useState } from "react";
import axios from 'axios';
import ShowProduct from './showProduc';

export default function TasteView(props) {
  console.log(props)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (!props.t) {
      axios.get(`http://localhost:62979/api/Products?ProductTypeId=${props.ProductTypeId}&tasteId=8`).then(x => {
        console.log(x.data, "getProudct")
        var list = JSON.parse(localStorage.getItem("order")) //קבלת המוצרים בצורת מחרוזת וממיר לאובייקט
        list?.forEach(element => {
          if (x.data.find(x => x.Id == element.ptoId))
            x.data.find(x => x.Id == element.ptoId).qentity = element.qentity;
        });
        setProduct(x.data);

        props.setProductsShow(x.data)
      })
    }
  }, [props.t])
  const getProudct = (ProductTypeId, tasteId) => {
    console.log(tasteId, props.ProductTypeId)
    axios.get(`http://localhost:62979/api/Products?ProductTypeId=${ProductTypeId}&tasteId=${tasteId}`).then(x => {
      console.log(x.data, "getProudct")
      var list = JSON.parse(localStorage.getItem("order")) //קבלת המוצרים בצורת מחרוזת וממיר לאובייקט
      list?.forEach(element => {
        if (x.data.find(x => x.Id == element.ptoId))
          x.data.find(x => x.Id == element.ptoId).qentity = element.qentity;
      });
      setProduct(x.data);

      props.setProductsShow(x.data)
      /// לעדכן את כל הרשימה של המוצרים עם הם קיימים בסל
    }).catch(x => { console.log(x) }).finally(() => { });

  }
  return (
    <div >
      {/* {props.t?  <button onClick={()=>getProudct(props.t.IdTypeWine,props.t.Id)} >
           {props.t.Name}
                <img  src={`data:image/jpeg;base64,${props.t.Img}`}  height={'80px'} width={'80px'}   /> </button> 

         :null}
          {product?    product.map(x=>   <ShowProduct  height={'90px'} addToOrder={props.addToOrder} product={x}/>):null}
              */}
    </div>
  )



}
