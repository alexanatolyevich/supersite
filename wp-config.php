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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'supersite');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ')tw7R27?qmohb=CR5JO6#9ua/.iM4#?ng_8|7$j<v U8U-esuP,94]eHCROD9lBk');
define('SECURE_AUTH_KEY',  'fujqzle;,aUppF.z=2tJE?bK%(3wO%SrZ,mSUXvsHh7Wa+9JR_Bq!^}ObXXnK9hh');
define('LOGGED_IN_KEY',    ')Kmv%gCB/I^j%_)m -P2X4T`c^>I,~y3&xK8cK3e+e<B_$~ZQ&~W0xx;|do{125-');
define('NONCE_KEY',        '<kym-SW,Jt[RQq`M9:#{riLXX2%%M)2[=DI}HhI=0dk9-JSY70uwkE,TTuzNodOj');
define('AUTH_SALT',        '`*]-50}Uy+^eG[pf9C>7.*Iq<1X~T[NI[31 +$I$Xw0Jkna:,$WB/a8w?6kY6oW1');
define('SECURE_AUTH_SALT', 'F7aE>cJs!fv8IIm*CVB^7x%QpfQv~+VW2^C*<uEBaEQ<rz68isHGDVQW7Nhb97w0');
define('LOGGED_IN_SALT',   'w-5;FZI}7j9|=!U=$O?wc*[0d<~+>l<_8Ax>L$s$jqvu0B+@@*9D`y`%A-^>9N}@');
define('NONCE_SALT',       'wBe2vv/h&0l9]zYPUb-_Z`})GgkQGpIt9;Ot^WAgg[l-;n*6eM&f? `AY V2_tZx');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
