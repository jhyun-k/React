import React from "react";
import "./ProductList.css";
import {useEffect,useState} from "react";
import ProductItem from '../components/ProductItem';
import {useDispatch ,useSelector } from "react-redux";
import { getProduct } from './../store/product/productSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.value);
   
    useEffect(()=>{
        dispatch(getProduct())
    } ,[])

    return (
        <section className="product-list">
         <h2 className="product-list-title">상품 목록</h2>
        <div className="product-item-container">
           {
            products.map((item)=><ProductItem item={item} key={item.id} />)
           }
        </div>
    </section>
    );
};

export default ProductList;