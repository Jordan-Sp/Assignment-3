document.addEventListener("DOMContentLoaded", function() {
    // get all of our list items
    // 1. Select all the items to filter
    var dataList = require('./app');
    //setup click event handlers on our checkboxes
    // 2. Select all the checkboxes to watch
    var checkBoxes = dataList.querySelectorAll('checkbox');

    for (var i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
        // 3. Add an event listener for each checkbox
        // each checkbox should use filterItems()
        checkBoxes.addEventListener('click', filterItems());
    }
    // event handler
    function filterItems() {
        if (this.checked) {
            handleDisplay(true, this.value);
        } else if (!this.checked) {
            handleDisplay(false, this.value);
        }
    }
    function handleDisplay(show, value){
        for (var i = 0; i < dataList.length; i++) {
            var item = dataList[i];
            // 4. show or hide the item if the item attribute "data-category" == value
            if(item[i].querySelector("data-category")==value) {
                if(show){
                    item.style.display = "block";
                }else{
                    item.style.display = "none";
                }
            }
        }
    }
});