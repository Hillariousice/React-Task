 import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

function Header({title,onAdd,showAdd}) {
   const location = useLocation()
  return (
   <header className='header'>
    <h1>{title}</h1>
{ location.pathname === '/' &&  <Button color={showAdd?'red':'green'} text={showAdd ?'Close':'Add'} onClick={onAdd}/>}
   {/* <Button color='blue' text='Remove'/>
   <Button color='yellow' text='Save'/> */}
   </header>
  )
}

Header.defaultProps ={
    title:'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle ={
//     color:'red',
//     backgroundColor:'white'
// }

export default Header