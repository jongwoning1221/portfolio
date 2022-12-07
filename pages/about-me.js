import Layout from "../components/layout";
import Head from "next/head";
import Image from 'next/image'
import Profile from '/public/profile.png'

export default function AboutMe() {
    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center min-h-screen mb-10">
                    <Head>
                        <title>김종원 포트폴리오</title>
                        <meta name="description" content="김종원의 포트폴리오" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <br/><br/><br/>
                    
                    <h1 className="text-4xl font-bold sm:text-6xl">
                        &lt;About me /&gt;
                    </h1>
                    
                    <section className="text-gray-600 body-font">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <p className="mb-8 leading-relaxed text-black dark:text-white">Name : 김종원</p>
                            <p className="mb-8 leading-relaxed text-black dark:text-white">Birth : 1999.12.21</p>
                            <p className="mb-8 leading-relaxed text-black dark:text-white">Phone : 010-7537-9769</p>
                            <p className="mb-8 leading-relaxed text-black dark:text-white">Email : cxz7852@naver.com</p>
                            <p className="mb-8 leading-relaxed text-black dark:text-white">Address : 서울시 송파구</p>
                            
                            </div>
                            <div className="lg:max-w-48 lg:w-48 md:w-48 w-48 mb-8">
                            <Image className="object-cover object-center rounded-lg" alt="profile" src={Profile}></Image>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}