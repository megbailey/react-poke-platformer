export const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`

export const log = label => data => {
	console.log(label, data);
	return data;
}

export function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  }