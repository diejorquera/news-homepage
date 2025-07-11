import { NewArticule } from "./NewArticule";

export const NewContainer = () => {
  return (
    <aside className="bg-veryDarkBlue text-offWhite py-[28px] px-[20px]">
        <h1 className="text-softOrange text-4xl font-bold">New</h1>
        <NewArticule
            title='Hydrogen VS Electric Cars' 
            text='Will hydrogen-fueled cars ever catch up to EVs?'    
        />
        <NewArticule
            title='The Downsides of AI Artistry' 
            text='What are the possible adverse effects of on-demand AI image generation?'        
        />
        <NewArticule
            title='Is VC Funding Drying Up?' 
            text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'        
        />
    </aside>
  )
}
