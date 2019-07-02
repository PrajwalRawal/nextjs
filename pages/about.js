import React, { Component } from 'react'
import Axios from 'axios';
import Head from '../components/head'

export default class about extends Component {
    static async getInitialProps(){
        let res = await Axios.get('https://jsonplaceholder.typicode.com/todos')
        return {todos: res.data};
    }
    render() {
        console.log(this.props)
        return (
            <>
                <Head title="About"></Head>
                {
                    this.props.todos.map(todo => {
                        return(
                            <div key={todo.id}>{todo.title}</div>
                        )
                    })
                }
            </>
        )
    }
}
