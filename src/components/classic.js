import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Classic extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Classic weapon skins </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* AVALANCHE */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/avalanche-display.png) center'}}>
           Avalanche
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

          {/* FINAL CHAMBER */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/finalchamber-display.png) center'}}>
           Final Chamber
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
                  Agent contract (Sage)
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* GALLERIA */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/galleria-display.png) center'}}>
           Galleria
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

          {/* GUN */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/gun-display.png) center'}}>
           G.U.N
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 2
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

          {/* IMPERIUM */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/imperium-display.png) center'}}>
           Imperium
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              BETA
              <div>
                  <span style={{color: '#828282'}}> Available in store: </span>
                  NO
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

          {/* KINGDOM */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/kingdom-display.png) center'}}>
           Kingdom
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
                  Act 1 Battlepass (Tier 50)
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


          {/* PISTOLINHA */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/pistolinha-display.png) center'}}>
           Pistolinha
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
                  Agent contract (Raze)
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* PRIME */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/prime-display.png) center'}}>
           Prime
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

          {/* RED ALERT */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/redalert-display.png) center'}}>
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
                  Act 2 Battlepass (Tier 40)

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


          {/* SAKURA */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/sakura-display.png) center'}}>
           Sakura
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

          {/* SMITE */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/smite-display.png) center'}}>
           Smite
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 2
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

          {/* SPLINE */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Classic/spline-display.png) center'}}>
            Spline
          </CardTitle>

            <CardText style={{color: '#fff'}}>

              <span style={{color: '#828282'}}> Release: </span>
              ACT 2
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



          </div>
          </Cell>

        </Grid>

      </section>

      <br/>

      </div>
    )
  }
}


export default Classic;
