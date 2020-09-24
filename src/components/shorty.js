import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Shorty extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Shorty weapon skins </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Hivemind */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Shorty/hivemind-display.png) center'}}>
           Hivemind
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
                  Act 2 Battlepass (Tier 50)
                  </div>

            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Oni */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Shorty/oni-display.png) center'}}>
           Oni
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
                  1775
                  <img src="https://vignette.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest/scale-to-width-down/22?cb=20200408014952" className = "VP"/>
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Snakebite */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Shorty/snakebite-display.png) center'}}>
           Snakebite
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 1
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  NO
              </div>
              <div>
                  <span style={{color: '#828282'}}> Unlock: </span>
                  Agent contract (Viper)
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

          {/* Wunderkind */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Shorty/wunderkind-display.png) center'}}>
           Wunderkind
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
                  Agent contract (Killjoy)
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


export default Shorty;
