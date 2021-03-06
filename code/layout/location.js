import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({
	name,
	address,
	description,
	map
}) => (
	<div className="location" itemProp="location" itemScope itemType="http://schema.org/Place">
		<span className="location-name" itemProp="name">{ name }</span>
		<div className="location-address" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
			<span itemProp="streetAddress">{ address.street }</span><br/>
			<span itemProp="addressLocality">{ address.city }</span>, <span itemProp="addressRegion">{ address.state }</span> <span itemProp="postalCode">{ address.zip }</span>
		</div>
		<iframe className="location-map" src={ map } frameBorder="0" style={{ border:0 }} allowFullScreen></iframe>
	</div>
);

Partial.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
