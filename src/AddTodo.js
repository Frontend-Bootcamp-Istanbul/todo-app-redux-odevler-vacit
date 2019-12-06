import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "./actionCreators/actionCreaters";


let inputVal;

function AddTodo(props) {

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.addTodo(inputVal);
            }}>
            <input
                type="text"
                value={inputVal}
                onChange={changeInput} />
            <button>Ekle</button>
        </form>
    )

    // this.changeInput = this.changeInput.bind(this);
    // this.addTodo = this.addTodo.bind(this);
}

const changeInput = (e) => {
    inputVal = e.target.value;


}

// const addTodo = (event) => {
//     event.preventDefault();
//     this.props.addTodo(this.state.inputVal);
//     this.setState({
//         inputVal: ""
//     });
// }

// const addTodo = this.props;


const mapDispatchToProps = dispatch => ({
    removeTodo: (todo) => { dispatch(addTodo(todo)) }
});

export default connect(null,mapDispatchToProps)(AddTodo);
