const API_URL = "https://jsonplaceholder.typicode.com";

export default {
    async makeRequest(resource , method  ,body) {
        const request = await  fetch(`${API_URL}/${resource}` , {
            method:method,

            
        })
            return await request.json();
    },

    async post(resource) {
        return await this.makeRequest(resource, "POST", {})
    },

    async get(resource) {
        return await this.makeRequest(resource, "GET")
    }
}