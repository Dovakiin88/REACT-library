import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import alchemy from '../../assets/images/alchemy1.png'
import { Link } from 'react-router-dom';


interface Props {
    title: string;
}

const useStyles = makeStyles({
    header: {
      color: 'green'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    font: {
      color: '#ff0034',
      textAlign: 'center',
      position: 'relative'
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    column: {
      display: 'flex',
      flexDirection: 'column'
    },
    even_spread: {
      justifyContent: 'space-evenly'
    },
    reduce_margin: {
      margin: '-10px'
    },
    backgrounda:{
      backgroundColor: 'black'
    },
    backgroundb:{
      backgroundImage: `linear-gradient(0deg, rgba(247,216,216,1) 0%, rgba(244,189,220,1) 100%)`,
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1
    },
    paddinga: {
      padding: '5px'
    },
    paddingb:{
      padding: '10px'
    },
    top_padding:{
      paddingTop: '5px'
    },
    rightpadding:{
      paddingRight: '10px'
    },
    reduce:{
      marginBottom: '-20px',
      marginTop: '30px'
    },
    main_text: {
      textAlign: 'center',
      position: 'relative',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#bb20bd',
    },
    button_text: {
      color: '#bb20bd',
      textDecoration: 'none',
  },
  topmargin:{
    marginTop: '10px'
  },
  image:{
    width: '10px',
    height: '10px'
  }
});

export const Home = ( props: Props) => {

    const classes=useStyles();

  return (
    <>
        < Navbar /> 
        <div className= {`${classes.backgroundb} ${classes.column}`}>
            <div className= {classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/library' className= {classes.button_text}> Browse our Selection! </Link>
                </Button>
            </div>
        </div>
    </>
  )
}