import React, { useState } from 'react';
import FaceMask from './FaceMask';
import ObjectInfo from './ObjectInfo';

const ProcessImage = ({file}) => {
  console.log(file);
  const CDN_URI = `https://ucarecdn.com/${file.uuid}/-/preview/-/quality/smart/`;
  const [imageSrc, setImageSrc] = useState(CDN_URI);
  const [showMask, setShowMask] = useState(false);
  const [showObjInfo, setShowObjInfo] = useState(false);

  return(
    <div>
      <div className="uc-ip-preview">
        {showMask && <FaceMask uuid={file.uuid}/>}
        {showObjInfo && <ObjectInfo uuid={file.uuid}/>}
        <img src={imageSrc} alt={file.original_filename} />
      </div>
      
    </div>  
  )
}

export default React.memo(ProcessImage);