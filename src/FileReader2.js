import React from 'react'

const FileReader2 = () =>{

    var imgsrc = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array([137,80,78,71,13,10,26,10,0])));

    return(
        <div>
            <img
                src={imgsrc}
                alt='실험'
            />
        </div>
    )
}

export default FileReader2