import React from 'react'

export default function NoPage() {
    return (
        <div>
            <div>
                <img width={500} src="https://i.imgur.com/jUghj1c.jpg" alt="" />
            </div>
            <button onClick={() => window.history.back()}>Back</button>
        </div>
    )
}