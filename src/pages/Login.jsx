import React from 'react'

const Login = (props) => {
    console.log(props.props)
  return (
       
      <div className='bg-black '>
         <img src="nandhu.jpg" 
        className=' hover:scale-110 w-40 h-40 rounded-full float-right p-5' />
     <h1 className=' pb-5 pt-9 text-white text-5xl font-bold pl-5'>Hi, I'm Nandhini </h1>
   
      <div>
        
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-400 text-2xl pl-5 pt-5'>Front-End-Developer|Java Programmer|Web Developer|Biomedical Tech Explorer
        </p>
  
        <p className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-400 italic pt-5 pl-5'>Living with strength, kindness and a smile every day.</p>
  <div className='flex flex-row pt-5 pl-5 gap-5'>
       <img src=" https://creazilla-store.fra1.digitaloceanspaces.com/icons/3236812/github-icon-md.png" 
       className='w-10 h-10 hover:scale-115 transition-transform duration-600
  '
       />
       <img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default"
        className='w-11 h-11 rounded-full hover:scale-115 transition-transform duration-600'
       />
       <img src="https://cdn.discordapp.com/avatars/732172271753494599/785d77bcb131e0ed3755ed1c659e5ab5.png?size=256" 
       className=' w-10 h-10 rounded-full hover:scale-150 transition-transform duration-900' />
    </div>
    <div className='w-screen h-full'>
      <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-30% font-bold text-3xl'>About Me</h3>
      <p className='text-gray-500 pt-4'>I'm a Biomedical Engineering Student passionate about Front-end Development and Interested in learning Full-stack development.</p> 
    <div className='flex flex-row pt-2 gap-2'> 
     <h5 className='bg-gradient-to-r from-pink-950 to-blue-900 rounded-full px-3  text-black font-bold shadow-md hover:shadow-fuchsia-400 border-violet-950 text-center'>HTML</h5>
    <h5 className='bg-gradient-to-r from-pink-950 to-blue-900 rounded-full px-3  text-black font-bold shadow-md hover:shadow-fuchsia-400 border-violet-950 text-center'>CSS</h5>
     <h5 className='bg-gradient-to-r from-pink-950 to-blue-900 rounded-full  px-2  text-black font-bold shadow-md hover:shadow-fuchsia-400 border-violet-950 text-center'>React js</h5> 
     <h5 className='bg-gradient-to-r from-pink-950 to-blue-900 rounded-full px-3 text-black font-bold shadow-md hover:shadow-fuchsia-400 border-violet-950 text-center'>Java</h5>
   </div>
   <div className='pt-10 pb-5'>
    <h5 className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-yellow-50 text-3xl font-bold'>Projects</h5>
   </div>
   <div className='flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-10'>
    <div className='flex flex-col w-[300px] h-auto bg-gray-900 shadow-xl shadow-gray-700  rounded-xl '>
      <div className='w-full pl-4 pt-4 '>
  
        <img src="data:image/jpeg;base64,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" 
        className='rounded-full w-8'
        />
      </div>
      <div className=' pb-4 font-bold'>
        <h6 className='text-gray-500 pt-4 pl-4 text-left '>Biomedical Waste Management System</h6>
      <p className='text-amber-100 pl-4 pt-4 font-mono font-medium'>A Web Solution to educate and guide proper biomedic waste disposal.</p>
      <div className='pl-4 pt-4 pb-4 flex flex-row'>
        <h4 className='rounded-full w-15 text-center font-medium box-border border-2 bg-amber-300 border-violet-950'>HTML</h4>
        <h4 className='rounded-full bg-amber-300 font-medium w-15 text-center box-border border-2 border-violet-950'>CSS</h4>
      </div>
      </div>
      </div>
       <div className=' shadow-xl shadow-gray-700  bg-gray-900 rounded-xl w-[300px] pr-1 h-auto '>
        <div className='w-full pt-4 pl-4'>
        <img src="https://img.freepik.com/premium-vector/breast-cancer-awareness-ribbon-logo-vector-template_10135-775.jpg?w=2000" 
        className='rounded-full w-11'
        />
        <h4 className='text-gray-700 font-bold pt-4'>Detection of Ovarian Cancer Using Bio-impedance</h4>
        <h6 className='pt-4 text-amber-100 font-mono'>A Clinical study focused on detection ovarian cancer through Bio-impedance.</h6>
         <div className='pt-2 pb-4'>
         <h4  className='w-[50px] bg-amber-300 font-bold text-center rounded-full box-border border-2 border-violet-950'> Java</h4>
        </div>
        </div>
        
    </div>
    
  </div>
  <div className='pt-10 '>
     <h4 className='font-bold text-2xl text-gray-800'>Contact Me</h4>
       <h6 className='text-violet-950 font-extramedium font-sans'>Whatsapp No: 8248656433 </h6>
       </div>
   </div>
    </div>
    </div>
  
  )
}

export default Login
