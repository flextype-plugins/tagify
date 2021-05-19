<?php

declare(strict_types=1);

/**
 * @link https://flextype.org
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flextype\Plugin\Tagify;

/**
 * Add Blueprint block `Tagify`
 */
flextype('registry')->set('plugins.blueprints.settings.blocks.Tagify', 
                            flextype('registry')->get('plugins.tagify.settings.blocks.Tagify'));                

/**
 * Add Tagify assets
 */ 
$tagifyCSS[] = 'project/plugins/tagify/blocks/Tagify/dist/css/tagify.min.css';
$tagifyJS[]  = 'project/plugins/tagify/blocks/Tagify/dist/js/tagify.min.js';

if (flextype('registry')->get('plugins.tagify.settings.assetsLoadOnAdmin')) {
    flextype('registry')->set('assets.admin.js.tagify', $tagifyJS);
    flextype('registry')->set('assets.admin.css.tagify', $tagifyCSS);
}

if (flextype('registry')->get('plugins.tagify.settings.assetsLoadOnSite')) {
    flextype('registry')->set('assets.site.js.tagify', $tagifyJS);
    flextype('registry')->set('assets.site.css.tagify', $tagifyCSS);
}