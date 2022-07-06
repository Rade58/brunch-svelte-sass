import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const name = writable<string>();

// THIS IS A DERIVED STORE, FROM ABOVE ONE

export const greeting = derived<Writable<string>, string>(name, (val, set) => {
	set(`Hello, ${val}`);
});
