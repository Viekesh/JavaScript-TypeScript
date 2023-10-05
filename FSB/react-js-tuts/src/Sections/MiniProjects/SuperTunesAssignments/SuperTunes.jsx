import React, { Component } from "react";
import "./SuperTunes.css";
import songs from "./Service/Songs";
import SongCard from "./Component/SongCard";



class SuperTunes extends Component {
    state = {
        songs
    }

    sortByTitle = () => {
        this.setState({
            songs: [...this.state.songs.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
        })
    }

    sortByRating = () => {
        this.setState({
            songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)]
        })
    }

    render() {
        return (
            <>
                <div id="super-tunes">
                    <h2 id="st-title">Super Tunes - Songs Of the Week</h2>
                    <div className="st-btn" onClick={this.sortByTitle}>Sort By Title</div>
                    <div className="st-btn" onClick={this.sortByRating}>Sort By Rating</div>
                    <div id="song-list">
                        {/* {this.state.songs.map(song => <div>{song.title}</div>)} */}
                        {this.state.songs.map(song => <SongCard key={song.id} data={song} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default SuperTunes;
