class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error("Отсутствуют обязательные аргументы");
		}
		
		if (
			this.alarmCollection.find(function(element) {
				element.time === time;
			})
		) {
			console.warn("Уже присутствует звонок на это же время");
		}
		
		this.alarmCollection.push(
			{
				callback,
				time,
				canCall: true
			}
		);
	}
	
	removeClock(time) {
		let resultArray = this.alarmCollection.filter(function(element) {
			if (element.time !== time) {
				return true;
			}
		})

		this.alarmCollection = resultArray;
	}
	
	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		
		if (hours < 10) {
			hours = "0" + hours;	
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		
		return `${hours}:${minutes}`;
	}
	
	start() {
		if (this.intervalId !== null) {
			return;
		}
		
		this.intervalId = setInterval(() =>	{
			this.alarmCollection.forEach(
				(element) => {
					if (element.time === this.getCurrentFormattedTime() && element.canCall) {
						element.canCall = false;
						//return callback;
						element.callback();
					}
				}
			)
		}, 1000);
	}
	
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	
	resetAllCalls() {
		this.alarmCollection.forEach(function(element) {
			element.canCall = true;
		})
	}
	
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];		
	}
}