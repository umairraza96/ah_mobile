import axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';

// type IHTTPMethod =
//   | 'GET'
//   | 'POST'
//   | 'PUT'
//   | 'DELETE'
//   | 'PATCH'
//   | 'HEAD'
//   | 'OPTIONS';

type IHTTPMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'head'
  | 'options';

interface IHTTP<D> {
  method: IHTTPMethod;
  url: string;
  headers?: AxiosRequestConfig['headers'];
  data?: D;
}

const HTTP = async <T, D = undefined>({
  method,
  url,
  headers,
  data,
}: IHTTP<D>) => {
  try {
    //  local IP address
    // const baseURL = 'http://192.168.100.108:4040/api/v1';
    const baseURL = 'http://192.168.100.26:4040/api/v1';

    // const baseURL = 'http://172.20.10.7:4040/api/v1';

    const response = await axios({
      method,
      url: `${baseURL}${url}`,
      headers,
      data,
    });

    return response.data as T;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};

export default HTTP;
