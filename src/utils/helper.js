export const searchFunc=(ip,clone)=>{
    return(
        clone.filter(i=>i?.info?.name.toLowerCase().includes(ip.toLowerCase()))
    )
}