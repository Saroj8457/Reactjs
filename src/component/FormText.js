import React,{useState} from 'react'

export default function FormText(props) {
   
    const handleUpClick = () =>{
       let a = text.toUpperCase();
       setText(a);
    }
    const handelOnChange = (event) =>{
        setText(event.target.value)

    }
    const handledownClick = () =>{
        let a = text.toLowerCase();
        setText(a);
     }
     const handleclrClick = () =>{
        let b = '';
        setText(b);
     }
    
  const [text,setText] = useState('');
  return (
    <>    <div>
    <h2 className='text-info'>{props.heading}</h2>
    <div className="form-group">
    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */} 
    <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="8"  onChange={handelOnChange} placeholder="Type Here"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase Here</button>
  <button className='btn btn-primary mx-2' onClick={handledownClick} >Convert to LowerCase Here</button>
  <button className='btn btn-primary' onClick={handleclrClick} >Clear text Here</button>
</div>
<div className='container bg-dark text-white my-5'>
    <h1 style={{color:'pink'}}>YOUR TEXT SUMMARY</h1>
    <b>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} Characters including space</b>
</div>
</>

  )
}
