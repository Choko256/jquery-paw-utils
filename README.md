jquery-paw-utils
================

jQuery and jQuery UI plugins :)

## jQuery ES-CheckBox
A cool and customizable item for checkbox and radio inputs.

### Usage in HTML

```html
<link rel="stylesheet" type="text/css" href="jquery.escheckbox.css" />
<script type="text/javascript" src="jquery.escheckbox.js"></script>
<!-- ... -->
<input type="checkbox" class="escheckbox" name="test" />Test
```

### Usage in Javascript

```javascript
$(function() {
  $('.escheckbox').escheckbox();
});
```

### Available options

  - `imgPath` defines the plugin images path (defaults to `'images/'`)
  - `img` defines the plugin images filenames. It is an `object` with two properties :
  -   `checked` for checked status
  -   `unchecked` for unchecked status
  - `change(status)` is the `change` event callback.
  - 
  
If you want to change manually the checkbox value, you must add the `trigger` jquery function on the `change` event.

```javascript
$("#myCheckBox").prop("checked", true).trigger('change');
```
