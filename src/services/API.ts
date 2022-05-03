import axios from 'axios';

export default ( url: string = "http://localhost:8080" ) => {

    return axios.create({
        baseURL: url,
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTIwNTEwMzMsInVzZXJfbmFtZSI6ImFsZXhhbmRyZSIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiYzJkOTNmMDQtMjdiMS00MzkzLTg2ZGItODJhMjlhOWQ3ODhhIiwiY2xpZW50X2lkIjoiYWxleGFuZHJlIiwic2NvcGUiOlsid3JpdGUiLCJyZWFkIl19.Qat8y8EOLly1-xvggMK9JzqhViUzV5bAaxCinHuW_nE"
        }
    });

}
