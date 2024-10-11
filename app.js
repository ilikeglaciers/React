ReactDOM.render(<h1>This is header 1.</h1>,document.getElementById("root"));
ReactDOM.render(<h2>This is header 2.</h2>,document.querySelector("#first"));
ReactDOM.render(
<ul><li>Apple</li><li>Orange</li></ul>,
document.querySelector('#second')
);


function MainContent()
{
    return(
        <h1>I'm Learning react.</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById("third")
)

const h1 = document.createElement('h1');
document.textContent = 'This is an imperative way to program.';
document.className = "header";
document.getElementById("fourth").append(h1);
//This is an imperative way to write code without using innerHTML or <h1>

const h2 = document.createElement('h2');
h2.textContent = 'Wassup Everybody!';
h2.className = 'head2';
console.log(h2); 

const element = <h1 className='head3'>This is JSX</h1>
console.log(element);

ReactDOM.render(element,document.getElementById("fourth"));