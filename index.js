const reactAsosiyTarkibi = document.getElementById("root");

// const element = React.createElement("ul",null,[
//     React.createElement('li',null,"Bosh sahifa"),
//     React.createElement('li',null,"Aloqa"),
//     React.createElement('li',null,"Biz haqimiz")
// ]);

const ism = "Sirojiddin";

const elementJSX = (
    <ul>
        <li>Bosh sahifa</li>
        <li>Contact</li>
        <li>Biz haqimizda</li>
        <li>{ism.toUpperCase()}</li>
    </ul>

);

ReactDOM.render(elementJSX, reactAsosiyTarkibi);
