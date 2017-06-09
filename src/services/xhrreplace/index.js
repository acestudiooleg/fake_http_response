/* eslint-disable */
const store = {
  original: window.XMLHttpRequest,
};

const findEndpoint = (endpoints, url) =>
  endpoints.filter(el => new RegExp(el.endpoint, 'g').test(url))[0];

export const activate = (endpoints) => {
  (function (proxied) {
    (function (open) {
      XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {
        const endpoint = findEndpoint(endpoints, url);
        console.log(endpoints);
        if (endpoint) {
          this.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
              // this.getAllResponseHeaders = function () {
              //   return '123\n123\n987';
              // };
              this.responseText = endpoint.response;
              this.status = endpoint.status;

            }
          }, false);
        }
        open.call(this, method, url, async, user, pass);
      }
        ;
    })(XMLHttpRequest.prototype.open);
    XMLHttpRequest = function () {
      // cannot use apply directly since we want a 'new' version
      const wrapped = new (Function.prototype.bind.apply(proxied, arguments));

      Object.defineProperties(wrapped, {
        responseText: {
          writable: true
        },
        status: {
          value: 200,
          writable: true
        }
      });

      return wrapped;
    }
      ;

  })(XMLHttpRequest);

};

export const deactivate = () => {
  window.XMLHttpRequest = store.original;
};

export default { activate, deactivate };