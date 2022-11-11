import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      data:null
    }
  }

  componentDidMount(){
    fetch('https://api.covalenthq.com/v1/1/xy=k/uniswap_v2/tokens/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/transactions/?quote-currency=USD&format=JSON&page-size=5&key=ckey_6648a422319b43a8a507ece94a5').then((response)=>{
      response.json().then((result)=>{
        this.setState({data:result.data})
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
                  <th scope="col" className='title1'>S.No.</th>
                  <th scope="col" className='title1'>Token1 Contract Name</th>
                  <th scope="col" className='title1'>Token2 Contract Name</th>
                  <th scope="col" className='title1'>Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
