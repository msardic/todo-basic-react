import React, {Component} from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            gorevler:[],
            task:'',
        }
    }
handleChange = (input)=>{
        this.setState(
            {[input.name]:input.value}

        )

    console.log(this.state)
}

buttonChange = ()=>{
        const gorev= this.state.gorevler
    gorev.push({task:this.state.task,id:1,status:false})
    this.setState({
        gorevler:gorev,
        task:"",
    });
}

    render() {
        return (
            <div className="App">
                <input name={"task"} onChange={(e)=>{this.handleChange(e.target)}} type="text"/>
                <button onClick={()=>{this.buttonChange()}}>Change Me</button>
                <hr/>
                {
                    this.state.gorevler.map((e)=>{
                        return(
                            <h1>{e.task}</h1>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
