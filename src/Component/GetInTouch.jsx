import React from 'react'
import { Link } from "react-router-dom";
const GetInTouch = () => {
    return (
        <>
            <section id="call-to-action" className="call-to-action">
                <Link to="/contact-us">
                    <div className="container" style={{backgroundSize: "cover"}}>
                        <div className="row" style={{backgroundSize: "cover"}}>
                            <div className="col-md-12" style={{backgroundSize: "cover"}}>
                                <h2 className="size-2">Let’s Work Together</h2>
                                <h1 className='size-1'>START A PROJECT</h1>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    )
}

export default GetInTouch;
