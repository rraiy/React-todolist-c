import React from 'react';
import styled from 'styled-components';
// import '../static/HomePage.css';

const Wrap = styled.div`
    display:flex;
    margin:0 auto;
`

const HomepageWrap = styled.div`
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const Header = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    background:rgb(121, 81, 255); 
    width:300px;
    height:50px;
    color:white;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:300px;
`
 
const Banner = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height:100px;
    background:rgb(115, 163, 163);
    color:white;
    margin-bottom: 20px;
`

const EnterBtn = styled.button`
    width: 150px;
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

class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    handlePageSwitch = () => {
        if(this.props.view === 'flex'){
           this.props.onSwitch();
        }
    }

    render() {
        return (
            <Wrap style={{display: `${this.props.view}`}}>
                <HomepageWrap >

                    <Header><p>MemoHere</p></Header>

                    <Content className="content">
                        <Banner className="banner">
                            <p>歡迎使用待辦記事功能</p>
                        </Banner>
                        <EnterBtn className="btn btn-enter-list" onClick={this.handlePageSwitch}>點此進入</EnterBtn>
                    </Content>

                </HomepageWrap>

            </Wrap >
        )
    }

}

export default HomePage;