import { delay } from "framer-motion"

const scaleUp={
    whileInView:{scale:[0,1]},
    transition:{duration:0.5}
}
const fadeIn={
    whileInView:{opacity:[0,1]},
    transition:{duration:1.5}
}

const fadeInLeft=(i)=>({
    whileInView:{opacity:[0,1],x:[50,0]},
    transition:{duration:0.3,delay:i*0.2}

})
const fadeInRight=(i)=>({
    whileInView:{opacity:[0,1],x:[-50,0]},
    transition:{duration:0.3,delay:i*0.2}
})


const fadeUp=(i)=>({
    whileInView:{opacity:[0,1],y:[50,0]},
    transition:{duration:0.3,delay:i*0.2}

})



export default{
    fadeIn,
    scaleUp,
    fadeUp,
    fadeInLeft,
    fadeInRight
}