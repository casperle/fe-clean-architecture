export const HttpClient = {
  baseUrl: 'http://localhost:3001/',

  _handleError(response: any) {
    return response.ok ? response : Promise.reject(response.statusText);
  },

  _handleContentType(response: any) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return Promise.reject("Oops, we haven't got JSON!");
  },

  get(endpoint: string): Promise<any> {
    return fetch(this.baseUrl + endpoint, {
      method: 'GET',

      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },

  put(endpoint: string, _body: any): Promise<any> {
    return fetch(this.baseUrl + endpoint, {
      method: 'PUT',

      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(_body),
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },

  post(endpoint: string, _body: any): Promise<any> {
    return fetch(this.baseUrl + endpoint, {
      method: 'POST',

      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(_body),
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },

  delete(endpoint: string): Promise<any> {
    return fetch(this.baseUrl + endpoint, {
      method: 'DELETE',

      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => {
        throw new Error(error);
      });
  },
};
