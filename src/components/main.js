import React from 'react';

import {Switch, Route} from 'react-router-dom';

import LandingPage from './landingpage'
import Home from './home';


import Classic from './classic';
import Shorty from './shorty';
import Frenzy from './frenzy';
import Ghost from './ghost';
import Sheriff from './sheriff';

import Stinger from './stinger';
import Spectre from './spectre';

import Bucky from './bucky';
import Judge from './judge';

import Bulldog from './bulldog';
import Guardian from './guardian';
import Phantom from './phantom';
import Vandal from './vandal';

import Marshal from './marhsal';
import Operator from './operator';

import Ares from './ares';
import Odin from './odin';

import Melee from './melee';

/* Collections */
import Avalanche from './avalanche';
import Gun from './gun';
import Glitchpop from './glitchpop';
import Spline from './spline';

import Collections from './collections';

/* Weapon Categories */
import Sidearm from './sidearm';
import Smgs from './smgs';
import Shotguns from './shotguns';
import Rifles from './rifles';
import Sniper from './sniper';
import Heavy from './heavy';


/* Agents */
import Breach from './breach';
import Brimstone from './brimstone';
import Cypher from './cypher';
import Jett from './jett';
import Killjoy from './killjoy';
import Omen from './omen';
import Phoenix from './phoenix';
import Raze from './raze';
import Reyna from './reyna';
import Sage from './sage';
import Sova from './sova';
import Viper from './viper';




import ScrollToTop from './ScrollToTop';



const Main = () => (
  <Switch>
    <Route exact path="/" component = {Home} />
    <Route path="/classic" component = {Classic} />
    <Route path="/shorty" component = {Shorty} />
    <Route path="/frenzy" component = {Frenzy} />
    <Route path="/ghost" component = {Ghost} />
    <Route path="/sheriff" component = {Sheriff} />

    <Route path="/stinger" component = {Stinger} />
    <Route path="/spectre" component = {Spectre} />

    <Route path="/bucky" component = {Bucky} />
    <Route path="/judge" component = {Judge} />

    <Route path="/bulldog" component = {Bulldog} />
    <Route path="/guardian" component = {Guardian} />
    <Route path="/phantom" component = {Phantom} />
    <Route path="/vandal" component = {Vandal} />

    <Route path="/marshal" component = {Marshal} />
    <Route path="/operator" component = {Operator} />

    <Route path="/ares" component = {Ares} />
    <Route path="/odin" component = {Odin} />

    <Route path="/knife" component = {Melee} />

    <Route path="/avalanche" component = {Avalanche} />
    <Route path="/gun" component = {Gun} />
    <Route path="/glitchpop" component = {Glitchpop} />
    <Route path="/spline" component = {Spline} />

    <Route path="/collections" component = {Collections} />


    <Route path="/breach" component = {Breach} />
    <Route path="/brimstone" component = {Brimstone} />
    <Route path="/cypher" component = {Cypher} />
    <Route path="/jett" component = {Jett} />
    <Route path="/killjoy" component = {Killjoy} />
    <Route path="/omen" component = {Omen} />
    <Route path="/phoenix" component = {Phoenix} />
    <Route path="/raze" component = {Raze} />
    <Route path="/reyna" component = {Reyna} />
    <Route path="/sage" component = {Sage} />
    <Route path="/sova" component = {Sova} />
    <Route path="/viper" component = {Viper} />



    <Route path="/sidearm" component = {Sidearm} />
    <Route path="/smgs" component = {Smgs} />
    <Route path="/shotguns" component = {Shotguns} />
    <Route path="/rifles" component = {Rifles} />
    <Route path="/sniper" component = {Sniper} />
    <Route path="/heavy" component = {Heavy} />







  </Switch>
)


export default Main;
