import React from 'react'
import Typography from './Typography'

const HelpCenter: React.FC = () => {
  return (
    <article className="relative flex flex-col bg-secondary-500 rounded-xl text-white ">
      <span
        content="?"
        className="z-20 -translate-y-1/2 absolute left-1/2 -translate-x-1/2  block font-bold after:text-3xl text-white before:block before:drop-shadow-xl before:border-6 before:absolute before:outline-4 before:outline before:outline-white  size-[48px] before:w-full before:h-full before:left-1/2  before:bg-secondary-500 before:rounded-full after:content-['?']  after:absolute  after:z-10 after:text-white after:-translate-x-1/2 before:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2"
      >
        <span className="block size-[calc(100%+5px)] left-1/2 -translate-x-1/2  rounded-full mt-1 drop-shadow absolute -z-20 bg-secondary-400 blur-xl"></span>
      </span>

      <div className="relative p-4 overflow-hidden">
        <div className="mt-[71px] mb-[45px]">
          <Typography tag="h3" align="center" weight="semibold" type={'@16'}>
            Help Center
          </Typography>
          <Typography tag="body" align="center" weight="medium" type="@12">
            Having Trouble in Learning. Please contact us for more questions.
          </Typography>
        </div>
        <button className="py-3 px-6 rounded-xl bg-white text-secondary-500">
          <Typography weight={'semibold'} type={'@12'} align={'center'}>
            Go to Help Center
          </Typography>
        </button>
        <span className="absolute bottom-[70%] -left-[30%] block size-[160px] bg-white rounded-full opacity-[.08]"></span>

        <span className="absolute top-[70%] -right-[30%] block size-[160px] bg-white rounded-full opacity-[.08]"></span>
      </div>
    </article>
  )
}

export default HelpCenter
