import React from 'react'
import Typography from './Typography'

const HelpCenter: React.FC = () => {
  return (
    <article className="relative flex flex-col rounded-xl bg-secondary-500 text-white">
      <span
        content="?"
        className="before:border-6 absolute left-1/2 z-20 block size-[48px] -translate-x-1/2 -translate-y-1/2 font-bold text-white before:absolute before:left-1/2 before:block before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-secondary-500 before:outline before:outline-4 before:outline-white before:drop-shadow-xl after:absolute after:left-1/2 after:top-1/2 after:z-10 after:-translate-x-1/2 after:-translate-y-1/2 after:text-3xl after:text-white after:content-['?']"
      >
        <span className="absolute left-1/2 -z-20 mt-1 block size-[calc(100%+5px)] -translate-x-1/2 rounded-full bg-secondary-400 blur-xl drop-shadow"></span>
      </span>

      <div className="relative overflow-hidden p-4">
        <div className="mb-[45px] mt-[71px]">
          <Typography tag="h3" align="center" weight="semibold" type={'@16'}>
            Help Center
          </Typography>
          <Typography tag="body" align="center" weight="medium" type="@12">
            Having Trouble in Learning. Please contact us for more questions.
          </Typography>
        </div>
        <button className="rounded-xl bg-white px-6 py-3 text-secondary-500">
          <Typography weight={'semibolda'} type={'@12'} align={'center'}>
            Go to Help Center
          </Typography>
        </button>
        <span className="absolute -left-[30%] bottom-[70%] block size-[160px] rounded-full bg-white opacity-[.08]"></span>

        <span className="absolute -right-[30%] top-[70%] block size-[160px] rounded-full bg-white opacity-[.08]"></span>
      </div>
    </article>
  )
}

export default HelpCenter
