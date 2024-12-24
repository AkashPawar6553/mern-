import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          
.container{
  border: 1px solid black;
  padding: 15px;
  display: flex;
  gap: 50px;
  width: 100%;
}

.form-container{
  margin: 15px;
  border: 1px solid black;
  width: 50%;
  text-align: center;

}
.table-container{
  margin: 15px;
  border: 1px solid black;
  width: 50%;
  text-align: center;

}


.table-container, .form-container {
  border: 1px solid #ccc;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ff0000;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}

input{
  padding: 11px;
  font-size: 24px;
  margin: 5px;
}

button{
  margin: 10px;
  font-size: 25px;
}



ul{
  display: flex;
  
}
li{
  margin:  15px;
}
        </a>
      </header>
    </div>
  );
}

export default App;
