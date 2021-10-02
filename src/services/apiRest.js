
import axios from 'axios';

let instance = null;

class ApiRestService {

    constructor(host, port){
        // console.log("INSTANCE DEL SERVICIO REST ", host, port);
        this.host = host;
        this.port = port;
        this.config = {};
    }

    /**
     * @returns {Promise}
     * @param {*} path 
     * @param {*} params 
     * @param {*} options 
     */
    get(path, params= {}, options ={}){
        const url = `${this.host}:${this.port}`;
        return axios.get(`${url}${path}`, { 
            ...options,
            params: { ...params }
        });
        
    }

    /**
     * @returns {Promise}
     * @param {*} path 
     * @param {*} data 
     * @param {*} config 
     */
    post(path, data={}, config={}){
        const url = `${this.host}:${this.port}`;
        return axios.post(`${url}${path}`, data, config)
    }

}

/**@returns {ApiRestService} */
export default () => {
    if(!instance){
        const host = process.env.REACT_APP_API_HOST;
        const port = process.env.REACT_APP_API_HOST_PORT;

        instance =  new ApiRestService(host, port);

    }
    return instance;
}

