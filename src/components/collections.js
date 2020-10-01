import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Collections extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname">
        <h1 className="page-title-main-2"> Collections </h1>
        <h4 className="collection-details">

        <div>
        <span style={{color: '#828282'}}> Adding more collections with V1.1 </span>

         </div>
         </h4>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Glitchpop Collection */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>
          <Link to="/glitchpop">
          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Collections/glitchpop-display.png) center'}}>
           Glitchpop
          </CardTitle>
          </Link>
          </Card>



          {/* G.U.N Collection */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>
          <Link to="/gun">
          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Collections/gun-display.png) center'}}>
           G.U.N
          </CardTitle>
          </Link>
          </Card>

          {/* Spline Collection */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>
          <Link to="/spline">
          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Collections/spline-display.png) center'}}>
           Spline
          </CardTitle>
          </Link>
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


export default Collections;
