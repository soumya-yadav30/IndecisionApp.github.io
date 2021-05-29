console.log('App.js is running');
//JSX --JAVASCRIPT XML
const object = {
    subtitle: "Put your life in hands of computer",
    title: "Indecision App",
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        object.options.push(option);
        e.target.elements.option.value = '';
        renderArr();
    }
};
const removeAll = () => {
    object.options.length = 0;
    renderArr();
};
const decide = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    console.log(randomNum);
    const sel = object.options[randomNum];
    alert(sel);
}
const appRoot = document.getElementById('app2');
const renderArr = () => {
    const template = (
        <div>
            <h1>{object.title}</h1>
            {object.subtitle && <p>{object.subtitle}</p>}
            <p>{object.options.length > 0 ? "here are your items:" : "no items"}</p>
            <p>{object.options.length}</p>
            <button disabled={object.options.length == 0} onClick={decide}>What zhould i do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    object.options.map((item) => {
                        return <li key={item}>{item}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderArr();