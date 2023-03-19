import axios, {AxiosHeaders} from 'axios';

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

interface IHTTP<MD> {
  method: IHTTPMethod;
  url: string;
  headers?: AxiosHeaders;
  data?: MD;
}

const HTTP = async <T, MD = undefined>({
  method,
  url,
  headers,
  data,
}: IHTTP<MD>) => {
  try {
    //  local IP address
    // const baseURL = 'http://192.168.100.108:4040/api/v1';
    const baseURL = 'http://172.20.10.7:4040/api/v1';

    const response = await axios({
      method,
      url: `${baseURL}${url}`,
      headers,
      data,
    });

    return response.data as T;
  } catch (error) {
    console.log(error);
  }
};

export default HTTP;
