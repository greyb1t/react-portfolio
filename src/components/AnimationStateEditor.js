import { Divider, YoutubeVideo, ImageSlideshow, MakeLink, LeftContentRightText1, LeftContentRightTextHalf, MakeTitle, MakeTitleMedium, MakeTitleSmaller, MakeVideo, MakeInternalLink } from './Utils'
import AnimationStateMachineEditorImage from './../resources/animationstateeditor/animationmachineeditor.mp4'
import NewStateVideo from './../resources/animationstateeditor/New_State.mp4'
import StatePropertiesImage from './../resources/animationstateeditor/state_properties.png'
import TransitionPropertiesImage from './../resources/animationstateeditor/transition_properties.png'
import AnimationMachineVideo2 from './../resources/animationstateeditor/animation_machine.mp4'
import BlendTreeImage from './../resources/animationstateeditor/blendtree.png'
import BlendSpace2DVideo from './../resources/animationstateeditor/2dblendspace2.mp4'
import SkeletonMaskImage from './../resources/animationstateeditor/skeletonmask.png'

function AnimationStateEditor() {
    return (
        <div className='md:max-w-6xl md:mx-auto text-left px-10'>
            <div className='pt-10' />
            <MakeTitle text="ANIMATION STATE MACHINE EDITOR" />
            <div className='max-w-md mx-auto pb-8'>
                <p className='pt-10'>A visual animation state machine editor and debugger. Please note that the following result is a minimum viable product and has not been polished.</p>
            </div>
            <MakeVideo video={AnimationStateMachineEditorImage} />

            <Divider />

            <LeftContentRightText1 video={NewStateVideo}>
                <MakeTitleSmaller text="CREATING STATES & TRANSITIONS" />
                <p>Creating a state is as easy as right clicking anywhere and pressing “New State” and making a transition to another state can simply be done by dragging from its output source into the target states input source.</p>
            </LeftContentRightText1>

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-2/3'>
                    <div className='flex flex-row'>
                        <div className='basis-1/2'>
                            <img className='p-2 mx-auto' src={StatePropertiesImage} />
                        </div>
                        <div className='basis-1/2'>
                            <img className='p-2 mx-auto' src={TransitionPropertiesImage} />
                        </div>
                    </div>
                </div>
                <div className='lg:basis-1/3'>
                    <MakeTitleSmaller text="STATE & TRANSITION PROPERTIES" />
                    <p>States and transitions has a bunch of properties to modify its behaviour to suit the needs of the state machine creator.</p>
                    <ul className='list-disc list-inside'>
                        <li>A state can be an animation or a blend tree</li>
                        <li>It has events it can dispatch which can have callbacks within the code</li>
                        <li>Looping and timescale</li>
                        <li>If root motion is enabled for that state or not</li>
                        <li>Cross fade transition properties and conditions for a specific transition to be taken</li>
                    </ul>
                </div>
            </div>

            <Divider />

            <MakeTitleMedium text="DEBUGGING THE MACHINE & LIVE EDITING" />

            <div className='max-w-md mx-auto pb-8'>
                <p className='pt-10'>Being as visual editor, it was very easy to add debugging capabilities such as:</p>
                <ul className='list-disc list-inside'>
                    <li>Visualizing transitions between states</li>
                    <li>Seeing current state progress</li>
                    <li>Seeing and modifying live parameters values</li>
                </ul>
                <p className='pt-10'>This makes it significantly easier to understand what is happending while making a state machine.</p>
            </div>

            <MakeVideo video={AnimationMachineVideo2} />

            <div className='lg:flex lg:flex-row lg:gap-x-6 py-6'>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="1D BLEND TREES" />
                    <p>Adding multiple animations within a state to create a 1D blend tree between these animations based on a float value.</p>
                    <img src={BlendTreeImage} />
                </div>
                <div className='lg:basis-1/2'>
                    <MakeTitleSmaller text="2D BLEND TREES" />
                    <p>Blend between multiple animations in a 2D space.</p>
                    <MakeVideo video={BlendSpace2DVideo} />
                    <MakeTitleSmaller text="SKELETON MASK" />
                    <p>Ability to add a skeleton mask to determine what joins a specific layer should affect.</p>
                    <img src={SkeletonMaskImage} />
                </div>
            </div>
        </div>
    );
}

export default AnimationStateEditor;