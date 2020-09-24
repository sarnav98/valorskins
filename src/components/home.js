import React, {Component} from 'react';

import {Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import {Link} from 'react-router-dom';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div>

      <section className="guns-gunname" style={{backgroundColor: '#0a0a0a'}} >
        <h1 className="home-page-header"> Newest Skins & Collections </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">

          {/* Hivemind Sword */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/743626211464314950/hivemindsword-display.png) center'}}>
           Hivemind Sword


          </CardTitle>

          </Card>

          {/* Glitchpop Collection */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/743643871413796894/glitchpop.png) center'}}>
           Glitchpop Collection
          </CardTitle>





          </Card>

          {/* Wunderkind */}
          <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

          <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/741360583009370182/wunderkind-display.png) center'}}>
           Wunderkind Shorty
          </CardTitle>




          </Card>


          </div>
          </Cell>

        </Grid>






      </section>

      <section className="guns-gunname" style={{backgroundColor: '#0a0a0a'}} >
        <h1 className="home-page-header"> Site News </h1>
        <p classname="home-page-news">
        Version 1.0 : ValorSkins is officially live!
        </p>
      </section>

      <section className="guns-gunname" style={{backgroundColor: '#0a0a0a'}} >
        <h1 className="home-page-header"> Browse skins </h1>
      </section>

      <section style={{backgroundColor: '#0a0a0a', width: '95%', margin: 'auto'}}>
        <Grid>

          <Cell col={12}>

          <div className="guns-grid">


                    {/* Sidearm */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/743580596709621790/sidearms.png) center'}}>
                     Sidearms
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/sidearm"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Smgs */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/743645054396137583/smg.png) center'}}>
                     SMGs
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/smgs"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Shotguns */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://cdn.discordapp.com/attachments/489291942958596106/743580595292209352/shotguns.png) center'}}>
                     Shotguns
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/shotguns"> View All </Link>
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


export default Home;
