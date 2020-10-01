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
           <Link to="/knife"> Hivemind Sword </Link>


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

      </section>
      <section className="home-page-news">
      <h5 className="home-page-header"> Version 1.0 : ValorSkins is officially live!</h5>
      </section>
      <section className="sub-section">

      <p> (10/01/20)
      <br/>◘ After starting this solo project in May, I'm glad to share it with everyone even though it is still a WIP
      <br/> ◘ Currently this site does not have a responsive design (for mobile and other devices) but this will change
      <br/> ◘ You can view every skin in the game, but not inspect (a feature that I'm working on with priority but unsure of when it will release)
      <br/> ◘ Features I plan for v1.1 include a redesign of the collections tab and a suggestions box
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

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/sidearms.png) center'}}>
                     Sidearms
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/sidearm"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Smgs */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/smg.png) center'}}>
                     SMGs
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/smgs"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Shotguns */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/shotguns.png) center'}}>
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

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">


                    {/* Rifles */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/rifles.png) center'}}>
                     Rifles
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/rifles"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Sniper */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/snipers.png) center'}}>
                     Sniper
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/sniper"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

                    {/* Heavy */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/heavy.png) center'}}>
                     Heavy
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/heavy"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>

          </div>
          </Cell>

        </Grid>

        <Grid>

          <Cell col={12}>

          <div className="guns-grid">


                    {/* Melee */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/knives.png) center'}}>
                     Melee
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/knife"> View All </Link>
                      </CardActions>

                      <CardActions border style={{backgroundColor: '#00f6ff'}}/>


                    </Card>



                    {/* Collections */}
                    <Card shadow = {5} style= {{minWidth: '400px', maxWidth: '400px' ,margin: 'auto', backgroundColor: '#141617'}}>

                    <CardTitle style={{color: '#fe0468', height: '200px', background: 'url(https://raw.githubusercontent.com/thulka2/valorskins/master/src/displays/Other/collections.png) center'}}>
                     Collections
                    </CardTitle>



                      <CardActions border style={{backgroundColor: '#0c0e11'}}>
                        <Link className = "inspect-button" align="center" to="/collections"> View All </Link>
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
