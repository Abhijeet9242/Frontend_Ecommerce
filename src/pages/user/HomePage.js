import React from 'react'
import Navbar from "../../components/user/Navbar"
import MyCarousel from '../../components/user/MyCarousel'
import MyCarousel2 from '../../components/user/MyCarousel2';
import MyCarousel3 from '../../components/user/MyCarousel3';
import { Typography } from '@mui/material';
import MyCarousel4 from '../../components/user/MyCarousel4';
import Footer1 from '../../components/common/Footer1';



const items = [
  <div className="item" data-value="1">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlwBgLExXHH755RKcajyaA2kiTtxcw89CPpUTZWg2Yg&usqp=CAU&ec=48665699" alt="1"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXWMXZkMj3HuXTb6ARWDSlW7gLwo5SRMm1TGngTeE3g&usqp=CAU&ec=48665699" alt="2"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzfiK-I8HUxr6h1rw7Qp-wS2avbHbcnShGYuGQhmnGQ&usqp=CAU&ec=48665699" alt="3"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYdnGufAHqVXLEiwOQvjIs0osmqUDrNAFz7JB-CAiVDYySnKORxZFBVDcF_NIlpn2fSw8ScXu1teI&usqp=CAU&ec=48665699" alt="4"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRunaHc22UmkOiu0njTjJYsntWwbVeVg7xezoT_Td-lPQ&usqp=CAU&ec=48665699" alt="5"/>
  </div>,
   <div className="item" data-value="2">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCyuKhI4AA0Y1Z7VSoJN23hfWtC-xDNHxouhg3VOlHg&usqp=CAU&ec=48665699" alt="5"/>
</div>,
<div className="item" data-value="2">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSesfAuLwVUuxEKeUNdBoW8dal72be1QT6atJBsJwLOgA&usqp=CAU&ec=48665699" alt="5"/>
</div>,
];

const items2 = [
  <div className="item" data-value="1">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhlDMJqJVUSnm_9K23oiNQPd2eCbo-hpH24jC0ePh-5g&usqp=CAU&ec=48665699" alt="1"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_Zpljil3vNyaAbzxF3FEbtKIn7rg0zAh8qltu3MQVw&usqp=CAU&ec=48665699" alt="2"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNqYerKFZ_Cslp_bmGmMMCzHtJSUfAJ-nW2pPuVX_1A&usqp=CAU&ec=48665699" alt="3"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMi1NLVZj2YdVk6ofr1dpazHJdMjL2pQ0Y774F6Dhehg&usqp=CAU&ec=48665699" alt="4"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhBwr3q54DzBO_0YRjFrCN8rrYnW8r1cXsN1tPN_fcg&usqp=CAU&ec=48665699" alt="5"/>
  </div>,
   <div className="item" data-value="2">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYAOT8WFhakbcCtKH2ZmYaxyZjsgz5QV2LB9IJMGJ4w&usqp=CAU&ec=48665699" alt="5"/>
</div>,
<div className="item" data-value="2">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDSbvhzmHm0LlCSML1SfE97WSoBCaYhT_FERAMkfxWA&usqp=CAU&ec=48665699" alt="5"/>
</div>,
];

const items3 = [
  <div className="item" data-value="1">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmQnhHZov89uvXfS9xm9-kXLOEDokjc3E-kvDC0SkL3g&usqp=CAU&ec=48665699" alt="1"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJmxG61XzcpssZCjWIf4jUbiGYVUCP11YQXfUh0kPJw&usqp=CAU&ec=48665699" alt="2"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRji6nWYdL3xhKmWMyWus0Otb2ksfpjvjd7Kdp2EJ_ikg&usqp=CAU&ec=48665699" alt="3"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxa4cI9-E0T7ZSYUrT9FGjWx6QetE408g3Sj12zBWyw&usqp=CAU&ec=48665699" alt="4"/>
  </div>,
  <div className="item" data-value="2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bnou4j9Gf_YK0WqbI_NENdvZTEkJnPHWhvuNYbWHDQ&usqp=CAU&ec=48665699" alt="5"/>
  </div>,
   <div className="item" data-value="2">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpeAf8d4-Iy4y_1nS11SPMAh8-bj8rEOQMzdrstG4SkQ&usqp=CAU&ec=48665699" alt="5"/>
</div>,
<div className="item" data-value="2">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBawF-Yp5j8kOzR4o-GT0J9u39kEt1HHdbykqpO8i-0A&usqp=CAU&ec=48665699" alt="5"/>
</div>,
];

const HomePage = () => {
  return (
   <>
      <Navbar col1="goldenrod" col2="white"/>
      <MyCarousel/>
      <Typography sx={{textAlign:"center",marginTop:"20px"}} variant="h5">Mens Trending</Typography>
      <MyCarousel2 dir="ltr" item={items}/>
      <div className='offerimgdiv'>
      <div className='offerimg'>
        <img src="https://img.freepik.com/free-vector/cyber-monday-special-offer-banner-with-yellow-splash-background_1361-2992.jpg?w=2000" alt="offer"/>
      </div>
      </div>
      <Typography sx={{textAlign:"center",marginTop:"20px"}} variant="h5">Women Trending</Typography>
    <MyCarousel3 dir="rtl" item2={items2}/>

    <div className="header"></div>;
    <Typography sx={{textAlign:"center",marginTop:"20px"}} variant="h5">Kids Trending</Typography>

   <MyCarousel4 dir="ltr" item3={items3}/>

   <Footer1/>
   </>
  )
}

export default HomePage