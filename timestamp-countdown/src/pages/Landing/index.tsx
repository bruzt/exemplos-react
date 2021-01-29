import React, { useEffect, useState } from 'react';

import { Container } from './styles';

let timeoutId: NodeJS.Timeout;

export default function Landing(){

	const [startTimestampState, setStartTimestamp] = useState(new Date(new Date().setHours(new Date().getHours() - 3)).toJSON().slice(0,19));
	const [endTimestampState, setEndTimestamp] = useState('0');

	const [daysState, setDays] = useState(0);
	const [hoursState, setHours] = useState(0);
	const [minutesState, setMinutes] = useState(0);
	const [secondsState, setSeconds] = useState(0);

	const [showCountdownState, setShowCountdown] = useState(false);

	useEffect( () => {

		calcCountdown();

	}, [startTimestampState, endTimestampState]);
	
	function calcCountdown(){
		
		if(endTimestampState !== '0'){

			const startDate = new Date(startTimestampState);
			const endDate = new Date(endTimestampState);

			let milliseconds = Number(startDate) - Number(endDate);

			if(milliseconds > 0) return alert('Data final precisa ser maior do que a data inicial');

			clearTimeout(timeoutId);

			loopCountdown(milliseconds, startDate, endDate);
		}
	}
	
	function loopCountdown(milliseconds: number, startDate: Date, endDate: Date){

		const dateNow = new Date();
		
		if(startDate <= dateNow && endDate >= dateNow) {

			setShowCountdown(true);

			const totalSeconds = -milliseconds / 1000;
			setSeconds(Math.floor(totalSeconds % 60));
	
			const totalMinutes = totalSeconds / 60;
			setMinutes(Math.floor(totalMinutes % 60));
	
			const totalHours = totalMinutes / 60;
			setHours(Math.floor(totalHours % 24));
	
			const totalDays = totalHours / 24;
			setDays(Math.floor(totalDays));
	
			milliseconds += 1000;

		} 
		else setShowCountdown(false);

		timeoutId = setTimeout( () => {
				
			loopCountdown(milliseconds, startDate, endDate);

		}, 1000);
	}

	return (
		<Container>
			
			<div className="inputs-container">
				<div className="input-group">
					<label htmlFor="datetime-start">Início</label>
					<input 
						type="datetime-local" 
						id="datetime-start"
						value={startTimestampState}
						onChange={(event) => setStartTimestamp(event.target.value)}
					/>
				</div>

				<div className="input-group">
					<label htmlFor="datetime-end">Fim</label>
					<input 
						type="datetime-local" 
						id="datetime-end"
						value={endTimestampState}
						onChange={(event) => setEndTimestamp(event.target.value)}
					/>
				</div>

				{showCountdownState && (
					<div className="countdown">
						<span className="days">Dias: {daysState}</span>
						<span className="time"> Horas: {hoursState < 10 ? '0' + hoursState : hoursState}:{minutesState < 10 ? '0' + minutesState : minutesState}:{secondsState < 10 ? '0' + secondsState : secondsState}</span>
					</div>
				)}
			</div>

		</Container>
	);
};
