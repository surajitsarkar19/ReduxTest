/**
 * Created by Surajit Sarkar on 31/10/17.
 * Company : Bitcanny Technologies Pvt. Ltd.
 * Email   : surajit@bitcanny.com
 */

export default class HttpClient{

    constructor(){
        this.myHeaders = new Headers();
        this.myHeaders.append('Accept','application/json');
        this.myHeaders.append('Content-Type','application/json');
        //this.getAccessToken();
    }

    get(url,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'GET',null)
    }

    put(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'PUT',body)
    }

    post(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'POST',body)
    }

    delete(url,body,bRequitreHeader){
        this.setupHeader(bRequitreHeader);
        return this.callAPI(url,'DELETE',body)
    }

    setupHeader(bRequitreHeader){
        if(bRequitreHeader){
            //this.myHeaders.append('Authorization',"Bearer "+this.accessToken);
        }
    }

    callAPI(url,method,body) {
        return new Promise((resolve,reject)=>{
            let data = {};
            data.headers = this.myHeaders;
            data.method = method;
            if(body!==null){
                data.body = JSON.stringify(body);
            }
            fetch(url, data)
                .then((response) => this.checkResponse(response))
                .then((response)=>response.json())
                .then((data)=>resolve(data))
                .catch((err)=>reject(err))
        });

    }

    checkResponse(response){
        console.log("Response Status "+response.status);
        return new Promise((resolve,reject)=>{
            if (response.status >= 200 && response.status < 300) {
                return resolve(response);
            } else{
                let error = new Error(response.statusText);
                error.response = response;
                return reject(error);
            }
        });
    }
}

/*
HttpClient.propTypes = {
    url: React.PropTypes.string,
    body: React.PropTypes.object,
    bRequitreHeader: React.PropTypes.bool,
    token: React.PropTypes.string
}*/
