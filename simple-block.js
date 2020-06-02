wp.blocks.registerBlockType( 'sg-block/simple-block', {

    title: wp.i18n.__( 'Simple Block', 'text-domain' ),
    description: wp.i18n.__( 'Wordpress Tech Interview', 'text-domain' ),
    icon: 'dashicons-admin-site-alt',
    category: 'common',
 
    edit: function ( props ) {
       return wp.element.createElement( 'p', { className: 'custom-block' }, 'Hi there Automattic!' );
    },
 
    save: function () {
       return wp.element.createElement( 'p', { className: 'custom-block' }, 'Saves in post Content' );
    }
 
 } );