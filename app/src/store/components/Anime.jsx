import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { fetchAnime } from '../actions/animeActions'


const StyledDiv = styled.div`
    display: flex;
    border: 2px solid black;
    justify-content: center;
    font-size: .8rem;
    padding: 2%;
    margin: 2%;
`
const StyledImg = styled.img`
    display: flex;
`

const Anime = (props) => {
    // console.log(props, 'this is props in comp')
    useEffect(() => {
        props.fetchAnime();
    }, [])


    return (
        <section>
            <h1>Welcome to The World of Weebs!</h1>
            {props.data.length > 0 ? (
                <div>
                    {props.data.map((data) => (

                        <StyledDiv>
                            {/* <StyledImg src={data.image_url}>{data.image_url}</StyledImg> */}
                            <h2 key={data.mal_id}>{data.title}</h2>
                            <h2>{data.synopsis}</h2>
                        </StyledDiv>
                    ))}
                </div>
            ) : null}
            {/* {props.isLoading ? <h4>Loading Anime now...</h4> : null} */}
            {/* {props.error ? (
                <p style={{ color: "red" }}>
                    Uh oh... something happened 😟 {props.error}
                </p>
            ) : null}
            {props.length > 0 ? (
                <div>
                    {props.title.map((title) => (
                        <h2 key={title.mal_id}>{title.title}</h2>
                    ))}
                </div>
            ) : null} */}
        </section>
    );
};

const mapStateToProps = (state) => {
    // console.log(state, 'this is state in anime')
    return {
        data: state.data,
        imageURL: state.imageURL,
        title: state.title,
        synopsis: state.synopsis,
        isLoading: state.isLoading,
        error: state.error
    }
}
export default connect(mapStateToProps, { fetchAnime })(Anime)