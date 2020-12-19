import CollapsibleList from './components/collapsible-list'

let list1 = CollapsibleList('#list1', 2);
let list2 = CollapsibleList("#list2");

// Add event listener to destroy btns
destroyList1.addEventListener('click', function(event) {
    list1.destroy();
});

destroyList2.addEventListener('click', function(event) {
    list2.destroy();
});
