import { readable } from 'svelte/store';

// IN THIS EXAMPL, WE WANT TO INSTANTIATE NEW DATE
// EVERY SECOND

export const time = readable<Date | null>(
	// THIS IS A VALUE
	null,
	// THIS IS HOW WE DEFINE STATING VALUE
	(set) => {
		const intervalId = setInterval(() => {
			set(new Date());
		}, 1000);

		// THIS IS CLEANUP

		return () => {
			if (intervalId !== undefined) {
				clearInterval(intervalId);
			}
		};
	}
);
