/*
 * Copyright 2016 the original author or authors
 * @license ISC
 *
 * Rest.js pathSuffix based on rest.js pathPrefix
 * @link https://github.com/cujojs/rest/blob/master/interceptor/pathPrefix.js
 * @author Tim Neutkens
 */

((define) => {
    'use strict';

    define((require) => {
        let interceptor = require('rest/interceptor');
        let UrlBuilder = require('rest/UrlBuilder');

        /**
         * Suffix the request path with a common value.
         *
         * @param {Client} [client] client to wrap
         * @param {object} [config.suffix] path suffix
         *
         * @returns {Client}
         */
        return interceptor({
            request: (request, config) => {
                if (config.suffix && request.path && !(new UrlBuilder(request.path).isFullyQualified())) {
                    request.path += config.suffix;
                }
                return request;
            }
        });

    });

})(
    typeof define === 'function' && define.amd ? define : (factory) => { module.exports = factory(require); }
    // Boilerplate for AMD and Node
);
