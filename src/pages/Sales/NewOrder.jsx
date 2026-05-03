import { useState,useEffect,useRef } from "react";
import card from "../UI/Card";

function CreateOrder(props){
    const [items, setItem]=useState([]);
    const [cart,setCart]=useState([]);
    const [subTotal,setSubTotal]=useState([0]);
    const [discount,setDiscount]=useState([0])
    const [vat,setVat]=useState([0]);

    const [customerId,setCustomerId]=useState([0]);
    const [productId,setProductId]=useState([0]);
    const [productPrice,setPrice]=useState([0]);
    const [productUnit,setUnit]=useState([1]);

    const unit=useRef(null);

    useEffect(()=>{
        unit.current.focus();
        fetchProducts();
    }, []);

    const fetchProducts=async()=>{
        try{
            const res=await fetch(`http://farjana.intelsofts.com/Projects/core/api/product`,{
             method: "GET",
             headers: {
                "Content-Type":"application/json",
                Accept: "application/json",
             },   
            });
            if(!res.ok){
                throw new Error("Failed to fetch products");
            }

            const data= await res.json();
            setItem(data.products);
        } catch (err){
            console.error("Error:", err.message);
        }
    };

    const handleAddItem=()=>{
        const selectedOption= document.querySelector("select").selectedOptions[0];
        const product_name= selectedOption.text;
        const product_value= selectedOption.value;

        const qty= parseInt(productUnit);
        const totalLine= productPrice * qty;

        const json ={
            id: cart.length + 1,
            desc: product_value,
            qty: qty,
            price: parseFloat(productPrice),
            discount: 0,
            vat: 0,
            lineTotal: totalLine,
        };

        setCart([...cart,json]);
        setSubTotal(subTotal + totalLine);
    };

    const handleGetPrice=()=>{
        

    }
}