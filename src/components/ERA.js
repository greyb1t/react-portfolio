import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import ShowcaseImage1 from './../resources/era/era_1.png'
import ShowcaseImage2 from './../resources/era/era_2.png'
import ShowcaseImage3 from './../resources/era/era_3.png'
import ShowcaseImage4 from './../resources/era/era_4.png'
import ShowcaseImage5 from './../resources/era/era_5.png'
import EditorMainVideo from './../resources/era/editormain.mp4'
import AnimationMachineVideo from './../resources/era/animation_machine.mp4'
import BloomVideo from './../resources/era/bloom.mp4'
import TonemappingVideo from './../resources/era/tonemapping.mp4'
import DecalsVideo from './../resources/era/decals.mp4'
import DecalsExampleImage from './../resources/era/decalsusage.png'
import SSAOVideo from './../resources/era/ssao.mp4'
import SSAOImage from './../resources/era/ssao.png'
import InEngineCubemapVideo from './../resources/era/inengine_cubemap.mp4'
import RenderSortKeyImage from './../resources/era/rendersortkey2.png'
import PerformanceVideo from './../resources/era/performance.mp4'

function ERA() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="ERA" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/Dwb5Bmio3xA" />

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

            <MakeTitleMedium text="EDITOR" />

            <LeftContentRightText1 video={EditorMainVideo}>
                <p>I wrote an editor for this project and the following ones that I am very proud of considering the small amount of time spent doing it, <MakeInternalLink to="/editor">you can read more about it here.</MakeInternalLink></p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="ANIMATION" />

            <LeftContentRightText1 video={AnimationMachineVideo}>
                <b>Further building upon the animation system with some notable changes and improvements.</b>
                <ul className='list-disc list-outside'>
                    <li>Layered animations with each layers supporting a different type of animations.</li>
                    <ul className='list-disc list-inside'>
                        <li>Additive animations</li>
                        <li>Override animations</li>
                        <li>Skeleton mask to mask what joins are affected by a specific layer.</li>
                    </ul>
                    <li>1 dimensional blend tree’s for blending between multiple animations within same state.</li>
                    <li>Parallelized animations calulations</li>
                    <li>Culling the animations that are never rendered by any camera.</li>
                    <li>Optimizing the animations by baking the clips together with the required model.</li>
                </ul>
                <br />
                <p>A whole <MakeInternalLink to="/animation-state-editor">Animation State Machine Editor for this system that you can read more about here</MakeInternalLink>.</p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="RENDERING" />

            <LeftContentRightText1 video={BloomVideo}>
                <MakeTitleSmaller text="BLOOM" />
                <p>I implemented a very nice bloom effect which was presented by Sledgehammer at SIGGRAPH 2014.</p>
                <p>A short explanation of how it works:</p>
                <ul className='list-decimal list-outside'>
                    <li>Prefilter the scene render texture to create a texture that go above a certain threshold.</li>
                    <li>Create a mipmap chain by downsampling the prefiltered texture using a box filter until reached the target mip level (adjustable depending on how much bloom spread).</li>
                    <li>Now go from the highest mip level and upsample it using a tent filter and adding the previous upsample result additively onto the current one.</li>
                    <li>The final result will be amazing!</li>
                </ul>
            </LeftContentRightText1>

            <LeftContentRightText1 video={TonemappingVideo}>
                <MakeTitleSmaller text="TONEMAPPING" />
                <p>We support HDR rendering, therefore we need tonemapping to convert the colors from HDR to LDR before displaying it on the monitor.</p>
                <p>I chose ACES which is the same tonemapping Unreal Engine uses which makes very bright parts almost white, which goes very well together with the bloom and really give the sense of brightness.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={DecalsVideo}>
                <MakeTitleSmaller text="DEFERRED DECALS" />
                <p>I added deferred decals with support for optional albedo, material and normal textures to make the level designers be able to make the work feel more full.</p>
                <p>In image below, the white bounding boxes are all decals to make this part of the work feel “fuller”.</p>
                <img src={DecalsExampleImage} />
            </LeftContentRightText1>

            <LeftContentRightText1 video={SSAOVideo}>
                <MakeTitleSmaller text="SCREEN SPACE AMBIENT OCCLUSION" />
                <p>Everything looked flat without ssao, it was a cheap and good method to use to get more depth in the scene.</p>
                <img src={SSAOImage} />
            </LeftContentRightText1>

            <LeftContentRightText1 video={InEngineCubemapVideo}>
                <MakeTitleSmaller text="CAPTURE IN-ENGINE CUBEMAP" />
                <p>I added the ability for us to capture and generate a mip map blurred cubemap of the environment from within the engine.</p>
                <p>This is the start building blocks to in the future support Reflection Captures like Unreal Engine does.</p>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="RENDERING PERFORMANCE OPTIMIZATIONS" />

            <LeftContentRightText1 image={RenderSortKeyImage}>
                <b>Light Volumes</b>
                <p>Rendering was taking a huge part of the frametime budget. After profiling I found out that spotlight and point lights were taking the biggest part of the performance budget.</p>
                <p>The solution that gave a massive improvement was light volumes instead of the previous way which was fullscreen quads causing us to be extremely fillrate bottlenecked.</p>
                <br />
                <b>Draw call sorting</b>
                <p>Another part that give good performance savings was sorting the render calls to minimize state changes.</p>
                <p>That was done using a nice method I found <MakeLink to="https://realtimecollisiondetection.net/blog/?p=86">here</MakeLink> which simply creates a integer key that can be used to sort an array of these commands very quickly.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={PerformanceVideo}>
                <MakeTitleSmaller text="THE PERFORMANCE RESULT" />
                <p>The above optimizations along with a couple of others, we were able to never go below 60 FPS on our computers. In the left video, we have a total of about 160 point lights and 100 spot lights with all spotlights being shadow casters. The shadow resolution on all shadow casting lights being 1024×1024.</p>
            </LeftContentRightText1>
        </div>
    );
}

export default ERA;