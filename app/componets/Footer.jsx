
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>HYTEK</Link>
        </div>
        <div className='links'>
          <Link href='/about'>About</Link>
          <Link href='/about/team'>Our Team</Link>
          <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer


