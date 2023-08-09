import { useEffect, useState } from "react";
import Field from './components/dropdown/Field';
import './App.css';


// const data=[
//   {
//     label: "None",
//     states: [],
//   },
//   {
//     label: "India",
//     states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
//   },
//   {
//     label: "Japan",
//     states: [{ label: "Tokyo" }, { label: "Osaka" }],
//   },
// ]

function App() {
  const [country, setCountry] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(()=>{
    setdata([
    {
      label: "None",
      states: [],
    },
    {
      label: "India",
      states: [{ label: "Kerala" }, { label: "Tamil nadu" }],
    },
    {
      label: "Japan",
      states: [{ label: "Tokyo" }, { label: "Osaka" }],
    },
  ]);
  },[]);

  useEffect(()=>{
    console.log("Mounting");
    return ()=>{
      console.log("Un mounting")
    };
  },[]);

  return (

    <div className='form'>
      <h1>Location Details</h1>
      <Field label="Choose Country" options={data} chooseCountry={setCountry} />
      {country && country !== 'None' && (
        <Field label='Choose State' options={data.find((item) => item.label === country).states} />)}
      <button className='button'>Submit</button>
    </div>
  );
}

export default App;
