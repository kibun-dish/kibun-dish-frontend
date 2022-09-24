import { FC, ReactNode } from "react"
import Head from "next/head"
import Image from "next/image"

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>気分dish</title>
        <meta
          name='description'
          content='気分・状態で料理をオススメするサービス'
        />
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='icon' href='/kibun-dish-logo.png' />
      </Head>

      <header className='bg-blue-500 shadow-lg w-full py-2 top-0 z-100 duration-300 group fixed hover:bg-red-500'>
        <nav className='flex mx-5 items-center justify-between'>
          <h1 className='bg-white rounded-md cursor-pointer flex mt-0 mb-1 px-2 transform text-2xl duration-500 items-center group-hover:(rotate-360 translate-x-20 scale-125) '>
            <div className=''>
              <Image
                src='/kibun-dish-logo.png'
                height={50}
                width={50}
                alt=''
                objectFit='contain'
                className='transform scale-140'
              />
            </div>
            <span className='font-mono ml-3'>気分</span>
            <span className='font-bold'>dish</span>
          </h1>
        </nav>
      </header>
      <main className='bg-gray-100 min-h-100vh'>
        <div className='mx-auto max-w-1150px px-2 pt-100px pb-70px break-words sm:pt-130px'>
          {children}
        </div>
      </main>
    </>
  )
}
