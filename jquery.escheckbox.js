(function($) {
	$.fn.escheckbox = function(params) {
		var prm = {
			imgpath: 'images/',
			img: {
				checked: 'checked.png',
				unchecked: 'unchecked.png'
			},
			change: function(status) {
			}
		};
		
		prm = $.extend(prm, params);
		
		return this.each(function() {
			var $cbx = $(this);
			$cbx.wrap('<span class="es-checkbox"></span>');
			$cbx.hide();
			$cbx.after('<img src="' + prm.imgpath + ($cbx.is(":checked") ? prm.img.checked : prm.img.unchecked) + '" alt="ES Checkbox" />');

			var $parent = $cbx.parent(".es-checkbox");

			$parent.click(function() {
				if($cbx.attr("type") == 'radio' && !$cbx.is(":checked")) {
					var $up = $parent.parent();
					// If type is radio, we uncheck all other radio inputs in parent
					$up.children("span").children("input[type=radio]").each(function() {
						if($(this).attr("id") != $cbx.attr("id") || ($(this).attr("name") == $cbx.attr("name") && $(this).val() != $cbx.val())) {
							$(this).prop("checked", false).trigger("change");
						}
					});
				}
				if($cbx.attr("type") == "checkbox" || !$cbx.is(":checked")) {
					$cbx.prop("checked", !$cbx.is(":checked")).trigger("change");
				}
			});

			$cbx.change(function() {
				if($cbx.is(":checked")) {
					$parent.addClass("es-checked");
					$parent.children("img").attr("src", prm.imgpath + prm.img.checked);
				} else {
					$parent.removeClass("es-checked");
					$parent.children("img").attr("src", prm.imgpath + prm.img.unchecked);
				}
				prm.change($cbx.is(":checked"));
			});

			$cbx.trigger("change");
		});
	}
})(jQuery);