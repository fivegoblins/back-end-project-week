import axios from 'axios';

export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_SUCCESS = 'NOTES_FETCH_SUCCESS';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const GET_NOTE_START = 'GET_NOTE_START';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const GET_NOTE_FAILURE = 'GET_NOTE_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const UPDATE_NOTE_START = 'UPDATE_NOTE_START';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';


export const getNotes = () => dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    const promise = axios.get('http://localhost:9000/notes');

    promise
        .then(response => {
            dispatch({ type: NOTES_FETCH_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: NOTES_FETCH_FAILURE, payload: err });
        });
};

export const getNote = note=> dispatch => {
    dispatch({type: GET_NOTE_START});
    const promise = axios.get(`http://localhost:9000/notes/${note.id}`);

    promise
        .then(response=> {
            dispatch({type: GET_NOTE_SUCCESS, payload: response.data});
        })
        .catch(err=> {
            dispatch({type: GET_NOTE_FAILURE, payload: err});
        });
};

export const addNewNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('http://localhost:9000/notes', note)
        .then(response => {
            dispatch({ type: ADD_NOTE_SUCCESS, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        });
};

export const deleteNote = note => dispatch => {
    dispatch({ type: DELETE_NOTE_START });

    axios.delete(`http://localhost:9000/notes/${note.id}`)
        .then(response => {
            dispatch({ type: DELETE_NOTE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
        });
};


export const setUpdateNote = id => {
    return {
        type: SET_UPDATE_NOTE,
        payload: id,
    };
};

export const updateNote = note=> dispatch => {
    dispatch({ type: UPDATE_NOTE_START });

    axios.put(`http://localhost:9000/notes/${note.id}`, note)
        .then(response => {
            dispatch({ type: UPDATE_NOTE_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: UPDATE_NOTE_FAILURE, payload: err});
        });
};