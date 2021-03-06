<h1 align="center">Tagify Plugin for <a href="https://flextype.org/">Flextype</a></h1>

<p align="center">
<a href="https://github.com/flextype-plugins/tagify/releases"><img alt="Version" src="https://img.shields.io/github/release/flextype-plugins/tagify.svg?label=version&color=black"></a> <a href="https://github.com/flextype-plugins/tagify"><img src="https://img.shields.io/badge/license-MIT-blue.svg?color=black" alt="License"></a> <a href="https://github.com/flextype-plugins/tagify"><img src="https://img.shields.io/github/downloads/flextype-plugins/tagify/total.svg?color=black" alt="Total downloads"></a> <a href="https://github.com/flextype/flextype"><img src="https://img.shields.io/badge/Flextype-0.9.16-green.svg?color=black" alt="Flextype"></a> <a href=""><img src="https://img.shields.io/discord/423097982498635778.svg?logo=discord&color=black&label=Discord%20Chat" alt="Discord"></a>
</p>

Lightweight and efficient Tags input plugin for Flextype.

## Dependencies

The following dependencies need to be downloaded and installed for Tagify Plugin.

| Item | Version | Download |
|---|---|---|
| [flextype](https://github.com/flextype/flextype) | 0.9.16 | [download](https://github.com/flextype/flextype/releases) |
| [twig](https://github.com/flextype-plugins/twig) | >=2.0.0 | [download](https://github.com/flextype-plugins/twig/releases) |
| [blueprints](https://github.com/flextype-plugins/blueprints) | >=1.0.0 | [download](https://github.com/flextype-plugins/blueprints/releases) |

## Installation

1. Download & Install all required dependencies.
2. Create new folder `/project/plugins/tagify`
3. Download Tagify Plugin and unzip plugin content to the folder `/project/plugins/tagify`

## Documentation

### Settings

```yaml
# enabled: true or false to disable the plugin
enabled: true

# Plugin priority
priority: 41

# Place to load
assetsLoadOnAdmin: true
assetsLoadOnSite: false

# Blocks
blocks:
  Tagify:
    type: Tagify
    properties:
      name: tagify
      
      # Tagify options
      options:

        # Tag data Object property which will be displayed as the tag's text. 
        # Remember to keep "value" property unique.
        tagTextProp: "value"

        # Placeholder text. 
        # If this attribute is set on an input/textarea element it will override this setting
        placeholder: ""

        # [RegEx string] split tags by any of these delimiters. 
        # Example delimeters: ",|.| " (comma, dot or whitespace)
        delimiters: ","

        # Validate input by RegEx pattern (can also be applied on the input itself as an attribute) Ex: /[1-9]/
        pattern: null

        # Use select for single-value dropdown-like select box. 
        # See mix as value to allow mixed-content. The 'pattern' setting must be set to some character.
        mode: null
        
        # Interpolation for mix mode. 
        # Everything between these will become a tag
        mixTagsInterpolator: ['[[', ']]']

        # Define conditions in which typed mix-tags content is allowing a tag to be created after.
        mixTagsAllowedAfter: /,|\.|\:|\s/	

        # Should duplicate tags be allowed or not
        duplicates: false

        # If `true` trim the tag's value (remove before/after whitespaces)
        trim: true

        # Should ONLY use tags allowed in whitelist.
        # In `mix-mode`, setting it to `false` will not allow creating new tags.
        enforceWhitelist: false

        # Tries to suggest the input's value while typing (match from whitelist) by adding the rest of term as grayed-out text
        autoComplete.enabled: true

        # If `true`, when `???` is pressed, use the suggested value to create a tag, else just auto-completes the input. 
        # In mixed-mode this is ignored and treated as "true"
        rautoComplete.rightKey: false

        # An array of allowed tags (Strings or Objects). 
        # When using Objects in the whitelist array a `value` property is a must & should be unique. 
        # Also, the *whitelist used for auto-completion when `autoCompletion.enabled` is `true`
        whitelist: []

        # An array of tags which aren't allowed
        blacklist: []

        # Automatically adds the text which was inputed as a tag when blur event happens
        addTagOnBlur: true

        # `false` or `null` will disallow editing
        editTags:

          # Number of clicks to enter "edit-mode": 1 for single click. 
          # Any other value is considered as double-click
          clicks: 1

          # keeps invalid edits as-is until esc is pressed while in focus
          keepInvalid: true
        
        # If `true`, do not remove tags which did not pass validation
        keepInvalidTags: false

        # If `true`, do not add invalid, temporary, tags before automatically removing them
        skipInvalid: true

        # On pressing backspace key:
        # true - remove last tag 
        # edit - edit last tag
        backspace: true

        # `node` or `string` to add after a tag added
        mixMode:
          insertAfterTag: \u00A0

        # allows tags to get focus, and also to be deleted via backspace
        a11y:
          focusableTags: false
        
        dropdown:

          # Minimum characters input for showing a suggestions list. 
          # `false` will not render a suggestions list.
          enabled: 2
          
          # if `true`, match exact item when a suggestion is selected (from the dropdown) and also more strict matching for dulpicate items. 
          # Ensure `fuzzySearch` is `false` for this to work.
          caseSensitive: false

          # Maximum items to show in the suggestions list
          maxItems: 10

          # Custom classname for the dropdown suggestions selectbox
          classname: ""

          # Enables filtering dropdown items values' by string containing and not only beginning
          fuzzySearch: true

          # Enable searching for accented items in the whitelist without typing exact match
          accentedSearch: true

          # manual - will not render the dropdown, and you would need to do it yourself. 
          # text - places the dropdown next to the caret
          # input - places the dropdown next to the input (useful in rare situations)
          # all - normal, full-width design
          position: "all"

          # When a suggestions list is shown, highlight the first item, 
          # and also suggest it in the input (The suggestion can be accepted with `???` key)
          highlightFirst: false

          # close the dropdown after selecting an item, if `enabled:0` is set (which means always show dropdown on focus)
          closeOnSelect: true

          # Keep typed text after selecting a suggestion
          clearOnSelect: true

          # When a user types something and trying to match the whitelist items for suggestions, 
          # this setting allows matching other keys of a whitelist objects
          searchKeys: ["value", "searchBy"]

          # If defined, will force the placement of the dropdown in respect 
          # to the Boolean value: `true` will always show the suggestions dropdown above the input field a
          # and `false` will always show it below. 
          #
          # By default this setting it not defined and the placement of the dropdown is automatically decided according to the space availble,
          # where opening it below the input is preferred.
          placeAbove: ""

    template: plugins/tagify/blocks/Tagify/block.html
```

## LICENSE
[The MIT License (MIT)](https://github.com/flextype-plugins/tagify/blob/master/LICENSE.txt)
Copyright (c) 2021 [Sergey Romanenko](https://github.com/Awilum)
