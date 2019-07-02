import React, { Component } from 'react'
import Axios from 'axios';
import Link from 'next/link'

class posts extends Component {
    componentDidMount(){
        
    }
    render() {
        console.log(this.props)
        let {title} = this.props.url.query
        return (
            <div>
                Post of {title}

                <ul>
                    <li>
                        <Link href={`/posts/?title=1`} as={`/posts/1`}>MY Blog 1</Link>
                    </li>
                    <li>
                        <Link href={`/posts/?title=2`} as={`/posts/2`}>MY Blog 2</Link>
                    </li>
                    <li>
                        <Link href={`/posts/?title=3`} as={`/posts/3`}>MY Blog 3</Link>
                    </li>
                    <li>
                        <Link href={`/posts/?title=4`} as={`/posts/4`}>MY Blog 4</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default posts