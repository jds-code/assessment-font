import * as R from 'ramda'

/*
 *  Filters a list by name property
 */
const filterByName = (data, name) => {
    let filtered = []

    const nameContainsKey = R.propSatisfies(foo => String(foo).toLowerCase().includes(name.toLowerCase()), 'name')

    if (data && name) filtered = R.filter(nameContainsKey, data)

    return filtered
}

export default {
    filterByName
}

