import React, { Component } from 'react';
import NavBar2 from '../components/Shared/NavBar/NavBar2';
import GreyBlockTop from '../components/Shared/GreyBlockTop/GreyBlockTop';
import GreyBlock from '../components/Shared/GreyBlock/GreyBlock';
import MovieCard from '../components/Shared/Card/MovieCard';

const Details = (props) => {

        return (
            <>
                <NavBar2 />
                <GreyBlockTop page='Details' />
                <div className="container-fluid bg-light py-3">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            
                            <MovieCard />
                            
                        </div>
                    </div>
                </div>

                <GreyBlock />
            </>
        );
    }

export default Details;