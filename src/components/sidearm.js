import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Sidearm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main"> Sidearms </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Classic */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/classic.png) center'}}>
           Classic
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/classic" className = "inspect-button" align="center"> View skins </Link>
            </CardActions>
          </Card>

          {/* Shorty */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/shorty-display.png) center'}}>
           Shorty
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/shorty" className = "inspect-button" align="center"> View skins </Link>
            </CardActions>
          </Card>

          {/* Frenzy */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/frenzy-display.png) center'}}>
           Frenzy
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/frenzy" className = "inspect-button" align="center"> View skins </Link>
            </CardActions>
          </Card>


          </div>
          </Cell>

        </Grid>

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">


          {/* Ghost */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/ghost-display.png) center'}}>
           Ghost
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/ghost" className = "inspect-button" align="center"> View skins </Link>
            </CardActions>
          </Card>


          { /* AD */ }
          <Card shadow = {0} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/ad.png) center'}}>
          </Card>

          {/* Sheriff */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/sheriff-display.png) center'}}>
           Sheriff
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/sheriff" className = "inspect-button" align="center"> View skins </Link>
            </CardActions>
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


export default Sidearm ;
