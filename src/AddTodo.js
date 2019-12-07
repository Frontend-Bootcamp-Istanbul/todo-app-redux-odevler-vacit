import React from 'react';
import { connect } from "react-redux";
import { addTodo, setInput, getInput,removeTodo } from "./actionCreators/actionCreaters";


let inputVal="";
class AddTodo extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    changeInput = (e) => {
        this.props.setInput(e.target.value);
    }

    onAddTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.props.getInput());
        this.props.setInput("")
    }

    render() {
        // const { addTodo } = this.props;
        return <form
            onSubmit={(e) => {
                this.onAddTodo(e)
            }}>
            <input
                type="text"
                value={() => this.props.getInput()}
                onChange={this.changeInput} />
            <button>Ekle</button>
        </form>
    }
}
const mapStateToProps = (state) => ({
    inputVal: state.inputVal,
});

const mapDispatchToProps = dispatch => ({
    removeTodo: (todo) => { dispatch(removeTodo(todo)) },
    addTodo: (input) => { dispatch(addTodo(input)) },
    getInput: () => { dispatch(getInput()) },
    setInput: (input) => { dispatch(setInput(input)) },
});

export default connect(null, mapDispatchToProps)(AddTodo);
