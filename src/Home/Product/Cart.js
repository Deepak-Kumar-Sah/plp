import React,{useState,useEffect} from "react";
import {TableCell,Table,TableRow,TableContainer,Paper,TableBody,Box,Grid, Typography,Button,Divider,Card,ButtonGroup, TextField} from '@mui/material';
import {SentimentSatisfiedAltRounded,CancelRounded,RemoveCircleOutlineOutlined,AddCircleOutlineOutlined} from '@mui/icons-material';
import { Link } from "react-router-dom";
const Cart = ()=>{
    const [cartItems, setcartItems] = useState([]);
    var total=0;
    const fetchProducts = async ()=>{
        const res =  JSON.parse(localStorage.getItem('cart'));
        setcartItems(res);
     }
    const removeItemFromCart = (item) =>{
        console.log("false")
        let cart = []
        if(typeof window!==undefined){
            if(localStorage.getItem("cart")){
                cart= JSON.parse(localStorage.getItem("cart"))
            } 
            cart.map((product,i)=>{
                if(product.id===item.id){
                    console.log("matched")
                    cart.splice(i,1)
                }
            })
            localStorage.setItem("cart",JSON.stringify(cart))
        }
        return cart;
      };
      const incrementQty = (item) =>{
        console.log("inc")
        let cart = []
        if(typeof window!==undefined){
            if(localStorage.getItem("cart")){
                cart= JSON.parse(localStorage.getItem("cart"))
            } 
            cart.map((product,i)=>{
                if(product.id===item.id){
                    let count= item.qty
                    count++
                    cart[i].qty=count
                }
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            window.location.reload()
        }
        return cart;
      };
      const decrementQty = (item) =>{
        console.log("inc")
        let cart = []
        if(typeof window!==undefined){
            if(localStorage.getItem("cart")){
                cart= JSON.parse(localStorage.getItem("cart"))
            } 
            cart.map((product,i)=>{
                if(product.id===item.id){
                    let count= item.qty
                    count--
                    cart[i].qty=count
                }
            })
            localStorage.setItem("cart",JSON.stringify(cart))
            window.location.reload()
        }
        return cart;
      };
    const productCart = (item)=>{
        total+=item.price*item.qty
        return(
            <TableRow>
                <TableCell sx={{maxWidth:0,}}>
                    <Button  onClick={()=>{
                        removeItemFromCart(item).then(
                            window.location.reload()
                        )
                    }} startIcon={<CancelRounded sx={{color:"black",}}/>}/>
                </TableCell>
                <TableCell sx={{maxWidth:30}} >
                    <Box
                    component="img"
                    sx={{
                        height: 110,
                        width: 80,
                    }}
                    alt="product img"
                    src={item.image}
                    />
                </TableCell>
                <TableCell sx={{maxWidth:180,}}>{item.title}</TableCell>
                <TableCell sx={{alignContent:"center"}}>{item.price}</TableCell>
                <TableCell sx={{}}>
                    <Grid container spacing={2}>
                        <Grid item>
                        <RemoveCircleOutlineOutlined onClick={()=>{
                            decrementQty(item)
                        }} sx={{}}/>
                        </Grid>
                        <Grid item>
                        <Typography sx={{color:"green"}}>{item.qty}</Typography>
                        </Grid>
                        <Grid item>
                            <AddCircleOutlineOutlined onClick={()=>{
                                incrementQty(item)
                            }} sx={{}}/>
                        </Grid>
                    </Grid>
                    {/* <ButtonGroup sx={{p:1}}>
                        <Button sx={{maxWidth:5}}>-</Button>
                        <TextField sx={{maxWidth:40,}} size="small"  value={item.qty}></TextField>
                        <Button>+</Button>
                    </ButtonGroup> */}
                </TableCell>
                <TableCell sx={{}}>{item.price *item.qty}</TableCell>       
            </TableRow>
        )
      };
      
      useEffect(()=>{
        fetchProducts();
      },[])
    return(
        <Grid container sx={{display:"flex",justifyContent:"center",mt:10}} spacing={2}>
            <Grid lg={7} item>
                <Grid  container sx={{bgcolor:"#A8A8A8",width:"100%",p:1,justifyContent:"space-around",}}>
                    <Grid item sx={{}} >
                        {/* <Typography variant="h6" sx={{fontWeight:'bold',}}>Image</Typography> */}
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold',pl:20,}}>Product</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold',pl:8}}>Price</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Quantity</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Subtotal</Typography>
                    </Grid>
                </Grid>  
                <Grid container>
                    <TableContainer component={Paper} sx={{}}>
                        <Table sx={{ minWidth: 650 ,}}>
                            <TableBody>
                            {!cartItems?.length ? (
                                <div> No items added in cart</div>
                                ) : cartItems.map((item) => (
                                    productCart(item)
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                </Grid>
            </Grid>
            {/* card */}
            <Grid lg={4} item>
                <Grid  container sx={{justifyContent:"flex-end"}}>
                    <Card sx={{ minWidth: 275,p:4 }}>
                        <Typography variant="h5" sx={{fontWeight:"bold"}}>Card Total</Typography>
                        <Grid container sx={{justifyContent:"space-between",pb:2,pt:2}}>
                            <Typography sx={{fontWeight:"bold"}}>Subtotal</Typography>
                            <Typography sx={{color:"#73c2fb"}}>
                            &#8377;{total.toFixed(2)}
                            </Typography>
                        </Grid>
                        <Divider/>
                        <Grid container sx={{justifyContent:"space-between",pb:4,pt:2}}>
                            <Typography sx={{fontWeight:"bold"}}>Total</Typography>
                            <Typography sx={{color:"#000080",fontWeight:"bold"}}>&#8377;{total.toFixed(2)}</Typography>
                        </Grid>
                        <Button sx={{bgcolor:"#000080",p:2,pl:5,pr:5,textTransform:"none",borderRadius:7}} variant="contained" label=""><Link to='/thankyou' style={{color:"white",textDecoration:"none"}}>PROCEED TO CHECKOUT</Link></Button>
                    </Card> 

                </Grid>
            </Grid>
        </Grid>
    )
}
export default Cart;