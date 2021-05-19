$(".js-tagify").each(function() {
    var tagifyName = $(this).prop('name');
    window[tagifyName] = $(this).tagify(JSON.parse($('input[name=__tagify_input_options' + tagifyName + ']').val()))
                                .on('change', function(e) {
                                    var tagifyValue = JSON.parse(e.target.value);
                                    $("input[name=" + tagifyName.replace('__', '') + "]").val(tagifyValue.map(item => item.value).join(','));
                                });
    
});