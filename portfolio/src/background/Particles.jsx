import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim"; //loads tsparticles slim
import { loadFull } from "tsparticles"; // Import full version
import { useCallback, useMemo } from "react";

const  ParticlesComponent=()=>{

    const options=useMemo(()=>{
        return{};
    },[]);
    
    const particlesInit=useCallback( (engine)=>{
     loadSlim(engine);
        // loadFull(engine) for this sample the slim version of enough,choose whatever you prefer,slim is smaller in size but doesnt have all the plugins and the move trail feature 

    },[]);

    return <Particles init={particlesInit} options={options} />
};

export default ParticlesComponent;