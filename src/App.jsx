import './App.css'
import { FaRegDotCircle } from "react-icons/fa";

function App() {
  

  return (
    <>
      <div className="bg-gray-500 h-screen w-screen flex justify-center items-center ">
<div className=" bg-white h-[65vh] w-[50vw] rounded-2xl">
 <div className=" flex justify-between p-6 bg-black rounded-2xl">
   <p className='text-left font-bold text-[18px] text-white'>Todo List</p>
  <button className='bg-white text-black font-bold px-4 py-1 rounded-xl'>New +</button>
 </div>
<div className="flex justify-center py-12 px-[70px]">
  <div className="flex flex-wrap w-full gap-4">
     
        <p className='bg-gray-200  w-full p-4 rounded-xl  flex items-center gap-4'><span><FaRegDotCircle /></span> Quiz-01</p>
        
        <p className='bg-gray-200  w-full p-4 rounded-xl  flex items-center gap-4'><span><FaRegDotCircle /></span> Quiz-02</p>

    <p className='bg-gray-200  w-full p-4 rounded-xl  flex items-center gap-4'><span><FaRegDotCircle /></span> Quiz-03</p>
      <p className='bg-gray-200  w-full p-4 rounded-xl  flex items-center gap-4'><span><FaRegDotCircle /></span> Quiz-04</p>
        <p className='bg-gray-200  w-full p-4 rounded-xl flex items-center gap-4'><span><FaRegDotCircle /></span> Quiz-05</p>

  
  </div>

</div>
</div>




      </div>
    </>
  )
}

export default App
