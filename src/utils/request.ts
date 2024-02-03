import store from "@/store";
import { message } from "antd";
import { RequestType, ResType } from "./type";

const baseUrl = "http://81.69.160.126:8086";

const request: <T>(props: RequestType) => Promise<ResType<T>> = ({
  method,
  url,
  header = {},
  data,
}) => {
  url = baseUrl + url;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method,
      headers: {
        token: store.getState().token.token,
        ...header,
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (!response.ok) throw response;
        const res = await response.json();
        resolve(res);
      })
      .catch((err: Response) => {
        message.error(`请求错误, 错误状态码为 ${err.status}`);
        reject(err);
      });
  });
};

export default request;
