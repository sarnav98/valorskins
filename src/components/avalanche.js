import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Avalanche extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Avalanche Collection </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Classic */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/738405910145138739/avalanche-display.png) center'}}>
           Classic
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 1
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  YES
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  1275
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Marshal */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/741420961311490090/avalanche-display.png) center'}}>
           Marshal
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 1
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  YES
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  1275
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>

            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Phantom */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/741411217477730384/avalanche-display.png) center'}}>
           Phantom
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 1
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  YES
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  1275
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>

            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>




          </div>
          </Cell>

        </Grid>

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">
          {/* Spectre */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/741374358026584255/avalanche-display.png) center'}}>
           Spectre
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 1
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  YES
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  1275
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>

            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>


          </div>
          </Cell>

        </Grid>




      </section>

      <br/>

      </div>
    )
  }
}


export default Avalanche;
