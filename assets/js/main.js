const getcatigories= async()=>{
    const{data}= await axios.get(`https://dummyjson.com/products/category-list`);
    return data;
}
  const displaycategories=async()=>{
    const categories=await getcatigories();
    const result=categories.map((category)=>{
  
return`<div class='category'>
<h2>${category}</h2>
<a href='categorydetails.html?category=${category}'>Details</a>
</div>`
    }).join('');
    document.querySelector(".categories .row").innerHTML=result;
}
const getproducts= async()=>{
    const{data}= await axios.get(`https://dummyjson.com/products`);
    return data;
}
const displayproducts =async()=>{
    const data= await getproducts();
    console.log(data);
    const result=data.products.map((product)=>{
        return`
        <div class= 'product' >
        <img src="${product.thumbnail}" alt="${product.description}"/>
        <h3>${product.title}</h3>
        <span>${product.price}</span>

        </div>
        `
    }).join('');
    document.querySelector(".products .row").innerHTML=result;
}
displaycategories();
displayproducts();