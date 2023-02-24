import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import EditorMainVideo from './../resources/editor/editormain2.mp4'
import CreateNewSceneVideo from './../resources/editor/createnewscene.mkv'
import AssetBrowserVideo from './../resources/editor/assetbrowser.mp4'
import MultiAssetBrowserImage from './../resources/editor/multiassetbrowser.png'
import InspectorVideo from './../resources/editor/inspector2.mp4'
import MaterialEditorImage from './../resources/editor/materialeditor.png'
import CurveEditorVideo from './../resources/editor/curveeditor.mp4'
import PlayEditModeVideo from './../resources/editor/playeditmode.mp4'
import SceneHierarchyVideo from './../resources/editor/scenehierarchy.mp4'
import SceneHierarchy2Video from './../resources/editor/scenehierarchy2.mp4'
import PrefabsAutoUpdateVideo from './../resources/editor/prefabsautoupdateoverride.mkv'
import ExposeReflectImage from './../resources/editor/exposereflect.png'
import VisualScriptVideo from './../resources/editor/visualscript.mkv'
import AnimationEditorImage from './../resources/editor/anim_editor_logo1.png'

function Editor() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="EDITOR" />
            <div className='max-w-md mx-auto pb-8'>
                <p className='pt-10'>This is an in-engine scene editor that I’d like to showcase that I am quite proud of. I have been very inspired of the editor from Unity and its workflow. This was my attempt at replicating it.</p>
                <p>Please note that most stuff below is minimum viable product and has not been polished.</p>
            </div>

            <MakeVideo video={EditorMainVideo} />

            <Divider />

            <LeftContentRightText1 video={CreateNewSceneVideo}>
                <MakeTitleSmaller text="BASIC SCENE HANDLING" />
                <p>The follow is simply the basic stuff all editors are expected to have.</p>
                <ul className='list-disc list-inside'>
                    <li>Create new scenes</li>
                    <li>Open scenes</li>
                    <li>Save scenes</li>
                    <li>Recent scenes</li>
                    <li>Fun random welcoming message each startup (and memes 🙂)</li>
                </ul>
            </LeftContentRightText1>

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-2/3'>
                    <MakeVideo video={AssetBrowserVideo} />
                    <img src={MultiAssetBrowserImage} />
                </div>
                <div className='lg:basis-1/3'>
                    <MakeTitleSmaller text="ASSET BROWSER" />
                    <p>A quite polished asset browser that supports the following:</p>
                    <ul className='list-disc list-inside'>
                        <li>Searching files explicitly</li>
                        <li>Searching files implicitly by pressing a key to select the file in current directory</li>
                        <li>Drag and drop files into inspector and where ever else.</li>
                        <li>Create new materials, shaders, curves, scripts</li>
                        <li>Saves previous directory after editor restart</li>
                        <li>Multiple asset browsers at the same time to maximum efficiency</li>
                    </ul>
                    <br />
                    <p>Something I later on realized was that it took a lot of performance due to iterating the directory each frame which was solved by caching the results and only updating it once I received a notification that something changed from Windows.</p>
                </div>
            </div>

            <LeftContentRightText1 video={InspectorVideo}>
                <MakeTitleSmaller text="INSPECTOR" />
                <p>Must alike Unity’s Inspector which allows for adding and removing components. Modifying exposed values and using it like a debug tool to live see the values of variables.</p>
                <p>A programmer can expose component variables using the reflection system.</p>
                <MakeInternalLink to="/reflection-system">Read more about reflection system here.</MakeInternalLink>
            </LeftContentRightText1>

            <LeftContentRightTextHalf image={MaterialEditorImage}>
                <MakeTitleSmaller text="MATERIAL EDITOR" />
                <p>Its not fun to poke around in JSON, therefore a way to edit materials were in order. We are able to add shaders and its render states with support add multiple passes.</p>
                <p>To interact with the shaders we can also create variables.</p>
                <MakeTitleSmaller text="CURVE EDITOR" />
                <p>This was initially written very early on my own time (because of curiousity) during Project 3 and has later on been ported over to the editor because it is very usable for animations, particles and much more.</p>
                <p>As with most stuff its very inspired by Unity’s Animation Curve.</p>
                <MakeVideo video={CurveEditorVideo} />
            </LeftContentRightTextHalf>

            <LeftContentRightText1 video={PlayEditModeVideo}>
                <MakeTitleSmaller text="CLONE-BASED PLAY/EDIT MODE" />
                <p>Internally there are one scene within the editor which is static and unchanged.</p>
                <p>When entering playmode, the static scene is cloned from memory to create the runtime scene which is live.</p>
                <p>Changes made to the runtime scene while in playmode, will not affect the static scene.</p>
                <p>An easier way to do this would be to simply load the scene from disk again, but that is not performant enough for me.</p>
            </LeftContentRightText1>

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-2/3'>
                    <div className='flex flex-row'>
                        <div className='basis-1/2'>
                            <MakeVideo video={SceneHierarchyVideo} />
                        </div>
                        <div className='basis-1/2'>
                            <MakeVideo video={SceneHierarchy2Video} />
                        </div>
                    </div>
                </div>
                <div className='lg:basis-1/3'>
                    <MakeTitleSmaller text="SCENE HIERARCHY" />
                    <ul className='list-disc list-inside'>
                        <li>Create, delete new gameobjects</li>
                        <li>Copy & Paste gameobjects</li>
                        <li>Multi selection using Ctrl or Shift</li>
                        <li>Dragging and dropping to order around and change child/parent relationship.</li>
                    </ul>
                </div>
            </div>

            <Divider />

            <MakeTitleMedium text="GAMEOBJECT PREFABS" />

            <p>The goal was to replicate the prefabs from Unity that automatically updates all other instances of that same prefab in all other scenes with support to override default prefab values per instance.</p>

            <p>This was a difficult task using our reflection system because even though the reflection system is powerful, it was not that powerful to easily implement such a feature.</p>

            <p>It also support instantiating prefab gameobject in runtime from code.</p>

            <ul className='list-disc list-inside'>
                <li>Automatically updates instances of this prefab in all scenes</li>
                <li>Can modify values in each prefab instance to override the default prefab value</li>
                <li>Any changes to the prefab will be mirrored for the prefab instances unless that specific property had been overriden</li>
                <li>Runtime instantiation of prefabs</li>
                <li>Full syncing of gameobject hierarchy, components and properties</li>
                <li>Ability visualize what values/components has been overriden in a specific prefab instance</li>
            </ul>

            <MakeVideo video={PrefabsAutoUpdateVideo} />

            <LeftContentRightTextHalf image={ExposeReflectImage}>
                <MakeTitleSmaller text="SERIALIZATION/DESERIALIZATION" />
                <p>The serialization and deserialization is based upon our reflection system which you can <MakeInternalLink to='/reflection-system'>read more about here.</MakeInternalLink></p>
                <p>In short, any variables that programmer expose and automatically serialized and deserialized. As well as exposed in the inspector, and visual script nodes automatically generated for it.</p>
                <p>The only line of code a programmer has to write to expose a variable is the following.</p>
            </LeftContentRightTextHalf>

            <LeftContentRightText1 video={VisualScriptVideo}>
                <MakeTitleSmaller text="VISUAL SCRIPT" />
                <p>We were given a visual scripting system by our teacher that we have continued to improve upon. It has been integrated into the editor and engine and work seemlessly together.</p>
                <p>As well as editing the live instance to see changes live in runtime while in play mode.</p>
            </LeftContentRightText1>

            <LeftContentRightText1 image={AnimationEditorImage}>
                <MakeTitleSmaller text="ANIMATION STATE MACHINE EDITOR" />
                <p>I have also written an animation machine editor that you can <MakeInternalLink to='/animation-state-editor'>read more about here.</MakeInternalLink></p>
            </LeftContentRightText1>
        </div>
    );
}

export default Editor;