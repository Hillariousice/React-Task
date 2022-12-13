 import PropTypes from 'prop-types'
import Button from './Button'

function Header({title}) {
    const onClick =()=>{
        console.log('Click')
    }
  return (
   <header className='header'>
    <h1>{title}</h1>
   <Button color='green' text='Add' onClick={onClick}/>
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