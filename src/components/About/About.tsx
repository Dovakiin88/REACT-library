import React from 'react'
import { Navbar } from '../Navbar';
import { makeStyles, Divider } from '@material-ui/core';


const useStyles = makeStyles({
  center:{
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center'
  },
  row: {
    display:'flex',
    flexDirection: 'row',
  },
  width60: {
    width: '60%',
    justifyContent: 'space-evenly'
  },
  textalignment:{
    textAlign: 'center',
    wordBreak: 'break-all'
  },
  background: {
    background: 'radial-gradient(circle, rgba(133,0,0,1) 0%, rgba(0,0,0,1) 100%)',
    backgroundSize: 'cover',
  },
  textcolor: {
    color: 'black'
  },
  columnalign:{
    display: 'flex',
    flexDirection: 'column'
  },
  padtop:{
    paddingTop: '15px'
  },
  textsize:{
    textSizeAdjust: '40%'
  },
  imgsize:{
    maxWidth: '65%',
    height: 'auto',
    justifyItems: 'center'
  },
  width70:{
    width: '70%'
  },
  pad:{
    padding: '15px'
  },
  bdybackground:{
    background: 'linear-gradient(0deg, rgba(247,216,216,1) 0%, rgba(244,189,220,1) 100%)'
    
  },
  martop:{
    marginTop: '15px'
  },
  padleft:{
    paddingLeft: '20px'
  },
  marleft:{
    marginLeft: '60px'
  },
  ul:{
    listStyleType: 'square'
  },
  martop2:{
    marginTop: '40px'
  },
  padright:{
    paddingRight: '1px'
  },
  marbottom: {
    marginBottom: '40px'
  },
  top:{
    postition: 'fixed',
  },
  leftalign:{
    textAlign: 'left'
  }
  

})


export const About =() => {

  const classes = useStyles()

  return (
    <div className={`${classes.center} ${classes.bdybackground} ${classes.textcolor} ${classes.columnalign} ${classes.padright} ${classes.top}`}>
      <Navbar />
      <div className={`${classes.width60} ${classes.center} ${classes.padtop} `}>
        <h1 className={`${classes.textalignment}`}>So Much KNOWLEDGE!!!!</h1>
        <Divider style={{ background: '#8f8f8f' }} variant="middle" />
        <Divider style={{ background: '#8f8f8f' }} variant="middle" />
        <br />
        <div className={`${classes.textsize}`}>
          Hi! And welcome to the Daedric library. do you like masseing with things you shouldn't? Have you ever 
          wanted to turn your friends and family into soggy pancakes? Ever wanted to how Mehrunes dagon nearly wiped out 
          everything? did you like the oblivion crisis? Well do we have books for you! Come on down and learn about something
          you probalby shouldnt.
    
        </div>
        <br />
        <br />
        <div>
        Disclaimer: We are not responsible for stupidity. We simply provide the books and allow darwinism to take hold.
        Read at your own risk and good luck. YOU WILL NEED IT!
      </div>
      </div>
      <main className={`${classes.row} ${classes.padtop} ${classes.martop} ${classes.marbottom} ${classes.center}`}>
        <div>
         
        </div>

        <div className={`${classes.width70} ${classes.columnalign}`}>
          <div>
            <h2 className={`${classes.textalignment}`}>Suggestions</h2>
            Again we are not responsible for shenanigans. However out of the courtesy of our very SOULS!!!! we will offer 
            a few suggestions.
          </div>
          <div className={`${classes.textalignment} ${classes.martop}`}>
            <ul className={`${classes.ul} ${classes.leftalign}`}>
              <li>Dont seek to meet a daedra. Not a good idea</li>
              <li>Dont turn people into food</li>
              <li>Dont blow stuff up</li>
              <li>Have common sense</li>
              <li>Dont freeze anything</li>
              <li>Dont Summon anything</li>
              <li>Dont cause whole shelves to collapse into the ocean. College of winterhold im looking at you!</li>
              <li>Dont anger a deadra</li>
              <li>Dont perform a ritual</li>
              <li>Did we mention not to seek a daedra? that pretty Important</li>
              <li>Lastly! Dont read these books</li>
            </ul>
          </div>
          <div className={`${classes.center} ${classes.martop2}`}>
            <div className={`${classes.textalignment}`}>
              <h3>Here is what we reccommend!</h3>
            </div>
            <ul className={`${classes.martop}`}>
              <li>Uncommon Taste! For chefs only! Too many of you cant cook.</li>
            </ul>
          </div>
          <div className={`${classes.martop2}`}>
          </div>
        </div>
        
      </main>
    </div>
  )
}