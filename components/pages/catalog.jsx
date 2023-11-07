import Product from "../product";
import DataService from "../services/dataservice";
import "./catalog.css"
import { useEffect, useState } from "react";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [catagories, setCatagories] = useState([])
    const [productsToDisplay, setProductsToDisplay] = useState([])

    useEffect(function(){
        console.log("catalog loading");
        loadCatalog();
    },[]);

    function loadCatalog(){
        console.log("catalog loaded"); 
        let services = new DataService;
        let prods = services.getProducts();

        console.log(prods);
        setProducts(prods);
        setProductsToDisplay(prods);

        let cats = ['Show-Off','Run-u-Muck','Stompers','Get-High','LilKicks'];
        setCatagories(cats);
    }
     function filter(catagoery){
        console.log("filtering");
        let list = [];
        
        for(let i=0; i<products.length; i++){
            let prod = products[i];
            if(prod.catagory === catagoery){
                list.push(prod);
            }
        
     console.log(list);  
     setProductsToDisplay(list); 
     }
    }
    function clearFilters(){
        setProductsToDisplay(products);

    }
    
    return(
        <div className="catalog">
            <h1 className="fl">Diss Your Kick and Strut on DISS Footwere</h1> 
            <h2>Our Top {products.length} pairs Of The Week</h2>
            <br/>
            <button onClick={clearFilters} className="btn btn-secondary">All</button>
            {catagories.map(c=> <botton key={c} onClick={()=>filter(c)} className="btn btn-secondary">{c} </botton>)}
            <br/>
            {productsToDisplay.map(p=><Product key={p._id} data={p}/>)}

            </div>
  
        
    );
}
export default Catalog;