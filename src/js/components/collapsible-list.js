
const CollapsibleList = (elem, numberItems = 1) => {
    let state = { closed: true };

    let $elem = document.querySelector(elem);
    let $listItems = $elem.querySelectorAll("li");
    let $showMoreLink = $elem.querySelector('.show-more-link');

    let render = () => {
        state.closed ? 
            $showMoreLink.textContent = "Show More" :
            $showMoreLink.textContent = "Show Less";
    }

    // add classes for the 'default' items visible even when collapsed
    $listItems.forEach((item, index) => {
        if (index < numberItems) item.classList.add('default');
    });

    $elem.addEventListener('click', function(event) {
        if (!event.target.matches('.show-more-link')) return;

        state.closed ? 
            state.closed = false :
            state.closed = true;

        $elem.classList.toggle("open");
        $elem.classList.toggle("closed");

        render();
    });

    return {
        $elem,
        destroy: () => {
            $elem.parentNode.removeChild($elem);
        }
    }
}

export default CollapsibleList;