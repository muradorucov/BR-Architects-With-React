import React, { useState, useEffect } from 'react'

export function Project() {
    const [Contents, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://6278b7bcd00bded55add177e.mockapi.io/api/taskdin/content')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                fetchUsers(res)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                    Projects
                </h3>
            </div>
            <div className="w3-row-padding">
                {Contents.map(content =>
                    <div className="w3-col l3 m6 w3-margin-bottom" key={content.id}>
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                {content.title}
                            </div>
                            <img src={content.Imgsrc} alt="House" style={{ width: "100%" }} />
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}