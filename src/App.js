import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Row,Col,InputGroup,FormControl,Badge } from 'react-bootstrap';

import MarketNews from './components/MarketNews';
import PriceList from './components/PriceList'
import MarketNewsData from './components/MarketNewsData'



function App() {
  return (
    <div className="App">
     <Row>
       <Col lg={2} >
       <PriceList/>
       <div className="market-header">
        <p>Market News</p>
      </div>
      <div className="ml-2">
      {MarketNewsData.map (data => <MarketNews key={data.id} title={data.title} text={data.text} date={data.date} /> )}
      </div>
       </Col>
       <Col lg={7} className="p-0">
            <div className="w-100 bg-success" style={{ height: "50vh" }}>
              <div class="tradingview-widget-container">
                <div id="tradingview_eb355"></div>
              </div>
            </div>
            <div className="purchase-list d-flex" style={{marginTop:'90px'}}>
              <p className="active mr-4">Limit</p>
              <p className="disabled mr-4">Market</p>
              <p className="disabled mr-4">Stop Limit</p>
              <p className="disabled mr-4">Stop Market</p>
            </div>
            <Row >
              <Col lg={6} className="">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="bg-dark border-0"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2" className="bg-dark border-0 white">BTC</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Amount"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="bg-dark border-0"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2 " className="bg-dark border-0 white">ETH</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Badge className="badges mr-2">25%</Badge>
                <Badge className="badges mr-2">50%</Badge>
                <Badge className="badges mr-2">75%</Badge>
                <Badge className="badges mr-2">100%</Badge>
                <Row>
                  <Col lg={6}>
                    <div className="justify-content-between d-flex active mt-2" style={{fontSize:'0.7rem'}}>
                      <p>Avaible:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                    <div className="justify-content-between d-flex active" style={{fontSize:'0.7rem'}}>
                      <p>Margin:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="justify-content-between d-flex active mt-2" style={{fontSize:'0.7rem'}}>
                      <p>Volume:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                    <div className="justify-content-between d-flex active" style={{fontSize:'0.7rem'}}>
                      <p>Fee:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                  </Col>
                </Row>
                <button className="purchase w-100 bg-success white">BUY</button>
              </Col>


              <Col lg={6} className="border-left">
              <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="bg-dark border-0"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2 " className="bg-dark border-0 white">BTC</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Amount"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="bg-dark border-0"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2 " className="bg-dark border-0 white">ETH</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
                <Badge className="badges mr-2">25%</Badge>
                <Badge className="badges mr-2">50%</Badge>
                <Badge className="badges mr-2">75%</Badge>
                <Badge className="badges mr-2">100%</Badge>
                <Row>
                  <Col lg={6}>
                    <div className="justify-content-between d-flex active mt-2" style={{fontSize:'0.7rem'}}>
                      <p>Avaible:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                    <div className="justify-content-between d-flex active" style={{fontSize:'0.7rem'}}>
                      <p>Margin:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="justify-content-between d-flex active mt-2" style={{fontSize:'0.7rem'}}>
                      <p>Volume:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                    <div className="justify-content-between d-flex active" style={{fontSize:'0.7rem'}}>
                      <p>Fee:</p>
                      <p>0 BTC = 0 USD</p>
                    </div>
                  </Col>
                </Row>
                <button className="purchase w-100 bg-danger white">SELL</button>
              </Col>
            </Row>
       </Col>
       <Col lg={3}>
          <div className="market-header pl-3 active">
              <p>Order Book</p>
          </div>
          <div className="d-flex justify-content-between disabled bottom" style={{fontSize:'0.9rem'}}>
            <p>Price(BTC)</p>
            <p>Amount(ETH)</p>
            <p>Total(ETH)</p>
          </div>
          <div className="d-flex justify-content-between active grandient-75 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'red'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          <div className="d-flex justify-content-between active grandient-50 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'red'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          <div className="d-flex justify-content-between active grandient-25 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'red'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          <div className="d-flex justify-content-between active text-center pt-2" style={{fontSize:'0.8rem'}}>
            <div >
              <p>Last Price</p>
              <p className="marginbottom">1.25345</p>
            </div>
            <div>
              <p>USD</p>
              <p className="marginbottom">15.276648</p>
            </div>
            <div >
              <p style={{color:'red'}}>Change</p>
              <p className="marginbottom" style={{color:'red'}}>-0.51%</p>
            </div>
          </div>
          <div className="d-flex justify-content-between active grandienty-25 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'green'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          <div className="d-flex justify-content-between active grandienty-50 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'green'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          <div className="d-flex justify-content-between active grandienty-75 bottom pt-2" style={{fontSize:'0.8rem'}}>
            <p style={{color:'green'}}>0.022572</p>
            <p>1.25345</p>
            <p>15.276648</p>
          </div>
          
       </Col>
     </Row>
    </div>
  );
}

export default App;
