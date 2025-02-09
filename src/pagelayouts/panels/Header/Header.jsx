import React from 'react'

export default function Header() {
  return (
   <>
    <div id="preloader">
			<div className="preloader-inner">
				<div className="spinner">
                    <img src="src/assets/web-assets/img/preloader-logo.svg" alt="img"/>                   
                    <img src="src/assets/web-assets/img/preloader-wheel.svg" alt="img" className="wheel"/>
                </div>
				
			</div>
		</div>
       
		<div className="pointer bnz-pointer" id="bnz-pointer"></div>
        
   </>
  )
}
