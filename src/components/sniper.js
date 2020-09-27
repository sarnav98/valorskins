import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Sniper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main-2"> Sniper </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Marshal */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/marshal-display.png) center'}}>
            Marshal
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/marshal" className = "inspect-button" align="center"> View weapon skins </Link>
            </CardActions>
          </Card>

          { /* AD */ }
          <Card shadow = {0} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/ad.png) center'}}>
          </Card>



          {/* Guardian */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/operator-display.png) center'}}>
           Operator
          </CardTitle>

            <CardActions border style={{backgroundColor: '#0c0e11'}}>
              <Link style={{color: '#fff'}} to="/operator" className = "inspect-button" align="center"> View weapon skins </Link>
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


export default Sniper ;
