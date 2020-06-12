import React from 'react';

//this js file dispalys the comment data on the screen.

function Display(props){


    const { people } = props;
    const {set_bool} = props;
    

    const peopleList = people.map( (person) => {
        return(

            <div id="comment_form" key={person.id}>

                {set_bool === "true" && person.id!==0 &&
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
