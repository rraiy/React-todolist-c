import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    padding:10px;
`
const Li = styled.li`
    display:flex;
    justify-content:space-between;
    margin-bottom:4px;

    :hover{
        background:rgb(150, 50, 255);
    }
`

const Button = styled.button`
    
    font-size:12px;
    border:none;
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    cursor:pointer;

    :hover {
    
    
    background: rgb(121, 81, 150);
    color:#fff;
    }
`

const List = props => {

    const handleRemove = (e,key) => {
        e.preventDefault();
        props.onRemove(key);
    }

    let lists = props.lists;
    // console.log(lists);
    let allItem = lists.map(list => {
        return (
        <Li key={list.key}>
            {list.text}
            <Button onClick={e=>handleRemove(e,list.key)}>刪除</Button>
        </Li>
        );
    })
   
    return (
        <Ul>{allItem}</Ul>
    )
    
};

export default List;