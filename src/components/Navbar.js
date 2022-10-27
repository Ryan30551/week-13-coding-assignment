import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h2> Navbar</h2>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                      <button>Home</button>
                    </li>
                    <li class="nav-item">
                        <button>Contact Us</button>
                    </li>
                    <li class="nav-item">
                        <button>About Us</button>
                    </li>
                    <li class="nav-item">
                        <button>Main Menu</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar