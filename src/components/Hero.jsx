import {logo} from  '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'> 
        <img src={logo} alt="sumz_zero" className="w-28 object-contain"/>
        <button
        type="button" 
        onClick={() => window.open('https://github.com/HarshitAditya27/Your-Abstractor')} 
        className="black_btn"        
        >
            GitHub
        </button>
        </nav>  
        <h1 className='head_text'>Abstract any website using <br
        className="max-md:hidden"/>
        <span className="custom_gradient">OpenAI GPT-4 </span>
        </h1>
        <h2 className='desc'>
        Your Abstractor summarizes a website within seconds. It uses <b>GPT-4</b> to provide an abstract of an website. This can be useful in writing reports, assignments, research papers, etc.
        </h2>
    </header>
  )
}

export default Hero