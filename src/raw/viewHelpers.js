/* eslint-disable */

const React = require('react');

exports.transformProxies = (props = []) => {
    children = props.children ? props.children : [];
    children = [].concat(children).filter(Boolean);

    let proxies = Object.assign({}, props);
    delete proxies.children;

    React.Children.forEach(children, child => {
        const props = Object.assign({}, child.props);

        if (!proxies[child.type]) {
            proxies[child.type] = props;
        } else if (!(proxies[child.type] instanceof Array)) {
            proxies[child.type] = [proxies[child.type], props];
        } else {
            proxies[child.type].push(props);
        }

        if (child.key != null) {
            props.key = child.key;
        }

        if (child.ref != null) {
            props.ref = child.ref;
        }
    });

    return proxies;
};

exports.createScope = (children, callback) => {
    const proxies = exports.transformProxies(children);

    return callback(proxies);
};

exports.map = (props, callback) => {
    if (props == null) return null;
    if (!(props instanceof Array)) return callback(props);

    return props.map(callback);
};

/* eslint-enable */
