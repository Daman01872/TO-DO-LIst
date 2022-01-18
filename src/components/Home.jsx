import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div class="container jumbotron bg-light  mt-5 p-3 text-center">

                <h1 class="display-5 ">React-Redux To-Do List</h1>

                <hr class="my-4" />

                <p>React-Redux Todo app with Add, Remove, Edit & Check(completed) Functionality.</p>

                <p class="lead">

                    <button className="btn btn-outline-warning me-3"> <Link style={{ color: 'purple' }} to="/login">Login Here</Link></button>
                </p>
            </div>
        </div>
    )
}

export default Home
