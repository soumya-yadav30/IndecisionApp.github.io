class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'hide details' : 'show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>these are the details</p>
                    </div>
                )}
            </div>
        );
    }
}
ReactDOM.render(<VisibilityToggle />, app);




//let visibility=false
//const toggle=() =>{
//    visibility=!visibility;
//    render();
//};
//const appRoot = document.getElementById('app2');
//const render=()=>{
//    const template = (
//        <div>
//            <h1>Visibility Toggle</h1>
//            <button onClick={toggle}>
//            {visibility?'hide details':'show details' }
//            </button>
//            {
//            visibility && (
//            <div>
//           <p>these are the details</p>
//            </div>
//            )}
//        </div>
//    );
//    ReactDOM.render(template, appRoot);
//};
//render();