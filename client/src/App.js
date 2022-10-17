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
    <div className="flex flex-col gap-12 p-12 justify-center items-center">
      <div className='w-100 flex justify-center items-center'><img src='/H2S_Gradient_Logo.png' width='120'/></div>
      <div className='flex flex-col md:flex-row gap-5 lg:w-4/5'>
        <div className='flex flex-col md:w-1/2 p-6 gap-6 bg-white rounded-lg lightShadow justify-center items-center'>
          <h1 className='text-blue-300 text-3xl bg-white '>Generate QR Code</h1>
          <input id="stringInput" className=' p-2 w-10/12 rounded-md bg-back' placeholder='Enter URL Here'/>
          <div className='flex flex-col justify-start w-4/5 gap-6'>
            <div className='flex gap-2 bg-white w-100 justify-start'>
              <input type='color' className=' bg-white'/>
              <label className=' bg-white'>Customise the color</label>
            </div>
            <div className='flex gap-2 bg-white'>
              <input type='color' className=' bg-white'/>
              <label className=' bg-white'>Customise the Background Color</label>
            </div>
          </div>
          <div className='flex w-4/5 bg-white justify-center items-center'>
            <div className='w-1/3'><hr/></div>
            <div>&nbsp; OR &nbsp;</div>
            <div className='w-1/3'><hr/></div>
          </div>
          <div className='flex flex-col justify-start w-4/5 gap-4'>
            <input type='file'/>
          </div>
          <button onClick={generate} className='text-white p-2 rounded-md bg-blue-300 hover:bg-sky-500'>Generate</button>
        </div>
        <div className='flex flex-col md:w-1/2 rounded-lg justify-center items-center bg-indigo-200'>
          <img src='' id='qrCode' width='250'/>
        </div>
      </div>
    </div>
  );
}

export default App;
