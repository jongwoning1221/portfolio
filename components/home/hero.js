import Animation from "./animation";
import Link from "next/link";
import Image from 'next/image'
import MovingComponent from "react-moving-text";

export default function Hero() {
    return (
        <>
            <div className="flex-grow   flex flex-col  md:text-left  md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 flex items-center text-center">
                <MovingComponent 
                    type="typewriter"
                    dataText={[
                        '안녕하세요!',
                        '김종원 입니다.'
                    ]} 
                />
            </h1>
            <br/>
            <p className="ml-3 mb-8 leading-relaxed flex items-center text-center">저는 풀스택 웹 개발자를 꿈꾸고 있습니다.
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
        </>
    );
}