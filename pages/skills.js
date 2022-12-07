import Layout from "../components/layout";
import Head from "next/head";
import Image from 'next/image'
import ReactLogo from '/public/react_icon.png'
import HtmlLogo from '/public/html5_icon.png'
import JavascriptLogo from '/public/javascript_icon.png'
import CssLogo from '/public/css3_icon.png'
import NextjsLogo from '/public/nextjs_icon.png'
import JavaLogo from '/public/java_icon.png'
import PythonLogo from '/public/python_icon.png'
import NodejsLogo from '/public/nodejs_icon.png'

export default function Skills() {
    return (
        <Layout>
            <Head>
                <title>김종원 포트폴리오</title>
                <meta name="description" content="김종원의 포트폴리오" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <br/>
    <br/>
    <br/>
    <h1 className="text-4xl font-bold sm:text-6xl flex items-center justify-center">&lt;Skills /&gt;</h1>
    <br/>
    <br/>
    <br/>
    <div className="flex flex-wrap -m-4 flex items-center justify-center">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block skill_img relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={ReactLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Main Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">React</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-3/4 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;75%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={HtmlLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Main Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">HTML5</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-4/5 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;80%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={JavascriptLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Main Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">Java Script</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-3/5 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;60%</p>
          </div>
        </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={CssLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Main Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">CSS3</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-4/5 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;80%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto " src={NextjsLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Sub Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">Next.js</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-1/2 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;50%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={NodejsLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Sub Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">node.js</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-1/2 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;50%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={JavaLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Sub Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">Java</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-3/5 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;60%</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden flex items-center justify-center">
          <Image alt="react" className="object-cover object-center w-222 h-192 block m-auto" src={PythonLogo}/>
        </a>
        <div className="mt-2 opacity">
          <h3 className="text-gray-500 dark:text-gray-400 text-xs tracking-widest title-font mb-1 flex items-center justify-center">Sub Skill</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium flex items-center justify-center">Python</h2>
          <div className="flex items-center justify-center">
            <div className="w-1/2 h-6 mt-3 relative max-w-xl rounded-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 absolute dark:bg-gray-400"></div>
              <div className="w-3/5 h-full bg-indigo-500 absolute"></div>
            </div>
            <p className="mt-3">&nbsp;60%</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
  </div>
</section>

        </Layout>
    );
}