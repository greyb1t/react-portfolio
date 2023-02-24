import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import ShowcaseImage1 from './../resources/akuma/Akuma_Screenshot1.jpg'
import ShowcaseImage2 from './../resources/akuma/Akuma_Screenshot2.jpg'
import ShowcaseImage3 from './../resources/akuma/Akuma_Screenshot3.jpg'
import ShowcaseImage4 from './../resources/akuma/Akuma_Screenshot4.jpg'
import ShowcaseImage5 from './../resources/akuma/Akuma_Screenshot5.jpg'
import LightingVideo from './../resources/akuma/lighting.mp4'
import ActivatedPlatformVideo from './../resources/akuma/activatedplatform.mp4'
import SpringPlatformVideo from './../resources/akuma/springplatform.mp4'
import EnemyUmbrellaVideo from './../resources/akuma/enemyumbrella.mp4'
import EnemyCrawlerVideo from './../resources/akuma/enemycrawler.mp4'
import TileCollidersVideo from './../resources/akuma/tilecolliders.mp4'
import OnewayPlatformVideo from './../resources/akuma/oneplayform.mp4'

function Akuma() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="AKUMA" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/Lzz90_WjMrM" />

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

            <MakeTitleMedium text="LIGHTING" />

            <LeftContentRightText1 video={LightingVideo}>
                <MakeTitleSmaller text="2D REALTIME LIGHTING" />
                <p>I wanted to challenge myself with something more difficult and decided to implement dynamic tilemap lighting.</p>
                <MakeInternalLink to="/visibility-lighting">Read more..</MakeInternalLink>
            </LeftContentRightText1>

            <Divider />

            <MakeTitleMedium text="GAMEPLAY" />

            <div className='max-w-md mx-auto pb-8'>
                <p className='pt-10'>During development on Akuma, I really wanted to take on gameplay due to it being very fun in a platformer.</p>
                <p className='pt-10'>Along with other group members I worked on much of the environment gameplay including most of the platforms that player can interact with. The enemies and obstacles the player can find.</p>
            </div>

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="ACTIVATED PLATFORM" />
                    <p>When player jumps or collides with it, it activates and starts moving on its chain with exponentially increasing speed. Jumping off of this platform also gives the player momentum sideways or upwards depending on the platform.</p>
                    <p>The camera also shakes to give it the illusion of speed and strength.</p>
                    <MakeVideo video={ActivatedPlatformVideo} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="SPRING PLATFORM" />
                    <p>Jumping or interacting with the spring platform gives the player a big jump boost upwards.</p>
                    <MakeVideo video={SpringPlatformVideo} />
                </div>
            </div>

            <LeftContentRightTextHalf video={OnewayPlatformVideo}>
                <MakeTitleSmaller text="ONE-WAY PLATFORM" />
                <p>A platform that is the classic one way meaning we can go through it from the bottom, but not the top.</p>
            </LeftContentRightTextHalf>


            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="JUMPING UMBRELLA ENEMY" />
                    <p>The umbrella enemy interacts with the player by walking towards it and tries to mimic the player at the same time by jumping at the same time as the player does.</p>
                    <p>This results in a fun enemy that is easily outplayed when you understand how it works.</p>
                    <MakeVideo video={EnemyUmbrellaVideo} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="PLATFORM CRAWLER ENEMY" />
                    <p>The platform crawler does not interact with the player and is only going in a set amount of speed on the platforms. A basic obstacle-like enemy.</p>
                    <MakeVideo video={EnemyCrawlerVideo} />
                </div>
            </div>

            <LeftContentRightTextHalf video={TileCollidersVideo}>
                <MakeTitleSmaller text="TILEMAP COLLISION" />
                <p>Tile collision is made by using tile locators which are multiple points making up a shape. We can easily add multiple locators anywhere to use to example figure out if we are near a wall, or being crushed by a platform.</p>
                <MakeTitleSmaller text="MOVABLE PLATFORM COLLISION" />
                <p>I also worked on making the tilemap collision work for movable platforms and its interactions with the player.</p>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default Akuma;