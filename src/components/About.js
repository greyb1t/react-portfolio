import CV from './../resources/CV-TGA.pdf'
import { Divider, MakeLink } from './Utils'
import ProfilePicture from './../resources/images/filip-scaled.jpg'

function About() {
    return (
        <div className='md:flex md:flex-row md:gap-x-20 md:max-w-6xl md:mx-auto mx-10 p-10'>
            <div className='md:basis-1/2'>
                <div className='my-10'>
                    <h1 className='text-left text-3xl font-bold'>
                        ABOUT ME
                    </h1>
                </div>
                <div className='my-10 text-left leading-7'>
                    <p className='pb-8'>
                        Hello! I am Filip Tynell who is currently working at Sharkmob as a Tools Engineer in Malmö.
                    </p>
                    <p className='pb-8'>
                        I started learning programming at age 17 and have had some successful software that has been popular within a smaller community, I have even been able to monetize some of them.
                    </p>
                    <p>
                        I am very curious and I enjoy challenging myself which is why I have tried and worked on all parts of game development programming-wise during a total of 8 game projects. I like all parts of making games, but I specifically love tools, engine and gameplay.
                    </p>
                </div>

                <Divider />

                <div className='my-10 text-left'>
                    <h4 className='font-bold pb-8'>
                        NOTABLE SKILLS
                    </h4>
                    <p className='pb-8'>
                        <strong>C++</strong> is my primary programming language with 7 years’ experience.
                    </p>
                    <p className='pb-8'>
                        <strong>C#</strong> is my secondary language with 3 years’ experience.
                    </p>
                    <p className='pb-8'>
                        I also have good experience using <strong>DirectX 11, Unity, Win32 API, Unreal Engine</strong>
                    </p>
                    <p className='pb-8'>
                        Worked with the following source controls <strong>Github, SVN and Perforce.</strong>
                    </p>
                </div>
                <div className='text-left my-10'>
                    <h2 className='text-left text-2xl pb-6'>
                        <b>Contact</b>
                    </h2>
                    <p>
                        <MakeLink to={CV}>Resumé</MakeLink>
                    </p>
                    <p>
                        filiptynell(at)hotmail.com
                    </p>
                    <p>
                        <MakeLink to='https://www.linkedin.com/in/filip-tynell/'>LinkedIn</MakeLink>
                    </p>
                </div>
            </div>
            <div className='md:basis-1/2'>
                <img className='' src={ProfilePicture} />
            </div>
        </div>
    );
}

export default About;