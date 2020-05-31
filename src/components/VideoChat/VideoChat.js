import React, { Component } from 'react';
import DailyIframe from '@daily-co/daily-js';
import Draggable from 'react-draggable'; 
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import styles from '../ui/Theme';
import { withStyles } from '@material-ui/core/styles';


export class VideoChat extends Component {
    constructor(props) {
        super(props);
        this.iframeRef = React.createRef();
    }
    componentDidMount() {
        if (!this.props.url) {
            console.error('please set REACT_APP_DAILY_ROOM_URL env variable!');
            return;
        }
        this.daily = DailyIframe.wrap(this.iframeRef.current);
        this.daily.join({ url: this.props.url });
    }

    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        },
        controlledPosition: {
            x: -400, y: 200
        }
    };

    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const { deltaPosition, controlledPosition } = this.state;
        const { classes } = this.props; //need this for cards 
        return( 
            <>
         <Grid container direction="row" className={classes.gridRoot} alignItems="top" spacing={2}> 
        <Draggable {...dragHandlers}>
            <div className= "Video-Box">
        <iframe className="Video-Frame"
            title="video call iframe"
            ref={this.iframeRef}
            allow="camera; microphone; fullscreen"
        ></iframe>
        <button> Drag Me </button>
            </div>
            </Draggable>
            </Grid>
            </>

        )
    }
}
export default (withStyles(styles)(VideoChat)); ;
