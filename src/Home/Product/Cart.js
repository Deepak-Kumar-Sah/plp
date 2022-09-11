import React,{useState,useEffect} from "react";
import {TableCell,Table,TableRow,TableContainer,Paper,TableBody,Box,Grid, Typography,Button,Divider,Card} from '@mui/material';
import {SentimentSatisfiedAltRounded} from '@mui/icons-material';
import { Link } from "react-router-dom";
const Cart = ()=>{
    const [cartItems, setcartItems] = useState([]);
    var total=0;
    const fetchProducts = async ()=>{
        const res =  JSON.parse(localStorage.getItem('cart'));
        setcartItems(res);
     }
    const productCart = (item)=>{
        total+=item.price*item.qty
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
                    src={item.image}
                    />
                </TableCell>
                <TableCell sx={{maxWidth:150}}>{item.title}</TableCell>
                <TableCell sx={{alignContent:"center"}}>{item.price}</TableCell>
                <TableCell sx={{}}>
                    <Grid container spacing={2}>
                        <Grid item>
                        {item.rating.count && <SentimentSatisfiedAltRounded sx={{color:"green"}}/>}
                        </Grid>
                        <Grid item>
                        <Typography sx={{color:"green"}}>{item.qty}</Typography>
                        </Grid>
                    </Grid>
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
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Product</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Price</Typography>
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