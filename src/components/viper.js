import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Viper extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="agent-display">
      <img src="https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Agents/Viper.png"
           alt="Viper"
           height="300px"
      />
      </section>


      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

                    {/* Snakebite */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Shorty/snakebite-display.png) center'}}>
                     Snakebite
                    </CardTitle>


                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center"> Inspect (Coming Soon) </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

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


export default Viper;
