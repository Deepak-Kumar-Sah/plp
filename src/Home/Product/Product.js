import React,{useState} from 'react';
import {TableCell,TableHead,Table,TableRow,TableContainer,Paper,TableBody,Box,Grid,Typography,TextField,Button,Checkbox,CircularProgress} from '@mui/material';
import {SentimentSatisfiedAltRounded,ShoppingCart,CancelRounded} from '@mui/icons-material';


// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}}

const Product =({products,rp,category,load})=>{
  const [info, setinfo] = useState({
    selectedProduct:[],
    productName:"",
    productPrice:"",
    productQty:0,
  });

  const handleChange = name =>event=>{
    setinfo({...info,[name]:event.target.value})
};
const addItemToCart =(item)=>{
  if(info.productQty){
    console.log(info.productQty)
    console.log("true")
    let Mycart = []
    if(typeof window!==undefined){
        if(localStorage.getItem("cart")){
          Mycart = JSON.parse(localStorage.getItem("cart"))
        }
        Mycart.push({
            ...item,
            qty:info.productQty,
        })
        localStorage.setItem("cart",JSON.stringify(Mycart))
  }
  }else{
    alert('please first unchecked the box fill the quantity and then check it again')
  }
};
const removeItemFromCart = (productId) =>{
  console.log("false")
  let cart = []
  if(typeof window!==undefined){
      if(localStorage.getItem("cart")){
          cart= JSON.parse(localStorage.getItem("cart"))
      } 
      cart.map((product,i)=>{
          if(product.id===productId.id){
              console.log("matched")
              cart.splice(i,1)
          }
      })
      localStorage.setItem("cart",JSON.stringify(cart))
  }
  return cart;
};
const productCard = (product)=>{
    return(
          <TableRow sx={{}}>
                    <TableCell sx={{}} >
                      <Box
                        component="img"
                        sx={{
                          height: 100,
                          width: 100,
                        }}
                        alt="The house from the offer."
                        src={product.image}
                      />
                    </TableCell>
                    <TableCell sx={{maxWidth:140}} >
                      {product.title}
                    </TableCell>
                    <TableCell sx={{}}>{product.rating.rate}</TableCell>
                    <TableCell sx={{pl:8,maxWidth:70}}>
                        <Grid container spacing={2} sx={{}}>
                          <Grid item>
                            {product.rating.count && <SentimentSatisfiedAltRounded sx={{color:"green"}}/>}
                          </Grid>
                          <Grid item>
                            <Typography sx={{color:"green"}}>In Stock</Typography>
                          </Grid>
                        </Grid>
                    </TableCell>
                      <TableCell sx={{}}>{product.price}</TableCell>
                      <TableCell>
                      <Grid container sx={{display:"flex",justifyContent:"flex-end"}} spacing={1}>
                          <Grid item sx={{maxWidth:80}}>
                            <TextField onChange={handleChange("productQty")} size="small" placeholder="0" sx={{}}></TextField>
                          </Grid>
                          <Grid item>
                            <Button  sx={{background:"black"}} startIcon={<ShoppingCart sx={{color:"white",p:0.5}}/>}></Button>
                          </Grid>
                          <Checkbox onChange={(event)=>{
                            event.target.checked?addItemToCart(product):removeItemFromCart(product)
                          }} />
                        </Grid>
                      </TableCell>
            </TableRow>
    )
};
    return(
        <>
        {load && <CircularProgress color="success" />} 
        {!load && <TableContainer component={Paper} sx={{}}>
              <Table sx={{ minWidth: 650 ,}}>
                <TableBody>
                  {products.map((product) => (
                     (rp && category) ?(rp ? (rp==3 ?((product.rating.rate>=rp && product.category==category) ? productCard(product):""):((product.price>=rp && product.category==category) ? productCard(product):"")):""):(rp || category) ? (rp ? (rp==3?(product.rating.rate>=rp ? productCard(product):""):(product.price>=rp ? productCard(product):"")):(product.category==category ? productCard(product):"")):productCard(product)
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
          }
        </>
      
    )
}
export default Product;