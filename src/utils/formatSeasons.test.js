import {formatSeasons} from './formatSeasons'

it('should return an empty object if the argument is an empty array', () => {
    expect(formatSeasons([])).toStrictEqual({})
})


it('should return the correct object', () => {
    const mockData = [{season: 1}, {season: 2}]
    const mockAnswer = {'Season 1': [{season: 1}], 'Season 2': [{season: 2}]}
    expect(formatSeasons(mockData)).toStrictEqual(mockAnswer)    
})