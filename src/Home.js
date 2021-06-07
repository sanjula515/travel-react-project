import React from 'react';
import ReactDOM from 'react-dom';
import kodai from './kodai.jpg';
import ooty from './ooty.webp';
import coonar from'./coonar.jpg';
import  yelagiri from'./yelagiri.webp';
import topslip from'./top.jpg';

 import {
    BrowserRouter as Router,
    Route,
   Link,
    NavLink,
    Switch 
  } from "react-router-dom";
class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <body>
                <div class="heading">
                    <div class="jumbotron text-center"id="heading">
                        <h1>DISCOVER TO TRAVEL</h1>
                        <p>Find your best Hill Station</p>
                        <ul class="nav nav-pills"id="navigation">
                            <li class="nav-item">
                                <a class="nav-link active" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="/Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src={kodai}
                                class="rounded-circle mx auto d-block"
                                
                                width="200px"
                                height="150px"/>
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="strong">Kodaikanal</h1>
                                <br />
                                <p class="h5">One of the most beautiful hill stations in Tamilnadu, Kodai is called the Princess of Hill Stations. It is in Dindigul 7000ft high up on the upper Palani hills. It is still untouched, relatively crowd-free and home to the beautiful Kodai Lake, Pillar Rocks, Bryant Park, Coaker’s Walk, Bear Shola Falls, and Silver Cascade.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src={ooty}
                                class="rounded-circle mx auto d-block"
                                
                                width="200px"
                                height="150px"/>
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="strong">Ooty</h1>
                                <br />
                                <p class="h5">Ooty is called the ‘Queen of hill stations.’ It lies in the Nilgiris at an altitude of 7440ft above sea level. A favorite summer retreat and weekend getaway, Ooty offers lush green valleys, panoramic views, beautiful lakes and other attractions including a toy train from Mettupalayam to Ooty a UNESCO World Heritage Site.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src={coonar}
                                class="rounded-circle mx auto d-block"
                                
                                width="200px"
                                height="150px"/>
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="strong">Coonoor</h1>
                                <br />
                                <p class="h5">If you are Coonoor and don’t visit the Nilgiri tea estate, then you are missing out on a great experience. Situated 6000ft above sea level, this gorgeous hill station in Tamilnadu is known for its lush greenery, deep valleys, magnificent gorges, and waterfalls. The Sim’s park, Lambs Rock, St. Catherine Falls, Dolphins Nose and Law’s falls are some must-visits. Don’t miss a trek into the Nilgiri Hills.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src={yelagiri}
                                class="rounded-circle mx auto d-block"
                                
                                width="200px"
                                height="150px"/>
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="strong">Yelagiri</h1>
                                <br />
                                <p class="h5">Between towns, Vaniyambadi and Jolarpettai in Vellore lies a beautiful hill station Yelagiri. One of the finest hill stations in Tamilnadu, it is a group of 14 hamlets that lie between four mountains at an altitude of 3500ft. Well-known for its paragliding, human-made lake Punganur, trekking trails with the highest peak Swamimalai at 4338ft. Other attractions include the Jalagamparai Waterfalls, Velavan Temple, and Nature Park.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                            <div class="rounded-circle">
                                <img src={topslip}
                                class="rounded-circle mx auto d-block"
                                
                                width="200px"
                                height="150px"/>
                                </div>
                                <br/>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="strong">Topslip</h1>
                                <br />
                                <p class="h5">One of the best-kept secrets of the Annamalai Tiger Reserve, Topslip is known for its wildlife, adventure sports, and medicinal plant conservation. This hill station is located 2554ft above the sea. It has verdant forests with exotic plant species, elephant and jeep safaris and trekking trails you can explore.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <h1 class="details">Details For Trip</h1>
                                <br/>
                                <table class="table table-dark tabel-stripped">
                                    <thead>
                                        <tr>
                                            <th>Places to visit</th>
                                            <th>Starting point to Destination</th>
                                            <th>Transport</th>
                                            <th>Charges Required</th>
                                            <th>Duration period</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kodaikanal</td>
                                            <td>Madurai to Kodaikanal</td>
                                            <td>Bus</td>
                                            <td>Rs.2000 per head</td>
                                            <td>2 days</td>
                                        </tr>
                                        <tr>
                                            <td>Ooty</td>
                                            <td>Coimbatore to Ooty</td>
                                            <td>Bus</td>
                                            <td>Rs.2000 per head</td>
                                            <td>2 days</td>
                                        </tr>
                                        <tr>
                                            <td>Coonoor</td>
                                            <td>Coimbatore to Coonor</td>
                                            <td>Bus</td>
                                            <td>Rs.2000 per head</td>
                                            <td>3 days</td>
                                        </tr>
                                        <tr>
                                            <td>Yelagiri</td>
                                            <td>Bangalore to Yelagiri</td>
                                            <td>Bus</td>
                                            <td>Rs.1500 per head</td>
                                            <td>2 days</td>
                                        </tr>
                                        <tr>
                                            <td>Topslip</td>
                                            <td>Pollachi to Topslip</td>
                                            <td>Bus</td>
                                            <td>Rs.2500 per head</td>
                                            <td>3 days</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="jumbotron text-center"id="footer">
                        <ul class="nav justify-content-center">
                            
                            <li class="nav-item">
                            <a href="https://www.facebook.com/"
                            class="fa fa-facebook nav-link"
                            style={{color:"black",fontSize:25,}}/>
                            </li>
                            <li class="nav-item">
                            <a href="https://www.instagram.com/"
                            class="fa fa-instagram nav-link"
                            style={{color:"black",fontSize:25,}}
                            
                            />
                            </li>
                            <li class="nav-item">
                            <a href="https://www.twitter.com/"
                            class="fa fa-twitter nav-link"
                            style={{color:"black",fontSize:25,}}/>
                            </li>

                            
                        </ul>
                    </div>
                </div>
                </body>
        );
    }
}
export default Home;