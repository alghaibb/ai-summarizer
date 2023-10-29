import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz-logo" className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/alghaibb/ai-summarizer')}
          className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Experience streamlined reading with AI Essence, an open-source tool that condenses lengthy articles into brief and clear overviews
      </h2>
    </header>
  )
}

export default Hero