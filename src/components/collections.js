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
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">



          { /* AD */ }
          <Card shadow = {0} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/ad.png) center'}}>
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
