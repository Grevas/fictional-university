<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //

if (strstr($_SERVER['SERVER_NAME'], 'fictional-university.local')) {
	define( 'DB_NAME', 'local' );
	define( 'DB_USER', 'root' );
	define( 'DB_PASSWORD', 'root' );
	define( 'DB_HOST', 'localhost' );
} else {
	define( 'DB_NAME', 'onavt_30075667_grevas' );
	define( 'DB_USER', 'onavt_30075667' );
	define( 'DB_PASSWORD', '2466021z' );
	define( 'DB_HOST', 'sql304.hostronavt.ru' );
}

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'oRTMKNJIT0aOyg4wM7DKE9RUbS1m3KWS2JpEVuXCOx28ZMmSweFkrtuHrCAJOyQfebAxt8bHYSyKXcNJ5yBkTA==');
define('SECURE_AUTH_KEY',  'TdWc3EI0jr4U7hgXFnP6r7+Q9t2PsmIf9l9yLICxll8PdYbLQDhjVgNT4F9lSsaTKazxRMJ1GMTfkSqfiA+xzQ==');
define('LOGGED_IN_KEY',    'WEPqYFv/h7lwsZFZTM62sWZm4yKenohq6+8mFwbOG8WbvCHVeolwW8IB4UemqJCDHUT4KgAqwWJS46qPGmpsLg==');
define('NONCE_KEY',        'SQy4giIjZWUw1PyM2d66HY3CfFVKtvTXkAz8qHcIhCTQdj5RiwlEuyLKUcFQSQwuEnLCx4yvKWpGbmc7CjWpoA==');
define('AUTH_SALT',        'yKo9+phSJtn9ZVazDkgT0g4/N20GHMFlOkNySH1iDt7ha+0zBxlbIT9PO+7hdClSgU4caE3SEKYSo1FVd1imMg==');
define('SECURE_AUTH_SALT', 'xmfB5PVhWdjfajsJOdqEwTlJwuOc4Ie/SEuMlDsyiYzxX4k38k20pjKVTmhl+RlxJmlQaXCoOIvgjiA8/GW86A==');
define('LOGGED_IN_SALT',   'qmAMkeoAlqqhsTbYKYzWkw6WbJet1uSOVPFdO7SGCnxOjWi9YyIiaDycsnVbXgh8R/O5HlGpY1+NgrvX7icW4w==');
define('NONCE_SALT',       '5zk7+2YcnJufYJ4TgJg+u6ki6CFNiU0gMDU9hOX2ipV+m58o5mb5g7ryV1p1shR6R2eghKogoxSKVzcd32yRnQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
