import CV from './../resources/CV_FilipTynell.pdf'
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
                        Hello! I am Filip Tynell, I am currently working at Sharkmob as a Tools Engineer in Malmö.
                    </p>
                    <p className='pb-8'>
                        Started learning programming at the age of 17 and have since developed software that has been well-received within niche communities. Some of these projects have also provided opportunities for modest monetization.
                    </p>
                    <p>
                        I am naturally curious and enjoy challenging myself, which has led me to explore many aspects of game development from a programming perspective across eight different projects. I am particularly passionate about tools and engine development.
                    </p>
                </div>

                <Divider />

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