import NameAnimatedStartComponent from "./nameAnimatedStartComponent";
import FooterStartComponent from "./footerStartComponent";
import classes from "./start.module.css"
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});


function StartPage () {
    return (
        <div className={classes.startPage}>
            <NameAnimatedStartComponent></NameAnimatedStartComponent>
            
            <AnimatedCursor
            innerSize={10}
            outerSize={12}
            color='21, 71, 11'
            outerAlpha={.5}
            innerScale={0.4}
            outerScale={3}
            trailingSpeed={8}
            />
          
           
        </div>
        
        )
}

export default StartPage;