import { Card } from 'react-bootstrap';
import './plugin.css';
import { AiFillStar } from 'react-icons/ai';



export default function PriceList(){
    return (
        <div className="price-list">
            <input placeholder="Search" className="w-100"/>
            <div className="d-flex justify-content-between pr-2 coin-list">
                <AiFillStar className="mt-1"/>
                <p className="active">BTC</p>
                <p className="disabled">ETH</p>
                <p className="disabled">NEO</p>
                <p className="disabled">USDT</p>
                <p className="disabled">DAI</p>
                <p className="disabled">PAX</p>
            </div>
            
                <table style={{width:'100%',fontSize:'0.8rem'}}>
                    <tr className="disabled">
                        <th>Pairs</th>
                        <th>Last Price</th> 
                        <th>Change</th>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="not-stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    <tr className="active">
                        <td><AiFillStar/> ETH/BTC</td>
                        <td>0.0002025</td>
                        <td className="stonks">-2.58%</td>
                    </tr>
                    
                </table>

            
            
        </div>
    );
}