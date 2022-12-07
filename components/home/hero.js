import Animation from "./animation";
import Link from "next/link";
import Image from "next/image";
import Back from "../../public/back.png"
import MovingComponent from "react-moving-text";

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                <MovingComponent 
                    type="typewriter"
                    dataText={[
                        '안녕하세요!',
                        '김종원 입니다.'
                    ]} 
                />
            </h1>
            <p className="ml-3 mb-8 leading-relaxed">저는 풀스택 웹 개발자를 꿈꾸고 있습니다.
                <br/>항상 새로운 것을 배울 때 재미를 느낍니다.
                <br/>언제나 새로운 것을 좋아하며, 관심이 가고 즐기게됩니다.
                <br/>오늘에 만족하지 않고 더 나은 내일을 위해 
                <br/>항상 스스로를 개발하는 개발자가 되고 싶습니다.</p>
            <div className="flex justify-center">
                <Link legacyBehavior href="/skills">
                    <a className="btn-skill">&lt;Skills /&gt;</a>
                </Link>
                <Link legacyBehavior href="/projects">
                    <a className="btn-project">&lt;Projects /&gt;</a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image alt="react" className="object-cover object-center w-222 h-192 back m-auto" src={Back}/>
            </div>
        </>
    );
}