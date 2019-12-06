import React from 'react';
import {removeAll} from "./actionCreators/actionCreaters";
import {connect} from "react-redux";

function RemoveAll(props) { 
    return(
         <button className="remove-all" onClick={() => {props.removeAll()}}>
                Tümünü Sil
        </button>
    )
}
const mapDispatchToProps=dispatch=>({
    removeAll:()=>{dispatch(removeAll())}
});

export default connect(null,mapDispatchToProps)(RemoveAll);
