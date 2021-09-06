import React from 'react';
import { Col, Row} from 'antd';


export const RdView  = () => {
      return (


<Row> 

          <Row style={{ marginRight:'auto', marginLeft:'auto', marginTop: 100, marginBottom:0,  justifyContent:'center',textAlign: 'center', maxWidth: 1200}}>  
          <Col span={24}>
          <div style={{maxWidth: 345, maxHeight: 500,  marginTop: 10, marginBottom: 0,}}> 
<h1  style={{ fontSize: 35}}>Roadmap</h1> 
<i  style={{ fontSize: 15, }}>Epoch 1</i>
</div>
</Col>
</Row> 

  
 <Row style={{ marginRight:'auto', marginLeft:'auto', marginTop: 50, marginBottom:50,  justifyContent:'center',textAlign: 'center', maxWidth: 1200}}>  
   <Col sm={{span:24}} lg={{span:12}} style={{marginBottom:50, marginTop: 50}}>
   <h1  style={{ fontSize: 20}}>1. EVO-NFT Auction</h1> 
   <img alt="example" src="https://i.ibb.co/zHd0Lh9/EVO-NFT-vote.png"     style={{ maxWidth: 300, maxHeight: 300}}/>
   <h1  style={{ fontSize: 15,  marginRight:'auto', marginLeft:'auto', justifyContent:'center', maxWidth: 300, maxHeight: 300}}>The first 50 EVO-NFT will be auctioned September 8th. The 50 winners will have 100% ownership of the DAO until the next EVO-NFT auction.</h1> 
     </Col>

     <Col sm={{span:24}} lg={{span:12}} style={{marginBottom:50, marginTop: 50}}>
     <h1  style={{ fontSize: 20}}>2. Artist Auction</h1> 
     <img alt="example" src="https://i.ibb.co/7Js9kc2/Roadmap2.png"      style={{ maxWidth: 300, maxHeight: 300}}/>
     <h1  style={{ fontSize: 15,  marginRight:'auto', marginLeft:'auto', justifyContent:'center', maxWidth: 300, maxHeight: 300}}> After the DAO has its first 50 owners, the Founding Artists will auction on their own schedule.</h1> 
</Col>

<Col sm={{span:24}} lg={{span:12}} style={{marginBottom:50, marginTop: 50}}>
<h1  style={{ fontSize: 20}}>3. Art Competition</h1> 
<img alt="example" src="https://i.ibb.co/f0HQRyz/comp.png"     style={{ maxWidth: 300, maxHeight: 300}}/>
<h1  style={{ fontSize: 15,  marginRight:'auto', marginLeft:'auto', justifyContent:'center', maxWidth: 300, maxHeight: 300}}> 20% of the EVO-NFT revenue will be used to fund an art competition.</h1> 
</Col>


<Col sm={{span:24}} lg={{span:12}} style={{marginBottom:50, marginTop: 50}}>
<h1  style={{ fontSize: 20}}>4. EVO-DAO Vote</h1> 
<img alt="example" src="https://i.ibb.co/Fn0dKgH/EVO-DAO-Profile.png"    style={{ maxWidth: 300, maxHeight: 300}}/>
<h1  style={{ fontSize: 15,  marginRight:'auto', marginLeft:'auto', justifyContent:'center', maxWidth: 300, maxHeight: 300}}> The 50 owners of EVO-DAO will vote on the winner of the art competition and the revenue allocation generated from the 5% platform fee on all artwork sold.</h1> 
</Col>
 </Row>

 </Row>

);
};
  
