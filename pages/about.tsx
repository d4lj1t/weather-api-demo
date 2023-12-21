import Link from 'next/link'

import React from 'react'

const AboutPage: React.FC = () => {
  return (
        <div>
            <h1>About Us</h1>
            <p>This is the about page content.</p>
            <Link href="https://www.linkedin.com/in/daljit-shergill-500024243/" passHref>
                My LinkedIn Profile
            </Link>
        </div>
  )
}

export default AboutPage
