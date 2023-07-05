import React from 'react'

import Link from 'next/link';

export default function Page() {
    return(
        <div>
            <h1>Hello, Dashboard Page!</h1>
            <Link href="/">Home</Link>
            <Link href="/dashboard/riders">Rider</Link>
        </div>
    ) ;
}