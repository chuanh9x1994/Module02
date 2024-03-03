import React from 'react'
import { useState } from 'react'

export default function CounText() {
    const [counText,setCounText] = useState(0);

    const dem=(event)=>{
        let text = event.target.value;
        setCounText(text.length);
    }
  return (
    <>
        <div>CounText</div>
        <textarea onChange={dem}></textarea>
        <p>
            Số ký tự văn bản : {counText}
        </p>
    </>
  )
}
