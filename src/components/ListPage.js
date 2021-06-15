import React from 'react';
import AddForm from './AddForm';
import List from './List';
import styled from 'styled-components';

const StyleDiv = styled.div`
    background:#fff;
    margin:0 auto;
    flex-direction:column;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    padding:10px;
`;

const Button = styled.button`
    width: 80px;
    margin:0 auto;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: #fff;
    color:rgb(121, 81, 255);
    cursor:pointer;

    :hover {
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    }
`


class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            lists:[]
        }
    };

    addList = newList => {
        if(newList.text !== ''){
            const allList = [...this.state.lists, newList]
            this.setState({
                lists:allList
            })
        }
    }

    removeList = removeKey => {
        let allList = this.state.lists
        let index = allList.findIndex(list => list.key === removeKey);
        allList.splice(index, 1)
        this.setState({lists:allList})
    }

    handlePageSwitch = () => {
        if(this.props.view === 'flex'){
            this.props.onSwitch();
        }
    }

    render(){
        return(
            <StyleDiv className="list-wrap" style={{display: `${this.props.view}`}}>
                <AddForm onClick={this.addList} />
                <List lists={this.state.lists} onRemove={this.removeList}/>
                <Button onClick={this.handlePageSwitch}>回首頁</Button>
            </StyleDiv>
        )
    }
}

export default ListPage;
