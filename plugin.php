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
registry()->set('plugins.blueprints.settings.blocks.Tagify', 
                            registry()->get('plugins.tagify.settings.blocks.Tagify'));                

/**
 * Add Tagify assets
 */ 
$tagifyCSS[] = 'project/plugins/tagify/blocks/Tagify/dist/css/tagify.min.css';
$tagifyJS[]  = 'project/plugins/tagify/blocks/Tagify/dist/js/tagify.min.js';

if (registry()->get('plugins.tagify.settings.assetsLoadOnAdmin')) {
    registry()->set('assets.admin.js.tagify', $tagifyJS);
    registry()->set('assets.admin.css.tagify', $tagifyCSS);
}

if (registry()->get('plugins.tagify.settings.assetsLoadOnSite')) {
    registry()->set('assets.site.js.tagify', $tagifyJS);
    registry()->set('assets.site.css.tagify', $tagifyCSS);
}