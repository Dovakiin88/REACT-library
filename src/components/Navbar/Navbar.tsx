import React, { Suspense } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { url } from 'inspector';
import { AuthCheck } from 'reactfire';



const useStyles = makeStyles({
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display:'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#aa2f74',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px'
    },
});

export const Navbar =() => {

    const classes = useStyles();

  return (
    <div className= {`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween} `}>
        <div className= {`${classes.navlogo}`}>
            <Link to='/' className={` ${classes.p5}`}/>
        </div>
        <div className= {`${classes.width60} ${classes.alignCenter}`}>
            <ul className= {`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                <Suspense fallback={ 'loading.....' }>
                    <AuthCheck fallback={
                        <li>
                            <Button>
                                <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}> Sign In</Link>
                            </Button>
                        </li>
                    }>
                        <li>
                            <Button>
                                <Link to= '/About' className= {`${classes.navbarItem} ${classes.psides}`}>Psst! we gotta tell ya something</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to= '/Library' className= {`${classes.navbarItem} ${classes.psides}`}>Books Galore!</Link>
                            </Button>
                        </li>
                        <li>
                            <Button>
                                <Link to= '/home' className= {`${classes.navbarItem} ${classes.psides}`}>Get on Home skipper!</Link>
                            </Button>
                        </li>
                    </AuthCheck>
                </Suspense>
            </ul>
        </div>
    </div>
  )
}
