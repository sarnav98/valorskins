import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Spectre extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Spectre weapon skins </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Avalanche */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/avalanche-display.png) center'}}>
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

          {/* Convex */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/convex-display.png) center'}}>
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

          {/* Gun */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/gun-display.png) center'}}>
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


          </div>
          </Cell>

        </Grid>

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Hivemind */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/hivemind-display.png) center'}}>
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
                  Act 2 Battlepass (Tier 5)
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Kingdom */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/kingdom-display.png) center'}}>
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
                  Act 1 Battlepass (Tier 5)
              </div>
            </CardText>



            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
            </CardActions>

            <CardActions border style={{backgroundColor: '#00f6ff'}}/>


          </Card>

          {/* Luxe */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/luxe-display.png) center'}}>
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



          {/* Prime */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/prime-display.png) center'}}>
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

          {/* Prism */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/prism-display.png) center'}}>
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

          {/* Spline */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Spectre/spline-display.png) center'}}>
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


export default Spectre;
