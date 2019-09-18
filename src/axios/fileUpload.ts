import * as FormData from 'form-data';
import Axios from 'axios';
import { promisify } from 'util';
import * as http from 'http';

interface DataObj {
  [s: string]: any
}

function buildForm(data: DataObj) {
  const form = new FormData();
  for (const item in data) {
    form.append(item, data[item]);
  }
  return form;
}

async function getFormHeaders(form: FormData) {
  const getLen = promisify(form.getLength).bind(form);
  const len = await getLen();
  return {
    ...form.getHeaders(),
    'Content-Length': len,
  };
}

export const fileUpload = async (
  url: string,
  data: DataObj,
  headers?: http.IncomingHttpHeaders,
) => {
  const formData = buildForm(data);
  let formHeaders = await getFormHeaders(formData);
  if (headers) {
    formHeaders = {
      ...headers,
      ...formHeaders,
    };
  }
  const res = await Axios.post(url, formData, {
    headers: {
      ...formHeaders,
    },
  });
  return res;
};
