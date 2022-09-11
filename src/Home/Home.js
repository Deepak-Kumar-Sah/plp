import React,{useState,useEffect} from "react";
import {Grid,Box,FormControl,InputLabel,MenuItem,Select,Button, Typography,TextField,Table,TableHead,TableRow,TableCell,} from '@mui/material';
import {Replay} from '@mui/icons-material/';
import Product from "./Product/Product";
import {Redirect,Link} from 'react-router-dom';


const Home =()=>{
    const [values, setvalues] = useState({
        rp:"",
        category:"",
        // searchKey:""
    });
    const [products, setproducts] = useState([]);
  const handleChange = name =>event=>{
    setvalues({...values,[name]:event.target.value})
};
const resetFilters = ()=>{
    setvalues({
        rp:"",
        category:"",
    })
}
  const fetchProducts = async ()=>{
    // const res =await fetch('https://dummyjson.com/products/');
    const res =await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    // console.log(data);
    setproducts(data);
    // data.map((item)=>{
    //     console.log(item.category)
    // })
 }
 
 useEffect(()=>{
    fetchProducts();
},[])
    return(
        <>
        <p className='text-white text-center'>{JSON.stringify(values)} here password is id from the api {"https://gorest.co.in/public/v2/users"}</p>
        <Grid>
            <Grid  container sx={{display:"flex"}}>
                <Grid  container sx={{justifyContent:"space-between"}}>
                    <Grid item>
                        <Grid container>
                        <Grid item sm xs={12} sx={{margin:2}}>
                            <Box sx={{minWidth:120,}}>
                                <FormControl  fullWidth>
                                    <InputLabel >category</InputLabel>
                                    <Select
                                    value={values.category}
                                    label="category"
                                    onChange={handleChange("category")}
                                    >
                                    <MenuItem value="men's clothing">men's clothing</MenuItem>
                                    <MenuItem value="jewelery">jewelery</MenuItem>
                                    <MenuItem value="electronics">electronics</MenuItem>
                                    <MenuItem value="women's clothing">women's clothing</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item sm xs={12} sx={{margin:2}}>
                            <Box sx={{minWidth:120 }}>
                                <FormControl fullWidth>
                                    <InputLabel >Size</InputLabel>
                                    <Select
                                    value={values.rp}
                                    label="Rate/Price"
                                    onChange={handleChange("rp")}
                                    >
                                    <MenuItem value={3}>Rating above 3</MenuItem>
                                    <MenuItem value={100}>Price above 100</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Button onClick={resetFilters} startIcon={<Replay />}>Retry</Button>
                        </Grid>
                    </Grid>
                    {/* 2nd part */}
                    <Grid item>
                        <Grid container spacing={2} sx={{mt:0.5}}>
                            <Grid item>
                                <Typography variant="h5" sx={{mt:1}}>Search:</Typography>
                            </Grid>
                            <Grid item>
                                <TextField id="outlined-search" label="Search field" type="search" />
                            </Grid>
                            <Grid item sx={{mt:1}}>
                                <Button sx={{bgcolor:"#0095B6",p:1,textTransform:"none"}} variant="contained" label=""><Link to='/cart' style={{color:"white",textDecoration:"none"}}>Add To Cart</Link></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Nav UI Done */}
                <Grid container sx={{bgcolor:"#A8A8A8",width:"100%",p:1,justifyContent:"space-between",}}>
                    <Grid item sx={{}} >
                        <Typography variant="h6" sx={{fontWeight:'bold',}}>Image</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Name</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Rating</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Stock</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Price</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" sx={{fontWeight:'bold'}}>Buy</Typography>
                    </Grid>
                </Grid>
                <Product products={products} rp={values.rp} category={values.category}  />
            </Grid>
        </Grid>
        </>
    )
}
export default Home;