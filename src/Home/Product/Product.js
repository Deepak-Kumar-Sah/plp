import React,{useState} from 'react';
import {TableCell,TableHead,Table,TableRow,TableContainer,Paper,TableBody,Box,Grid,Typography,TextField,Button,Checkbox} from '@mui/material';
import {SentimentSatisfiedAltRounded,ShoppingCart} from '@mui/icons-material';


// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}}

// dummyjson
// {"id":1,
// "title":"iPhone 9",
// "description":"An apple mobile which is nothing like apple",
// "price":549,
// "discountPercentage":12.96,
// "rating":4.69,
// "stock":94,
// "brand":"Apple",
// "category":"smartphones",
// "thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg",
// "images":["https://dummyjson.com/image/i/products/1/1.jpg",
// "https://dummyjson.com/image/i/products/1/2.jpg",
// "https://dummyjson.com/image/i/products/1/3.jpg",
// "https://dummyjson.com/image/i/products/1/4.jpg",
// "https://dummyjson.com/image/i/products/1/thumbnail.jpg"]}


const Product =({products,rp,category})=>{
  const [info, setinfo] = useState({
    selectedProduct:[],
    productName:"",
    productPrice:"",
    productQty:"",
  });

  const handleChange = name =>event=>{
    setinfo({...info,[name]:event.target.value})
};
const addItemToCart =(item)=>{
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
}
  const productCard = (product)=>{
    return(
          <TableRow>
                    <TableCell sx={{}} >
                      <Box
                        component="img"
                        sx={{
                          height: 100,
                          width: 100,
                          // maxHeight: { xs: 233, md: 167 },
                          // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src={product.image}
                      />
                    </TableCell>
                    <TableCell sx={{maxWidth:150}} >
                      {product.title}
                    </TableCell>
                    <TableCell sx={{alignContent:"center"}}>{product.rating.rate}</TableCell>
                    <TableCell sx={{}}>
                        <Grid container spacing={2}>
                          <Grid item>
                            {product.rating.count && <SentimentSatisfiedAltRounded sx={{color:"green"}}/>}
                          </Grid>
                          <Grid item>
                            <Typography sx={{color:"green"}}>In Stock</Typography>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell sx={{}}>{product.price}</TableCell>
                    <Grid container sx={{justifyContent:"flex-end"}}>
                      <TableCell sx={{}}>
                        <Grid container sx={{display:"flex"}} spacing={2}>
                          <Grid item sx={{minWidth:100,maxWidth:50}}>
                            <TextField onChange={handleChange("productQty")} sx={{}}></TextField>
                          </Grid>
                          <Grid item>
                            <Button  sx={{background:"black"}} startIcon={<ShoppingCart sx={{color:"white"}}/>}></Button>
                          </Grid>
                          <Checkbox onClick={()=>{
                            addItemToCart(product)
                          }}/>
                        </Grid>
                      </TableCell>
                    </Grid>
            </TableRow>
    )
  };
    return(
      <TableContainer component={Paper} sx={{}}>
        <p className='text-white text-center'>{JSON.stringify(info)} here password is id from the api {"https://gorest.co.in/public/v2/users"}</p>
              <Table sx={{ minWidth: 650 ,}}>
                <TableBody>
                  {products.map((product) => (
                    (rp || category) ? (rp ? (rp==3?(product.rating.rate>=rp ? productCard(product):""):(product.price>=rp ? productCard(product):"")):(product.category==category ? productCard(product):"")):productCard(product)
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
    )
}
export default Product;