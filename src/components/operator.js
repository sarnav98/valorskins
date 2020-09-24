import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Operator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Operator weapon skins </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Convex */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Operator/convex-display.png) center'}}>
           Convex
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
                  875
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>

            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Enderflame */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Opeartor/enderflame-display.png) center'}}>
           Enderflame
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
                  2475
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Luxe */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Opeartor/luxe-display.png) center'}}>
          Luxe
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
                  875
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

          {/* Prism */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Opeartor/prism-display.png) center'}}>
          Prism
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

          {/* Red Alert */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Opeartor/redalert-display.png) center'}}>
          Red Alert
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 2
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  NO
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  Act 2 Battlepass (Tier 45)
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


export default Operator;
