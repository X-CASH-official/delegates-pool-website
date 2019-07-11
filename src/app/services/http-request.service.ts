import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class httpdataservice{
constructor(private httpClient: HttpClient) {}

SERVER_HOSTNAME_AND_PORT_GET_STATISTICS:string = "/getstatistics";
SERVER_HOSTNAME_AND_PORT_GET_BLOCKS_FOUND:string = "/getblocksfound";
SERVER_HOSTNAME_AND_PORT_GET_PUBLIC_ADDRESS_INFORMATION:string = "/getpublicaddressinformation";
SERVER_HOSTNAME_AND_PORT_GET_VOTERS_LIST:string = "/getvoterslist";
SERVER_HOSTNAME_AND_PORT_GET_PUBLIC_ADDRESS_PAYMENT_INFORMATION:string = "/getpublicaddresspaymentinformation";

Timer:any;

get_request(url:string)
{
return this.httpClient.get(url);
}

post_request(url:string, data:string)
{
const headers = new HttpHeaders ({'Content-Type':'application/x-www-form-urlencoded'});
return this.httpClient.post(url,data, {headers: headers});
}

post_request_json(item: any[])
{
const headers = new HttpHeaders ({'Content-Type':'application/json'});
return this.httpClient.post('url',item, {headers: headers});
}

}
