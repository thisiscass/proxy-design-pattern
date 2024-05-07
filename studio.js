class StudioAPI {

    getStudios = function(studioType) {
        switch (studioType) {
            case 'record': 
                return 'Record Studios'
                break;
            case 'podcast': 
                return 'Podacast Studios'
                break;
            default:
                return 'All Studios'
                break;
        }
    }
}

class StudioProxy {

    studioApi = new StudioAPI();
    cache = {}

    getStudios = function(studioType) {
        if(this.cache[studioType] == null) {
            this.cache[studioType] = this.studioApi.getStudios(studioType)

            console.log('StudioProxy.cache', this.cache)
        }

        return this.cache[studioType];
    }
}

let studioProxy = new StudioProxy();

console.log(studioProxy.getStudios('record'))
// console.log(studioProxy.getStudios('podcast'))
// console.log(studioProxy.getStudios('any'))
console.log(studioProxy.getStudios('record'))