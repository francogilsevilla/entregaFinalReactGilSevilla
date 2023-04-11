import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../../db/firebase-config";

import ItemList from "../ItemList";

const ItemListContainer = () => {

    const { idCategory } = useParams();

    const [title, setTitle] = useState([])
    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "items");
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setProducts(result);
        } catch (error) {
            console.warn("error: " + error);
        }
    }

    const getByCategory = async(idCat) =>{
        try{
            const itemsCollection = collection(db,"items");
            const q = query(itemsCollection, where("idCategory", "==", idCat));
            const col = await getDocs(q);
            const result = col.docs.map((doc)=> doc = {id: doc.id, ...doc.data()});
            setProducts(result);
            if (idCat === "1") {
                setTitle("Remeras");
            } else {
                setTitle("Accesorios")
            }
        } catch(error){
            console.warn(error);
        }
    }

    useEffect(() => {
        if (idCategory) {
            getByCategory(idCategory)
        } else {
            getData()
            setTitle("Todos nuestros productos")
        }
    }, [idCategory]);

    return (
        <div className="">
            <h3 className="text-center">{title}</h3>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
