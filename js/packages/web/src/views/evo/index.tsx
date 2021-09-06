

import { TwitterOutlined,  DownloadOutlined} from '@ant-design/icons';
import React from 'react';
import { Col, Row,  Divider, Collapse,  Card} from 'antd';
import { Typography, Pagination  } from 'antd';

const { Paragraph } = Typography;

export const EvoView  = () => {
         const { Panel } = Collapse;
    
        
        return (
          <Row>  
<div style={{ 
  backgroundImage: `url(${'https://i.ibb.co/xh4WdZx/EVO-NFT-final.png'})`


}}>

</div>


          <Row style={{ marginRight:'auto', marginLeft:'auto', marginTop: 60,  justifyContent:'center',textAlign: 'center', maxWidth: 1200, marginBottom: 0 }}>  
   

      <div style={{maxWidth: 500, height: 800,  marginTop: 10,}}>   
      
            <div className="evo-dao-2">  <h1  style={{ fontSize: 35 }}>An Auction Platform Controlled by the People</h1>
            <i style={{ fontSize: 15 }}>09/08/2021 -10:00PM UTC</i>
            </div>
            <div className="evo-dao-1" style={{ fontSize: 15,  marginTop: 50 }}>
            <h1>500 EVO-NFTs = EVO-DAO </h1> 
             </div>
<div style={{marginTop:40, marginBottom: 50}}>


Lite-Paper
                <a href="https://docs.google.com/document/d/1aeCZ63cWHIVvGL65yREi37krE05I7aPa9vz3B9UYTVc/edit?usp=sharing">
            <DownloadOutlined /> 
     
        </a>
     
</div>
            <div > 
   
           

    

    
              <Card  style={{ marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', width: 300, height:300 }}

                    hoverable
                    actions={[

              
                 
                    ]}
                    cover={ <img  src="https://i.ibb.co/xh4WdZx/EVO-NFT-final.png"  height="300" width="300" 
                    />}

                    >
                
              
               </Card>
               </div>   
             
               </div>

        
     
    
      </Row>



<Divider/>






        <Row style={{ marginTop: 100, marginBottom: 50, justifyContent:"center", textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}> 

  <div style={{width: 300, maxHeight: 500,  marginTop: 10}}>  
                 <img className="pic"  src="https://i.ibb.co/tq1wZpr/Cards.png" style={{  maxWidth: 300, maxHeight:300}} />    
      
                  <h1 className="evo-dao-2" style={{ fontSize: 25 }}> NFT Utility</h1>
                  <div style={{textAlign: 'center'}}> 
            <div className="evo-dao-1" style={{ fontSize: 15 }}>
                 <h1 style={{fontSize: 18,  color: '#19E6AD'}}>Profit</h1>
                 <h1 style={{fontSize: 18}}>EVO-DAO members control auction site revenue.</h1>
                 <h1 style={{fontSize: 18,  color: '#19E6AD'}}>Govern</h1>
                    <h1 style={{fontSize: 18}}>Vote to evolve EVO-DAO with Solana. </h1>
                    <h1 style={{fontSize: 18,  color: '#19E6AD'}}>Quality </h1>
                    <h1 style={{fontSize: 18}}> Vote to add or remove artists from the site.  </h1>
              
     
            </div>
            </div>
            </div>
         
 
  </Row>




        <Row  style={{ marginTop: 100, marginBottom: 0, justifyContent:"center", textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}> 

  <div style={{maxWidth: 300, maxHeight: 500,  marginTop: 10}}>  
                 <img className="pic"  src="https://i.ibb.co/85tZffz/Copy-of-Cards.png" style={{  maxWidth: 300, maxHeight:300}} />    
      
                 <h1  style={{ fontSize: 25}}> Portfolio Diversity</h1>
                  <div style={{textAlign: 'center'}}> 
                      <div  style={{ fontSize: 15 }}>
                      <h1 style={{fontSize: 18,  color: '#19E6AD' }}>Exposure</h1>
                      <h1 style={{fontSize: 18}}>EVO-NFTs provide indirect NFT exposure to multiple artistic projects.</h1>
                      <h1 style={{fontSize: 18,  color: '#19E6AD'} }>Unique Access</h1>
                      <h1 style={{fontSize: 18}}>Early market entries via EVO-DAO Artist Dark Drops. </h1>
          
                      </div>
                      </div>
                      </div>

        </Row>

        <Row  style={{ marginTop: 100, marginBottom: 150, justifyContent:"center", textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}> 

<div style={{maxWidth: 300, maxHeight: 500,  marginTop: 10, marginBottom: 100,}}>  
               <img className="pic"  src="https://i.ibb.co/Vj5kfYb/Arrow-1-1.png" style={{  maxWidth: 300, maxHeight:300}} />    
         
                    <h1  style={{ fontSize: 25}}>Voting</h1>
                    <div style={{textAlign: 'center'}}> 
                    <div  style={{ fontSize: 15 }}>
                    <h1 style={{fontSize: 18,  color: '#19E6AD'}}> 1</h1>
                    <h1 style={{fontSize: 18}}> A wallet snapshot is taken within 24 hours of a vote.</h1>
                  <h1 style={{fontSize: 18,  color: '#19E6AD'}}>2</h1> 
                  <h1 style={{fontSize: 18}}>Voting NFTs (YES/NO) are sent to EVO-NFT holders.</h1> 
                        <h1 style={{fontSize: 18,  color: '#19E6AD'}}>3</h1> 
                        <h1 style={{fontSize: 18}}>Send preffered Voting NFT to the community voting wallet. Unused Voting NFTs collected after.</h1> 
                  
                    </div>
                    </div>
                    </div>

</Row>




<Divider/>







<Row style={{ marginRight:'auto', marginLeft:'auto', marginTop: 50, marginBottom:50,  justifyContent:'center',textAlign: 'center', maxWidth: 1200}}>  
<div style={{maxWidth: 600, maxHeight: 500,  marginTop: 10, marginBottom: 0,}}> 
<h1  style={{ fontSize: 35, color: '#19E6AD'}}>FAQ</h1>

           
                 
            
                    
            

              
      <Col span={24}>
            <Collapse className="collaspe" bordered={true} style={{fontSize: 20}} >

                     <Panel header="Who owns EVO-DAO?" key="1" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>Holders of circulating EVO-NFTs.</p>
                    </Panel>

                    <Panel header="How many EVO-NFTs will there be?" key="3" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>EVO-DAO consists of 500 EVO-NFTs, vested linearly.</p>
                    </Panel>

                    <Panel header="What if I want to sell?" key="4" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>All EVO-NFT holders can sell in the secondary market.</p>
                    </Panel>

                    <Panel header="How does EVO-DAO make money?" key="5" showArrow={false}>
                    <p style={{ fontSize: '18px', color: '#D329FC'}}>Artworks that are listed on EVO-DAO incur a 5% EVO-DAO fee.</p>
                    </Panel>

                    <Panel header="What happens with the 5% auction fee?" key="6" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>EVO-NFT holders democratically allocate EVO-DAO revenue.</p>
                    </Panel>

                    <Panel header="How does EVO-DAO find Artists" key="7" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>To scout talent accross ecosystems, 20% of the EVO-NFT revenue will be used to fund art competitions. </p>
                    </Panel>

                    <Panel header="How can an artist leverage the collective reach of EVO-DAO?" key="2" showArrow={false}>
                      <p style={{ fontSize: '18px', color: '#D329FC'}}>Participate in upcoming art compeitions.</p>
                    </Panel>
                </Collapse>
          </Col>
          </div>
          </Row>

          <Divider style={{ marginRight:'auto', marginLeft:'auto', marginTop: 50,}}/>


          <Row style={{ marginRight:'auto', marginLeft:'auto', marginTop: 50,  justifyContent:'center',textAlign: 'center', maxWidth: 1200}}>  
          <Col span ={24}> 
<div style={{maxWidth: 1200, maxHeight: 500,  marginTop: 10, marginBottom: 0,}}>  
                    <h1  style={{ fontSize: 20, color: '#19E6AD'}}>EVO-DAO Treasury</h1>
                    <Paragraph copyable>BukxyT1ceg7f12CaAiJ1yDipGWvPGhFuSrkhKNMXm172</Paragraph>
                    </div>
            
                    
                    </Col>
  
          <Col span ={24}> 
          <div style={{maxWidth: 1200, maxHeight: 500,  marginTop: 50, marginBottom: 0,}}> 
          <a href="https://twitter.com/EVODAOnft"> <TwitterOutlined style={{ marginTop: 50, color: "#1DA1F2", fontSize: '25px'}}/></a>
          </div>
      </Col>



  

      <Col span ={24}> 
      <div style={{ maxHeight: 500,  marginTop: 40, marginBottom: 0,}}> 
      <h1 style={{fontSize: 15}}> Built on  
    
      <img className="pic"  src="https://i.ibb.co/mHj8VmX/Solana.png" style={{  marginLeft: 10, marginRight: 10, width: 30, height:30}}/> with 

     
  
          <img className="pic"  src="https://i.ibb.co/r51kDpT/Metaplex.png" style={{  marginLeft: 10, width: 30, height:30}}/></h1>
          </div>
          </Col>
      </Row>

   
</Row>    
  );
 };
   



   





   



   








   




