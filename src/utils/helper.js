export const searchFunc=(ip,clone)=>{
    return(
        clone.filter(i=>i?.info?.name.toLowerCase().includes(ip.toLowerCase()))
    )
}
export function Slidearrows(props){
    const{className,style,onClick}=props
    return(
          <div className={className}
          style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}></div>
    )
}


export const settings = {
    slidesToShow: 5,
    slidesToScroll:5,
    infinite: true,
    dots:false,
    speed: 1300,
    nextArrow:<Slidearrows/>,
    prevArrow:<Slidearrows/>
  };
