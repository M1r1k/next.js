import React from 'react'
import Link from 'next/link'
import IndexComponent from '../components/IndexContent'
import Common from '../components/Common'

export default class Index extends React.Component {
  render () {
    const { name } = this.props
    return (
      <div>
        <h1>Home Page</h1>
        <p>Welcome, {name}</p>
        <div>
          <Link href='/about'>
            <a>About Page</a>
          </Link>
          <Link href='/contact'>
            <a>Contact Us Page</a>
          </Link>
        </div>
        <Common />
        <IndexComponent />
      </div>
    )
  }
}
