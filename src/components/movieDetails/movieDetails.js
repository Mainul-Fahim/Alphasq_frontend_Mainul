import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MovieDetails = (props) => {
    
    const [details,setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=4275cf25831de3b150d6ae572b31a179`)
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[props.movieId])
    
    return (
        
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                
                   <h4>{details.original_title} </h4> 
               
            </Modal.Header>
            <Modal.Body>
                <h4>Overview</h4>
                <p className="secondary">
                    {details.overview}
                </p>
                <small> <strong>Release Date: </strong> {details.release_date}</small>
                <br />
                <small> <strong> Revenue: </strong> {details.revenue}</small>
                <br />
                <small> <strong> Runtime: </strong> {details.runtime}</small>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        
    );
};

export default MovieDetails;