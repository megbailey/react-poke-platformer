export const id = (seed = 0) => (prefix = "") => `${prefix}${++seed}`

/* export const all = (entities, ...predicates) => {
	if (!entities) return;
	if (!predicates || predicates.length < 1) return entities;

	if (Array.isArray(entities))
		return entities.filter(e => _.every(predicates, p => p(e)))

	return Object.keys(entities).filter(key => _.every(predicates, p => p(entities[key]))).map(key => entities[key])
}
 */
export const log = label => data => {
	console.log(label, data);
	return data;
}