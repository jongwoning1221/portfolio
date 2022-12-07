import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link legacyBehavior href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 14 14">
                                <path d="m 4.3946066,12.634694 c -1.99259,-1.00313 -3.22525,-2.86791 -3.38015,-5.11351 -0.20144002,-2.92049 1.72152,-5.618 4.54186,-6.37129 0.8042,-0.21479001 2.27152,-0.19171001 3.04247,0.0478 2.3380604,0.72654 3.9247104,2.55065 4.3296504,4.97763 0.26409,1.58283 -0.21677,3.46222 -1.2104,4.73068 -0.55263,0.70549 -0.63357,0.70179 -0.63357,-0.029 0,-0.67475 -0.20819,-2.39022 -0.36155,-2.97918 -0.25566,-0.98182 -0.52182,-1.57054 -1.5596404,-3.44983 -0.58318,-1.05604 -1.04371,-1.63767 -1.29667,-1.63767 -0.377,0 -0.58997,0.53782 -0.74664,1.8855 -0.0574,0.49332 -0.14429,0.97172 -0.1932,1.0631 -0.0489,0.0914 -0.32153,0.28066 -0.60584,0.42062 -0.61906,0.30476 -0.78128,0.29381 -1.69249,-0.11426 -0.81994,-0.36719 -1.33567,-0.44972 -1.55724,-0.24921 -0.3524,0.31892 -0.13544,1.05728 0.6117,2.08175 1.0758,1.47513 1.49938,2.71814 1.45591,4.27243 l -0.0231,0.82735 -0.72106,-0.363 z"/>
                            </svg>
                            <span className="ml-3 text-xl">김종원 포트폴리오</span>
                        </a>
                    </Link>
                    
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    
                        <Link legacyBehavior href="/about-me">
                            <a className="mr-5 hover:text-gray-900">&lt;About me /&gt;</a>
                        </Link >
                        <Link legacyBehavior href="/skills">
                            <a className="mr-5 hover:text-gray-900">&lt;Skills /&gt;</a>
                        </Link >
                        <Link legacyBehavior href="/projects">
                            <a className="mr-5 hover:text-gray-900">&lt;Projects /&gt;</a>
                        </Link >

                    
                        <a href="https://open.kakao.com/o/s3ngqkOe" className="mr-5 hover:text-gray-900">&lt;Contact /&gt;</a>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    );
}
