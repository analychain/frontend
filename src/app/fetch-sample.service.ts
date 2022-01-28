import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sample } from './sample.model';

@Injectable({
  providedIn: 'root'
})


export class FetchSampleService {
    // baseURL: string = 'https://e1j29u2fia-e1b0ep5tkz-connect.eu1-azure.kaleido.io/instances/0x529f2bfe822b4b3e947a0c6674bb7e4c60e45ed4/';
    baseURL: string = 'https://e0oodyxcc4-e0guxf04n2-connect.de0-aws.kaleido.io/instances/0x9f047439f509d56cc6ceb7fd1924f7f3e64dc171/';
    // signingAddress: string = "0x74af1f410f920a7551fad6e1ca3069eee9c4b328";
    signingAddress: string = "0x7279faeda2cabd073af7139f60ac8719568045eb";
    // token: string = "ZTF6OWMyZDhoNDoyaHVtUHBacXZqc0c4cHNVaW9JWDN1UFJNNjNQVFZrV3dPekVlSkQ2T1gw";
    token: string = "ZTByMzh3dzVqcTp4MUt5ZmowaWx0TFROZEYwS3JjTmNBU0VaU281UnUzOGcwdFRjU2dPQ0hR";
 
    result!: Sample;
    loading: boolean;
 
    constructor(private http: HttpClient) {
        this.loading = false;
    }
 
    fetchSample(code: string) {
        let promise = new Promise((resolve, reject) => {
            let httpOptions = {
                headers: new HttpHeaders({
                    'accept': 'application/json',
                    'Authorization': 'Basic ' + this.token
                })
            };
            let apiURL = `${this.baseURL}/fetchSample?code=${code}&kld-from=${this.signingAddress}`;
            this.http.get(apiURL, httpOptions)
                .toPromise()
                .then((res: any) => {
                        // Success
                        this.result = new Sample(
                            res.output,
                            res.output1,
                            res.output2,
                            res.output3,
                            res.output4,
                            res.output5,
                            res.output6,
                            res.output7,
                            res.output8,
                            res.output9);
                        resolve(res);
                    },
                    err => {
                        // Error
                        reject(err);
                    }
                );
        });
        return promise;
    }
}
