
import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import "./landingpage.css";
//import {createBrowserHistory} from 'history';

const landingpage = () => {
   {/*} useEffect(()=>{
        const history = createBrowserHistory();
        const userInfo=localStorage.getItem("userInfo");
        if(userInfo){
            history.push("/mynotes");
        }
    },[history]);*/}
  return <div className='main'>
    <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to Notes Zipper</h1>
                    <p className='subtitle'>One safe place for all your notes.</p>
                </div>
                <div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button size='lg'className='landingbutton'> 
                                Login
                            </Button>
                        </a>
                        <a href='/register'>
                            <Button size='lg' className='landingbutton' variant='outline-primary'>
                                Signup
                            </Button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </Row>
    </Container>
  </div>
};

export default landingpage
