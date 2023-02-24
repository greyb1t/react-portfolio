import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import ShowcaseImage1 from './../resources/abarkinthedark/A-Bark-in-the-Dark-Screenshot01.png'
import ShowcaseImage2 from './../resources/abarkinthedark/A-Bark-in-the-Dark-Screenshot02.png'
import ShowcaseImage3 from './../resources/abarkinthedark/A-Bark-in-the-Dark-Screenshot03.png'
import ShowcaseImage4 from './../resources/abarkinthedark/A-Bark-in-the-Dark-Screenshot04.png'
import ShowcaseImage5 from './../resources/abarkinthedark/A-Bark-in-the-Dark-Screenshot05.png'
import LightingVideo from './../resources/akuma/lighting.mp4'
import ActivatedPlatformVideo from './../resources/akuma/activatedplatform.mp4'
import SpringPlatformVideo from './../resources/akuma/springplatform.mp4'
import EnemyUmbrellaVideo from './../resources/akuma/enemyumbrella.mp4'
import EnemyCrawlerVideo from './../resources/akuma/enemycrawler.mp4'
import TileCollidersVideo from './../resources/akuma/tilecolliders.mp4'
import OnewayPlatformVideo from './../resources/akuma/oneplayform.mp4'
import OptimizedRenderingVideo from './../resources/abarkinthedark/optimizedrendering.mp4'
import TileProjectileCollisionVideo from './../resources/abarkinthedark/tileprojectilecollision.mp4'
import WorldImage from './../resources/abarkinthedark/world.png'
import LdtkParserImage from './../resources/abarkinthedark/ldtkparser.png'
import EntityParsersImage from './../resources/abarkinthedark/entityparsers.png'
import PlayerJumpVideo from './../resources/abarkinthedark/playerjump.mp4'

function ABarkInTheDark() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="A BARK IN THE DARK" />
            <div className='pt-10' />
            <YoutubeVideo link="https://www.youtube.com/embed/zRUKvAZge1E" />

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

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="OPTIMIZED TILE RENDERING" />
                    <p>Due to having large worlds, we needed to optimize the tile rendering a lot. We are only rendering the tiles within the camera view.</p>
                    <MakeVideo video={OptimizedRenderingVideo} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="PROJECTILE TILE COLLISION" />
                    <p>Projectile tile collisions was a tricky problem to get right because a tiles would have different rules depending on where players stands and what direction when throwing/shooting an object.</p>
                    <MakeVideo video={TileProjectileCollisionVideo} />
                </div>
            </div>

            <Divider />

            <MakeTitleMedium text="WORLD" />

            <p>Doors and transitions</p>
            <p>The world in a grid layout giving us extremely good performance when finding tiles from world positions.</p>

            <img src={WorldImage} />

            <Divider />

            <MakeTitleMedium text="LDTK PARSING" />

            <LeftContentRightTextHalf image={LdtkParserImage}>
                <p>A almost fully features LDTK tilemap parser with parallelized parsing built like a library with no dependencies on the game itself.</p>
                <p>The world simply contains a const pointer to this world and read the world data.</p>
                <p>I was mainly responsible for loading the tilemap and world from LDTK and to efficiently keep the work minimal for myself. I exposed callbacks to other programmers to easily parse entities themselves.</p>
                <img src={EntityParsersImage} />
            </LeftContentRightTextHalf>


            <LeftContentRightTextHalf video={PlayerJumpVideo}>
                <MakeTitleSmaller text="PLAYER" />
                <p>I also did helped with minor player stuff, such as its interactions with the world, walking slower on stairs, its jump and and falling into void, puzzle rooms and doors.</p>
            </LeftContentRightTextHalf>
        </div>
    );
}

export default ABarkInTheDark;