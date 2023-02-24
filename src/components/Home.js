import ProfilePicture from './../resources/images/filip-scaled-mini.jpg'
import { Divider, MakeInternalLink, MakeLink, MakeTitle, MakeTitleMedium, MakeVideo } from './Utils'
import SpecializationVideo from './../resources/videos/specializationthumbvideo.mkv'
import EditorVideo from './../resources/videos/editormainvideo.mp4'
import AnimationEditorVideo from './../resources/videos/animationmachineeditor.mp4'
import LightingVideo from './../resources/videos/lighting.mp4'
import ReflectExampleImage from './../resources/images/reflectexample.png'
import StarfallThumbnail from './../resources/images/Starfall_Thumbnail.jpg'
import ERAThumbnail from './../resources/images/ERA_Thumbnail.png'
import SilenceTheSunThumbnail from './../resources/images/silence_the_sun_thumbnail.png'
import EgarsRageThumbnail from './../resources/images/EgarsRage_Thumbnail.png'
import AkumaThumbnail from './../resources/images/Akuma_Thumbnail.png'
import GhostCruiserThumbnail from './../resources/images/ghostcruierser_thumbnail.png'
import RunmirThumbnail from './../resources/images/Runmir_Thumbnail.jpg'
import ABarkInTheDarkhumbnail from './../resources/images/BarkInDark_Thumbnail.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <Introduction />
            <Divider />
            <Specialization />
            <Divider />
            <ProudWork />
            <Divider />
            <GameProjects />
            <div className='p-8'></div>
        </div>
    );
}

function Introduction() {
    return (
        <div className="md:flex md:flex-row">
            <div className='basis-1/2 p-16'>
                <img className='max-w-xs mx-auto' src={ProfilePicture}></img>
            </div>
            <div className="basis-1/2 py-16">
                <div className='font-bold text-2xl pb-8'>
                    <h1>Welcome to my portfolio!</h1>
                </div>
                <p className='pb-4'>
                    Hey!
                </p>
                <p className='pb-4'>
                    Below you can find some of the projects I have been a part of and some work I am proud of during my time at The Game Assembly. Thank you for reading!
                </p>
                <MakeLink to="/about">Read more...</MakeLink>
            </div>
        </div>
    );
}

function Specialization() {
    return (
        <div>
            <MakeTitle text="SPECIALIZATION" />
            <div className='pb-12'></div>
            <ShowcaseWindow
                title="RECREATION OF PORTAL & SUPERLIMINAL FEATURES"
                description="I have tried replicating the the portals from Portal 2 and perspective scaling from Superliminal."
                video={SpecializationVideo}
                to="/specialization"
            />
        </div>
    );
}

function ProudWork() {
    return (
        <div className='container mx-auto'>
            <MakeTitle text="PROUD WORK" />
            <div className='lg:flex lg:flex-row lg:gap-x-8'>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseWindow
                        title="EDITOR"
                        description="An editor I have written in preparation for Project 7 after realizing that it would help a lot during Project 6. It was written in a duration of 2 weeks and has then been iterated upon slowly when features were needed. Please note, this is not polished and a minimum viable product."
                        video={EditorVideo}
                        to="/editor"
                    />
                </div>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseWindow
                        title="ANIMATION STATE MACHINE EDITOR"
                        description="To complete the animation system within the engine, I have written an visual animation state machine editor to easily and quickly create fully features animation state machine that can be iterated upon and easily debugged with live visualizations."
                        video={AnimationEditorVideo}
                        to="/animation-state-editor"
                    />
                </div>
            </div>

            <div className='lg:flex lg:flex-row lg:gap-x-8'>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseWindow
                        title="2D REALTIME LIGHTING"
                        description="I wanted to challenge myself early on and in Project 4 I wrote a 2D realtime lighting that is based on a tilemap."
                        video={LightingVideo}
                        to="/visibility-lighting"
                    />
                </div>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseWindow
                        title="REFLECTION SYSTEM"
                        description="Having written the editor, I realized that we needed a very easy to use system to modify components from the editor, serialize and deserialize the components. To solve that I wrote a reflection system based on visitor pattern which turned out very powerful."
                        image={ReflectExampleImage}
                        to="/reflection-system"
                    />
                </div>
            </div>
        </div>
    );
}

function GameProjects() {
    return (
        <div className='container mx-auto'>
            <MakeTitle text="GAME PROJECTS" />
            <div className='lg:flex lg:flex-row lg:gap-x-8 mx-auto'>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={StarfallThumbnail}
                        title="STAR FALL"
                        project="Project 8"
                        engine="Dog Engine"
                        genre="Rogue-like"
                        to="/starfall"
                    />
                </div>
                <div className='basis-1/2'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={ERAThumbnail}
                        title="ERA"
                        project="Project 7"
                        engine="Dog Engine"
                        genre="3rd Person Shooter"
                        to="/era"
                    />
                </div>
            </div>

            <div className='lg:flex lg:flex-row lg:gap-x-8 mx-auto'>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={EgarsRageThumbnail}
                        title="EGAR’S RAGE"
                        project="Project 6"
                        engine="Dog Engine"
                        genre="3rd Topdown RPG"
                        to="/egarsrage"
                    />
                </div>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={AkumaThumbnail}
                        title="AKUMA"
                        project="Project 4"
                        engine="TGA2D"
                        genre="2D Platformer"
                        to="/akuma"
                    />
                </div>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={SilenceTheSunThumbnail}
                        title="SILENCE THE SUN"
                        project="Project 3"
                        engine="TGA2D"
                        genre="2D Shoot ’em up"
                        to="/silence-the-sun"
                    />
                </div>
            </div>

            <div className='lg:flex lg:flex-row lg:gap-x-8 max-w-[75%] mx-auto'>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={GhostCruiserThumbnail}
                        title="GHOST CRUISER"
                        project="Project 1"
                        engine="Unity"
                        genre="3D Racer"
                        to="/ghost-cruiser"
                    />
                </div>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={RunmirThumbnail}
                        title="RUNMIR"
                        project="Project 2"
                        engine="Unity"
                        genre="3D Mobile Puzzle"
                        to="/runmir"
                    />
                </div>
                <div className='basis-1/3'>
                    <div className='pb-12'></div>
                    <ShowcaseGameProject
                        image={ABarkInTheDarkhumbnail}
                        title="A BARK IN THE DARK"
                        project="Project 5"
                        engine="TGA2D"
                        genre="2D Adventure"
                        to="/a-bark-in-the-dark"
                    />
                </div>
            </div>
        </div>
    );
}

function ShowcaseWindow(props) {
    var showcaseElement = null;

    if (props.video) {
        showcaseElement = <MakeVideo video={props.video} />;
    }
    else if (props.image) {
        showcaseElement = <img src={props.image}></img>;
    }

    return (
        <Link to={props.to}>
            <div className='duration-300 hover:scale-105 container mx-auto border border-[#353535] bg-[#141414] shadow-[0_2px_18px_0px_rgba(0,0,0,0.3)]'>
                <div className='text-center p-4'>
                    <MakeTitleMedium text={props.title} />
                </div>
                {showcaseElement}
                <div className='text-center p-4'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function ShowcaseGameProject(props) {
    return (
        <Link to={props.to}>
            <div className='sm:max-w-sm md:max-w-lg container mx-auto bg-[#191919] duration-300 hover:scale-105'>
                <img className='pb-6 w-full' src={props.image} />
                <MakeTitleMedium text={props.title} />
                <p className='text-center text-gray-400 pt-2 pb-4'>
                    {props.project}
                </p>
                <p className='text-center text-[#c9c9c9]'>
                    <strong>Written in: </strong> {props.engine}
                    <br />
                    <strong>Genre: </strong> {props.genre}
                </p>
            </div>
        </Link>
    );
}

export default Home;