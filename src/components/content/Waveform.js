import React, { Component } from "react";
// import WaveSurfer from "wavesurfer.js";
import { Download, Forward, Forward2, Heart, HeartFill, List2, Loop, Madina, Mecca, PauseFill, PlayFill, Previous } from "../../assets/svgIcons";
import { Link } from "react-router-dom";
import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js';

// class Waveform extends Component {
//   state = {
//     playing: false
//   };

//   componentDidMount() {
//     const track = document.querySelector("#track");

//     this.waveform = WaveSurfer.create({
//       barWidth: 3,
//       barRadius: 3,
//       barGap: 3,
//       barMinHeight: 1,
//       cursorWidth: 1,
//       container: "#waveform",
//       backend: "WebAudio",
//       height: 60,
//       progressColor: "#FE6E00",
//       responsive: true,
//       waveColor: "#C4C4C4",
//       cursorColor: "transparent"
//     });

//     this.waveform.load(track);
//   }

//   componentWillUnmount() {
//     if (this.waveform) {
//       this.waveform.destroy();
//       this.waveform = null;
//     }
//   }

//   handlePlay = () => {
//     this.waveform.playPause();
//     this.setState({ playing: this.waveform.isPlaying() });
//   };

//   handleStop = () => {
//     this.waveform.stop();  // Stop the audio playback
//     this.setState({ playing: false });
//   };

//   render() {
  
//     return (
//       <div className="player-wrapper">
//           <div className="player-container">
//               <div className="player">
//                   <div className="bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 w-full aspect-square rounded-xl text-white flex justify-center items-center font-cairo text-4xl relative p-8 animate-gradient">
//                       {this.props.revelationType === 'Meccan' ? ( <Mecca svgStyle="absolute w-[60%] opacity-20 aspect-square" /> ) : ( <Madina svgStyle="absolute w-[60%] opacity-20 aspect-square" /> )}
//                       <p className="relative z-10">{this.props.name}</p>
//                   </div>
//                   <div className="grid justify-center relative -mt-8">
//                       <ul className="flex gap-8 border border-white rounded-full px-8 py-4 justify-center bg-gradient-to-b from-teal-300 to-teal-500">
//                           <li><Forward svgStyle="w-5 aspect-square text-white cursor-pointer" strokeWidth="35" /></li>
//                           <li>
//                               <div className="relative w-5 aspect-square group cursor-pointer">    
//                                   <Heart svgStyle="absolute w-full aspect-square text-white opacity-100 group-hover:opacity-0 transition duration-300 group-[.active]:opacity-0]" strokeWidth="35"  />
//                                   <HeartFill svgStyle="absolute w-full aspect-square text-red-500 opacity-0 group-hover:opacity-100 transition duration-300 group-[.active]:opacity-100" strokeWidth="35"  />
//                               </div>
//                           </li>
//                           <li><Download svgStyle="w-5 aspect-square text-white cursor-pointer" strokeWidth="35" /></li>
//                       </ul>
//                   </div>
//                   <div className="mt-4">
//                       <p className="text-center font-bold text-2xl mb-1">{this.props.englishName}</p>
//                       <p className="text-center text-base text-cyan-800">{this.props.englishNameTranslation}</p>
//                   </div>
//                   <div>
//                         <div id="waveform" className="my-4" />
//                         {/* <audio id="track" src="../../assets/test.mp3" /> */}
//                         {/* <audio id="track" src="http://cdn.islamic.network/quran/audio-surah/128/ar.abdulbasitmurattal/1.mp3" /> */}
//                         <audio id="track" src="https://s3.eu-central-1.amazonaws.com/some-sprouts/Mindcrush.mp3" />
//                         <p className="flex justify-between text-cyan-800"><span id="time">00:00</span><span id="duration">20:16</span></p>
//                   </div>
//                   <ul className="flex gap-8 items-center justify-center mt-8">
//                       <li className="cursor-pointer" onClick={this.handleToggleLoop}>
//                           <Loop svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="30" />
//                       </li>
//                       <li className="cursor-pointer">
//                           {this.props.number > 1 ? (
//                               <Link to={`/surah/${this.props.number - 1}`} onClick={this.handleStop}>
//                                 <Previous svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="20" />
//                               </Link>
//                           ) : (
//                               <Previous svgStyle="w-5 aspect-square text-gray-300 hover:text-gray-400 cursor-not-allowed" strokeWidth="20" />
//                           )}
//                       </li>
//                       <li className="cursor-pointer" onClick={this.handlePlay}>
//                             {!this.state.playing ? <PlayFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" /> : <PauseFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" />}
//                       </li>
//                       <li className="cursor-pointer">
//                           {this.props.number < 114 ? (
//                               <Link to={`/surah/${this.props.number + 1}`} onClick={this.handleStop}>
//                                   <Forward2 svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="20" />
//                               </Link>
//                           ) : (
//                               <Forward2 svgStyle="w-5 aspect-square text-gray-300 hover:text-gray-400 cursor-not-allowed" strokeWidth="20" />
//                           )}
//                       </li>
//                       <li className="cursor-pointer"><Link to="/"><List2 svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="30" /></Link></li>
//                   </ul>
//               </div>
//           </div>
//       </div>
//     );
//   }
// }

export const Waveform = () => {

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    // Define the waveform gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
    gradient.addColorStop(0, '#656666') // Top color
    gradient.addColorStop((canvas.height * 0.7) / canvas.height, '#656666') // Top color
    gradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
    gradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
    gradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#B1B1B1') // Bottom color
    gradient.addColorStop(1, '#B1B1B1') // Bottom color

    // Define the progress gradient
    const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
    progressGradient.addColorStop(0, '#EE772F') // Top color
    progressGradient.addColorStop((canvas.height * 0.7) / canvas.height, '#EB4926') // Top color
    progressGradient.addColorStop((canvas.height * 0.7 + 1) / canvas.height, '#ffffff') // White line
    progressGradient.addColorStop((canvas.height * 0.7 + 2) / canvas.height, '#ffffff') // White line
    progressGradient.addColorStop((canvas.height * 0.7 + 3) / canvas.height, '#F6B094') // Bottom color
    progressGradient.addColorStop(1, '#F6B094') // Bottom color

    const wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: gradient,
        progressColor: progressGradient,
        barWidth: 2,
        url: 'https://s3.eu-central-1.amazonaws.com/some-sprouts/Mindcrush.mp3',
    })

    wavesurfer.on('interaction', () => {
        wavesurfer.playPause()
    })

    // Hover effect
    {
        const hover = document.querySelector('#hover')
        const waveform = document.querySelector('#waveform')
        waveform.addEventListener('pointermove', (e) => (hover.style.width = `${e.offsetX}px`))
    }
    
    // Current time & duration
    {
        const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secondsRemainder = Math.round(seconds) % 60
        const paddedSeconds = `0${secondsRemainder}`.slice(-2)
        return `${minutes}:${paddedSeconds}`
        }
    
        const timeEl = document.querySelector('#time')
        const durationEl = document.querySelector('#duration')
        wavesurfer.on('decode', (duration) => (durationEl.textContent = formatTime(duration)))
        wavesurfer.on('timeupdate', (currentTime) => (timeEl.textContent = formatTime(currentTime)))
    }

    return (
        <div id="waveform">
            <div id="time">0:00</div>
            <div id="duration">0:00</div>
            <div id="hover"></div>
        </div>
    )

};
// export default Waveform;
