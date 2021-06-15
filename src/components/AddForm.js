import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    width:300px;
    padding:10px;
    border-bottom:1px solid #ccc;
`

const Form = styled.form`
    display:flex;
    justify-content:space-between;
`

const Input = styled.input`
    width:200px;
`

const Button = styled.button`
    
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

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newList:{
                text:"",
                key:""
            }
        }
    }

    handleInput = e =>{
        this.setState({
            newList:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }

    add = e =>{
        e.preventDefault();
        this.props.onClick(this.state.newList)
    }


    render(){
        return(
            <StyleDiv className="add-wrap">
                <Form onSubmit={this.add}>
                    <Input type="text" onChange={this.handleInput} />
                    <Button type="submit">新增紀錄</Button>
                </Form>
            </StyleDiv>
        )
    }
}


export default AddForm;