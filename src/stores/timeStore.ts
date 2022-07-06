import { readable, derived } from 'svelte/store';
import type { Readable } from 'svelte/store';

export const time = readable<Date>(new Date(), (set) => {
	const intervalId = setInterval(() => {
		set(new Date());
	}, 1000);
	return () => {
		if (intervalId !== undefined) {
			clearInterval(intervalId);
		}
	};
});

// THIS IS A NEW STORE DERIVED FROM THE VALUE OF PREVIOUS
// ONE

// WE ARE COUNTING FROM THIS DATE
const startingDate = new Date();

export const elapsed = derived<Readable<Date>, number>(time, (val, set) => {
	const seconds = val.getSeconds();

	set(seconds - startingDate.getSeconds());
});
