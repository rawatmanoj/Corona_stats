import React, { Component } from 'react';
import axios from 'axios';
import Chart from '../Charts';

class stats extends Component {

state={
    totalCases:null,
    newCases:null,
    recovered:null,
    activeCases:null,
    criticalCases:null,
    totalDeaths:null,
    newDeaths:null
};

componentDidMount=()=>{

    setInterval(this.fetchDataAll,1000)
    
}

 fetchDataAll=()=>{
    axios({
        "method":"GET",
        "url":"https://covid-193.p.rapidapi.com/statistics",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"e3bd6ad7d0mshf24c4ec77410316p10251cjsnd55ef7632bde"
        },"params":{
        "country":"all"
        }
        })
        .then((response)=>{
            console.log(response.data.response[0]);
          this.setState({
            totalCases:response.data.response[0].cases.total,
            newCases:response.data.response[0].cases.new,
            recovered:response.data.response[0].cases.recovered,
            activeCases:response.data.response[0].cases.active,
            criticalCases:response.data.response[0].cases.critical,
            totalDeaths:response.data.response[0].deaths.total,
            newDeaths:response.data.response[0].deaths.new
          })
        })
        .catch((error)=>{
          console.log(error)
        })
 }






    render() {

      
    //  console.log(this.state.totalCases);
       const {totalCases,newCases,recovered,activeCases,criticalCases,totalDeaths,newDeaths}=this.state;
        return (
            <div className="secondary-container">
                    <div className="total-cases">
                      
                       
                         <h1>Live Counting: {totalCases}</h1>
                       
                    </div>
            <div className="stats-container">
                <div className="left-container">
                   
                    <div style={{color:"#8080FF"}}>
                        <h1> New Cases: {newCases}</h1>
                    </div>
                    <div>
                      <h1> Active Cases: {activeCases}</h1>
                    </div>
                    <div style={{color:"#FF0000"}}>
                        <h1>Critical Cases: {criticalCases}</h1>
                    </div>
                </div>

                <div className="right-container">
                    <div style={{color:"#8ACA2B"}}>
                       <h1> Recovered: {recovered}</h1>
                    </div>
                    <div style={{color:"#FF0000"}}>
                       <h1>  Total Deaths: {totalDeaths}</h1>
                    </div>
                    <div>
                        <h1>  New Deaths: {newDeaths}</h1>
                    </div>
                </div>
            </div>
            <Chart/>
            </div>
        );
    }
}

export default stats;