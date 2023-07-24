// import { throwError } from 'rxjs';

// const request = async (method: string, url: string, data: any) => {
//   try {
//     const authData = localStorage.getItem('auth');
//     const auth = JSON.parse(authData || "{}");

//     let headers: { [key: string]: string } = {};

//     if (auth.accessToken) {
//       headers['X-Authorization'] = auth.accessToken;
//     }

//     let response: Response;

//     if (method === 'GET') {
//       response = await fetch(url, { headers });
//     } else {
//       response = await fetch(url, {
//         method,
//         headers: {
//           ...headers,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
//     }

//     if (response.ok) {
//       return await response.json();
//     } else {
//       throw new Error(response.statusText);
//     }
//   } catch (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// };

// export const get = request.bind({}, 'GET');
// export const post = request.bind({}, 'POST');
// export const put = request.bind({}, 'PUT');
// export const del = request.bind({}, 'DELETE');

import { throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

const request = async (method: string, url: string, data: any) => {
    try {
        const authData = localStorage.getItem('auth');
        const auth = JSON.parse(authData || '{}');

        let headers: { [key: string]: string } = {};

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let response: Response;

        if (method === 'GET') {
            response = await fetch(url, { headers });
        } else {
            response = await fetch(url, {
                method,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
        }

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};

export const get = (url: string) =>
    from(request('GET', url, null)).pipe(
        catchError((error) => {
            console.error('Error:', error);
            return throwError(error);
        }),
    );

export const post = (url: string, data: any) =>
    from(request('POST', url, data)).pipe(
        catchError((error) => {
            console.error('Error:', error);
            return throwError(error);
        }),
    );

export const put = (url: string, data: any) =>
    from(request('PUT', url, data)).pipe(
        catchError((error) => {
            console.error('Error:', error);
            return throwError(error);
        }),
    );

export const del = (url: string) =>
    from(request('DELETE', url, null)).pipe(
        catchError((error) => {
            console.error('Error:', error);
            return throwError(error);
        }),
    );