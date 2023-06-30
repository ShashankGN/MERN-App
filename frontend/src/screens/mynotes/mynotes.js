import React,{ useEffect, useState } from 'react'
import Mainscreen from '../../components/mainscreen';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux";
import { listNotes } from '../../actions/notesActions';
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import {createBrowserHistory} from 'history';
import { deleteNoteAction } from '../../actions/notesActions';
//import axios from "axios";

const Mynotes = ({search}) => {

  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


 

  const deleteHandler=(id)=>{
    if(window.confirm("Are you sure?")){
      dispatch(deleteNoteAction(id));
    }
  };

 const history = createBrowserHistory();
  useEffect(()=>{
    dispatch(listNotes());
    if(!userInfo){
      history.push("/");
    }

  },[dispatch]);
  return (<Mainscreen title={`Welcome Back ${userInfo.name}..`}>
    <Link to='createnote'>
      <Button style={{marginLeft:10,marginBottom:6}}size="lg">
        Create New Note
      </Button>
      </Link>
      {/*{error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )}*/}
      {loading && <Loading />}
      {notes?.reverse().map(note=>(
        <Accordion key={note._id}>
          <Card style={{margin:10}}>
        <Card.Header style={{display:"flex"}}>
          <span
          style={{
            color:"black",
            textDecoration:"none",
            flex:1,
            cursor:"pointer",
            alignSelf:"center",
            fontSize:18
          }}
          >
            {/* <Accordion.Toggle as={Card.Text} variant='link' eventKey='0'></Accordion.Toggle> */}
            {note.title}
            </span>
          <div>
          {/*<Button href={`/note/${note._id}`}>Edit</Button>*/}
          <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
        </div>
        </Card.Header>
        {/* <Accordion.Collapse eventKey='0'> */}
        <Card.Body>
          <h4>
            <Badge variant='success'>
              Category - {note.category}
            </Badge>
          </h4>
          <blockquote className='blockquote mb-0'>
            <p>
              {note.content}
            </p>
            <footer className='blockquote-footer'>
              Created On date
              <cite title='Source Title'>
                {note.createdAt.substring(0,10)}
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
       {/* </Accordion.Collapse> */}
        
      </Card>
        </Accordion>
        
      ))
      }
  </Mainscreen>);
};

export default Mynotes;
