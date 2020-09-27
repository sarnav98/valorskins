import React, {Component, useState} from 'react';
import './App.css';

import {Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content, Footer, FooterSection, FooterLinkList} from 'react-mdl';
import {CSSTransition} from 'react-transition-group';

import {Link} from 'react-router-dom';


import Main from './components/main';
/* Import statements for icons */
import {ReactComponent as ClassicIcon} from './icons/Classic.svg';
import {ReactComponent as FrenzyIcon} from './icons/Frenzy.svg';
import {ReactComponent as ShortyIcon} from './icons/Shorty.svg';
import {ReactComponent as SheriffIcon} from './icons/Sheriff.svg';
import {ReactComponent as GhostIcon} from './icons/Ghost.svg';
import {ReactComponent as SpectreIcon} from './icons/Spectre.svg';
import {ReactComponent as StingerIcon} from './icons/Stinger.svg';
import {ReactComponent as BuckyIcon} from './icons/Bucky.svg';
import {ReactComponent as JudgeIcon} from './icons/Judge.svg';
import {ReactComponent as BulldogIcon} from './icons/Bulldog.svg';
import {ReactComponent as GuardianIcon} from './icons/Guardian.svg';
import {ReactComponent as PhantomIcon} from './icons/Phantom.svg';
import {ReactComponent as VandalIcon} from './icons/Vandal.svg';
import {ReactComponent as MarshalIcon} from './icons/Marshal.svg';
import {ReactComponent as OperatorIcon} from './icons/Operator.svg';
import {ReactComponent as AresIcon} from './icons/Ares.svg';
import {ReactComponent as OdinIcon} from './icons/Odin.svg';
import {ReactComponent as KnifeIcon} from './icons/Knife.svg';

import {ReactComponent as HomeIcon} from './artwork/192icon.png';


import {ReactComponent as ViperIcon} from './icons/Viper.svg';


const Ghost50 = (<GhostIcon/>);
const Classic50 = (<ClassicIcon/>);
const Frenzy50 = (<FrenzyIcon/>);
const Shorty50 = (<ShortyIcon/>);
const Sheriff50 = (<SheriffIcon/>);
const Spectre50 = (<SpectreIcon/>);
const Stinger50 = (<StingerIcon/>);
const Bucky50 = (<BuckyIcon/>);
const Judge50 = (<JudgeIcon/>);
const Bulldog50 = (<BulldogIcon/>);
const Guardian50 = (<GuardianIcon/>);
const Phantom50 = (<PhantomIcon/>);
const Vandal50 = (<VandalIcon/>);
const Marshal50 = (<MarshalIcon/>);
const Operator50 = (<OperatorIcon/>);
const Odin50 = (<OdinIcon/>);
const Ares50 = (<AresIcon/>);
const Knife50 = (<KnifeIcon/>);

const Home50 = (<HomeIcon/>);

const Viper50 = (<ViperIcon/>);






class App extends Component {

  render() {

    return (
      <div style={{ backgroundColor: "#141617 "}}>
      <a href="/">
      <img src="https://cdn.discordapp.com/attachments/489291942958596106/728712937929179186/logov2.png" alt="Logo" className = "ValorSkins"/>
      </a>
      <Navbar>

      <Link to="/" className="homel">
      <img src="https://cdn.discordapp.com/attachments/489291942958596106/743637486361772128/home192.png"  className = "HomeIcon"/>
    </Link>
          <NavItem icon="Sidearm" linkTo="sidearm" >
            <DropdownMenu menuItems={sidearmList} />
          </NavItem>

          <NavItem icon="SMGs" linkTo="smgs" >
            <DropdownMenu menuItems={smgsList}/>
          </NavItem>

          <NavItem icon="Shotguns" linkTo="shotguns">
            <DropdownMenu menuItems={shotgunsList}/>
          </NavItem>

          <NavItem icon="Rifles" linkTo="rifles">
          <DropdownMenu menuItems={riflesList}/>

          </NavItem>

          <NavItem icon="Sniper" linkTo="sniper">
          <DropdownMenu menuItems={sniperList}/>

          </NavItem>

          <NavItem icon="Heavy" linkTo="heavy">
          <DropdownMenu menuItems={heavyList}/>

          </NavItem>
          <NavItem icon="Melee" linkTo="knife">
          <DropdownMenu menuItems={knifeList}/>
          </NavItem>

          <NavItem icon="Collections" linkTo="sidearm">
          <DropdownMenuWithSecondary menuItems={collectionList}/>

          </NavItem>



      </Navbar>

      <Main/>

            <Footer className="foot"  style={{backgroundColor: '#141617'}}>
            <FooterSection style={{padding: '2px', justify: 'center'}}>
                <FooterLinkList style={{backgroundColor: '#0a0a0a', padding: '10px'}}>
                    <a >ValorSkins is a personal project. Donations are appreciated to keep upgrading the site.</a>
                    <a href="https://paypal.me/donate2tom" style={{color: '#17e7eb'}}>Donate</a>

                </FooterLinkList>
            </FooterSection>

            </Footer>

      </div>





    );
  }
}

function Navbar(props) {

  return (
    <nav className = "navbar">
      <ul className = "navbar-nav">
      {props.children}
      </ul>
    </nav>
  );
}


function NavItem(props) {


  const [open, setOpen] = useState(false);


  return (
    <li id = "demo" onlick="myFunction()" className="nav-item" onMouseLeave = {() => setOpen(false)}>
      <Link to={props.linkTo} className="icon-button" onClick={() => setOpen(!open)} onMouseEnter = {() => setOpen(true)} >
        {props.icon}
      </Link>

      {open && props.children}
    </li>

  )
}




/* Item lists for each menu */
const sidearmList = ["Classic", "Shorty", "Frenzy", "Ghost", "Sheriff"];
const smgsList = ["Stinger", "Spectre"];
const shotgunsList = ["Bucky", "Judge"];
const riflesList = ["Bulldog", "Guardian", "Phantom", "Vandal"];
const sniperList = ["Marshal", "Operator"];
const heavyList = ["Ares", "Odin"];
const collectionList = [ "Avalanche", "Convex","Glitchpop", "Luxe ", "Prime ",  "Prism ", "Sovereign", "More"];
const knifeList = ["Knife"];

let iconMap = new Map();
iconMap.set("Classic", Classic50);
iconMap.set("Shorty", Shorty50);
iconMap.set("Frenzy", Frenzy50);
iconMap.set("Ghost", Ghost50);
iconMap.set("Sheriff", Sheriff50);
iconMap.set("Spectre", Spectre50);
iconMap.set("Stinger", Stinger50);
iconMap.set("Judge", Judge50);
iconMap.set("Bucky", Bucky50);
iconMap.set("Bulldog", Bulldog50);
iconMap.set("Guardian", Guardian50);
iconMap.set("Phantom", Phantom50);
iconMap.set("Vandal", Vandal50);
iconMap.set("Marshal", Marshal50);
iconMap.set("Operator", Operator50);
iconMap.set("Odin", Odin50);
iconMap.set("Ares", Ares50);
iconMap.set("Knife", Knife50);
iconMap.set("Viper", Viper50);




function kahzekMagicConverter(elem) {


    const Tag = iconMap.get(elem);
    return < Tag/>

}

function DropdownMenu(props) {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const menuItems = props.menuItems;
  const listItems = menuItems.map((elem) =>
    <DropdownItem key={elem} linkTo ={elem.toLowerCase()} rightIcon = {iconMap.get(elem)}>
      {elem}
    </DropdownItem>
  );

  function calcHeight(elem) {
    const height = elem.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link to={props.linkTo} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
         {props.children}
        <span className="icon-right"> {props.rightIcon}</span>
      </Link>
    );
  }

  return (

    <div className="dropdown" style={{height: menuHeight}}>

      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames = "menu-primary"
        onEnter = {calcHeight}
      >

        <div className = "menu">
        {listItems}


        </div>
      </CSSTransition>

    </div>
  );
}

function DropdownMenuWithSecondary(props) {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const menuItems = props.menuItems;
  const listItems = menuItems.map((elem) =>
    <DropdownItem key={elem} linkTo ={elem.toLowerCase()} rightIcon = {iconMap.get(elem)}>
      {elem}
    </DropdownItem>
  );


  function calcHeight(elem) {
    const height = elem.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link to={props.linkTo} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
         {props.children}
        <span className="icon-right"> {props.rightIcon}</span>
      </Link>
    );
  }

  return (

    <div className="dropdown" style={{height: menuHeight}}>

      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames = "menu-primary"
        onEnter = {calcHeight}
      >

        <div className = "menu">

        <DropdownItem goToMenu="agents" rightIcon=">">
          Agent Weapons
        </DropdownItem>
        {listItems}


        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'agents'}
        unmountOnExit
        timeout={500}
        classNames = "menu-secondary"
        onEnter = {calcHeight}
      >

        <div className = "menu">
          <DropdownItem rightIcon = {iconMap.get("Viper")}>
            Breach
          </DropdownItem>
          <DropdownItem rightIcon = {iconMap.get("Brimstone")}>
            Breach
          </DropdownItem>
          <DropdownItem rightIcon = {iconMap.get("Cypher")}>
            Cypher
          </DropdownItem>

        <DropdownItem rightIcon="Back" goToMenu="main"/>
        </div>
      </CSSTransition>

    </div>
  );
}



export default App;
