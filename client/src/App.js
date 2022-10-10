import './App.css';

function App() {
  const generate = async() =>{
    let obj = {string: document.getElementById('stringInput').value};
    const response = await (await fetch('http://localhost:5000/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(obj),
        })).json();
    console.log(response);

    document.getElementById('qrCode').src = response.image;

  }
  return (
    <div className="App">
      <input id="stringInput"/>
      <button onClick={generate}>Call</button>
      <img src='' id='qrCode'/>
    </div>
  );
}

export default App;
