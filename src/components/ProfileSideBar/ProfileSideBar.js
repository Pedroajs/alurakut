import  Box  from '../Box/Box';


export function ProfileSideBar(props){
  
  
  return(
    <Box >
      <img src={`https://github.com/${props.userImg}.png`} style={{borderRadius:'8px'}} />
    </Box>

  )  
        

}
