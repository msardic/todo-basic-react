import React, {Component} from "react";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gorevler: [],
            task: "",
            errors: ""
        };
    }


    handleChange = (input) => {
        this.setState({[input.name]: input.value});
        console.log(input.value);
    };

    buttonClick = (e) => {
        e.preventDefault();
        const nowTask = this.state.gorevler
        if (this.state.task.length > 0) {

            nowTask.push({
                task: this.state.task,
                id: this.state.gorevler.length,
                status: false
            })
            this.setState(
                {
                    errors: ""
                }
            )
        } else {
            this.setState(
                {
                    errors: "Lütfen görev giriniz."
                }
            )

        }


        this.setState({
            gorevler: nowTask,
            task: ""
        })
    };

    removeButton = id => {

        /* const newTasks = this.state.gorevler.reduce((total, item, i) => {

             if (id !== item.id) {
                 total.push(item);
             }
             return total;
         }, []);*/

        const newTasks = this.state.gorevler.filter(item => item.id !== id)
        this.setState({
            gorevler: newTasks,
            errors: ""
        });
    };

    completedTask = (id) => {

        const completeTasking = this.state.gorevler.reduce((total, item, i) => {

            if (id === item.id) {
                item.status = true;
            }
            total.push(item)


            return total;
        }, [])

        this.setState({
                gorevler: completeTasking,

            }
        )

    }

    render() {
        return (
            <div className="app">
                <div className="container">

                    <form className="searchBar" onSubmit={(e) => {
                        this.buttonClick(e)
                    }}>
                        <input
                            maxlength="70"
                            value={this.state.task}
                            name={"task"}
                            onChange={e => {
                                this.handleChange(e.target)
                            }}
                            type={"text"}
                        />
                        <button type="submit" id='buttonStyle'>
                            ekle
                        </button>
                    </form>


                    {
                        this.state.errors.length > 0 && (<span>{this.state.errors}</span>)
                    }
                    <hr style={{width: "100%"}}/>
                    <div className="resultContainer">
                        {
                            this.state.gorevler.map((item, i,) => {
                                console.log(item)
                                return (
                                    <>
                                        <div className="flexible">
                                            <span>{i + 1}</span>


                                            {item.status ?
                                                <div className="textDecoration">{item.task}</div> :
                                                <div key={i}>{item.task}</div>}


                                            <div>
                                                <button disabled={item.status} onClick={() => {
                                                    this.completedTask(item.id)
                                                }}>tamamlandı
                                                </button>

                                                <button onClick={() => {
                                                    this.removeButton(item.id)
                                                }}>
                                                    sil
                                                </button>
                                            </div>

                                        </div>
                                        <hr/>
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
