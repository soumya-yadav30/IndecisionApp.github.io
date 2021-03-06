class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options: []
        };
        this.handleDeleteSingle=this.handleDeleteSingle.bind(this);
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
        }
    }
    catch(e){
    }
    }
    componentDidUpdate(prevProps,prevState){
        if(this.prevState.options.length !==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
    }
    }
    componentWillUnMount(){
        console.log('component will unmount');
    }
    handleDeleteOptions(){
        this.setState(() =>({options:[]}));
    }
    handleDeleteSingle(optionToRemove){
        this.setState((prevState)=>(
            {
                options:prevState.options.filter((option)=>{
                    return optionToRemove !==option;
                })
            }
        ));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const sel = this.state.options[randomNum];
        alert(sel);
    }
    handleAddOption(option){
        if(!option){
            return 'enter valid value';
        }else if(this.state.options.indexOf(option)>-1){
            return'this already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render(){
        const subtitle="Put your life in hands of Computer";
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length>0}
                handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteSingle={this.handleDeleteSingle}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}
Header.defaultProps={
    title: 'Indecision App'
}

const Action=(props)=>{
    return(
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >What Should I Do?</button>
        </div>
    );
}
//class Action extends React.Component{
//    render(){
//        return(
//            <div>
//           <button onClick={this.props.handlePick}
//            disabled={!this.props.hasOptions}
//            >What Should I Do?</button>
//            </div>
//        );
//    }
//}

const Options=(props)=>{
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length ===0 && <p>Please add an option</p>}
            {
                props.options.map((option) =>(
                    <Option
                        key={option} 
                        optionText={option}
                        handleDeleteSingle={props.handleDeleteSingle}
                    />
                ) )
            }
        </div>
    );
};
const Option=(props)=>{
    return(
        <div>
            {props.optionText}
            <button
                onClick={(e)=>{
                    props.handleDeleteSingle(props.optionText);
                }}
            >
            Remove
            </button>
        </div>
    );
};
class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value='';
        }
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                </form>
            </div>
        );
    }
}

//const User = () => {
//    return (
//        <div>
//            <p>Name :</p>
//            <p>Age :</p>
//        </div>
//    );
//};
ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));




