/**
 * Created by stevenjlho on 13/01/2017.
 */

import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default class extends React.Component {
    static async getInitialProps ({ req }) {
        console.log('getInitialProps')
        return {}
    }
    render () {
        return <div>
            Hello World Test
        </div>
    }
}