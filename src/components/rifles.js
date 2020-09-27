import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Rifles extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main-2"> Rifles </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Bulldog */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/bulldog-display.png) center'}}>
            Bulldog
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/bulldog" className = "inspect-button" align="center"> View weapon skins </Link>
            </CardActions>
          </Card>

          { /* AD */ }
          <Card shadow = {0} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/ad.png) center'}}>
          </Card>



          {/* Guardian */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/guardian-display.png) center'}}>
           Guardian
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/guardian" className = "inspect-button" align="center"> View weapon skins </Link>
            </CardActions>
          </Card>


          </div>
          </Cell>

        </Grid>

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Phantom */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/phantom-display.png) center'}}>
            Phantom
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/phantom" className = "inspect-button" align="center"> View weapon skins </Link>
            </CardActions>
          </Card>




          {/* Vandal */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/vandal-display.png) center'}}>
           Vandal
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/vandal" className = "inspect-button" align="center"> View weapon skins </Link>
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


export default Rifles;
