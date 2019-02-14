import React from "react";
import Button from "../Button/Button";

class SearchBox extends React.Component {
    state = {
        inputValue: ""
    }

    handleChange = (value) => {
        this.setState({inputValue: value}, () => {
            console.log(this.state);
        });

    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                this.props.handleSearch(this.state.inputValue)
            }}>
                <input onChange={e => this.handleChange(e.target.value)} />
                <Button>Search</Button>
            </form>
        )
    }
}

export default SearchBox;