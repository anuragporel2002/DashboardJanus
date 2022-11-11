import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      dat:null
    }
  }

  componentDidMount(){
    fetch('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/transactions/?quote-currency=USD&format=JSON&page-size=5&key=ckey_6648a422319b43a8a507ece94a5').then((response)=>{
      response.json().then((result)=>{
        this.setState({dat:result.data})
      })
    })
  }
  render() {
    return (
      <div className='content'>
        <div className="split1 left">
          <div className='px-3'>
            <h3 className='title1'>Janus Software</h3>
          </div>
          <hr className='hr1' />
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#"><h6 className='pt-1'>Dashboard</h6></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><h6>More</h6></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><h6>About</h6></a>
            </li>
          </ul>
          <footer className='bottom px-3 py-2'>Designed by Anurag Porel</footer>
        </div>

        <div className="split2 right">
          <div className='head'>
            <nav className='nav-header px-2 pb-2 pt-3'>
              <h5 className='item1'>Transaction Dashboard</h5>
              <h6 className='item1 righti px-2'>Welcome Admin!</h6>
            </nav>
          </div>
          <div className='px-3 py-4'>
            <table className="table table-bordered">
              <thead className="thd">
                <tr>
                  <th scope="col" className='title1'>SN</th>
                  <th scope="col" className='title1'>Contract_Name1</th>
                  <th scope="col" className='title1'>Contract_Name2</th>
                  <th scope="col" className='title1'>Amount_0_In (Cr.)</th>
                  <th scope="col" className='title1'>Amount_1_In (Cr.)</th>
                  <th scope="col" className='title1'>Amount_0_Out (Cr.)</th>
                  <th scope="col" className='title1'>Amount_1_Out (Cr.)</th>
                  <th scope="col" className='title1'>Total Quote</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.dat?
                  this.state.dat.items.map((item,index)=>
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.token_0.contract_name}</td>
                    <td>{item.token_1.contract_name}</td>
                    <td>{item.amount_0_in/10000000}</td>
                    <td>{item.amount_1_in/10000000}</td>
                    <td>{item.amount_0_out/10000000}</td>
                    <td>{item.amount_0_out/10000000}</td>
                    <td>{item.total_quote}</td>
                  </tr>
                  )
                  :<tr>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                    <td>Loading...</td>
                  </tr>
                }
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
