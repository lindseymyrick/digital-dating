import React, { Component } from 'react';
import DailyIframe from '@daily-co/daily-js';
import Draggable from 'react-draggable'; 

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

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    render() {
        
        return <iframe className="Video-Frame"
            title="video call iframe"
            ref={this.iframeRef}
            allow="camera; microphone; fullscreen"
        ></iframe>
    }
}
export default VideoChat;
