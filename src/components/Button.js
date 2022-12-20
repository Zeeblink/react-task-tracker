

const Button = ({text, color, onClick}) => {
  return (
    <button className='btn' style={{background:color}} onClick={onClick}>{text}
    </button>
  ) 
}

export default Button