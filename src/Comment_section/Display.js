import React from 'react';

function Display(props){

    const { people } = props;
    const {bool_state} = props;
    
    const peopleList = people.map( (person) => {
        return(
            <div id="comment_form" key={person.id}>
                {bool_state === "true" &&
                 <span className="icon"><i class="fa fa-user" aria-hidden="true"></i></span>
                }
               <span className="get_name"> {person.name} </span><br/>
               <span className="get_comment"> {person.comment} </span>
            </div>
        );
    })

    return(
        <div className="display">
            { peopleList }
        </div>
    );
}

export default Display;
