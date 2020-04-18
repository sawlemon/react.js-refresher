import React from 'react';

const CautionList = (props) => {
    console.log(props.cautions);
    return( 
    <div>
        <ul className="caution-list">
            {
                props.cautions.map( (caution) =>{
                    return <li key={caution.id}> { caution.text } </li>
                })
            }
        </ul>
    </div>
    );
};

export default CautionList;