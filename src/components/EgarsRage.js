import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import ShowcaseImage1 from './../resources/egarsrage/Screenshot_EgarsRage-1.png'
import ShowcaseImage2 from './../resources/egarsrage/Screenshot_EgarsRage-2.png'
import ShowcaseImage3 from './../resources/egarsrage/Screenshot_EgarsRage-3.png'
import ShowcaseImage4 from './../resources/egarsrage/Screenshot_EgarsRage-4.png'
import ShowcaseImage5 from './../resources/egarsrage/Screenshot_EgarsRage-5.png'
import AnimationSystemVideo from './../resources/egarsrage/animations.mp4'
import DebugDrawingInterfaceImage from './../resources/egarsrage/debugdrawinginterface3.png'
import DebugDrawingImage from './../resources/egarsrage/debugdrawing.png'
import DebugDrawingExampleVideo from './../resources/egarsrage/debugdrawjesper.mp4'
import ExampleMaterialImage from './../resources/egarsrage/examplematerial.png'
import CustomFormatImage from './../resources/egarsrage/customformatexample2.png'
import RuntimeResourceManagementImage from './../resources/egarsrage/runtimeresourcemanagement.png'
import FilewatcherImage from './../resources/egarsrage/filewatcher.png'
import LoggingImage from './../resources/egarsrage/logging.png'
import FogImage from './../resources/egarsrage/fog.png'
import SmoothShadowsVideo from './../resources/egarsrage/smoothshadows.mp4'

function EgarsRage() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="EGAR’S RAGE" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/4MidE2FY9v4" />

            <div className='pt-10'>
                <ImageSlideshow>
                    <div><img src={ShowcaseImage1} /></div>
                    <div><img src={ShowcaseImage2} /></div>
                    <div><img src={ShowcaseImage3} /></div>
                    <div><img src={ShowcaseImage4} /></div>
                    <div><img src={ShowcaseImage5} /></div>
                </ImageSlideshow>
            </div>

            <MakeTitle text="MAIN RESPONSIBILITIES" />

            <Divider />

            <MakeTitleMedium text="ANIMATION SYSTEM" />

            <LeftContentRightText1 video={AnimationSystemVideo}>
                <p>I wanted to have a very robust animation system that other programmers can use because it saves a lot of time.</p>
                <p>The animation system supports the following:</p>
                <ul className='list-disc list-outside'>
                    <li>State machine driven for transitions</li>
                    <li>Crossfading between animations</li>
                    <li>Triggers & Conditions to transition betwenn states</li>
                    <li>Any state</li>
                    <li>Root motion</li>
                    <li>Frame event callbacks</li>
                    <li>Get joint world positions</li>
                    <li>Data driven using JSON</li>
                </ul>
                <br />
                <p>Being driven through JSON I learned that sitting with big animation state machines in JSON was hard. Therefore, for the next project an animation editor was planned.</p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="DEBUG DRAWING" />

            <LeftContentRightText1 image={DebugDrawingInterfaceImage}>
                <p>We needed a efficient and easy to use debug drawer quickly for the gameplay programmers to quickly start prototyping. It renders everything batched, so no big performance problems caused by it.</p>
                <p>I am also proud to say that every group in our class has requested it and been given this to use for their own projects.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={DebugDrawingImage}>
                <p>Here’s one of the group members <MakeLink to="https://www.jesperjoneros.com/">Jesper Jöneros</MakeLink> using the debug draws to the fullest capability in his specialization. You can find him here: <MakeLink to="https://www.jesperjoneros.com/">https://www.jesperjoneros.com/</MakeLink></p>
                <MakeVideo video={DebugDrawingExampleVideo} />
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="MATERIAL SYSTEM" />

            <LeftContentRightText1 image={ExampleMaterialImage}>
                <p>I needed an easy way to the Tech Artists to be able to create shaders and materials themselves without help from us programmers, therefore I implemented a basic material system.</p>
                <ul className='list-disc list-outside'>
                    <li>Support for multiple passes</li>
                    <li>Each pass can have different renderer (forward/deferred)</li>
                    <li>Assign shaders to each material</li>
                    <li>Can create variables that are automatically exposed to programmers</li>
                    <li>Can bind extra textures</li>
                    <li>Each material instance has its own local shader values.</li>
                </ul>
                <br />
                <p>The left image is a simple example material.</p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="RESOURCE MANAGEMENT" />

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="OFFLINE RESOURCE PIPELINE" />
                    <p>I noticed quickly that loading FBX’es was a slow operation for both animations and models. Loading a navmesh from ASCII was also very slow.</p>
                    <p>The solution was to create my own binary formats and load models, animations and navmesh using them.</p>
                    <p>The very big advantage was that we could process the models and animations offline during this stage to prepare them for the engine to avoid runtime performance penalties. An example is calculating the bounding volume.</p>
                    <p>I learned that the key to high performance binary loading it to structure the format such that when parsing it, you can simply cast the raw memory into the struct or array you want to read. This avoid all copying.</p>
                    <p>Below is cut-down example of reading animation translation keys.</p>
                    <img src={CustomFormatImage} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="RUNTIME RESOURCE MANAGEMENT" />
                    <p>I felt a good resource manager was going to be key to a good engine because:</p>
                    <ul className='list-disc list-outside'>
                        <li>If properly abstracted away, it eases the job for other programmers with a general interface for all resources</li>
                        <li>Being a general solution we can easily multithread all resources loading using jobs</li>
                        <li>Ensures resource are only loaded once and re-used</li>
                        <li>Automatic memory management using reference counting</li>
                        <li>Ability to stream resources</li>
                        <li>Can use file watcher to automatically reload resources in runtime</li>
                    </ul>
                    <br />
                    <img src={RuntimeResourceManagementImage} />
                </div>
            </div>

            <Divider />

            <MakeTitleMedium text="ENGINE" />

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="FILE WATCHING" />
                    <p>Runtime hot reloading of resources was a high priority to save time for me and others in the group. This allowed us to hot-reload shaders, images, JSON files, etc.</p>
                    <img src={FilewatcherImage} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="LOGGING" />
                    <p>In previous projects, logging has always been a mess seeing other programmers logs. A proper logging system was important, and even more when we had multiple threads calling logs as well, therefore it had to be thread safe as well.</p>
                    <img src={LoggingImage} />
                </div>
            </div>

            <Divider />
            <MakeTitleMedium text="RENDERING" />

            <p>The base of the rendering engine was written during the graphics programming course. However, I have added and re-written major parts. Some notable changes include.</p>
            <br />
            <ul className='list-disc list-inside pl-8'>
                <li>Proper window handling and DX11 resource re-creating upon window resolution changes. As well and fullscreen and cursor management</li>
                <li>Perspective and orthographic frustum culling</li>
                <li>MP4 video rendering</li>
                <li>Our own material system</li>
                <li>Fog for both forward and deferred rendering</li>
                <li>Shadow mapping for Directional Light, Pointlights and Spotlights</li>
                <li>Smooth shadows using Percentage-Closer-Filtering</li>
                <li>Forward and deferred rendering live in harmony</li>
                <li>Proper support for transparent meshes</li>
                <li>Screen space sprites with proper window scaling support</li>
                <li>Gamma correction as post process step</li>
            </ul>

            <LeftContentRightTextHalf video={SmoothShadowsVideo}>
                <MakeTitleSmaller text="SPOTLIGHT & DIRECTIONAL LIGHT PCF SMOOTH SHADOWS" />
                <p>Knowing that the Level Designer never used shadow casting on pointlights, I only added smooth shadows for directional light and spotlights using PCF to hide the fact that the shadow texture resolutions are very small on spotlights. The below image shows a smoothed shadow texture that is 128×128.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightTextHalf image={FogImage}>
                <MakeTitleSmaller text="LINEAR FOG" />
                <p>I added fog for both forward and deferred rendering to give the world more atmosphere and remove the empty feeling.</p>
                <p>This can easily be iterating upon to add other types of fog such as exponential fog.</p>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default EgarsRage;