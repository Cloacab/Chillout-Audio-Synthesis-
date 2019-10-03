'use strict';

// initializing new AudioContext instance:

const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

let osc = new OscillatorNode(context,);
osc.frequency.value = 440;
let gain = context.createGain();
gain.gain.value = 0.2;
osc.connect(gain).connect(context.destination);

document.querySelector('.add').addEventListener('click', function(e){
    console.log(e);
    let button = document.createElement('button')
    button.innerHTML = 'Remove';
    button.addEventListener('click', (e) =>{
        e.target.parentNode.remove()
    });

    let div = document.createElement('div');
    div.className = 'options';
    div.innerHTML = `<label for="volume">Volume</label><input type="range" name="volume" id="volume" value="0.2" min="0" max="1" step="0.01">
        <label for="frequency">Frequency</label><input type="range" name="frequency" id="frequency" value="440" min="20" max="2000" step="5">
        <select name="waveform" id="waveform">
            <option value="sine">Sine</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
            <option value="sawtooth">Sawtooth</option>
        </select>`;

    div.appendChild(button);

    let main = document.querySelector('.main');
    main.prepend(div);

    button = document.createElement('button');
    button.className = 'swhitch';
    button.innerHTML = 'Play/Pause';
    button.setAttribute('role', 'false');
    button.setAttribute('data-playing', 'false');

    button.addEventListener('click', (e) =>{
        if (button.getAttribute('data-playing') == false){
            gain.gain.value = 0.2;
            osc.start();
            button.setAttribute('data-playing', true);
        }
        else{
            gain.gain.value = 0;
            button.setAttribute('data-palying', false)
        }
        console.log(e);
    })

    div.insertAdjacentElement('afterbegin', button);


})




