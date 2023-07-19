import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';




function Myimages({imge}) {
    // console.log(imge);


  return (
    <>
     <Carousel
   showThumbs={false}
   autoPlay={true}
   transitionTime={3}
   infiniteLoop={true}
   showStatus={false} className='position-relative'>
          
                  {
                    imge.map((curelm,index) => {
                        return(
                        <div>
                        <img src={curelm.url} alt={curelm.filename} style={{height:"100%" , height:"80vh" ,fontFamily: "Courier"}}/>
                         </div>
                        )
                    })
                  }
            </Carousel>
   </>
  )
}

export default Myimages
