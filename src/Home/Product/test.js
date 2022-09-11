import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


{products.map((product)=>{
  // console.log(product.image);
  <Grid container>
  <Box
  component="img"
  sx={{
    height: 100,
    // width: 350,
    maxHeight: { xs: 233, md: 167 },
    maxWidth: { xs: 350, md: 250 },
  }}
  alt="The house from the offer."
  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
/>
<Typography>{product.id}</Typography>
</Grid>
})
}

// <TableContainer component={Paper} sx={{bgcolor:"#DCDCDC"}}>
          //     <Table sx={{ minWidth: 650 ,justifyContent:"space-between"}}>
          //       <TableBody>
          //         {products.map((product) => (
          //           <TableRow
          //             // key={row.name}
          //             // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          //             // sx={{}}
          //           >
          //             <TableCell>
          //             <Box
          //               component="img"
          //               sx={{
          //                 bgcolor:"red",
          //                 height: 100,
          //                 // width: 350,
          //                 // maxHeight: { xs: 233, md: 167 },
          //                 // maxWidth: { xs: 350, md: 250 },
          //               }}
          //               alt="The house from the offer."
          //               src={product.image}
          //             />
          //             </TableCell>
          //             <TableCell sx={{maxWidth:40}} >
          //               {product.title}
          //             </TableCell>
          //             <TableCell>color</TableCell>
          //             <TableCell>{product.rating.count && <SentimentSatisfiedAltRounded/>}Success</TableCell>
          //             <TableCell>{product.price}</TableCell>
          //             <TableCell>Buy</TableCell>
          //           </TableRow>
          //         ))}
          //       </TableBody>
          //     </Table>
          // </TableContainer>

          0
: 
{id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in th…to 15 inches) in the padded sleeve, your everyday', category: "men's clothing", …}
1
: 
{id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.', category: "men's clothing", …}
2
: 
{id: 3, title: 'Mens Cotton Jacket', price: 55.99, description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.', category: "men's clothing", …}
3
: 
{id: 4, title: 'Mens Casual Slim Fit', price: 15.99, description: 'The color could be slightly different between on t…uld be reviewed below on the product description.', category: "men's clothing", …}
4
: 
{id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695, description: 'From our Legends Collection, the Naga was inspired…th love and abundance, or outward for protection.', category: 'jewelery', …}
5
: 
{id: 6, title: 'Solid Gold Petite Micropave ', price: 168, description: 'Satisfaction Guaranteed. Return or exchange any or…eed. Return or exchange any order within 30 days.', category: 'jewelery', …}
6
: 
{id: 7, title: 'White Gold Plated Princess', price: 9.99, description: "Classic Created Wedding Engagement Solitaire Diamo…agement, Wedding, Anniversary, Valentine's Day...", category: 'jewelery', …}
7
: 
{id: 8, title: 'Pierced Owl Rose Gold Plated Stainless Steel Double', price: 10.99, description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', category: 'jewelery', …}
8
: 
{id: 9, title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ', price: 64, description: 'USB 3.0 and USB 2.0 Compatibility Fast data transf…ser’s hardware configuration and operating system', category: 'electronics', …}
9
: 
{id: 10, title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', price: 109, description: 'Easy upgrade for faster boot up, shutdown, applica…drive capacity, host device, OS and application.)', category: 'electronics', …}
10
: 
{id: 11, title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', price: 109, description: '3D NAND flash are applied to deliver high transfer…e optimized performance and enhanced reliability.', category: 'electronics', …}
11
: 
{id: 12, title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', price: 114, description: "Expand your PS4 gaming experience, Play anywhere F… capacity, 3-year manufacturer's limited warranty", category: 'electronics', …}
12
: 
{id: 13, title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', price: 599, description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS …egree. Vertical viewing angle-178 degree 75 hertz', category: 'electronics', …}
13
: 
{id: 14, title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ', price: 999.99, description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR…inate motion blur, ghosting, and reduce input lag', category: 'electronics', …}
14
: 
{id: 15, title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99, description: 'Note:The Jackets is US standard size, Please choos…t season and help you adapt to different climates', category: "women's clothing", …}
15
: 
{id: 16, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95, description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75…ASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', category: "women's clothing", …}
16
: 
{id: 17, title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats', price: 39.99, description: 'Lightweight perfet for trip or casual wear---Long …djustable Drawstrings give it a real styled look.', category: "women's clothing", …}
17
: 
{id: 18, title: "MBJ Women's Solid Short Sleeve Boat Neck V ", price: 9.85, description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do …ves and neckline / Double stitching on bottom hem', category: "women's clothing", …}
18
: 
{id: 19, title: "Opna Women's Short Sleeve Moisture", price: 7.95, description: '100% Polyester, Machine wash, 100% cationic polyes…sleek, more feminine silhouette and Added Comfort', category: "women's clothing", …}
19
: 
{id: 20, title: 'DANVOUY Womens T Shirt Casual Cotton Short', price: 12.99, description: '95%Cotton,5%Spandex, Features: Casual, Short Sleev…Home/Street. Season: Spring,Summer,Autumn,Winter.', category: "women's clothing", …}
length
: 
20
[[Prototype]]
: 
Array(0)
Pr