import React from 'react';
import HomePage from './HomePage';
import ListPage from './ListPage';


class App extends React.Component {

    state = {
        views:{
            homepage:'flex',
            listpage:'none'
        }
    }

    pageSwitch = () => {
        if(this.state.views.homepage === 'flex') {
            this.setState(
                {
                    views:{
                        homepage:'none',
                        listpage:'flex'
                    }
                }
            )
        }else if(this.state.views.listpage === 'flex') {
            this.setState({
                    views:{
                        homepage:'flex',
                        listpage:'none'
                    }})
        }
    }

    render(){
        return(
            <div style={{display: 'flex'}}>
                <HomePage view={`${this.state.views.homepage}`} onSwitch={this.pageSwitch} />
                <ListPage view={`${this.state.views.listpage}`} onSwitch={this.pageSwitch}/>
            </div>
        )
    }
}

export default App;