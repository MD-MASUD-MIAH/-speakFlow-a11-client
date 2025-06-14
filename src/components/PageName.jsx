import React, { useEffect } from 'react';

export const PageName =(title)=>{


    useEffect(()=>{


        document.title = `SpeakFlow || ${title}`
    },[title])
}