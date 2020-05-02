import React,{useState} from 'react'
import './Follow.scss'

const Follow = ({nombre}) => {

    const [follow, setFollow] = useState(false)

    function handleClick(e){
        setFollow(!follow)
        //console.log(e.target.value)
    } 
   
    return (
        <div className="follow--conainer">
        
            <button 
                onClick={handleClick}
                value={nombre}
            >
               { 
                  follow ? 
                  `Dejar de seguir a ${nombre}`:
                  `Seguir a ${nombre}`
               }
            </button>
             { 
                follow && (
                 <span> {`Estas siguiendo a ${nombre}`} </span>
                ) 
             }
        </div>
    )
}

export default Follow
