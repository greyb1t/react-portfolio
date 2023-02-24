import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import LightingVideo from './../resources/visibilitylighting/lighting.mp4'
import LightSpritesImage from './../resources/visibilitylighting/lightsprites.png'
import LightVisiblityMapImage from './../resources/visibilitylighting/light_vis_map.png'
import AllLightSameTextureVideo from './../resources/visibilitylighting/alllightssametexture.mp4'
import LightsBlurredImage from './../resources/visibilitylighting/lightblurred2.png'
import FinalResultImage from './../resources/visibilitylighting/finalresult.png'
import LightDirtyImage from './../resources/visibilitylighting/lightdirty.png'
import LightParallellizationImage from './../resources/visibilitylighting/lightparallelization.png'

function VisiblityLighting() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="2D REALTIME LIGHTING" />

            <MakeVideo video={LightingVideo} />

            <LeftContentRightText1 image={LightSpritesImage}>
                <MakeTitleSmaller text="STEPS" />
                <p>Generating an edge map after loading the tilemap of all static tiles.</p>
                <p>Each light instance culls its own version of the edgemap that only exists inside its own bounding box.</p>
                <p>The intersections used to create the visibility map is created by rayasting to the corners its own culled edgemap.</p>
                <p>Now we use the intersections to build the visiblity shape by sorting them clockwise and creating a custom shape that becomes the actual visiblity map.</p>
                <p>Each light has its own sprite (light sprite)</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={LightVisiblityMapImage}>
                <p>We support max 16 lights at same time, so in the Light Renderer we have 16 render targets for each light to draw its visiblity shape.</p>
                <p>We now loop through all visible lights and draw the light visiblity shape onto that render target.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 video={AllLightSameTextureVideo}>
                <p>Loop all lights again, but now draw the above render targets onto a new render target with a specific shader to mask off the visiblity shape result with the light’s sprite and combine them on a single texture.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={LightsBlurredImage}>
                <p>Next step is to blur the results with a gaussian blur and the follow image shows the result.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={FinalResultImage}>
                <p>Last step is to draw a black sprite onto a new render target that acts as the ambience then using another custom shader, draw the blurred lights onto the render target and the result is finished.</p>
            </LeftContentRightText1>

            <MakeTitleMedium text="OPTIMIZATION" />

            <LeftContentRightText1 image={LightDirtyImage}>
                <p>The first step to optimization was to simply cull the lights that are not visible on camera using their bounding sphere.</p>
                <p>Next very big improvement came from using an isDirty flag and only updating world lights if their position was changed. Meaning all lights in world being static are only calculated once.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={LightParallellizationImage}>
                <p>We can do even better to simply parallelizing the light intersection updates and gain a massive improvement on multi core CPU’s.</p>
            </LeftContentRightText1>
        </div>
    );
}

export default VisiblityLighting;